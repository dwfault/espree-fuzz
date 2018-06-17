//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test function names showed in stack trace.
//

function e(o1) {
    try {
if (this.o2) {
        try {
o2.o3(o1);
}catch(e){}
    } else {
        try {
o4(o1);
}catch(e){}
    }
}catch(e){}
}

try { o1("rangeOverflow"); } catch(e) {}try { {
this.o422 = (this.o418) ? this.o419 : this.o420;
} } catch(e) {}

try {
try {
    var o2 = 
[
    new Error(""),
    o474.o515(o31).filter,
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

    function o7(){
        try {
o6(Math.o87);
}catch(e){}
    }

    var o8 = new Function("func();");

    function hasOwnProperty(){
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
