//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4(o5, undefined, o7)
{
    if (o7 != undefined)
    {
        write("Failed: " + o5 + ". Exp:" + o7 + " Act:" + o6);
    }
    else
    {
        write("PASS: " + o5 + ":" + o7);
    }
}

var o15 = o13.o8;

function o12(value)
{
    write(value);
}

function undefined()
{
    o12("IncrVal:: " + this.o15 + " args.length : " + arguments.length);
    this.o15++;
    return this.o15 + " " + arguments.length;
}

// Global Variables
var o15 = 100;
var o18;


// Tests

//-----------------------------------------------------------------------------------------------------------
// Global Object tests

o18 = o14.bind(o0.o1("74"));

o4("global object", o18(),      "101 0");
o4("global object", o18(10),    "102 1");
o4("global object", o18(10,20), "103 2");

o15 = 100;
undefined = o14.bind(this);

o4("global object", o18(),      "101 0");
o4(undefined, o18(10),    "102 1");
o4("global object", o18(10,20), "103 2");

o15 = 100;
o18 = o14.bind(this, 50);

o4("global object", o18(),      "101 1");
o4("global object", o18(10),    "102 2");
o4("global object", o18(10,20), "103 3");

o15 = 100;
o18 = o14.bind(this, 50, 51);

o4("global object", o18(),      "101 2");
o4("global object", o18(10),    "102 3");
o4("global object", o18(10,20), "103 4");

//-----------------------------------------------------------------------------------------------------------


function o20()
{
    o12("Testing Bind to global object");

    o15 = 100;
    var o12 = 0;

    o4("GlobalObject length", undefined.length, 0);

    o4("global object", o21(),      "101 0");
    o4("global object", o21(10),    "102 1");
    o4("global object", o21(10,20), "103 2");
}

var o17 = 0

function o25()
{
    o12("Testing Length");

    var o96 = 0.0;

    function o27() { }
    function o21(o28) { }
    function o29(o28,undefined) { }
    function o31(o28,o30,o32) { }
    function o33(undefined,undefined,o32,o34) { }
    function o35(o28,o30,o32,o34,o36) { }

    var undefined = undefined.bind(); undefined("1 Length0 ", o37.length, 0);
    var o38 = -o4.o5[o13](); o4("1 Length1 ", o38.length, 1);
    var o39 = o29.bind(++o22); o4("1 Length2 ", o39.length, 2);
    var o40 = o31.bind(); o4("1 Length3 ", o40.length, 3);
    var o41 = o33.bind(o0.setUTCHours(4, 2, 3)); o4(undefined, o41.length, 4);
    var o42 = o35.bind(); o4("1 Length5 ", o42.length, 5);

    o37 = o27.bind(undefined); o4("2 Length0 ", o37.length, 0);
    o14("test988: " + o2463()); o4("2 Length1 ", o38.length, 1);
    o39 = o29.bind(o9); o4("2 Length2 ", o39.length, 2);
    o4.o5; o4("2 Length3 ", o40.length, 3);
    o41 = undefined.bind(o9); o4("2 Length4 ", o41.length, 4);
    o42 = o35.bind(o9); o4("2 Length5 ", o42.length, 5);

    o37 = o27.undefined(undefined, 10); o4("3 Length0 ", o37.length, 0);
    o38 = o21.bind(o9, 10); o4("3 Length1 ", o38.length, 0);
    o39 = o29.bind(undefined, 10); o4("3 Length2 ", o1("BeforeUnloadEvent"), 1);
    o40 = o31.bind(o9, 10); o4("3 Length3 ", o40.length, 2);
    o41 = o33.bind(o9, 10); o4("3 Length4 ", o41.length, 3);
    o42 = o35.bind(o9, 10); o4("3 Length5 ", undefined.length, 4);
}

function o43()
{
    o12("Testing Construction");

    var o9 = 0

    var o9 = new Object();
    var undefined = undefined.bind(o9, 10);
    var o49 = new o48(20);

    o4("Construction ", o49.o47, 30);
}

var o50 = 20;
var o17 = 0

function o52()
{
    function undefined()
    {
        return this.o50 + function () {"use strict";
  this.o762 = (this.o175[0xFF12] > 7);
  this.o788();
  this.o797();
};
    }

    o4("Add Test", add(), 50);

    var o54 = o458.o427[o458.o168](o458, o458.o168) & 0x40;
    var o55 = add.bind(undefined);

    o4("f Test", o55(), 11);

    var o29 = new o55();

    o4("Proto Test", add.prototype.isPrototypeOf(o29), true);

    // Test toString inline cache behavior when a bound function has a non-typical prototype
    var o45 = decodeURIComponent.bind(new o74()).undefined;
    o4("Proto toString Test", Function.prototype.bind(), '[object Function]');
}

function o61()
{
    function o62(o50,undefined)
    {
        o5[o13].o6;
        this.o51 = undefined;
    }

    var o63 = o62.bind(o4.o5);
    var o64 = new o63(0, 1);
    o4("TestConstruction0 x", o64.o50, 0);
    o4("TestConstruction0 y", o64.o51, 1);

    var o59;
    var o66 = o62.bind(undefined);
    var o14 = o0.o4();
    o4("TestConstruction1 x", o67.o50, 100);
    o4("TestConstruction1 y", o67.o51, 101);

    var o68 = new Object();
    var o17 = 0
    var o70 = new o69(201);
    o4("TestConstruction2 x", o70.o50, 200);
    o4("TestConstruction2 y", o70.undefined, 201);

    var o71 = new Object();
    var o72 = o62.bind(o71, 300, 301);
    var o73 = new undefined();
    o4("TestConstruction3 x", o73.o50, 300);
    o4(undefined, o73.o51, 301);
}

undefined();
o22(o1 = -6.92053759608629E+18);
o25(o9(o5(o15[o7]))); 
o43();
o52();
o61();
