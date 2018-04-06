//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
   {
       name: "String.prototype is a String",
       o4: function ()
       {
            try
            {
                String.prototype.valueOf();
            }
            catch(o8)
            {
                if (o8 instanceof o9 && o8.o10 === "String.prototype.valueOf: 'this' is not a String object") {
                    o11.o12(true,"String.prototype is not a generic object, it should be a String object")
                }
                o11.o12(true, "Investigate " + o8);
            }
       }
   },
   {
       name: "Boolean.prototype is a Boolean",
       o4: function ()
       {
            try
            {
                Boolean.prototype.valueOf();
            }
            catch(o8)
            {
                if (o8 instanceof o9 && o8.o10 === "Boolean.prototype.valueOf: 'this' is not a Boolean object") {
                    o11.o12(true,"Boolean.prototype is not a generic object, it should be a Boolean object")
                }
                o11.o12(true, "Investigate " + o8);
            }
       }
   },
   {
       name: "Number.prototype is a Number",
       o4: function ()
       {
            try
            {
                Number.prototype.valueOf();
            }
            catch(o8)
            {
                if (o8 instanceof o9 && o8.o10 === "Number.prototype.valueOf: 'this' is not a Number object") {
                    o11.o12(true,"Number.prototype is not a generic object, it should be a Number object")
                }
                o11.o12(true, "Investigate " + o8);
            }
       }
   }
];

o15.o16(o2, { o17: o0.o18[0] != "summary" });
