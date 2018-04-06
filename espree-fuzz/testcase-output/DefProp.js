//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = [];
    Object.defineProperty(o1, 0, { get: function() { o5.o6("array[0]"); } });

    var o7 = 0;
    for (var o8 = 0; o8 < 3; o8++)
    {
        o7 += o1[0];

    }
}

function o9()
{
    var o10 = {};
    Object.defineProperty(o10, "sum", { get: function() { o5.o6("sum"); } });

    var o7 = 0;
    for (var o8 = 0; o8 < 3; o8++)
    {
        o7 += o10.o7;
    }
}

function o11()
{
    var o1 = [];
    Object.defineProperties(o1,
                            {
                                0: { get: function() { o5.o6("array[0]"); } },
                                1: { get: function() { o5.o6("array[1]"); } }
                            });

    var o7 = 0;
    for (var o8 = 0; o8 < 3; o8++)
    {
        o7 += o1[0];
    }
}

function o13()
{
    var o10 = {};
    Object.defineProperties(o10, 
                            {
                                o14: { get: function() { o5.o6("sum1"); } },
                                o15: { get: function() { o5.o6("sum2"); } }
                            });

    var o7 = 0;
    for (var o8 = 0; o8 < 3; o8++)
    {
        o7 += o10.o14;
    }
}

function o16()
{
  function o17() {
    o5.o6("Type: " + (typeof this));
    o5.o6("  Is Object: " + (this instanceof Object));
    o5.o6("  Is Number: " + (this instanceof Number));
  }

  Object.defineProperty(
    Number.prototype,
    "foo",
    {
        set: o17
    });

  Object.defineProperty(
    Number.prototype,
    "42",
    {
        set: o17
    });

  var o21 = function(o22) {
    o5.o6("** Testing property 'foo'");
    o22.o23 = {};
    o5.o6("");

    o5.o6("** Testing property 42");
    o22[42] = {};
    o5.o6("");
  }

  var o8 = 3;
  o21(o8);

  var o24 = 3.14;
  o21(o24);
}

function o25()
{
    o0();
    o9();
    o11();
    o13();
    o16();
}

o25();
