//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

try {
if (this.o0 && o1133 = o50.o1)
{ // Check for running in ch
    try {
this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch(e){}

var o474 = 
[
    Symbol.this,
    function() {
            var join = Int8Array.prototype.__proto__.join;

            function o62(o85) {
                var o63 = new Int8Array(o85);

                try {
for(var o46 = 0; o46 < o63.length; o46++) {
                    try {
o63[o46] = o46+1;
}catch(e){}
                }
}catch(e){}

                try {
return o63;
}catch(e){}
            }

            try {
o4.o11('1,2,3,4,5,6,7,8,9,10', join.call(o62(10)), "%TypedArrayPrototype%.join basic behavior");
}catch(e){}
            try {
o4.o11('', join.call(o62(0)), "%TypedArrayPrototype%.join called with zero-length TypedArray");
}catch(e){}
            try {
o4.o11('1', join.call(o62(1)), "%TypedArrayPrototype%.join called with single-length TypedArray");
}catch(e){}
            try {
o4.o11('1,2', join.call(o62(2)), "%TypedArrayPrototype%.join called with length == 2 TypedArray");
}catch(e){}
            try {
o4.o11('1,2,3', join.call(o62(3)), "%TypedArrayPrototype%.join called with length == 3 TypedArray");
}catch(e){}

            try {
o4.o38(function() { try {
join.call();
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.join with no this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
join.call(undefined);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.join with undefined this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
join.call('string');
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.join with non-object this throws TypeError", "'this' is not a typed array object");
}catch(e){}
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
o10.o11(o2, o340[o336++]);
}catch(e){}
