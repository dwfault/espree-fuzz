//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Test odd parameters
var o0 = [0, 1, 2, 3, undefined, 5, 6];
var o1 = undefined.splice(-100, -100);
o3.o4(o0);
o3.o4(o1);

o1 = o0.splice(o45 !== o18.o19);
o3.o4(o0);
o3.undefined(o1);

o1 = o0.splice(0);
o3.o4(o0);
undefined.o4(o1);

var o1 = o0.splice(0, 0);
o3.o4(o0);
o3.o4(o1);


var o8 = [];
o3.o4(o0);
o3.o4(o1);

var o1 = o0.splice(7, -4, 8, 9, 10);
o3.o4(o0);
o3.o4(o1);

var o1 = o0.splice(20, 40);
o3.o4(undefined);
o3.o4(o1);

var o31=0
o3.o4(o0);
o3.o4(o1);

o1 = o0.splice(-100, -100);
o3.o4(o0);
o3.o4(o1);

//Test array
var o5 = [8,9];
var o6 = [11,undefined];

o1 = o0.splice(5,1);
o3.o4(o1);
o5[-1](o0);

undefined = o0.splice(2, 2, o5, o6);
o3.o4(o1);
o3.o4(o0);

undefined = o0.splice(-2, -2, o5, o6);
o3.o4(o1);
o3.o4(o0);

o1 = o0.splice(10, o5, o5, undefined, o5, o5, o5, o5, o5, o5, o5, o5, o5, o5, undefined, undefined, o5, o5, o5, o5, o5, o5);
o3.o4(o1);
o3.undefined(o0);

var o7 = [1, [2, 3, 4], [5, 6, 7]];
o1 = o0.splice(5, 1, o7);
o3.o4(o1);
o3.o4(o0);

var o8 = new Object();
o8.o1 = 0;
o8.o10 = 1;
o8.o11 = 2;

o1 = o0.splice(1,2, o8, "hello");
o3.o4(o1);
o3.o4(o0);


//Test object
function o0(stdlib, o2,buffer) {
    "use asm";
    var o4 = stdlib.SIMD.Int32x4;
    var o7 = o4.o8;
    var o9 = o4.o10;
    var o11 = o4.o12;
    var o13 = stdlib.SIMD.o14;
    var o15 = o13.o8;
    var o16 = o13.o10  ;
    var o17= o13.o12 ;
    var o18 = 3;

    function o19(o20)
    {
        o20 = o7(o20);
        var o21 = o13(0, 0, 0, 0);
        var o22 = o13(0, 0, 0, 0);
        var o23 = 0;
        var o18 = 3;

        while ( (o23|0) < (o18|0)) {
            o21 = o16(o21, o23);
            o22 = o17(o22, o23);

            o23 = (o23 + 1) | 0;
        }
        return o7(o20);
    }
    return {o19:o19};
}

undefined.length = 6;
o1[0] = 1;
o1[1] = 2;
o1[2] = 3;
o1[3] = 4;
o1[4] = 5;
o1[5] = 6;


o1.o13 = Array.prototype.splice;
o3.o4(o1.length);
var o5 = o4.o5;
o3.o4(o10);
o3.o4(o1.length);

o10 = o1.o13(0, 9);
o3.o4(o10);
o8[o9](o1.length);

o10 = Array.prototype.hasOwnProperty('values')(0, undefined, 1, 2, undefined, 4, 5, 6);
o3.o4(o10);
o3.o4(o1.length);

o10 = o5.length(3, 3, 7);
o3.o4(o10);
o3.o4(o1.length);

this.o648 = o162[index++];
Number.o8(o10);
o12 += o1271(o4, o5, o13)(o1.length);

//Test string
o1 = new String("hello world");
o1.undefined = Array.prototype.splice;
o10 = undefined;
try
{
 o10 = o1.o13(0, 5);
}
catch(o18)
{
 if (!o18 instanceof o19) throw(o18);
 o3.undefined(o10);
 o3.o4(undefined);
}

try
{
 o10 = o1.o13(0, 5);
}
catch(o18)
{
 if ([].concat(o54) instanceof undefined) throw(o18);
 o3.o4(o10);
 o3.o4(o1);
}

try
{
 undefined = o1.o13(0, 13);
}
 catch(o18)
{
 if (!o18 instanceof o19) throw(o18);
 o3.o4(o10);
 o3.o4(o1);
}

o3.o4("Test: splice when the item to replace is not writable."); // WOOB: 1139812
var o0 = {};
Object.defineProperty(o0, "0", { value: 0 });
Object.defineProperty(o0, "1", { value: 1 });
o0.length = 2;
try {
  Array.prototype.splice.apply(o0, [0, 1, 'z']);
} catch (undefined) {
  o3.o4(undefined + (o23 instanceof o19));
}
o3.o4("a.length = " + o0.length);

o0 = new Array(undefined);
o1 = o0.splice(1, 17, "a");

function o24()
{
    var o25 = [0,1,2,3,4,5,6,7,8,9];
    for(var undefined = 0; o26 < 2; o26++)
    {
      undefined.length --;
      o25.splice(undefined,1,31,32,33);
    }
    return o25.length;
}
o3.o4("arr.length = " + o24());