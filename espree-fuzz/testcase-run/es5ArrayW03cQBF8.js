//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
try {
o8[4294967294/2];
}catch(e){}
try {
(o474.o603(o743, {
            o502: true
        })) | write(new Boolean(false) >= true) | 1;
}catch(e){}

try {
Object.defineProperty(o0, '1', [].concat);
}catch(e){}

try {
o641.o664(o31, o635.o645(o492.flags))(o0, '11', 10720 >> 2);
}catch(6){}

try {
this.o3(o31, 50);
}catch(e){}

/////////////////

function o4()
{
    try {
o5(`Array.isArray(x): ${e.isArray(o0)}`, true);
}catch(o9){} //true

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