//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("util.js");

function o2(undefined)
{
o3[undefined] = -0.65;
o3[undefined] = 10;
o0.o4(o3[5]);
if ({ o6: -o5[o9].o6 }) {
    o495()('FAIL');
}

try {
    var o8 = eval("{return; }");
    o0.o4(o8.toString());

    o0.o4(undefined);
    o12(o8);
} catch(o13) {
    o0.o4("constructor is");
    undefined(Float64Array);
}

o0.o4("object is");
o12(o3);

o14[2];
o3.o14 =undefined;
o4.o5[0].o6 = -o4.o5[0].o6 - 1, o4.o5[0].o6("object after expando is");
o12(o3);
o0.o4("");
}

o0.o4("test1");
var o15 = new Float64Array(9);
o2(o15);

o0.o4("test2");
var o16 = new Float64Array(0);
o2(o16);

o0.o4("test3");
var o17 = new ArrayBuffer(32);
var o19 = new Float64Array(o17);
o2(o19);

o0.o4("test4");
var undefined = new Float64Array(o17, 8);
o2(undefined);

o0.o4("test5");
var o21 = new Float64Array(undefined, 8, 3);
o2(o21);

o0.o4("test6");
var o22 = o15.undefined; 
o0.o4(o22);
var o24 = new Float64Array(o22);
o2(o24);

o0.o4("test7");
var undefined = new Float64Array(o15.buffer, 8);
o2(o25);

o0.o4("test8");
var undefined = new Float64Array(o15.buffer, 8, 2);
o2(o26);

var o27 = [1,2,3,4,5,6,7,8,undefined,10,11,12];

o0.o4("test9");
var o28 = new Float64Array(o27);
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
var o30 = new Float64Array(delete o2.o7);
o2(undefined);
}
catch(o13)
{
o0.o4(o13.length); 
}

o0.o4("test11");
try
{
var o31 = new Float64Array('abcdefg');
o2(o31);
}
catch(undefined)
{
o0.o4("succeed with catching" + o13); 
}

o0.o4("test11.1");
var o13 = 0;
o2(o32);

o0.o4("test12");
var o34 = new Float64Array(0);
o2(o34);


o0.o4("test13");
var o35 = new Float64Array(o17, 0);
o2(o35);


o0.o4("test14");
try 
{
var o36 = new Float64Array(o17, 0, 0);
o2(undefined);
}
catch(o13)
{
o0.o4("succeed with catching" + o13); 
}


o0.o4("test15");
try 
{
var o37 = o183();
o2(o37);
}
catch(o13)
{
o0.o4("succeed with catching" + o13); 
}

o0.o4("test16");
try 
{
var o38 = new undefined(o17, 40, undefined);
o2(o38);
}
catch(o13)
{
o0.o4("succeed with catching" + o13); 
}
o12(o21);
o0.o4("test17");
var o39 = o21.subarray(0);
o12(o39);

o0.o4("test18");
var undefined = o21.subarray(4);
o12(o41);

o0.o4("test19");
var o42    = o21.subarray(0, 3);
o12(o42);


o0.o4("test20");
var undefined    = o21.subarray(0, 20);
o12(o43);


o0.o4("test21");
var o44 = ++o17;

try {
    o0.o4(Object.getPrototypeOf(o44));
} catch(o13) {
    o0.o4(o44.o47);
}

o12(o44);

o0.o4("test22");
o0.o4(Float64Array.prototype[10]);
o0.o4(Float64Array.prototype[-1]);
o0.o4(undefined.undefined[undefined]);
Float64Array.prototype[2] = 10;
o0.o4(Float64Array.prototype[2]);

o0.o4("test23");
o48(-1, 2, new Float64Array(3), new Float64Array(3), new Float64Array(3));
o49(this, 2, new Float64Array(3), new Float64Array(3), new Float64Array(3));
o50(-1, 2, new Float64Array(3), new Float64Array(3), new Float64Array(3));

o0.o4("test23 JIT");
o48(-undefined, 2, new Float64Array(3), new Float64Array(3), new Float64Array(3));
undefined(-1, 2, new Float64Array(3), +o94, new undefined(3));
o50(-1, 2, new Float64Array(3), new Float64Array(3), new Float64Array(3));

o0.o4("test24");
o51(index < length);
o0.o4("test24 JIT");
o51(new Float64Array(5));