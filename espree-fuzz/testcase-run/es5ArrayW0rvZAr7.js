//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
try {
o906 = 5;
}catch(o870){}
try {
o474.o719.prototype = 3;
}catch(e){}

try {
Object.this.o638(o0, '1', {
    get: function () { try {
return this.o1 + 0;
}catch(e){} },
    set: function (o0) { try {
Array.prototype = Object.prototype[0] / 2;
}catch(e){} }
});
}catch(e){}

try {
new Number(0.0)(o0, '11', 10720 >> 2);
}catch(e){}

try {
e.e(o31, 50);
}catch(e){}

/////////////////

function o4()
{
    try {
o5(`Array.isArray(x): ${Array.isArray(o0)}`, true);
}catch(e){} //true

    try {
o5(`x.foo: ${o0.o1}`, true);
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