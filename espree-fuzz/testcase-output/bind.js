//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4(o5, o6, o7)
{
    if (o7 != o6)
    {
        write("Failed: " + o5 + ". Exp:" + o7 + " Act:" + o6);
    }
    else
    {
        write("PASS: " + o5 + ":" + o7);
    }
}

function o8(o9, o10)
{
    return o9.hasOwnProperty(o10);
}

function o12(value)
{
    write(value);
}

function o14()
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

o18 = o14.bind();

o4("global object", o18(),      "101 0");
o4("global object", o18(10),    "102 1");
o4("global object", o18(10,20), "103 2");

o15 = 100;
o18 = o14.bind(this);

o4("global object", o18(),      "101 0");
o4("global object", o18(10),    "102 1");
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
    var o21 = o14.bind();

    o4("GlobalObject length", o21.length, 0);

    o4("global object", o21(),      "101 0");
    o4("global object", o21(10),    "102 1");
    o4("global object", o21(10,20), "103 2");
}

function o22()
{
    o12("Testing Bind to local object");

    var o23 = { o15 : 200 }
    var o24 = o14.bind(o23);

    o4("Local length", o24.length, 0);

    o4("Local object1", o24(),      "201 0");
    o4("Local object2", o24(10),    "202 1");
    o4("Local object3", o24(10,20), "203 2");

    o23 = { o15 : 200 }
    o24 = o14.bind(o23, 50);

    o4("local length", o24.length, 0);

    o4("local object", o24(),      "201 1");
    o4("local object", o24(10),    "202 2");
    o4("local object", o24(10,20), "203 3");

    o23 = { o15 : 200 }
    o24 = o14.bind(o23, 50, 51);

    o4("local length", o24.length, 0);
    o4("local object", o24(),      "201 2");
    o4("local object", o24(10),    "202 3");
    o4("local object", o24(10,20), "203 4");
}

function o25()
{
    o12("Testing Length");

    var o9 = new Object();

    function o27() { }
    function o21(o28) { }
    function o29(o28,o30) { }
    function o31(o28,o30,o32) { }
    function o33(o28,o30,o32,o34) { }
    function o35(o28,o30,o32,o34,o36) { }

    var o37 = o27.bind(); o4("1 Length0 ", o37.length, 0);
    var o38 = o21.bind(); o4("1 Length1 ", o38.length, 1);
    var o39 = o29.bind(); o4("1 Length2 ", o39.length, 2);
    var o40 = o31.bind(); o4("1 Length3 ", o40.length, 3);
    var o41 = o33.bind(); o4("1 Length4 ", o41.length, 4);
    var o42 = o35.bind(); o4("1 Length5 ", o42.length, 5);

    o37 = o27.bind(o9); o4("2 Length0 ", o37.length, 0);
    o38 = o21.bind(o9); o4("2 Length1 ", o38.length, 1);
    o39 = o29.bind(o9); o4("2 Length2 ", o39.length, 2);
    o40 = o31.bind(o9); o4("2 Length3 ", o40.length, 3);
    o41 = o33.bind(o9); o4("2 Length4 ", o41.length, 4);
    o42 = o35.bind(o9); o4("2 Length5 ", o42.length, 5);

    o37 = o27.bind(o9, 10); o4("3 Length0 ", o37.length, 0);
    o38 = o21.bind(o9, 10); o4("3 Length1 ", o38.length, 0);
    o39 = o29.bind(o9, 10); o4("3 Length2 ", o39.length, 1);
    o40 = o31.bind(o9, 10); o4("3 Length3 ", o40.length, 2);
    o41 = o33.bind(o9, 10); o4("3 Length4 ", o41.length, 3);
    o42 = o35.bind(o9, 10); o4("3 Length5 ", o42.length, 4);
}

function o43()
{
    o12("Testing Construction");

    function o44(o45,o46) { this.o47 = o45 + o46; return this;}

    var o9 = new Object();
    var o48 = o44.bind(o9, 10);
    var o49 = new o48(20);

    o4("Construction ", o49.o47, 30);
}

var o50 = 20;
var o51 = 30;

function o52()
{
    function add()
    {
        return this.o50 + this.o51;
    }

    o4("Add Test", add(), 50);

    var o54 = { o50: 5, o51: 6};
    var o55 = add.bind(o54);

    o4("f Test", o55(), 11);

    var o29 = new o55();

    o4("Proto Test", add.prototype.isPrototypeOf(o29), true);

    // Test toString inline cache behavior when a bound function has a non-typical prototype
    var o45 = decodeURIComponent.bind().toString;
    o4("Proto toString Test", Function.prototype.bind(), '[object Function]');
}

function o61()
{
    function o62(o50,o51)
    {
        this.o50 = o50;
        this.o51 = o51;
    }

    var o63 = o62.bind();
    var o64 = new o63(0, 1);
    o4("TestConstruction0 x", o64.o50, 0);
    o4("TestConstruction0 y", o64.o51, 1);

    var o65 = new Object();
    var o66 = o62.bind(o65);
    var o67 = new o66(100, 101);
    o4("TestConstruction1 x", o67.o50, 100);
    o4("TestConstruction1 y", o67.o51, 101);

    var o68 = new Object();
    var o69 = o62.bind(o68, 200);
    var o70 = new o69(201);
    o4("TestConstruction2 x", o70.o50, 200);
    o4("TestConstruction2 y", o70.o51, 201);

    var o71 = new Object();
    var o72 = o62.bind(o71, 300, 301);
    var o73 = new o72();
    o4("TestConstruction3 x", o73.o50, 300);
    o4("TestConstruction3 y", o73.o51, 301);
}

o20();
o22();
o25(); 
o43();
o52();
o61();
