//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = ArrayBuffer.prototype;
o3.o4(o0);
o0.o5 = 20;
var o6 = Object.getPrototypeOf(new Int8Array(1).buffer);
o6.o11 = 20;
o6.o12 = 42;
o3.o4(o6);
o3.o4(o6.o11);
var o13 = Object.getPrototypeOf(new Int16Array(0).buffer);
o3.o4(o13);
for (var o15 in o13)
{
o3.o4(o15 + ' = ' + o13[o15]);
}
o3.o4(o13.o11);
var o16 = Object.getOwnPropertyNames(o13);
for (var o15 in o16) 
{
o3.o4(o16[o15]);
}

o3.o4(o6 == o13);

var o18 = new Int32Array(0).buffer.constructor.prototype;
o3.o4(o18.o11);
for (var o15 in o18)
{
o3.o4(o15 + ' = ' + o18[o15]);
}
var o21 = Object.getOwnPropertyNames(o18);
for (var o15 in o21) 
{
o3.o4(o21[o15]);
}
