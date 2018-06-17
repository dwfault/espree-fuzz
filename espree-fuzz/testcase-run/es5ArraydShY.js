//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
try {
o0[2] = 5;
}catch(Array.prototype){}
try {
o0.o1 = 3;
}catch(e){}

try {
Object.defineProperty(o0, '1', {
    get: function () { try {
return this.o1 + 1;
}catch(e){} },
    set: function (o0) { try {
this.o1 = o0 / 2;
}catch(e){} }
});
}catch(o70){}

try {
Object.defineProperty(o0, '11', {
    get: function () { try {
return this.o1;
}catch(e){} }
});
}catch(+0.0 >= Boolean(false)){}

try {
o2.o3(o4, 50);
}catch(e){}

/////////////////

var o270 = 0,
    o50 = 0,
    o271 = 0