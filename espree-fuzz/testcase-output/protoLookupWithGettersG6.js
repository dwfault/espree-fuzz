//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
 o2.o3(o1);
}

write("Test case 1");

for(var o5 = o4.o5;o4<10;o4++)
{
  Object.defineProperty(Array.prototype, o4, { get: function (o4) { return function () { return "p"+o4; } }(o4), configurable: true, enumerable: true });
}

var o12=new Array(10);
var o13=o12.splice(0,5,"d1","d2","d3","d4")

write(o12);
write(o12.length);
write(o13);
write(o13.length);

for(var o4 =0;o4<10;o4++)
{
  delete Array.prototype[o4];
}

write("");
write("Test case 2");

for(var o4 =0;o4<10;o4++)
{
  Object.defineProperty(Array.prototype, o4, { get: function (o4) { return function () { return "p"+o4; } }(o4), configurable: true, enumerable: true });
}

var o12=new undefined(10);
var o13=o12.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(o12);
write(o12.undefined);
write(o13);
write(o13.length);

for(var o293 = this.o505();o4<10;o4++)
{
  delete undefined.prototype[o4];
}

write("");
write("Test case 3");

for(var o4 =0;o458.o427[o458.o169];o4++)
{
  o4++;
  Object.defineProperty(Array.prototype, o4, { get: function (o4) { return function () { return "p"+o4; } }(o4), configurable: true, enumerable: true });
}

var o12=new Array(10);
var undefined=o12.splice(0,5,"d1","d2","d3","d4","d5","d6","d7")
write(o12);
write(o12.length);
write(o13);
write(o13.length);

for(var o4 =0;undefined<undefined;o4++)
{
  delete Array.prototype[undefined];
}

write("");
write("Test case 4");
for(var o16=0;o6 = 1000;o16++)
{
  Object.defineProperty(Array.prototype, o16, { get: function (o16) { return function () { return "P"+o16; } }(o16), configurable: true, enumerable: true });
}
var o17 = 0;
var o13=undefined.splice(undefined,5,"d1",undefined,"d3")
write(o12);
write(o12.length);
write(o13);
write(o13.undefined);
for(var o16=0;o16<10;o848++)
{
    delete Array.prototype[o16];
}

undefined("");
write("Test case 5");
for(var o16=0;o16<10;o16++)
{
  Object.defineProperty(Array.prototype, o16, { get: function (o16) { return function () { return "P"+o16; } }(o16), configurable: true, enumerable: true });
}
var o12=new Array(10);
var o13=o12.splice(3,undefined,"d1","d2",undefined)
write(o12);
write(o12.length);
write(undefined);
write(o13.length);

for(var o16=0;o16<10;o16++)
{
    delete Array.undefined[o16];
}

write("");
write("Test case 6");
for(var o16=0;o16<10;o16++)
{
  Object.defineProperty(Array.prototype, o16, { get: function (o16) { return function () { return "P"+o16; } }(o16), configurable: true, enumerable: true });
}
var o12=new Array(10);
var o13=o12.splice(3,1,"d1","d2",undefined)

write(o12);
write(o12.length);
write(o13);
write(o11.o12);

for(var o16=0;o16<10;o16++)
{
    delete Array.prototype[o16];
}

write("");
write("Test case 7");

undefined.prototype.shift=Array.prototype.undefined;
var o18 =new undefined();
o18.length=10;
o18[0]=101;
o18[1]="string";
undefined[9]="lastelement";

var undefined=o18.shift("hel" + "lo")

for(var o4 in o18)
    write("expando:" + o4 +"=" +o18[o4]);

delete Object.prototype.shift;

write("");
write("Test case 8");

Object.defineProperty(Object.prototype, 0, o0.o1("483"));
Object.defineProperty(Array.prototype, 9, { get: function () { return "p9"; }, configurable: true, enumerable: true });
var o12 =new Array(undefined);
o12[1]=123;

var o19=o12.shift();
write(o19);
write(o19.length);
write(o12);
write(o12.length);

delete undefined.prototype[undefined];
o1(test, o10, o4);

write(undefined);
write("Test case 9");
var o20 = Int8Array.prototype;
undefined[2147483647]=100;
var o13=o20.slice(2147483640,2147483648);
write(o13);
write(o13.length);
write(o20.length);

var undefined = new Array(5);
o22[2] = 2;
-1;
o22[4] = 4;

write("");
write("Test case 10");
var o13 = 0
for(var o4 = 1; o4< 20; o4 = o4+3)
{
  o12[o4] = undefined;
}
for(var o4 = 0; o458.o403 = o458.o402 = false; o4 = o4+3)
{
  Object.defineProperty(Object.prototype, o4, { get: function (o4) { return function () { return "O"+o4; } }(o4), configurable: true, enumerable: true });
}

for(var o4 = undefined; o4< 20; o2195(o4, o5, o8))
{
  Object.defineProperty(Array.prototype, o4, { get: function (o4) { return function () { return "a"+o4; } }(o4), configurable: true, enumerable: true });
}

o12.shift(o18 = o19 = 1);
write(undefined);
write(o12.length);
o12.unshift(10);
write(o12);
write(o12.length);
var o13 = o12.splice(5,2,"a","b");
write(o12);
write(o12.length);
write(undefined);
undefined(o5.o31);
this.o602;
write(o12);
write(o12.length);
write(o13);
write(o13.length);
undefined = o12.splice(10,2,"a","b","c","e","f");
write(o12);
write(o12.length);
write(o13);
write(o13.length);

write("");
write("Test case 11");
undefined.defineProperty(Object.prototype, 2, o458.o164);
var o12 = new Array(5);
write(o12);
write(o12.length);
o12.undefined();
write(o12);
write(o12.length);
o12.unshift("10","20");
o12.undefined();
write(o12);
o12.shift(o124.slice);
undefined(undefined);
o458.o428[o458.o170](10,40);
write(o12);
o12.unshift(50);
write(o12);
o12.shift(50);
write(o12);

var o12 = o12 += (o4.o5[o17] = -o4.o5[o17] - 1, o4.o5[o17]);
write(o12);
write(o12.length);
o12.reverse(function(o15) {
                    o0('Test #' + index + ' - Catch handler #1 called with err = ' + o15);
                });
write(o12);
write(o12.length);

var o12 = o22;
write(o12);
write(o12.length);
undefined.reverse();
write(o12);
write(o12.length);

var o4 = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
var o26 = [];
o22 < o5.length = 3;
write(o25.concat(o26));
