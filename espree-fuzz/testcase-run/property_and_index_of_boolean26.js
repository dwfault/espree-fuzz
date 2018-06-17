//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

try {
if (this.o0 && this.o0.o1)
{ // Check for running in ch
    try {
this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}

var o2 = 
[
    {
        name: "Assignment to a property on a boolean without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = true;
            try {
o4.o7.o8(o31 == o22 + 20, "map.entries() should enumerate values 21 through 40 in order") = 12;
}catch(e){}
            try {
o6.o7(undefined, Number.isFinite);
}catch(e){}
        }
    },
    {
        name: "8.12.9.9.b (variation 3): re-define property: convert from data to accessor descriptor, check that configurable/enumerable not preserved when specified by descriptor",
        o25: function () {
            var o10 = o0.o4();
            var o51 = "15";
            var o52 = { value: 0, configurable: true, enumerable: true };
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var getter = function () { try {
return this.o56;
}catch(e){} };
            try {
o52 = { get: getter, configurable: false };
}catch(e){}
            try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
            var o35 = { get: getter, set: undefined, configurable: false, enumerable: true };
            try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },
    {
        name: "Assignment to a property on a boolean without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = true;
            try {
o4['a'] = 12;
}catch(e){}
            try {
o6.o7(undefined, o4.o5);
}catch(e){}
        }
    },
    {
        name: "Assignment to a property on a boolean without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = true;
            try {
o6.o8(function() { try {
"use strict";
}catch(e){} try {
o4['a'] = 1;
}catch(e){} }, o9, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}
        }
    },
    {
        name: "Assignment to an index on a boolean without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = true;
            try {
o4[66] = 12;
}catch(e){}
            try {
o6.o7(undefined, o4.o5);
}catch(e){}
        }
    },
    {
        name: "Assignment to an index on a boolean without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = true;
            try {
o6.o8(function() { try {
"use strict";
}catch(e){} try {
o4[66] = 1;
}catch(e){} }, o9, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}
        }
    },
];

try {
o70 >> 4(o2, { o12: o0.o13[0] != "summary" });
}catch(e){}
