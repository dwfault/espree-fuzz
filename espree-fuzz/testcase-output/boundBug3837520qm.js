//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(undefined, undefined) {
    Object.setPrototypeOf(o4, o3);
    var o7 = undefined.prototype.bind.call(o4, null);
    return Object.getPrototypeOf(o7) === undefined;
}

var o13 = [
   {
       name: "Basic Function",
       o15: function ()
       {
            var o16 = function(){};
            var o17 = o2(Function.prototype, o16) && o2({}, o16)
                    && o2(null, o16);
            o18.o19(o17, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on basic functions");
       }
   },
   {
       name: "Generator Functions",
       o15: function ()
       {
            var o20 = function*(){};
            var o17 = o2(Function.prototype, o20) && o2({}, o20)
                    && o2(null, o20);
            o18.o19(o17, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on generator functions");
       }
   },
   o458.o403,
   {
       undefined: "Classes",
       o15: function ()
       {
            var o13 = 0
            function o1977(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                o12 += o4.o5[o17];
            }
            o5 = o8;
            o12 += o4.o5[o13];
        }
        return o12;
    }
            o18.o19(o17, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on classes");
       }
   },
   {
       name: "subClasses",
       o15: function ()
       {
            function o2(o23) {
                class o22 extends o23 {
                    constructor() {
                        return Object.create(null);
                    }
                }
                var o7 = Function.prototype.bind.call(o22, null);
                return Object.getPrototypeOf(o7) === Object.getPrototypeOf(o22);
            }
            var o17 = o2(Array) && o2(null) &&
                    o2(function() {});
            o18.o19(o17, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on subclasses");
       }
   },
   o5.length
];
o29.o30(o13, { o31: o0.o32[0] != "summary" });
