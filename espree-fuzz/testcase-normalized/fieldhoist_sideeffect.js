//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {};

function o1() {};
o1.prototype.valueOf = function() { return o0.o4++; }

var o5 = new o1();

var o6 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 = o0.o4 + o5;
    }
    return o7;
}

o6.o9 = 4;

var o10 = function() {
    for (var o8 = 0 ; o8 < 1 ; o8++){
        var o11={ o4:1.23, o12:1 }
        for (var o13 = 0 ; o13 < 1 ; o13++){
            o11.o4 += o11.o12
        }
    }
    return o11.o4;
}
o10.o9 = 2.23;

var o14 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 = o0.o4 - o5;
    }
    return o7;
}
o14.o9 = 0;

var o15 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 = o0.o4 * o5;
    }
    return o7;
}
o15.o9 = 4;

var o16 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 = o0.o4 / o5;
    }
    return o7;
}
o16.o9 = 1;

var o17 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 = o0.o4 % o5;
    }
    return o7;
}
o17.o9 = 0;

var o18 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 = -o5;
        o7 += o0.o4;
    }
    return o7;
}
o18.o9 = 1;

var o19 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 += o0.o4 & o5;
    }
    return o7;
}
o19.o9 = 3;

var o20 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 += o0.o4 | o5;
    }
    return o7;
}
o20.o9 = 3;

var o21 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 += o0.o4 ^ o5;
    }
    return o7;
}
o21.o9 = 0;

var o22 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 += o0.o4;
        o7 += ~o5;
    }
    return o7;
}
o22.o9 = -2;

var o23 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 += o0.o4 << o5;
    }
    return o7;
}
o23.o9 = 10;

var o24 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 += (o0.o4 << 10) >> o5;
    }
    return o7;
}
o24.o9 = 1024;

var o25 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        o7 += (-o0.o4 << 10) >>> o5;
    }
    return o7;
}
o25.o9 = 3221224448;

var o26 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        if (o0.o4 < o5)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o26.o9 = -5;

var o27 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        if (o0.o4 <= o5)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o27.o9 = 5;

var o28 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        if (o0.o4 > o5)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o28.o9 = -5;

var o29 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        if (o0.o4 >= o5)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o29.o9 = 5;

var o30 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        if (o0.o4 == o5)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o30.o9 = 5;

var o31 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        if (o0.o4 != o5)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o31.o9 = -5;

var o32 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        var o33 = o0.o4 < o5;
        if (o33)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o32.o9 = -5;

var o34 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        var o33 = o0.o4 <= o5;
        if (o33)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o34.o9 = 5;

var o35 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        var o33 = o0.o4 > o5;
        if (o33)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o35.o9 = -5;

var o36 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        var o33 = o0.o4 >= o5;
        if (o33)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o36.o9 = 5;

var o37 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        var o33 = (o0.o4 == o5);
        if (o33)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o37.o9 = 5;

var o38 = function(o0, o5)
{
    var o7 = 0;
    for (var o8 = 0; o8 < 2; o8++)
    {
        var o33 = (o0.o4 != o5);
        if (o33)
        {
            o7 += o0.o4;
        }
        else
        {
            o7 -= o0.o4;
        }
    }
    return o7;
}
o38.o9 = -5;

Object.defineProperty(this, "getme", {get: function() { o42.o43('no!')}});
(function() {
    // Try to hoist a property with a getter to verify that we can safely avoid executing the getter in the header.
    for (var o8 = 0; o8 < 10; o8++) {
        if (this.undefined) {
            var o45 = o46;
            o45.o4;
        }
    }
})();

for (var test in this)
{
    if (typeof this[test]  == "function" && test != "Ctor" && this[test].o9 != undefined)
    {
        o0.o4 = 1;
        var o48 = this[test](o0,o5);
        if (o48 == this[test].o9)
        {
            o42.o43("PASS: " + test);
        }
        else
        {
            o42.o43("FAIL: " + test + ": expected " + this[test].o9 + ", got " + o48);
        }
    }
}
