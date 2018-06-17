//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

try {
if (this.o0 && this.o0.o1)
try { try {
if (o421.o450 && o421.o155[0xFF24] != o70) {
      try {
o421.o746();
}catch(e){}
      try {
o421.o155[0xFF24] = o70;
}catch(e){}
      try {
o421.o452 = ((o70 >> 4) & 0x07) + 1;
}catch(e){}
      try {
o421.o453 = (o70 & 0x07) + 1;
}catch(e){}
      try {
o421.o761();
}catch(e){}
    }
}catch(e){} } catch(e) {}
}catch(e){}

var o32[1] = 
[
    Symbol.toPrimitive,
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
o10.o11(o2, o340[o336++]);
}catch(o11){}
