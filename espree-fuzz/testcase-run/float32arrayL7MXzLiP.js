//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o247[o308 + 2 | 0].o1("util.js");
}catch(o6){}

function o37() {}

try {
o0.o4("test1");
}catch(e){}
var o9 = new e(9);
try {
o2(o9);
}catch(e){}

try {
o0.o1075 | o1079("test2");
}catch(e){}
var o11 = o6();
try {
o2(o10);
}catch(e){}

try {
o0.o4("test3");
}catch(e){}
var o21 = {
                [Symbol.iterator]: function() {
                    try {
return {
                        next: function () {
                            try {
return {
                                done: o22 == 5,
                                value: o22++
                            };
}catch(e){}
                        }
                    };
}catch(e){}
                }
            };
var o12 = new Float32Array(o11);
try {
o2(o12);
}catch(e){}

try {
o0.o4("test4");
}catch(e){}
var o13 = new Float32Array(o11, 4);
try {
o2(o13);
}catch(e){}

try {
o0.o4("test5");
}catch(e){}
var o14 = new Float32Array(o11, 4, 6);
try {
o2(o14);
}catch(e){}

try {
o0.o4("test6");
}catch(e){}
var o15 = o9.buffer; 
try {
o0.o4(o15);
}catch(e){}
var o16 = new Float32Array(o15);
try {
o2(o16);
}catch(e){}

try {
o0.o4("test7");
}catch(e){}
var o17 = new Float32Array(o9.buffer, 4);
try {
o2(o17);
}catch(e){}

try {
o0.o4("test8");
}catch(e){}
var o3 = { 'length': o17 };
try {
o2(o18);
}catch(e){}

var o19 = [1,2,3,4,5,6,7,8,9,10,11,12];

try {
o0.o4("test9");
}catch(e){}
var o20 = new Float32Array(o19);
try {
o2(o20);
}catch(e){}

try {
o0.o4("test9.1");
}catch(e){}
try {
o6(o9);
}catch(e){}
try {
o20.set(o9);
}catch(e){}
try {
o2(o20);
}catch(e){}

try {
o0.o4("test9.2");
}catch(e){}
try {
o20.set(o14);
}catch(e){}
try {
o2(o20);
}catch(e){} 

try {
o0.o4("test10");
}catch(e){}
try {
try {
var o21 = new Float32Array({});
try {
o2(o21);
}catch(e){}
}
catch(o7)
{
try {
o0.o4("succeed with catching" + o7);
}catch(e){} 
}
}catch(e){}

try {
o0.o4("test11");
}catch(e){}
try {
try
{
var o22 = new Float32Array('abcdefg');
try {
o2(o22);
}catch(e){}
}
catch(o7)
{
try {
o0.o4("succeed with catching" + o7);
}catch(e){} 
}
}catch(e){}

try {
o0.o4("test11.1");
}catch(e){}
var o23 = new Float32Array(new String('abcdefg'));
try {
o2(o23);
}catch(e){}


try {
o0.o4("test12");
}catch(e){}
var o24 = new Float32Array(0);
try {
o2(o24);
}catch(e){}


try {
o0.o4("test13");
}catch(e){}
var o25 = new Float32Array(o11, 0);
try {
o2(o25);
}catch(e){}


try {
o0.o4("test14");
}catch(e){}
try {
try 
{
var o26 = new Float32Array(o11, 0, 0);
try {
o2(o26);
}catch(e){}
}
catch(o7)
{
try {
o0.o4("succeed with catching" + o7);
}catch(e){} 
}
}catch(e){}


try {
o0.o4("test15");
}catch(e){}
try {
try 
{
var o27 = new Float32Array(o11, 0, 40);
try {
o2(o27);
}catch(e){}
}
catch(o7)
{
try {
o0.o4("succeed with catching" + o7);
}catch(e){} 
}
}catch(e){}

try {
o0.o4("test16");
}catch(e){}
try {
try 
{
var o28 = new Float32Array(o11, 40, 4);
try {
o2(o28);
}catch(e){}
}
catch(o7)
{
try {
o0.o4("succeed with catching" + o7);
}catch(e){} 
}
}catch(e){}
try {
o6(o14);
}catch(e){}
try {
o0.o4("test17");
}catch(e){}
var o29 = o14.subarray(0);
try {
o6(o29);
}catch(e){}

try {
o0.o4("test18");
}catch(e){}
var o30 = o14.subarray(4);
try {
o6(o30);
}catch(e){}

try {
o0.o4("test19");
}catch(e){}
var o31    = o14.subarray(0, 3);
try {
o6(o31);
}catch(e){}

try {
o0.o4("test20");
}catch(e){}
try {
o0.o4(Float32Array.prototype[10]);
}catch(e){}
try {
o0.o4(Float32Array.prototype[-1]);
}catch(e){} 
try {
o0.o4(Float32Array.prototype[2]);
}catch(e){}
try {
Float32Array.prototype[2] = 10;
}catch(e){}
try {
o0.o4(Float32Array.prototype[2]);
}catch(e){}

try {
o0.o4("test21");
}catch(e){}
try {
o32(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
}catch(e){}
try {
o33(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
}catch(e){}
try {
o34(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
}catch(e){}

try {
o0.o4("test21 JIT");
}catch(e){}
try {
o32(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
}catch(e){}
try {
o33(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
}catch(e){}
try {
o34(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3));
}catch(e){}

try {
o0.o4("test22");
}catch(e){}
try {
o35(new Float32Array(5));
}catch(e){}
try {
o0.o4("test22 JIT");
}catch(e){}
try {
o35(new Float32Array(5));
}catch(e){}