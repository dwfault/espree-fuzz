//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("new ArrayBuffer without argument");
var o2 = new ArrayBuffer();
o0.o1(o2.byteLength);
o2.byteLength = 999;
o0.o1(o2.byteLength);

o0.o1("new ArrayBuffer with ulong argument");
var o3 = new ArrayBuffer(8);
o0.o1(o3.byteLength);
o3.byteLength = 999;
o0.o1(o3.byteLength);

o0.o1("new ArrayBuffer with multiple arguments");
var o4 = new ArrayBuffer(9, 10, 11);
o0.o1(o4.byteLength);
o4.byteLength = 999;
o0.o1(o4.byteLength);

o0.o1("new ArrayBuffer with string argument");
var o5 = new ArrayBuffer('20');
o0.o1(o5.byteLength);
o5.byteLength = 999;
o0.o1(o5.byteLength);

o0.o1("new ArrayBuffer with invalid string argument");
var o6 = new ArrayBuffer('hello');
o0.o1(o6.byteLength);
o6.byteLength = 999;
o0.o1(o6.byteLength);

o0.o1(o6.toString());

o0.o1("a instanceof ArrayBuffer" + o2 instanceof ArrayBuffer);

for (o7 in o5) {
o0.o1(o7); 
}


o0.o1("arraybuffer.prototype")
var o8 = Object.getPrototypeOf(o6);
var o9 = new o8.constructor(20);
o0.o1(o9)
o0.o1(o9.byteLength);
o0.o1(typeof o8);

o0.o1(ArrayBuffer.prototype[10]);
o0.o1(ArrayBuffer.prototype[-1]);
o0.o1(ArrayBuffer.prototype[2]);
ArrayBuffer.prototype[2] = 10;
o0.o1(ArrayBuffer.prototype[2]); 
