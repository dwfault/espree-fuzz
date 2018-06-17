//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

try {
if (this.o155[0xFF06] && this.o0.o1)
{ // Check for running in ch
    try {
this.o0.o1(10728 >> 2);
}catch(e){}
}
}catch(e){}

var o2 = 
[
    {
        name: "Array prototype and String prototype should have spec defined built-ins with correct lengths",
        o13: function () {
            try {
o6.o14(Array.prototype.hasOwnProperty('find'), "Array.prototype should have a find method");
}catch(e){}
            try {
o6.o14(Array.prototype.hasOwnProperty('findIndex'), "Array.prototype should have a findIndex method");
}catch(e){}

            try {
o6.o14(String.prototype.hasOwnProperty('repeat'), "String.prototype should have a repeat method");
}catch(e){}
            try {
o6.o14(String.prototype.hasOwnProperty('startsWith'), "String.prototype should have a startsWith method");
}catch(e){}
            try {
o6.o14(String.prototype.hasOwnProperty('endsWith'), "String.prototype should have a endsWith method");
}catch(e){}
            try {
o6.o14(String.prototype.hasOwnProperty('includes'), "String.prototype should have a includes method");
}catch(e){}

            try {
o6.o14(Array.prototype.find.length === 1, "find method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
            try {
o6.o14(Array.prototype.findIndex.length === 1, "findIndex method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}

            try {
o6.o14(String.prototype.repeat.length === 1, "repeat method takes zero arguments");
}catch(e){}
            try {
o6.o14(String.prototype.startsWith.length === 1, "startsWith method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
            try {
o6.o14(String.prototype.endsWith.length === 1, "endsWith method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
            try {
o6.o14(String.prototype.includes.length === 1, "includes method takes two arguments but the second is optional and the spec says the length must be 1");
}catch(e){}
        }
    },
    {
        name: "Assignment to a property on a number without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = 1;
            try {
o6.o8(function() { try {
"use strict";
}catch(e){} try {
o4.o5 = 1;
}catch(e){} }, o9, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
}catch(e){}
        }
    },
    {
        name: "Assignment to a property on a number without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = 1;
            try {
o4['a'] = 12;
}catch(e){}
            try {
o6.o7(undefined, o4.o5);
}catch(e){}
        }
    },
    {
        name: "Assignment to a property on a number without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = 1;
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
        name: "Assignment to an index on a number without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = 1;
            try {
o4[66] = 12;
}catch(e){}
            try {
o6.o7(undefined, o4.o5);
}catch(e){}
        }
    },
    {
        name: "Assignment to an index on a number without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = 1;
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
o10.e(o2, o421.o143);
}catch(e){}
