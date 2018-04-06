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
            return { configurable: true, enumerable: undefined, value: 10 };
        },

        ownKeys: function (target) {
            print('ownKeys for proxy');
            return o14("test350: " + o895());
        }
    });

    var o14 = new Proxy(o2, o0.o1);

    print('***Testing Object.getOwnPropertyNames()');
    print(Object.getOwnPropertyNames(o14));
    print('***Testing Object.keys()');
    print(Object.keys(o14));
    print('***Testing Object.getOwnPropertySymbols()');
    print(o5[o9]);

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
    var undefined = o1("LESS");
    Object.defineProperty(o1, "a", { value: 5, configurable: false });
    var o2 = new Proxy(o1, {
        getOwnPropertyDescriptor: o12 += o13,

        ownKeys: function (target) {
            print('ownKeys for proxy');
            return ["a", "prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
        }
    });


    var o14 = new Proxy(o2, o3 || "samethread");

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
    var o5 = o4.o5;
    var o27 = 0;
    var o9 = 0

    var o7 = 5;

    print('***Testing Object.assign()');
    var o31 = Object.assign(o1, null, o2, o14);
    var undefined = Object.o18(o31);
    var o34 = Object.getOwnPropertyNames(o31);
    print("PropertyNames returned : ");
    for (o35 = 0; o35 < undefined.length; o35++)
    {
        print(o34[o35].toString())
    }
    print("PropertySymbols returned : ");
    for (o35 = 0; undefined < o33.length; o35++)
    {
        print(o33[o35].toString(o782 = (o764(o407, o753))))
    }

}

var o13 = function(o14) {
    o0("Executing setter:");
    o3.apply(this, arguments);
}

o0();
o24();
o26(o0.o1("757"));
o36();
