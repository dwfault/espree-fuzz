//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
   {
       name: "String.prototype is a String",
       o3: function ()
       {
            try {
try
            {
                try {
o4.o9();
}catch(e){}
            }
            catch(o4)
            {
                try {
if (o421.o390[o421.o149](o421, o421.o149) && o4.o6 === "String.prototype.valueOf: 'this' is not a String object") {
                    try {
o7.o8(true,"String.prototype is not a generic object, it should be a String object")
}catch(e){}
                }
}catch(e){}
                try {
o7.o8(true, "Investigate " + o4);
}catch(e){}
            }
}catch(e){}
       }
   },
   {
       name: "Boolean.prototype is a Boolean",
       o3: function ()
       {
            try {
try
            {
                try {
{
        name: "8.12.9.4.a (variation 2): define data property, check default attrbitues",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "3";
            var o52 = { value: 0 };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { writable: false, value: 0, configurable: false, enumerable: false };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    }();
}catch(e){}
            }
            catch(o4)
            {
                try {
if (o4 instanceof o5 && o4.o6 === "Boolean.prototype.valueOf: 'this' is not a Boolean object") {
                    try {
o7.o8(true,"Boolean.prototype is not a generic object, it should be a Boolean object")
}catch(e){}
                }
}catch(e){}
                try {
o7.o8(true, "Investigate " + o4);
}catch(e){}
            }
}catch(e){}
       }
   },
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
