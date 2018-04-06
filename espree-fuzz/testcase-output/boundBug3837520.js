//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

function o2(o3, o4) {
    Object.setPrototypeOf(o4, o3);
    var o7 = Function.prototype.bind.call(o4, null);
    return Object.getPrototypeOf(o7) === o3;
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
   {
       name: "Arrow Functions",
       o15: function ()
       {
            var o21 = ()=>5;
            var o17 = o2(Function.prototype, o21) && o2({}, o21)
                    && o2(null, o21);
            o18.o19(o17, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on arrow functions");
       }
   },
   {
       name: "Classes",
       o15: function ()
       {
            class o22 {}
            var o17 = o2(Function.prototype, o22) && o2({}, o22)
                        && o2(null, o22);
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
   {
       name: "Proxy Function",
       o15: function ()
       {
            function o2(o3) {
                var o27 = new Proxy(function(){}, {});
                Object.setPrototypeOf(o27, o3);
                var o7 = Function.prototype.bind.call(o27, null);
                return Object.getPrototypeOf(o7) === o3;
            }
            var o17 = o2(Function.prototype) && o2({});
                    //&& correctProtoBound(null); proxy bug on setPrototypeOf for this case OS bug# 3842393
            o18.o19(o17, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on proxy functions");
       }
   }
];
o29.o30(o13, { o31: o0.o32[0] != "summary" });
