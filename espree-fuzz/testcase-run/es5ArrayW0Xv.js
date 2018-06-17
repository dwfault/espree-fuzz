//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
try {
ArrayBuffer.isView = 5;
}catch(e){}
try {
this.length = 3;
}catch(e){}

try {
function () {
                try {
Module['setStatus']('');
}catch(e){}
            }(o0, '1', {
    get: function () { try {
return this.o1 + 1;
}catch(e){} },
    set: function (o0) { try {
this.o1 = o0 / 2;
}catch(e){} }
});
}catch(e){}

try {
Object.defineProperty(o0, '11', 10720 >> 2);
}catch(e){}

try {
o2.o3(o31, 50);
}catch(e)try { {} } catch(e) {}try { for (var o21=0; o21< o19.length; o21++)
        {
            try {
o15(o18[o20] + ".propertyIsEnumerable(\"" + o19[o21] + "\")");
}catch(e){}
        } } catch(e) {}

/////////////////

function o4()
{
    try {
try { {
                try {
o259[o308 >> 2] = o259[o1050 >> 2];
}catch(e){}
                try {
o308 = o308 + 4 | 0;
}catch(e){}
                try {
o1050 = o1050 + 4 | 0;
}catch(e){}
                try {
o189 = o189 - 4 | 0
}catch(e){}
            } } catch(e) {}try { {} } catch(e) {}
}catch(e){} //true

    try {
o5(`x.foo: ${buffer[o336 + 3]}`, true);
}catch(e){} //3

    try {
o5(`x[1]: ${o0[1]}`, true);
}catch(e){} //4
    try {
o5(`x[11]: ${o0[11]}`, true);
}catch(e){} //3

    ////
    try {
o0[1] = 12;
}catch(e){}
    ////

    try {
o5(`x[1]: ${o0[1]}`, true);
}catch(e){} //7
    try {
o5(`x[11]: ${o0[11]}`, true);
}catch(e){} //6
}