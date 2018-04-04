//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1); }

function o4() { write("GETTER"); return "GetterValue"; }

function o5(o6)
{
  try
  {
    o6();
  }
  catch (o7)
  {
    write(o7.name);
  }
}

// Object.getOwnPropertyDescriptor
write("Test 1");
o5(function() { Object.getOwnPropertyDescriptor(); });

write("Test 2");
o5(function() { write(Object.getOwnPropertyDescriptor({})); });

write("Test 3");
o5(function() { write(Object.getOwnPropertyDescriptor({'undefined':4}).value); });

// Object.defineProperty
write("Test 4");
o5(function() { Object.defineProperty(); });

write("Test 5");
o5(function() { Object.defineProperty({}); });

write("Test 6");
o5(function() { Object.defineProperty({}, 'foo'); });

write("Test 7");
o5(function() { Object.defineProperty({},
                                            { toString : function() { throw {name:'MyError'}; } });
                    });
write("Test 8");
o5(function() { var o14 = {};
                      Object.defineProperty(o14, undefined, { value:4, writable:true });
                      write(o14['undefined']);
                    });

// Object.defineProperties
write("Test 9");
o5(function() { Object.defineProperties(); });

write("Test 10");
o5(function() { Object.defineProperties({}); });

// Array.prototype methods
var o14 = {};
Object.defineProperty(o14, "length", { get:o4, configurable:true });

write("Test 11");
o5(function() { Array.prototype.every.call(o14); });

write("Test 12");
o5(function() { Array.prototype.some.call(o14); });

write("Test 13");
o5(function() { Array.prototype.forEach.call(o14); });

write("Test 14");
o5(function() { Array.prototype.map.call(o14); });

write("Test 15");
o5(function() { Array.prototype.filter.call(o14); });

write("Test 16");
o5(function() { Array.prototype.reduce.call(o14); });

write("Test 17");
o5(function() { Array.prototype.reduceRight.call(o14); });
