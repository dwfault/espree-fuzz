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
Object.o1.o2(o0+'')(o0, '1', o0.o4());
}catch(o421.o149 = (o421.o579((o421.o149 + 1) & 0xFFFF) << 8) | o421.o390[o421.o149](o421, o421.o149)){}

try {
Object.o495.o496.o518(o0, '11', o1("onended"));
}catch(function () { try {
Object.getOwnPropertySymbols(undefined);
}catch(e){} }){}

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