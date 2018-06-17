//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o82 = function (o477, o714, o715) {
        try {
if (!o474.o719) {
            try {
o474.o719 = function () {};
}catch(e){}
            try {
o474.o719.prototype = {};
}catch(e){}
            // compatibility
            try {
Object.defineProperties(o474.o719.prototype, {
                o720: {
                    get: function () {
                        try {
return this.o479;
}catch(e){}
                    },
                    set: function (o493) {
                        try {
this.o479 = o493;
}catch(e){}
                    }
                },
                o721: {
                    get: function () {
                        try {
return (this.flags & 2097155) !== 1;
}catch(e){}
                    }
                },
                o722: {
                    get: function () {
                        try {
return (this.flags & 2097155) !== 0;
}catch(e){}
                    }
                },
                o723: {
                    get: function () {
                        try {
return (this.flags & 1024);
}catch(e){}
                    }
                }
            });
}catch(e){}
        }
}catch(e){}
        try {
if (o477.__proto__) {
            // reuse the object
            try {
o477.__proto__ = o474.o719.prototype;
}catch(e){}
        } else {
            var o724 = new o474.o719();
            try {
for (var o588 in o477) {
                try {
o724[o588] = o477[o588];
}catch(e){}
            }
}catch(e){}
            try {
o477 = o724;
}catch(e){}
        }
}catch(e){}
        var o716 = o474.o713(o714, o715);
        try {
o477.o716 = o716;
}catch(e){}
        try {
o474.o664[o716] = o477;
}catch(e){}
        try {
return o477;
}catch(e){}
    };

function e(e,o3)
{
    try {
return (0xFF05 < o3);
}catch(e){}
}

var o4 = 0;
try {
do
{
    try {
o421.o391[o869.o150](o421, o421.o150, this.o92);
}catch(e){}
    try {
o474.o513(o31);
}catch(e){}

} while(o1(o4, 100) && o1(o0, 5000));
}catch(e){}

try {
o4.o6(o0);
}catch(e){}
