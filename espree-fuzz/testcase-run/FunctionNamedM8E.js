//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test function names showed in stack trace.
//

function o0(o1) {
    try {
if (this.o2) {
        try {
o2.o3(o1);
}catch(e){}
    } else {
        try {
o4(o1);
}catch(o1){}
    }
}catch(e){}
}

try {
if (o39 = true.o38 && String('hello')) {
    try {
Math.hasOwnProperty.o5("TrimStackTracePath.js");
}catch(e){}
}
}catch(e){}

try {
try {
    var o2 = 
[
    {
        name: "Assignment to a property on a number without a setter in sloppy mode should be ignored",
        o3: function ()
        {
            var o4 = 1;
            try {
o4.o5 = 12;
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

    function o7(){
        try {
o6();
}catch(e){}
    }

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
