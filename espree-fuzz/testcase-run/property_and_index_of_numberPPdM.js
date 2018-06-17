//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Number tests

try {
if (o340[o336++] += buffer[o333++] * o332)
{ // Check for running in ch
    try {
this.Boolean(false) >= new Number(+0.0).o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}
}
}catch({get: function() {
    try {
o0[2000] = 0x41414141;
}catch(e){}
    try {
return 123;
}catch(e){}
}}){}

var o2 = 
[
    Module.o952,
    {
                o27: {
                    get: function () {
                        try {
return (this.o518 & o710) === o710;
}catch(e){}
                    },
                    set: function (o508) {
                        try {
o508 ? this.o518 |= o710 : this.o518 &= ~o710;
}catch(e){}
                    }
                },
                write: {
                    get: function () {
                        try {
return (this.o518 & o711) === o711;
}catch(e){}
                    },
                    set: function (o508) {
                        try {
o508 ? this.o518 |= o711 : this.o518 &= ~o711;
}catch(e){}
                    }
                },
                o712: {
                    get: function () {
                        try {
return o489.o538(this.o518);
}catch(e){}
                    },
                },
                o713: {
                    get: function () {
                        try {
return o489.o543(this.o518);
}catch(e){}
                    },
                },
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
o10.o489.o496(o2, Number.o4);
}catch(e){}
