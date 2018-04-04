//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(value)
{
    o2.o3(value);
}

function o4(o5, o6)
{
  var o7 = o5[0];
  var o8 = o5[1];

  o8 = " (test " + o6 + "): " + o8;

  write(o8);
  try
  {
    var o9 = o7();
    if (o9 == true)
    {
    write("PASS");
    }

  }
  catch (o10)
  {
    var o11 = "FAILED" + o8;
    write(o11 + " :: " + o10.o12);
  }
}

function o13(){
  for(var o14 = 0; o14 < o15.length; ++o14){
    o4(o15[o14], o14 + 1);
  }
}

var o15 = [

    [o17,    "Object literal get set property"],
    [o18,    "Object literal only get or set property"],
    [o19,    "Object literal multiple set\get property"],
    [o20,    "Object literal parse error check"],
    [o21,    "Object literal get set function toString"],
];

// Utility functions
function o22(o23, o24, o25)
{
  if (o25 != o24)
  {
    write("Failed: Expected " + o23 + " = " + o25 + ", got " + o24);
    return false;
  }
  write("Success: Expected " + o23 + " = " + o25 + ", got " + o24);
  return true;
}

//Tests

write("ES 5 Object Literal grammer");

function o17(o26)
{
   var o27 = "In getter";
   var o28 = "In setter";
   var o29 = "Modified by setter";
   var o30 = {get o31(){ return o27;},set o31(o32){return o28 = o29}};
   if(!o22("o.foo getter",o30.o31,o27)) return false;
   o30.o31=10;
   if(!o22("o.foo setter",o28,o29)) return false;
   return true;
}

function o18(o26)
{
   var o28 = "In setter";
   var o29 = "Modified by setter";

   var o30 = {get o31(){ return 20}};
   if(!o22("o.foo getter",o30.o31,20)) return false;

   var o33 = {set o31(o26){ o28=o29;}};
   o33.o31 = 10;
   if(!o22("b.foo",o28,o29)) return false;

   return true;
}

function o19(o26)
{
   var o30 = {get o31(){return this.value;}, set o31(o26){this.value = o26*2;}, get o34(){return this.value*2;}, set o34(o26){ this.value = o26*o26}};

   o30.o31 = 2;
   if(!o22("o.foo get after set",o30.o31,4)) return false;
   o30.o31 = 3;
   if(!o22("o.foo get after set",o30.o31,6)) return false;

   o30.o34 = 2;
   if(!o22("o.bar get after set",o30.o34,8)) return false;
   o30.o34 = 3;
   if(!o22("o.bar get after set",o30.o34,18)) return false;

   return true;
}

function o20()
{
  try
  {
     eval("var a = {get test(args){}};");
     return false;
  }
  catch(o36)
  {
    if(!o22("get property accessor in object literal must not accept any args", true, o36 instanceof o37)) return false;
  }

  try
  {
     eval("var a = {set test(args1,args2){}};");
     return false;
  }
  catch(o36)
  {
    if(!o22("set property accessor in object literal must accept only one args", true, o36 instanceof o37)) return false;
  }

  try
  {
     eval("var a = {set test bar(args1){}};");
     return false;
  }
  catch(o36)
  {
    if(!o22("Throw parse error in multiple property name" , true, o36 instanceof o37)) return false;
  }

  try
  {
      eval("var a = {'set' bar(x) {}};");
      return false;
  }
  catch(o36)
  {
      if(!o22("invalid syntax if set keyword is a string (then it is just a normal property name)", true, o36 instanceof o37)) return false;
  }

  try
  {
      eval("var a = {'get' bar() {}};");
      return false;
  }
  catch(o36)
  {
      if(!o22("invalid syntax if get keyword is a string (then it is just a normal property name)", true, o36 instanceof o37)) return false;
  }

  return true;
}

function o21()
{
    var o38 =
    {
        get o31() { return o39; },
        set o31(value) { o39 = value; }
    };
    var o40 = Object.getOwnPropertyDescriptor(o38, "foo");

    o2.o3("" + o40.get);
    o2.o3("" + o40.set);

    return true;
}

// Note: test for Object literal duplicate set\get property is in the file ObjLitGetSetDuplicate.js.

o13();

