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

    [o17,    "Object literal duplicate set/get property"],
    [o18,    "Object literal set must have exactly one argument"],
];

// Utility functions
function o19(o20, o21, o22)
{
    if (!o22) {
        if (o21) {
            write("Success: " + o20);
        } else {
            write("Failed: " + o20);
        }
        return o21;
    } else if (o22 != o21) {
        write("Failed: Expected " + o20 + " = " + o22 + ", got " + o21);
        return false;
    }
  write("Success: Expected " + o20 + " = " + o22 + ", got " + o21);
  return true;
}

//Tests

write("ES 5 Object Literal grammar: parsing-only tests");

// Test: Object literal duplicate set\get property. See ECMAScript 11.1.5.
function o17(o23)
{
   // duplicate property
   // This causes error only in the case when strict code mode is enabled. Strict mode is not implemented yet.
   var o24 = true;
   try
   {
     eval("function f() { var o = { foo: 1, foo: 2 }; }");
   }
   catch (o26)
   {
       o24 = o19("duplicate data properties in object literal should not throw SyntaxError in non-strict mode", false);
   }

   // property and get
   try
   {
     eval("function f() { var o = { foo: 1, get foo() {return this.value;} }; }");
   }
   catch(o26)
   {
       o24 = o19("data property and get with same name in object literal should not throw SyntaxError", false);
   }

   // get and property
   try
   {
     eval("function f() { var o = { get foo() {return this.value;}, foo: 1 }; }");
   }
   catch(o26)
   {
       o24 = o19("get and data property with same name in object literal should not throw SyntaxError", false);
   }

   // property and set
   try
   {
     eval("function f() { var o = { foo: 1, set foo(arg) { this.value = arg;} }; }");
   }
   catch(o26)
   {
       o24 = o19("data property and set with same name in object literal should not throw SyntaxError", false);
   }

   // set and property
   try
   {
     eval("function f() { var o = { set foo(arg) { this.value = arg;}, foo: 1 }; }");
   }
   catch(o26)
   {
       o24 = o19("set and data property with same name in object literal should not throw SyntaxError", false);
   }

   try //duplicate get
   {
     eval("function f() { var o = {get foo(){return this.value;}, get foo(){return this.value*2;}}; }");
   }
   catch(o26)
   {
       o24 = o19("duplicate get in object literal should not throw SyntaxError", false);
   }

   try //duplicate set
   {
     eval("function f() { var o = {set foo(args){this.value = args*2;}, set foo(args){ this.value = args*args}}; }");
   }
   catch(o26)
   {
       o24 = o19("duplicate set in object literal should not throw SyntaxError", false);
   }

   try //duplicate get after get and set
   {
     eval("function f() { var o = { get foo(){ return this.value; }, set foo(arg){ this.value = arg; }, get foo(){ return this.value; } }; }");
   }
   catch(o26)
   {
       o24 = o19("duplicate get after get and set in object literal should not throw SyntaxError", false);
   }

   try //duplicate set after set and get
   {
     eval("function f() { var o = { set foo(arg){ this.value = arg; }, get foo(){ return this.value; }, set foo(arg1){ this.value = arg1; } } }");
   }
   catch(o26)
   {
       o24 = o19("duplicate set after get and set in object literal should not throw SyntaxError", false);
   }

   return o24;
}

// Object literal set must have exactly one argument
function o18()
{
   var o27;

   o27 = null;
   try // setter with no arguments
   {
     eval("function f() { var o = { set foo() { this.value = 0; } } }");
   }
   catch (o26)
   {
     o27 = o26;
   }
   if(!o19("set with no arguments in object literal throws SyntaxError", true, o27 instanceof o28)) return false;

   o27 = null;
   try // setter with two arguments
   {
     eval("function f() { var o = { set foo(arg1, arg2) { this.value = 0; } } }");
   }
   catch (o26)
   {
     o27 = o26;
   }
   if(!o19("set with two arguments in object literal throws SyntaxError", true, o27 instanceof o28)) return false;

   return true;
}

o13();

