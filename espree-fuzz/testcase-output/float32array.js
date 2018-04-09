//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("util.js");

function o2(o3)
{
o3[1] = 0.54;
o3[5] = 10;
o0.o4(o3[5]);
if (Object.getOwnPropertyDescriptor(o3, 100000) != undefined) {
    o0.o4('FAIL');
}

try {
    var o5 = Float32Array.prototype;
    o0.o4(o5.toString());

    o0.o4("prototype is");
    o6(o5);
} catch(o7) {
    o0.o4("constructor is");
    o6(Float32Array);
}

o0.o4("object is");
o6(o3);

o3[20] =20;
o3.o8 ='bar';
o0.o4("object after expando is");
o6(o3);
o0.o4("");
}

o0.o4("test1");
var o9 = new Float32Array(9);
o2(o9);

o0.o4("test2");
var o10 = new Float32Array(0);
o2(o10);

o0.o4("test3");
var o11 = new ArrayBuffer(32);
var o12 = new Float32Array(o11);
o2(o12);

o0.o4("test4");
var o13 = new Float32Array(o11, 4);
o2(o13);

o0.o4("test5");
var o14 = new Float32Array(o11, 4, 6);
o2(o14);

o0.o4("test6");
var o15 = o9.buffer; 
o0.o4(o15);
var o16 = new Float32Array(o15);
o2(o16);

o0.o4("test7");
var o17 = new Float32Array(o9.buffer, 4);
o2(o17);

o0.o4("test8");
var o18 = new Float32Array(o9.buffer, 4, 6);
o2(o18);

var o19 = [1,2,3,4,5,6,7,8,9,10,11,12];

o0.o4("test9");
var o20 = new Float32Array(o19);
o2(o20);

o0.o4("test9.1");
o6(o9);
o20.set(o9);
o2(o20);

o0.o4("test9.2");
o20.set(o14);
o2(o20); 

o0.o4("test10");
try {
var o21 = new Float32Array({});
o2(o21);
}
catch(o7)
{
o0.o4("succeed with catching" + o7); 
}

o0.o4("test11");
try
{
var o22 = new Float32Array('abcdefg');
o2(o22);
}
catch(o7)
{
o0.o4("succeed with catching" + o7); 
}

o0.o4("test11.1");
var o23 = new Float32Array(new String('abcdefg'));
o2(o23);


o0.o4("test12");
var o24 = new Float32Array(0);
o2(o24);


o0.o4("test13");
var o25 = new Float32Array(o11, 0);
o2(o25);


o0.o4("test14");
try 
{
var o26 = new Float32Array(o11, 0, 0);
o2(o26);
}
catch(o7)
{
o0.o4("succeed with catching" + o7); 
}


o0.o4("test15");
try 
{
var o27 = new Float32Array(o11, 0, 40);
o2(o27);
}
catch(o7)
{
o0.o4("succeed with catching" + o7); 
}

o0.o4("test16");
try 
{
var o28 = new Float32Array(o11, 40, 4);
o2(o28);
}
catch(o7)
{
o0.o4("succeed with catching" + o7); 
}
o6(o14);
o0.o4("test17");
var o29 = o14.subarray(0);
o6(o29);

o0.o4("test18");
var o30 = o14.subarray(4);
o6(o30);

o0.o4("test19");
var o31    = o14.subarray(0, 3);
o6(o31);

o0.o4("test20");
o0.o4(Float32Array.prototype[10]);
o0.o4(Float32Array.prototype[-1]); 
o0.o4(Float32Array.prototype[2]);
Float32Array.prototype[2] = 10;
o0.o4(Float32Array.prototype[2]);

o0.o4("test21");
o32(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
o33(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
o34(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));

o0.o4("test21 JIT");
o32(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
o33(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
o34(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));

o0.o4("test22");
o35(new Float32Array(5));
o0.o4("test22 JIT");
o35(new Float32Array(5));