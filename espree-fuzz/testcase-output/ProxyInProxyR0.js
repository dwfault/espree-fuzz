//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o0() {
    var o1 = {};
    var o2 = new Proxy(o1, o1.o2);

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
    print(Object.o5(o4).length);

    print('***Testing Object.freeze()');
    try{
        Object.freeze(o4);
        print('Object.freeze should fail because underlying OwnPropertyKeys should fail since target becomes non-extensible');
    } catch (o6) {
        if (!(o6 instanceof o7)) {
            o8('incorrect instanceof Error' + o6);
        }
    }
}

// Verifies that we don't call GetPropertyDescriptor of target for Object.keys unnecessarily if we throw TypeERROR before
function o9() {
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
    } catch (o6) {
        if (!(o6 instanceof o7)) {
            print('incorrect instanceof Error');
        }
    }
}

var o37=0;

function o17() {
    print("***Traps whose value is null are ignored");

    function o18(o19, o20, o1) {
        const o2 = new Proxy(o1, {
            [o19]: () => {
                print(`"${o19}" called`);
                return o20;
            }
        });
        return new Proxy(o2, {
            [o19]: null
        });
    }

    Object.getPrototypeOf(o18("getPrototypeOf", {}, {}));
    Object.setPrototypeOf(o18("setPrototypeOf", true, {}), {});
    Object.isExtensible(o18("isExtensible", true, {}));
    Object.preventExtensions(o18("preventExtensions", false, {}));
    Object.getOwnPropertyDescriptor(o18("getOwnPropertyDescriptor", undefined, {}));
    Object.defineProperty(o18("defineProperty", true, {}), "prop", { value: 0 });
    "prop" in o18("has", true, {});
    o18("get", 0, {}).o21;
    o18("set", true, {}).o21 = 0;
    delete o18("deleteProperty", true, {}).o21;
    Object.keys(o18("ownKeys", [], {}));
    o18("apply", 0, function () {})();
    new (o18("construct", {}, function () {}));
}

o0();
o9();
o10();
o17();
