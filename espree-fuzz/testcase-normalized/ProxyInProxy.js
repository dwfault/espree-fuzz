//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o0() {
    var o1 = {};
    var o2 = new Proxy(o1, {
        getOwnPropertyDescriptor: function (target, o3) {
            print('getOwnPropertyDescriptor on proxy : ' + o3.toString());
            return { configurable: true, enumerable: true, value: 10 };
        },

        ownKeys: function (target) {
            print('ownKeys for proxy');
            return ["prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
        }
    });

    var o4 = new Proxy(o2, {
        getOwnPropertyDescriptor: function (target, o3) {
            print('getOwnPropertyDescriptor on proxy2 : ' + o3.toString());
            return { configurable: true, enumerable: true, value: 10 };
        },

        ownKeys: function (target) {
            print('ownKeys for proxy2');
            return ["prop2", "prop3", Symbol("prop4"), Symbol("prop5")];
        }
    });

    print('***Testing Object.getOwnPropertyNames()');
    print(Object.getOwnPropertyNames(o4));
    print('***Testing Object.keys()');
    print(Object.keys(o4));
    print('***Testing Object.getOwnPropertySymbols()');
    print(Object.getOwnPropertySymbols(o4).length);

    print('***Testing Object.freeze()');
    try{
        Object.freeze(o4);
        print('Object.freeze should fail because underlying OwnPropertyKeys should fail since target becomes non-extensible');
    } catch (o5) {
        if (!(o5 instanceof o6)) {
            o7('incorrect instanceof Error' + o5);
        }
    }
}

// Verifies that we don't call GetPropertyDescriptor of target for Object.keys unnecessarily if we throw TypeERROR before
function o8() {
    var o1 = {};
    Object.defineProperty(o1, "a", { value: 5, configurable: false });
    var o2 = new Proxy(o1, {
        getOwnPropertyDescriptor: function (target, o3) {
            print('getOwnPropertyDescriptor on proxy : ' + o3.toString());
            return Object.getOwnPropertyDescriptor(target, o3);
        },

        ownKeys: function (target) {
            print('ownKeys for proxy');
            return ["a", "prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
        }
    });


    var o4 = new Proxy(o2, {
        getOwnPropertyDescriptor: function (target, o3) {
            print('getOwnPropertyDescriptor on proxy2 : ' + o3.toString());
            return Object.getOwnPropertyDescriptor(target, o3);
        },

        ownKeys: function (target) {
            print('ownKeys for proxy2');
            return ["prop2", "prop3", Symbol("prop4"), Symbol("prop5")];
        }
    });

    print('***Testing Object.keys()');
    try{
        print(Object.keys(o4));
        print('Should throw TypeError because ownKeys doesnt return non-configurable key.');
    } catch (o5) {
        if (!(o5 instanceof o6)) {
            print('incorrect instanceof Error');
        }
    }
}

function o9() {
    var o1 = {};
    var o10 = 0;
    var o2 = new Proxy(o1, {

        get: function (target, o3, o11) {
            print('get on proxy : ' + o3.toString());
            return o10++ * 5;
        },
        getOwnPropertyDescriptor: function (target, o3) {
            print('getOwnPropertyDescriptor on proxy : ' + o3.toString());
            return { configurable: true, enumerable: true, value: 10 };
        },

        ownKeys: function (target) {
            print('ownKeys for proxy');
            return ["prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
        }
    });

    var o4 = new Proxy(o2, {
        get: function (target, o3, o11) {
            print('get on proxy2 : ' + o3.toString());
            return Reflect.get(target, o3, o11);
        },
        getOwnPropertyDescriptor: function (target, o3) {
            print('getOwnPropertyDescriptor on proxy2 : ' + o3.toString());

            return { configurable: true, enumerable: true, value: 10 };
        },

        ownKeys: function (target) {
            print('ownKeys for proxy2');
            return ["prop2", "prop3",  Symbol("prop4"), Symbol("prop5")];
        }
    });

    print('***Testing Object.assign()');
    var o12 = Object.assign(o1, null, o2, o4);
    var o13 = Object.getOwnPropertySymbols(o12);
    var o14 = Object.getOwnPropertyNames(o12);
    print("PropertyNames returned : ");
    for (o15 = 0; o15 < o14.length; o15++)
    {
        print(o14[o15].toString())
    }
    print("PropertySymbols returned : ");
    for (o15 = 0; o15 < o13.length; o15++)
    {
        print(o13[o15].toString())
    }

}

function o16() {
    print("***Traps whose value is null are ignored");

    function o17(o18, o19, o1) {
        const o2 = new Proxy(o1, {
            [o18]: () => {
                print(`"${o18}" called`);
                return o19;
            }
        });
        return new Proxy(o2, {
            [o18]: null
        });
    }

    Object.getPrototypeOf(o17("getPrototypeOf", {}, {}));
    Object.setPrototypeOf(o17("setPrototypeOf", true, {}), {});
    Object.isExtensible(o17("isExtensible", true, {}));
    Object.preventExtensions(o17("preventExtensions", false, {}));
    Object.getOwnPropertyDescriptor(o17("getOwnPropertyDescriptor", undefined, {}));
    Object.defineProperty(o17("defineProperty", true, {}), "prop", { value: 0 });
    "prop" in o17("has", true, {});
    o17("get", 0, {}).o20;
    o17("set", true, {}).o20 = 0;
    delete o17("deleteProperty", true, {}).o20;
    Object.keys(o17("ownKeys", [], {}));
    o17("apply", 0, function () {})();
    new (o17("construct", {}, function () {}));
}

o0();
o8();
o9();
o16();
