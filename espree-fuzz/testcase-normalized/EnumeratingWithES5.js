//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = "d";
var o1 = "dvalue";

function o2()
{
  var o3 = Object.create(null);
  o3[o0] = o1;
  return o3;
}

function o6()
{
  var o3 = {};
  o3[o0] = o1;
  return o3;
}

function o7()
{
  var o3 = {};
  Object.defineProperty(o3, o0,
    {
      get : function() {},
      configurable : true,
      enumerable : true
    });

  delete o3[o0];
  o3[o0] = o1;
  return o3;
}

function o12(o13)
{
  var o14 = null;
  var value = 1;
  value = o16(o13, o14, value);

  o17(o13, o0, false);
  value = o16(o13, o14, value);

  o17(o13, o0, true);
  value = o16(o13, o14, value);

  o18.o19("Changing writability during enumeration...");
  o14 = function(o13, o20, value)
  {
    o17(o13, o0, false);
    return value;
  };
  value = o16(o13, o14, value);

  o14 = function(o13, o20, value)
  {
    o17(o13, o0, true);
    return value;
  };
  value = o16(o13, o14, value);

  o18.o19("Freezing object");
  Object.freeze(o13);
  o14 = null;
  value = o16(o13, o14, value);
}

function o22()
{
  var o13 = { o23:"aValue" };
  o24(o13, 'b',
    function() { return "GETTER FOR b"; },
    function(o25) { o18.o19("SETTER FOR b"); }
  );
  o13.o26 = "cValue";  // to be deleted
  o13.o27 = "dValue";

  // Throw in a non-enumerable property
  Object.defineProperty(o13, 'e',
    {
      value : "eValue",
      configurable : true,
      writable : true,
      enumerable : false
    });
  o24(o13, 'f',
    function() { return "GETTER FOR f"; },
    function(o25) { o18.o19("SETTER FOR f"); }
  );
  o13.o29 = "gValue";

  delete o13.o26;

  var value = 1;
  var o14 = null;
  value = o16(o13, o14, value);

  o24(o13, o0);  
  value = o16(o13, o14, value);

  o30(o13, o0, value++);
  value = o16(o13, o14, value);

  o18.o19("Defining accessor property during enumeration...");
  o14 = function(o13, o20, value)
  {
    if (o20 === o0) o24(o13, o0);
    return value;
  };

  value = o16(o13, o14, value);

  o18.o19("Defining data property during enumeration...");
  o14 = function(o13, o20, value)
  {
    if (o20 === o0) o30(o13, o0, value);
    return value + 1;
  };
  value = o16(o13, o14, value);
}

function o17(o13, o31, o25)
{
  o18.o19("Setting writability of " + o31 + " to " + o25);
  Object.defineProperty(o13, o31, { writable : o25 });
}

function o24(o13, o31, getter, setter)
{
  if (!getter) getter = function() { return "GETTER"; };
  if (!setter) setter = function(o25) { o18.o19("SETTER"); }
  o18.o19("Defining accessors for " + o31);
  Object.defineProperty(o13, o31,
    {
      get : getter,
      set : setter,
      configurable : true,
      enumerable : true
    });
}

function o30(o13, o31, o25)
{
  o18.o19("Defining data property " + o31 + " with value " + o25);
  Object.defineProperty(o13, o31,
    {
      value : o25,
      writable : true,
      configurable : true,
      enumerable : true
    });  
}

function o16(o13, o14, value)
{
  o18.o19("Testing for-in enumeration");
  for (var o20 in o13)
  {
    if (o14) value = o14(o13, o20, value);
    o35(o13, o20, value++);
  }

  o18.o19("Testing getOwnPropertyNames enumeration");
  var o36 = Object.getOwnPropertyNames(o13);
  for (var o20 = 0; o20 < o36.length; o20++)
  {
    if (o14) value = o14(o13, o20, value);
    o35(o13, o36[o20], value++);
  }

  return value;
}

function o35(o13, o20, value)
{
  o18.o19(o20 + ": " + o13[o20]);
  o18.o19("Setting value to " + value);
  o13[o20] = value;
  o18.o19(o20 + ": " + o13[o20]);
}

o18.o19("Test 1: Non-writable, simple type handler");
o12(o2());

o18.o19("");
o18.o19("Test 2: Non-writable, simple dictionary type handler");
o12(o6());

o18.o19("");
o18.o19("Test 3: Non-writable, dictionary type handler");
o12(o7());

o18.o19("");
o18.o19("Test 4: Accessors");
o22();
