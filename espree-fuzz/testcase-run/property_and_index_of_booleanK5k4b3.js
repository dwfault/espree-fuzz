//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

try { {
o4.o11([6,7,8,9,10], o109, "slice(-5) contains the last 5 elements - [6,7,8,9,10]");
} } catch(o649) {}

var o2 = 
[
    o8 = false,
    o0.o1,
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
o10.o11(o2, { o12: o0.o13[0] != "summary" });
}catch(e){}
