//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o7.o8("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
   Object.prototype,
   {
       name: "Boolean.prototype is a Boolean",
       o3: function ()
       {
            try {
try
            {
                try {
Boolean.prototype.valueOf();
}catch(e){}
            }
            catch(o4)
            {
                try {
if (e instanceof o5 && o4.o6 === "Boolean.prototype.valueOf: 'this' is not a Boolean object") {
                    try {
o7.o8(true,"Boolean.prototype is not a generic object, it should be a Boolean object")
}catch(e){}
                }
}catch(e){}
                try {
o7.o8("do do WScript.Echo(2); while (false); while(false);", "Investigate " + o4);
}catch(e){}
            }
}catch(e){}
       }
   },
   {
       o1: "Number.prototype is a Number",
       1: 1
   }
];

try {
o9.o10(o2, { o11: o0.o12[0] != "summary" });
}catch(e){}
