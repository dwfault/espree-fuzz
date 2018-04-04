//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
 o2.o3(o1);
}

write("TestCase1");
write(Object.preventExtensions.length);
write(Object.isExtensible({}));

write("TestCase2 - preventExtensions & add a property");
var o8 = {o9:20, o10:30};
Object.preventExtensions(o8);
o11(function() { o8.o12 = 50; });
write(Object.getOwnPropertyNames(o8));
write(Object.isExtensible(o8));

write("TestCase3 - preventExtensions & delete a property");
var o8 = {o9:20, o10:30};
Object.preventExtensions(o8);
o11(function() { delete o8.o9; });
write(o8.o9);
write(Object.isExtensible(o8));

write("TestCase4 - preventExtensions & modify a property");
var o8 = {o9:20, o10:30};
Object.preventExtensions(o8);
o11(function() { o8.o9 = 40; });
o11(function() { o8.o10 = 60; });
write(Object.getOwnPropertyNames(o8));
write(Object.isExtensible(o8));
write(o8.o9);

write("TestCase5 - preventExtension on global object & declare a var");
Object.preventExtensions(this);
var o14 = 4;  // No exception here, since var decl is hoisted
try
{
  eval("var newVar2");  // Should throw TypeError
}
catch (o16)
{
  write("Exception: " + o16.name);
}

write("TestCase6 - preventExtensions, delete property and set remaining properties to non configurable/writable - SimpleDictionaryTypeHandler");
var o8 = {o9:20, o10:30};
Object.preventExtensions(o8);
delete o8.o9;
Object.defineProperty(o8, "y", {configurable: false});
write(Object.isSealed(o8));
Object.defineProperty(o8, "y", {writable: false});
write(Object.isFrozen(o8));

write("TestCase7 - preventExtensions, delete property and set remaining properties to non configurable/writable - DictionaryTypeHandler");
var o8 = {get o9() {return 0;}, o10:30};
Object.preventExtensions(o8);
delete o8.o9;
Object.defineProperty(o8, "y", {configurable: false});
write(Object.isSealed(o8));
Object.defineProperty(o8, "y", {writable: false});
write(Object.isFrozen(o8));

function o11(o23)
{
  try
  {
    o23();
  }
  catch (o16)
  {
    write("Exception: " + o16.name);
  }
}

Object.preventExtensions(this);
this[10]=10; //GlobalObject set after preventExtensions
