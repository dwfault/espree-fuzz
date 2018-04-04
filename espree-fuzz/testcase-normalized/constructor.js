//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

Object.prototype.o6 = Object.prototype.toString;
Array.prototype.o6 = Object.prototype.toString;
Boolean.prototype.o6 = Object.prototype.toString;
Date.prototype.o6 = Object.prototype.toString;
Function.prototype.o6 = Object.prototype.toString;
Number.prototype.o6 = Object.prototype.toString;
RegExp.prototype.o6 = Object.prototype.toString;
String.prototype.o6 = Object.prototype.toString;

var o15 = 0;

function o16(o17) {
    eval(o17);
    write(o17 + " x:"  + o15 + " typeof(x):" + typeof(o15) + " x.str():" + o15.o6());
}

function o19() {}

var o20 = [ "undefined", "null",
            "true", "false",
            "Boolean(true)", "Boolean(false)",
            "new Boolean(true)", "new Boolean(false)",
            "NaN", "+0", "-0", "0", "0.0", "-0.0", "+0.0",
            "1", "10", "10.0", "10.1", "-1",
            "-10", "-10.0", "-10.1",
            "Number.MAX_VALUE", "Number.MIN_VALUE", "Number.NaN", "Number.POSITIVE_INFINITY", "Number.NEGATIVE_INFINITY",
            "new Number(NaN)", "new Number(+0)", "new Number(-0)", "new Number(0)",
            "new Number(0.0)", "new Number(-0.0)", "new Number(+0.0)",
            "new Number(1)", "new Number(10)", "new Number(10.0)", "new Number(10.1)", "new Number(-1)",
            "new Number(-10)", "new Number(-10.0)", "new Number(-10.1)",
            "new Number(Number.MAX_VALUE)", "new Number(Number.MIN_VALUE)", "new Number(Number.NaN)",
            "new Number(Number.POSITIVE_INFINITY)", "new Number(Number.NEGATIVE_INFINITY)",
            "''", "0xa", "04", "'hello'", "'hel' + 'lo'",
            "String('')", "String('hello')", "String('h' + 'ello')",
            "new String('')", "new String('hello')", "new String('he' + 'llo')",
            "new Object()", "new Object()",
            "[1, 2, 3]", "[1 ,2 , 3]",
            "new Array(3)", "Array(3)", "new Array(1 ,2 ,3)", "Array(1)",
            "foo"
          ];

o16("x = Object();");
o16("x = new Object();");

for (var o21=0; o21< o20.length; o21++) {
    o16("x = Object(" + o20[o21] + ");");
    o16("x = new Object(" + o20[o21] + ");");
}

Object.prototype.o23 = function () { o2.o3("ObjectprotoFunc");}

var o24 = { o23: function () { o2.o3("protoFunc");}}
// Constructor with only this statements
function o25(o26, o27)
{
    this.o28 = o26;
    this.o29 = o26;
}
// Constructor with more than only this statements
function o30(o26, o27)
{
    if(!o26) o26 = 0;
    if(!o27) o27 = 0;
    this.o28 = o26;
    this.o29 = o26;
}

function o31()
{
  var o32 = [];
  for(var o21= 0; o21 < 2; o21++)
  {
    o32.push(new o25(1, 2, 3)); // with arg constructor cache
    o32.push(new o25());        // no arg constructor cache test

    o32.push(new o30(1, 2, 3)); // with arg constructor cache
    o32.push(new o30());        // no arg constructor cache test
  }
  return o32;
}

o2.o3("Testing no prototype property construction");
var o34 = o31();
o35(o34);

o2.o3("Testing custom object prototype construction");
o25.prototype = o24;
o30.prototype = o24;
o34 = o31();
o35(o34);

o2.o3("Testing integer prototype construction");
o25.prototype = 1;
o30.prototype = 1;
o34 = o31();
o35(o34);

o2.o3("Testing no prototype property construction");
delete o25.prototype;
delete o30.prototype;
o34 = o31();
o35(o34);

function o35(o34)
{
   for(var o36= 0; o36 < o34.length; o36++)
   {
      o34[o36].o23();
   }
}

o2.o3("Testing cross script context object creation");

var o37 = o2.o38("constructor-crossScript.js", "samethread");

var o39 = new o37.o40();
o2.o3(o39.o41);
o39 = new o37.o40();
o2.o3(o39.o41);
o39 = o37.o42();
o2.o3(o39.o41);
o39 = o37.o42();
o2.o3(o39.o41);
o39 = new o37.o40();
o2.o3(o39.o41);

