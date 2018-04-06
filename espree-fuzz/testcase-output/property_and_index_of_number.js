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
        name: "Assignment to a property on a number without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = 1;
            o5.o6 = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to a property on a number without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = 1;
            o7.o10(function() { "use strict"; o5.o6 = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to a property on a number without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = 1;
            o5['a'] = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to a property on a number without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = 1;
            o7.o10(function() { "use strict"; o5['a'] = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
    {
        name: "Assignment to an index on a number without a setter in sloppy mode should be ignored",
        o4: function ()
        {
            var o5 = 1;
            o5[66] = 12;
            o7.o8(undefined, o5.o6);
        }
    },
    {
        name: "Assignment to an index on a number without a setter in strict mode should throw an error",
        o4: function ()
        {
            var o5 = 1;
            o7.o10(function() { "use strict"; o5[66] = 1; }, o11, "Assigning to a property of a number should throw a TypeError.", "Assignment to read-only properties is not allowed in strict mode");
        }
    },
];

o12.o13(o2, { o14: o0.o15[0] != "summary" });
