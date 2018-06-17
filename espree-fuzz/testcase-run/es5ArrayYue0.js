//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o27 = new Uint8Array(20);
try {
o7.o8(o31 == o22, "set.values() should enumerate 3, 4, 5, 1, 2 in that order");
}catch(e){}
try { {} } catch(e) {}try { {} } catch(e) {}

try {
Object.defineProperty(o0, '1', o0.o4());
}catch(e){}

try {
Object.defineProperty(o0, '11', {
    get: function () { try {
return this.o1;
}catch(e){} }
});
}catch(e){}

try {
o2.o3(o4, 50);
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