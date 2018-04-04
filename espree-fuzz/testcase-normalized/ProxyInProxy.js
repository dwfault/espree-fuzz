//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o0() {
    var o1 = {};
    var o2 = new Proxy(o1, {
        getOwnPropertyDescriptor: function (target, o6) {
            print('getOwnPropertyDescriptor on proxy : ' + o6.toString());
            return { configurable: true, enumerable: true, value: 10 };
        },

        ownKeys: function (target) {
            print('ownKeys for proxy');
            return ["prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
        }
    });

    var o14 = new Proxy(o2, {
        getOwnPropertyDescriptor: function (target, o6) {
            print('getOwnPropertyDescriptor on proxy2 : ' + o6.toString());
            return { configurable: true, enumerable: true, value: 10 };
        },

        ownKeys: function (target) {
            print('ownKeys for proxy2');
            return ["prop2", "prop3", Symbol("prop4"), Symbol("prop5")];
        }
    });

    print('***Testing Object.getOwnPropertyNames()');
    print(Object.getOwnPropertyNames(o14));
    print('***Testing Object.keys()');
    print(Object.keys(o14));
    print('***Testing Object.getOwnPropertySymbols()');
    print(Object.o18(o14).length);

    print('***Testing Object.freeze()');
    try{
        Object.freeze(o14);
        print('Object.freeze should fail because underlying OwnPropertyKeys should fail since target becomes non-extensible');
    } catch (o21) {
        if (!(o21 instanceof o22)) {
            o23('incorrect instanceof Error' + o21);
        }
    }
}

// Verifies that we don't call GetPropertyDescriptor of target for Object.keys unnecessarily if we throw TypeERROR before
function o24() {
    var o1 = {};
    Object.defineProperty(o1, "a", { value: 5, configurable: false });
    var o2 = new Proxy(o1, {
        getOwnPropertyDescriptor: function (target, o6) {
            print('getOwnPropertyDescriptor on proxy : ' + o6.toString());
            return Object.getOwnPropertyDescriptor(target, o6);
        },

        ownKeys: function (target) {
            print('ownKeys for proxy');
            return ["a", "prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
        }
    });


    var o14 = new Proxy(o2, {
        getOwnPropertyDescriptor: function (target, o6) {
            print('getOwnPropertyDescriptor on proxy2 : ' + o6.toString());
            return Object.getOwnPropertyDescriptor(target, o6);
        },

        ownKeys: function (target) {
            print('ownKeys for proxy2');
            return ["prop2", "prop3", Symbol("prop4"), Symbol("prop5")];
        }
    });

    print('***Testing Object.keys()');
    try{
        print(Object.keys(o14));
        print('Should throw TypeError because ownKeys doesnt return non-configurable key.');
    } catch (o21) {
        if (!(o21 instanceof o22)) {
            print('incorrect instanceof Error');
        }
    }
}

function o26() {
    var o1 = {};
    var o27 = 0;
    var o2 = new Proxy(o1, {

        get: function (target, o6, o29) {
            print('get on proxy : ' + o6.toString());
            return o27++ * 5;
        },
        getOwnPropertyDescriptor: function (target, o6) {
            print('getOwnPropertyDescriptor on proxy : ' + o6.toString());
            return { configurable: true, enumerable: true, value: 10 };
        },

        ownKeys: function (target) {
            print('ownKeys for proxy');
            return ["prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
        }
    });

    var o14 = new Proxy(o2, {
        get: function (target, o6, o29) {
            print('get on proxy2 : ' + o6.toString());
            return Reflect.get(target, o6, o29);
        },
        getOwnPropertyDescriptor: function (target, o6) {
            print('getOwnPropertyDescriptor on proxy2 : ' + o6.toString());

            return { configurable: true, enumerable: true, value: 10 };
        },

        ownKeys: function (target) {
            print('ownKeys for proxy2');
            return ["prop2", "prop3",  Symbol("prop4"), Symbol("prop5")];
        }
    });

    print('***Testing Object.assign()');
    var o31 = Object.assign(o1, null, o2, o14);
    var o33 = Object.o18(o31);
    var o34 = Object.getOwnPropertyNames(o31);
    print("PropertyNames returned : ");
    for (o35 = 0; o35 < o34.length; o35++)
    {
        print(o34[o35].toString())
    }
    print("PropertySymbols returned : ");
    for (o35 = 0; o35 < o33.length; o35++)
    {
        print(o33[o35].toString())
    }

}

function o36() {
    print("***Traps whose value is null are ignored");

    function o37(o38, o39, o1) {
        const o2 = new Proxy(o1, {
            [o38]: () => {
                print(`"${o38}" called`);
                return o39;
            }
        });
        return new Proxy(o2, {
            [o38]: null
        });
    }

    Object.getPrototypeOf(o37("getPrototypeOf", {}, {}));
    Object.setPrototypeOf(o37("setPrototypeOf", true, {}), {});
    Object.isExtensible(o37("isExtensible", true, {}));
    Object.preventExtensions(o37("preventExtensions", false, {}));
    Object.getOwnPropertyDescriptor(o37("getOwnPropertyDescriptor", undefined, {}));
    Object.defineProperty(o37("defineProperty", true, {}), "prop", { value: 0 });
    "prop" in o37("has", true, {});
    o37("get", 0, {}).o45;
    o37("set", true, {}).o45 = 0;
    delete o37("deleteProperty", true, {}).o45;
    Object.keys(o37("ownKeys", [], {}));
    o37("apply", 0, function () {})();
    new (o37("construct", {}, function () {}));
}

o0();
o24();
o26();
o36();
