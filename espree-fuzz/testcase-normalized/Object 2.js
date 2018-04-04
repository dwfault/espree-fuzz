//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(value) {
  o2.o3(value);
}

function o4(o5, o6) {
  var o7 = o5[0];
  var o8 = o5[1];

  o8 = " (test " + o6 + "): " + o8;
    
  write(o8);
  try {
    var o9 = o7();
    if (o9 == true) {
        write("PASS");
    }
  } catch (o10) {
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
    [o17, "Object getOwnPropertyDescriptor throws TypeError when the first parameter is either null or undefined"],
    [o18, "Freezing an object with deleted properties"],
    [o19, "Object getOwnPropertyDescriptor works fine when the first parameter is a built-in type except null or undefined"],
];

// Utility functions
function o20(o21, o22, o23) {
  if (o22 != o23) {
    write("Failed: Expected " + o21 + " = " + o22 + ", got " + o23);
    return false;
  }
  write("Success: Expected " + o21 + " = " + o22 + ", got " + o23);
  return true;
}

//Tests

// Object getOwnPropertyDescriptor throws TypeError when parameter is not Object. ES5 spec 15.2.3.3.
function o17() {
   var o24;

   o24 = null;
   try    {
     eval("Object.getOwnPropertyDescriptor(null, 'foo', {})");
   } catch (o26) {
     o24 = o26;
   }
   if(!o20("Object getOwnPropertyDescriptor throws TypeError when 1st parameter is null", true, o24 instanceof o27)) return false;

   o24 = null;
   try {
     eval("Object.getOwnPropertyDescriptor(undefined, 'foo', {})");
   } catch (o26) {
     o24 = o26;
   }
   if(!o20("Object getOwnPropertyDescriptor throws TypeError when 1st parameter is undefined", true, o24 instanceof o27)) return false;

   return true;
}

// BLUE:227417: Freezing an object with deleted properties
function o18()
{
    var o28 = {};
    o28.o29 = 1;
    delete o28.o29;
    Object.freeze(o28);
    return true;
}

function o19()
{
    if (!o20("Object getOwnPropertyDescriptor does not throw when 1st parameter is boolean", undefined, Object.getOwnPropertyDescriptor(true, 'foo'))) return false;
    if (!o20("Object getOwnPropertyDescriptor does not throw when 1st parameter is number", undefined, Object.getOwnPropertyDescriptor(123, 'foo'))) return false;
    if (!o20("Object getOwnPropertyDescriptor works fine when 1st parameter is string", 3, Object.getOwnPropertyDescriptor('foo', 'length').value)) return false;

    return true;
}

o13();
