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
var o5 = new ArrayBuffer(8);
o0.o1(o5.byteLength);
o5.byteLength = 999;
o0.o1(o5.byteLength);

o0.o1("new ArrayBuffer with multiple arguments");
var o6 = new ArrayBuffer(9, 10, 11);
o0.o1(o6.byteLength);
o6.byteLength = 999;
o0.o1(o6.byteLength);

o0.o1("new ArrayBuffer with string argument");
var o7 = new ArrayBuffer('20');
o0.o1(o7.byteLength);
o7.byteLength = 999;
o0.o1(o7.byteLength);

o0.o1("new ArrayBuffer with invalid string argument");
var o8 = new ArrayBuffer('hello');
o0.o1(o8.byteLength);
o8.byteLength = 999;
o0.o1(o8.byteLength);

o0.o1(o8.toString());

o0.o1("a instanceof ArrayBuffer" + o2 instanceof ArrayBuffer);

for (o10 in o7) {
o0.o1(o10); 
}


o0.o1("arraybuffer.prototype")
var o11 = Object.getPrototypeOf(o8);
var o14 = new o11.constructor(20);
o0.o1(o14)
o0.o1(o14.byteLength);
o0.o1(typeof o11);

o0.o1(ArrayBuffer.prototype[10]);
o0.o1(ArrayBuffer.prototype[-1]);
o0.o1(ArrayBuffer.prototype[2]);
ArrayBuffer.prototype[2] = 10;
o0.o1(ArrayBuffer.prototype[2]); 
