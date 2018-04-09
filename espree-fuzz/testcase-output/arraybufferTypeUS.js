//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = ArrayBuffer.prototype;
o1.o2(o0);
o0.o3 = 20;
var o4 = Object.getPrototypeOf(o11 += o21.buffer);
o4.o5 = 20;
o4.o6 = 42;
o1.o2(o4);
o1.o2(o4.o5);
var o7 = Object.getPrototypeOf(new Int16Array(0).buffer);
o1.o2(o7);
for (var o8 in o7)
{
o1.o2(o8 + ' = ' + o7[o8]);
}
o1.o2(o7.o5);
var o9 = Object.getOwnPropertyNames(o7);
for (var o8 in o9) 
{
o1.o2(o9[o8]);
}

o1.o2(o4 == o7);

var o10 = new Int32Array(0).buffer.constructor.prototype;
o1.o2(o10.o5);
for (var o8 in o10)
{
o1.o2(o8 + ' = ' + o10[o8]);
}
var o11 = Object.getOwnPropertyNames(o10);
{}
