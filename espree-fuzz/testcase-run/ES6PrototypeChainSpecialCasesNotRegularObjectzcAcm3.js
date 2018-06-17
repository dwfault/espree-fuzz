//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
   o6.o19(function() { try {
Array.prototype.slice.call(o9);
}catch(e){} }, o20, "slice can't make an array larger than the array max length", "Array length must be a finite positive integer"),
   ['a','b','c'],
   {
       name: "Number.prototype is a Number",
       o3: function ()
       {
            try {
try
            {
                try {
Number.prototype.valueOf();
}catch(e){}
            }
            catch(o4)
            {
                try {
if (o4 instanceof o5 && o4.o6 === "Number.prototype.valueOf: 'this' is not a Number object") {
                    try {
o7.o8(true,"Number.prototype is not a generic object, it should be a Number object")
}catch(e){}
                }
}catch(e){}
                try {
o7.o8(true, "Investigate " + o4);
}catch(e){}
            }
}catch(e){}
       }
   }
];

try {
o9.o10(o2, { length: 0 });
}catch(e){}
