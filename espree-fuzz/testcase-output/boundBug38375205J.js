//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o8 = -1;

var o6 = [
   {
       name: "Basic Function",
       o7: function ()
       {
            var o8 = function(){};
            var o9 = o2(Function.prototype, o8) && o2({}, o8)
                    && o2(null, o8);
            o10.o11(o9, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on basic functions");
       }
   },
   {
       name: "Generator Functions",
       o7: function ()
       {
            var o12 = function*(){};
            var o9 = o2(Function.prototype, o12) && o2({}, o12)
                    && o2(null, o12);
            o10.o11(o9, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on generator functions");
       }
   },
   {
       name: "Arrow Functions",
       o7: function ()
       {
            var o13 = ()=>5;
            var o9 = o2(Function.prototype, o13) && o2({}, o13)
                    && o2(null, o13);
            o10.o11(o9, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on arrow functions");
       }
   },
   {
       name: "Classes",
       o7: function ()
       {
            class o14 {}
            var o9 = o2(Function.prototype, o14) && o2({}, o14)
                        && o2(null, o14);
            o10.o11(o9, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on classes");
       }
   },
   {
       name: "subClasses",
       o7: function ()
       {
            function o2(o15) {
                class o14 extends o15 {
                    constructor() {
                        return Object.create(null);
                    }
                }
                var o5 = Function.prototype.bind.call(o14, null);
                return Object.getPrototypeOf(o5) === Object.getPrototypeOf(o14);
            }
            var o9 = o2(Array) && o2(null) &&
                    o2(function() {});
            o10.o11(o9, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on subclasses");
       }
   },
   {
       name: "Proxy Function",
       o7: function ()
       {
            function o2(o3) {
                var o16 = new Proxy(function(){}, {});
                Object.setPrototypeOf(o16, o3);
                var o5 = Function.prototype.bind.call(o16, null);
                return Object.getPrototypeOf(o5) === o3;
            }
            var o9 = o2(Function.prototype) && o2({});
                    //&& correctProtoBound(null); proxy bug on setPrototypeOf for this case OS bug# 3842393
            o10.o11(o9, "confirm Let proto be targetFunction.[[GetPrototypeOf]](). is performed on proxy functions");
       }
   }
];
o17.o18(o6, { o19: o0.o20[0] != "summary" });
