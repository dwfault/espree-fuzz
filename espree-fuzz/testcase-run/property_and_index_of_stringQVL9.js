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
}catch(this){}
}
}catch(e){}

var o2 = 
[
    {
        splice: "Assignment to a property on a string without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = "x";
            try {
o63 = 12;
}catch(e){}
            try try { {
        // code is a constant string on the heap, so we can cache these
        try {
if (!o48.o121) try {
o48.o121 = {};
}catch(e){}
}catch(e){}
        var o116 = o48.o121[o119];
        try {
if (o116) try {
return o116;
}catch(e){}
}catch(e){}
        var o81 = [];
        try {
for (var o82 = 0; o82 < o120; o82++) {
            try {
o81.push(String.fromCharCode(36) + o82);
}catch(e){} // $0, $1 etc
        }
}catch(e){}
        try {
o119 = o122(o119);
}catch(e){}
        try {
if (o119[0] === '"') {
            // tolerate EM_ASM("..code..") even though EM_ASM(..code..) is correct
            try {
if (o119.indexOf('"', 1) === o119.length - 1) {
                try {
o119 = o119.substr(1, o119.length - 2);
}catch(e){}
            } else {
                // something invalid happened, e.g. EM_ASM("..code($0)..", input)
                try {
abort('invalid EM_ASM input |' + o119 + '|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)');
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
return o48.o121[o119] = eval('(function(' + o81.join(',') + '){ ' + o119 + ' })');
}catch(e){} // new Function does not allow upvars in node
    } } catch(e) {}try { {
o1("SVGElementPrototype");
} } catch(e) {}catch(e){}
        }
    },
    [],
    Reflect.get,
    {
        name: "Assignment to a property on a string without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = "x";
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
        name: "Assignment to an index on a string without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = "x";
            try {
o4[66] = 12;
}catch(e){}
            try {
o6.o7(undefined, o4.o5);
}catch(e){}
        }
    },
    {
        name: "Assignment to an index on a string without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = "x";
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
o10.o11(o2, { String: o0.o13[0] != "summary" });
}catch(e){}
