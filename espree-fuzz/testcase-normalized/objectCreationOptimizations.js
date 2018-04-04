//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Constructor providers
var o0 = function()
{
  return function()
  {
    this.o1 = 1;
    this.o2 = 2;
    this.o3 = 3;
  };
}
o0.o4 = "Non-numeric";
o0.o5 = 'b';

var o6 = function()
{
  return function()
  {
    this.o1 = 1;
    this[9] = 2;
    this.o3 = 3;
  };
}
o6.o4 = "Numeric";
o6.o5 = '9';

var o7 = [ o0, o6 ];

// Property definers
var o8 = function(o9, o5) {}
o8.o4 = "No-op";

var o10 = function(o9, o5)
{
  Object.defineProperty(o9, o5,
    {
      set:function(o14) { o15.o16("SETTER: " + o14); },
      get:function() { o15.o16("GETTER"); return "GETTERVALUE";}
  });
}
o10.o4 = "Define accessor property";

var o18 = function(o9, o5)
{
  Object.defineProperty(o9, o5, { value:"NONWRITABLE", writable:false } );
}
o18.o4 = "Define non-writable property";

var o21 = function(o9, o5)
{
  Object.defineProperty(o9, o5, { value:"WRITABLE", writable:true } );
}
o21.o4 = "Define writable property";

var o22 = [o8, o10, o18, o21];

var o23 = 1;

for (var o24 = 0; o24 < o22.length; o24++)
{
  var o26 = o22[o24];
  for (var o27 = 0; o27 < o7.length; o27++)
  {
    var o28 = o7[o27];
    var o29 = o28();
    o15.o16("Test " + o23++ + ": " + o28.o4 + ", " + o26.o4);
    var o30 = new o29();
    print(o30, o28.o5);
    o26(o29.prototype, o28.o5);
    o30 = new o29();
    print(o30, o28.o5);
  }
}

function print(o30, o5)
{
  o15.o16("a: " + o30.o1);
  o15.o16(o5 + ": " + o30[o5]);
  o15.o16("c: " + o30.o3);
}
