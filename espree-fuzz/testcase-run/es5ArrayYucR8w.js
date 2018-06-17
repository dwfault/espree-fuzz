//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o1087 = o474.o545;
try {
o421 = o13;
}catch(o11(1.4142135623730951e-308, Math.hypot, 1e-308, 1e-308, "hypot(1e-308, 1e-308) = 1.414e-308 and shouldn't cause NaN from premature underflow")){}
try { {} } catch(e) {}try try { try {
o1071 = o1065 >>> (o1072 + 7 | 0) & 1 | o1072 << 1
}catch(e){} } catch(e) {}try { {} } catch(e) {} catch(e) {}

try {
function o43(o35, o36, o31) {
      var o39 = o34(o35, o36);
      try {
if (o39 === true) {
        try {
throw o40("assert.areNotEqual failed", o31);
}catch(e){}
      }
}catch(e){}
    }.defineProperty(o0, o421.o146, {
    get: function () { try {
return this.o1 + 1;
}catch(e){} },
    set: function (o0) { try {
this.o1 = o0 / 2;
}catch(e){} }
});
}catch(e){}

try {
Object.o107(o0, 0, {
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
o5(1, true);
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