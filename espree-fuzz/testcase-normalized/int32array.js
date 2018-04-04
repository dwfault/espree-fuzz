//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("util.js");

function o2(o3) {
    o3[1] = 0x80000000;
    o3[5] = 10;
    o0.o4(o3[5]);
    if (Object.getOwnPropertyDescriptor(o3, 100000) != undefined) {
        o0.o4('FAIL');
    }

    try {
        var o8 = Int32Array.prototype;
        o0.o4(o8.toString());

        o0.o4("prototype is");
        o12(o8);
    } catch (o13) {
        o0.o4("constructor is");
        o12(Int32Array);
    }

    o0.o4("object is");
    o12(o3);

    o3[20] = 20;
    o3.o14 = 'bar';
    o0.o4("object after expando is");
    o12(o3);
    o0.o4("");
}

o0.o4("test1");
var o15 = new Int32Array(9);
o2(o15);

o0.o4("test2");
var o16 = new Int32Array(0);
o2(o16);

o0.o4("test3");
var o17 = new ArrayBuffer(32);
var o19 = new Int32Array(o17);
o2(o19);

o0.o4("test4");
var o20 = new Int32Array(o17, 4);
o2(o20);

o0.o4("test5");
var o21 = new Int32Array(o17, 4, 6);
o2(o21);

o0.o4("test6");
var o22 = o15.buffer;
o0.o4(o22);
var o24 = new Int32Array(o22);
o2(o24);

o0.o4("test7");
var o25 = new Int32Array(o15.buffer, 4);
o2(o25);

o0.o4("test8");
var o26 = new Int32Array(o15.buffer, 4, 6);
o2(o26);

var o27 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

o0.o4("test9");
var o28 = new Int32Array(o27);
o2(o28);

o0.o4("test9.1");
o12(o15);
o28.set(o15);
o2(o28);

o0.o4("test9.2");
o28.set(o21);
o2(o28);

o0.o4("test10");
try {
    var o30 = new Int32Array({});
    o2(o30);
}
catch (o13) {
    o0.o4("succeed with catching" + o13);
}

o0.o4("test11");
try {
    var o31 = new Int32Array('abcdefg');
    o2(o31);
}
catch (o13) {
    o0.o4("succeed with catching" + o13);
}

o0.o4("test11.1");
var o32 = new Int32Array(new String('abcdefg'));
o2(o32);


o0.o4("test12");
var o34 = new Int32Array(0);
o2(o34);


o0.o4("test13");
var o35 = new Int32Array(o17, 0);
o2(o35);


o0.o4("test14");
try {
    var o36 = new Int32Array(o17, 0, 0);
    o2(o36);
}
catch (o13) {
    o0.o4("succeed with catching" + o13);
}


o0.o4("test15");
try {
    var o37 = new Int32Array(o17, 0, 40);
    o2(o37);
}
catch (o13) {
    o0.o4("succeed with catching" + o13);
}

o0.o4("test16");
try {
    var o38 = new Int32Array(o17, 40, 4);
    o2(o38);
}
catch (o13) {
    o0.o4("succeed with catching" + o13);
}

o0.o4("test17");
var o39 = o21.subarray(0);
o12(o39);

o0.o4("test18");
var o39 = o21.subarray(0, undefined);
o12(o39);

o0.o4("test19");
var o41 = o21.subarray(4);
o12(o41);

o0.o4("test20");
var o42 = o21.subarray(0, 3);
o12(o42);

o0.o4("test21");
o0.o4(Int32Array.prototype[10]);
o0.o4(Int32Array.prototype[-1]);
o0.o4(Int32Array.prototype[2]);
Int32Array.prototype[2] = 10;
o0.o4(Int32Array.prototype[2]);

o0.o4("test22");
o43(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
o44(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
o45(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
o0.o4("test22 JIT");
o43(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
o44(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));
o45(-1, 2, new Int32Array(3), new Int32Array(3), new Int32Array(3));

o0.o4("test23");
o46(new Int32Array(5));
o0.o4("test23 JIT");
o46(new Int32Array(5));

o0.o4("test24");
var o47 = new Int32Array(o17, 4, undefined);
o2(o47);
