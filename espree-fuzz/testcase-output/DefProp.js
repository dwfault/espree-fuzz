//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = [];
    Object.defineProperty(o1, 0, { get: function() { o2.o3("array[0]"); } });

    var o4 = 0;
    for (var o5 = 0; o5 < 3; o5++)
    {
        o4 += o1[0];

    }
}

function o6()
{
    var o7 = {};
    Object.defineProperty(o7, "sum", { get: function() { o2.o3("sum"); } });

    var o4 = 0;
    for (var o5 = 0; o5 < 3; o5++)
    {
        o4 += o7.o4;
    }
}

function o8()
{
    var o1 = [];
    Object.defineProperties(o1,
                            {
                                0: { get: function() { o2.o3("array[0]"); } },
                                1: { get: function() { o2.o3("array[1]"); } }
                            });

    var o4 = 0;
    for (var o5 = 0; o5 < 3; o5++)
    {
        o4 += o1[0];
    }
}

function o9()
{
    var o7 = {};
    Object.defineProperties(o7, 
                            {
                                o10: { get: function() { o2.o3("sum1"); } },
                                o11: { get: function() { o2.o3("sum2"); } }
                            });

    var o4 = 0;
    for (var o5 = 0; o5 < 3; o5++)
    {
        o4 += o7.o10;
    }
}

function o12()
{
  function o13() {
    o2.o3("Type: " + (typeof this));
    o2.o3("  Is Object: " + (this instanceof Object));
    o2.o3("  Is Number: " + (this instanceof Number));
  }

  Object.defineProperty(
    Number.prototype,
    "foo",
    {
        set: o13
    });

  Object.defineProperty(
    Number.prototype,
    "42",
    {
        set: o13
    });

  var o14 = function(o15) {
    o2.o3("** Testing property 'foo'");
    o15.o16 = {};
    o2.o3("");

    o2.o3("** Testing property 42");
    o15[42] = {};
    o2.o3("");
  }

  var o5 = 3;
  o14(o5);

  var o17 = 3.14;
  o14(o17);
}

function o18()
{
    o0();
    o6();
    o8();
    o9();
    o12();
}

o18();
