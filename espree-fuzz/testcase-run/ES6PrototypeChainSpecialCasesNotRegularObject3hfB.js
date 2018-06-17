//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
   Object.prototype,
   o421.o143 - (o421.o148 & 0xFF),
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
o9.o10(o2, { o11: o0.o12[0] != "summary" });
}catch(e){}
