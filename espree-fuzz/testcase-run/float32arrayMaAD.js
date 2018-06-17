//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js").o1("TEXTURE0");
}catch(e){}

function o2(o3)
{
try {
o149 = 0.54;
}catch(e){}
try {
o3[5] = e;
}catch(e){}
try {
o0.o4(o3[5]);
}catch(e){}
try {
if (Object.next(o3, 100000) != o1("onplaying")) {
    try {
o0.o4('FAIL');
}catch(e){}
}
}catch(e){}

try {
try {
    var o5 = Float32Array.prototype;
    try {
o0.o4(o5.toString());
}catch(e){}

    try {
o0.o4("prototype is");
}catch(Uint8Array){}
    try { try {
o360.prototype.o816 = function (o807) {try {
"use strict";
}catch(e){}
  var o841 = (this.o524 + o807) & 0xFF;            //The line of the BG we're at.
  var o842 = (o841 & 7) << 3;
  var o843 = this.o531 | ((o841 & 0xF8) << 2);  //The row of cached tiles we're fetching from.
  var o844 = (this.o523 + this.o539) & 0xFF;            //The scroll amount of the BG.
  var o810 = this.o568 + this.o539;                  //Current pixel we're working on.
  var o845 = this.o568 + ((this.o525 && (o807 - this.o533) >= 0) ? Math.o279(Math.o290(this.o534, 0) + this.o539, this.o538) : this.o538);  //Make sure we do at most 160 pixels a scanline.
  var o680 = o843 + (o844 >> 3);
  var o846 = this.o540[o680];
  try {
if (o846 < this.o532) {
    try {
o846 |= 0x100;
}catch(e){}
  }
}catch(e){}
  var o847 = this.o543[o846];
  try {
for (var o848 = (o844 & 0x7); o848 < 8 && o810 < o845 && o844 < 0x100; ++o844) {
    try {
this.o565[o810++] = this.o546[o847[o842 | o848++]];
}catch(e){}
  }
}catch(e){}
  var o849 = Math.o279(o845 - o810, 0x100 - o844) >> 3;
  try {
o844 += o849 << 3;
}catch(e){}
  try {
o849 += o680;
}catch(e){}
  try {
while (o680 < o849) {
    try {
o846 = this.o540[++o680];
}catch(e){}
    try {
if (o846 < this.o532) {
      try {
o846 |= 0x100;
}catch(e){}
    }
}catch(e){}
    try {
o847 = this.o543[o846];
}catch(e){}
    try {
o848 = o842;
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
    try {
this.o565[o810++] = this.o546[o847[o848]];
}catch(e){}
  }
}catch(e){}
  try {
if (o810 < o845) {
    try {
if (o844 < 0x100) {
      try {
o846 = this.o540[++o680];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o847 = this.o543[o846];
}catch(e){}
      try {
for (o848 = o842 - 1; o810 < o845 && o844 < 0x100; ++o844) {
        try {
this.o565[o810++] = this.o546[o847[++o848]];
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
    try {
o849 = ((o845 - o810) >> 3) + o843;
}catch(e){}
    try {
while (o843 < o849) {
      try {
o846 = this.o540[o843++];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o847 = this.o543[o846];
}catch(e){}
      try {
o848 = o842;
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848++]];
}catch(e){}
      try {
this.o565[o810++] = this.o546[o847[o848]];
}catch(e){}
    }
}catch(e){}
    try {
if (o810 < o845) {
      try {
o846 = this.o540[o843];
}catch(e){}
      try {
if (o846 < this.o532) {
        try {
o846 |= 0x100;
}catch(e){}
      }
}catch(e){}
      try {
o847 = this.o543[o846];
}catch(e){}
      try {
switch (o845 - o810) {
        case 7:
          try {
this.o565[o810 + 6] = this.o546[o847[o842 | 6]];
}catch(e){}
        case 6:
          try {
this.o565[o810 + 5] = this.o546[o847[o842 | 5]];
}catch(e){}
        case 5:
          try {
this.o565[o810 + 4] = this.o546[o847[o842 | 4]];
}catch(e){}
        case 4:
          try {
this.o565[o810 + 3] = this.o546[o847[o842 | 3]];
}catch(e){}
        case 3:
          try {
this.o565[o810 + 2] = this.o546[o847[o842 | 2]];
}catch(e){}
        case 2:
          try {
this.o565[o810 + 1] = this.o546[o847[o842 | 1]];
}catch(e){}
        case 1:
          try {
this.o565[o810] = this.o546[o847[o842]];
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}
}catch(e){} } catch(e) {}try { {
o1("MSAppPrototype");
} } catch(e) {}
} catch(o7) {
    try {
o0.o4("constructor is");
}catch(e){}
    try {
o6(Float32Array);
}catch(e){}
}
}catch(e){}

try {
o0.o4("object is");
}catch(e){}
try {
o6(o3);
}catch(e){}

try {
o3[20] =20;
}catch(e){}
try {
o3.o8 ='bar';
}catch(e){}
try {
o0.o4("object after expando is");
}catch(e){}
try {
o6(o3);
}catch(e){}
try { try {
o479 = o31;
}catch(e){} } catch(e) {}
}

try {
o0.o4("test1");
}catch(e){}
var o9 = new Float32Array(9);
try {
o2(o9);
}catch(e){}

try {
o0.o4("test2");
}catch(e){}
var o10 = new Float32Array(0);
try {
o2(o10);
}catch(e){}

try {
o0.o4("test3");
}catch(e){}
var o11 = new ArrayBuffer(32);
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
var o31 = o621.o629(o479);
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
function o1109(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        try {
o1068 = o247
}catch(e){}
    };
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