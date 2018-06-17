//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

if (this.o0 && this.o0.o1)
{ // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

var o2 = 
[
    {
        name: "Assignment to a property on a boolean without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = true;
            o4.o5 = 12;
            o6.o7(undefined, o4.o5);
        }
    },
    {
        name: "Assignment to a property on a boolean without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = true;
            o6.o8(function() { "use strict"; o4.o5 = 1; }, o9, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to a property on a boolean without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = true;
            o4['a'] = 12;
            o6.o7(undefined, o4.o5);
        }
    },
    {
        name: "Assignment to a property on a boolean without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = true;
            o6.o8(function() { "use strict"; o4['a'] = 1; }, o9, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to an index on a boolean without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = true;
            o4[66] = 12;
            o6.o7(undefined, o4.o5);
        }
    },
    {
        name: "Assignment to an index on a boolean without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = true;
            o6.o8(function() { "use strict"; o4[66] = 1; }, o9, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
];

o10.o11(o2, { o12: o0.o13[0] != "summary" });
