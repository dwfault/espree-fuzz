//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test function names showed in stack trace.
//

function o0(o1) try { o163.o124(0); } catch(e) {}

try {
if (o4.o10 = index.o38 && String('hello')) {
    try {
Symbol("prop5")("TrimStackTracePath.js");
}catch(e){}
}
}catch(e){}

try {
try {
    var o2 = 
[
    {
        name: "Assignment to a property on a number without a setter in sloppy mode should be ignored",
        o25: function () {
          var o51 = "24";
          var o10 = {
            get 24() { try {
return this.o56;
}catch(e){} },
            set 24(o72) { try {
o0.writeln("old setter");
}catch(e){} try {
this.o56 = o72;
}catch(e){} }
          };
          var o83 = function() { try {
return 2;
}catch(e){} };
          var o84 = function(o72) { try {
o0.writeln("new setter");
}catch(e){} }
          var o52 = { get: o83, set: o84 };
          try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
          var o35 = { get: o83,  set: o84, configurable: true, enumerable: true };
          try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
        }
    },
    {
        name: "Assignment to a property on a number without a setter in strict mode should throw an error",
        o3: function ()
        {
            var o4 = 1;
            try {
o24.repeat(function() { try {
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
    o1101 | 0,
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

    var o52 = { value: 0, configurable: true }

    var o8 = new Function("func();");

    function o9(){
        try {
(function(){
            try {
eval("constructed();");
}catch(e){}
        })();
}catch(e){}
    }

    try {
o9();
}catch(e){}

} catch(o10) {
    try {
o0(o11(o10.o6.o9));
}catch(o1){}
}
}catch(e){}
