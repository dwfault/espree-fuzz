//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
var o9 = [0, 5, 20];
var o10 = new Array();

function print(o13)
{
o14? o14.o15(o13) : o16.write(o13);
}


function o18(o13)
{
  print(o13.toString());
  for (var o20 in o13)
  {
  print(o20 + " == " + o13[o20]);
  };

}

function o21(o13)
{
  for (var o20 = 0; o20 < o13.length; o20++)
  {
    o13[o20] = o20;
  }
}

function o23(o24, o13)
{
var o25 = false;
try {
 o24(o13);
}
catch(o26)
{
  print("FAILED: get exception " + o26.o27);
  o25 = true;
}
}

function o28(o24, o13)
{
var o25 = false;
try {
 o24(o13);
}
catch(o26)
{
  print("SUCCEEDED: get expected exception " + o26.o27);
  o25 = true;
}
if (!o25)
{
  print("FAILED: didn't get exception");
}
}


function o29(o24, o10, o30, o31, o32, o33)
{
    var o34 = false;
    var o35;
    try {
      o35 = o24(o10, o30, o31);
      o18(o35);
      for (var index = 0; index < o35.length; index++)
      {
          if (o35[index] != o10[o30][index+o32])
          {
              print("failed to offset: offset is " + o32 + "index is " + index + "source is" + o10[o30][index+o32] + "dest is" + o35[index]);
          }
      }
    }
    catch (o26)
    {
      o34 = true;
      if (!o33)
      {
        print("ERROR! throw unexpected exception " + o26.o27);
      }
    }
    if (!o34 && o33)
    {
      print("ERROR! expected exception was not thrown");
    }
}

function o37(o10, o30, o31, o32, o33)
{
    var o34 = false;
    var o35;
    try {
      o35 = Object.getPrototypeOf(o10[o31]).subarray.call(o10[o30], o32);
      o18(o35);
      for (var index = 0; index < o35.length; index++)
      {
          if (o35[index] != o10[o30][index+o32])
          {
              print("failed to offset: offset is " + o32 + "index is " + index + "source is" + o10[o30][index+o32] + "dest is" + o35[index]);
          }
      }
    }
    catch (o26)
    {
      o34 = true;
      if (!o33)
      {
        print("ERROR! throw unexpected exception " + o26.o27);
      }
      else
      {
         print("SUCCEEDED in getting exception " + o26.o27);
      }
    }
    if (!o34 && o33)
    {
      print("ERROR! expected exception was not thrown");
    }
}


function o42(o10, o30, o31, o33)
{
    var o34 = false;
    var o35;
    var source = [1,3,5,7,9,11,13,15];
    print("verify set.call using prototypeOf " + o10[o31] + " instance " + o10[o30]);
    try {
      Object.getPrototypeOf(o10[o30]).set.call(o10[o31], source);
      for (var index = 0; index < source.length; index++)
      {
          if (o10[o31][index] != source[index])
          {
              print("failed to set: offset =0 " + "index is " + index + "source is" + source[index] + "dest is" + o10[o31][index]);
          }
      }
    }
    catch (o26)
    {
      o34 = true;
      if (!o33)
      {
        print("ERROR! throw unexpected exception " + o26.o27);
      }
      else
      {
         print("SUCCEEDED in getting exception " + o26.o27);
      }
    }
    if (!o34 && o33)
    {
      print("ERROR! expected exception was not thrown");
    }

    print("verify set using "+  o10[o31] + " using array");
    try {
      o10[o31].set(source, 1);
      for (var index = 0; index < source.length; index++)
      {
          if (source[index] != o10[o31][index+1])
          {
              print("ERROR! failed to set: offset is " + 1 + "index is " + index + "source is" + source[index] + "dest is" + o10[o31][index+1]);
          }
      }
    }
    catch (o26)
    {
        print("ERROR! throw unexpected exception " + o26.o27);
    }

    print("verify set using "+  o10[o31] + " instance " + o10[o30]);
    try {
      o10[o31].set(o10[o30]);
      for (var index = 0; index < o10[o30].length; index++)
      {
          if (o10[o30][index] != o10[o31][index])
          {
              print("failed to set: index is " + index + "source is" + o10[o30][index] + "dest is" + o10[o31][index]);
          }
      }
    }
    catch (o26)
    {
        print("ERROR! throw unexpected exception " + o26.o27);
    }

    print("verify set to different type");
      Object.getPrototypeOf(o10[o31]).set.call(o10[o31], o10[o30]);
      for (var index = 0; index < o10[o31].length; index++)
      {
          if (o10[o31][index] != o10[o30][index])
          {
              print("failed to offset: offset is " + o32 + "index is " + index + "source is" + o10[o30][index] + "dest is" + o30);
          }
      }
    o18(o10[o31]);
}

function o45(o10, o30, o31, o33)
{
    print("verify subarray.call using prototypeOf " + o10[o31] + " instance " + o10[o30]);
    o37(o10, o30, o31, 1, o33);

    o42(o10, o30, o31, o33);

}

for (var o20 = 0; o20 < o0.length; o20++)
{
print(o0[o20]);
}

for (var o20 = 0; o20 < o0.length; o20++)
{
o10[o20] = new o0[o20](10);
o21(o10[o20]);
}

for (var o20 = 0; o20 < o0.length; o20++)
{
  for (var o46 = 0; o46 < o0.length; o46++)
  {
    if (o20 != o46)
    {
      o45(o10, o20, o46, true);
    }
    else
    {
      o45(o10, o20, o46, false);
    }

  }
}

print("verify Object.defineProperty");
for (var o20 = 0; o20 < o0.length; o20++)
{
o23(function(o13){Object.defineProperty(o13, "1", {value: 1})}, o10[o20]);
o28(function(o13){Object.defineProperty(o13, "1", {value: 1, writable: false})}, o10[o20]);
o28(function(o13){Object.defineProperty(o13, "1", {value: 1, configurable: true})}, o10[o20]);
o28(function(o13){Object.defineProperty(o13, "1", {get: function(){throw "error"}})}, o10[o20]);
o23(function(o13){Object.defineProperty(o13, "hello", {value: 1})}, o10[o20]);
o23(function(o13) { o13.o52 = 'hello';}, o10[o20]);

}

print("Verify call to built-in property");
Object.prototype.byteOffset = function(){ print('what??'); }
function o55(o56) { o56.byteOffset(); }
for (o20 = 0; o20 < o0.length; o20++)
{
    // Call should access built-in byteOffset and throw trying to call it, not call Object.prototype property
    o28(o55, o10[o20]);
}
