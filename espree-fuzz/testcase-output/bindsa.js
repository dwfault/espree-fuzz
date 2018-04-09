//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0 + ""); }

function o3(o4, o5, o6)
{
    if (o6 != o5)
    {
        write("Failed: " + o4 + ". Exp:" + o6 + " Act:" + o5);
    }
    else
    {
        write("PASS: " + o4 + ":" + o6);
    }
}

function o7(o8, o9)
{
    return o8.hasOwnProperty(o9);
}

function o10(value)
{
    write(value);
}

function o11()
{
    o10("IncrVal:: " + this.o12 + " args.length : " + arguments.length);
    this.o12++;
    return this.o12 + " " + arguments.length;
}

// Global Variables
var o8 = 0;
var o13;


// Tests

//-----------------------------------------------------------------------------------------------------------
// Global Object tests

o13 = o11.bind();

o3("global object", o13(),      "101 0");
o3("global object", o13(10),    "102 1");
o3("global object", o13(10,20), "103 2");

o12 = 100;
o13 = o11.bind(this);

o3("global object", o13(),      "101 0");
o3("global object", o13(10),    "102 1");
o3("global object", o13(10,20), "103 2");

o12 = 100;
o13 = o11.bind(this, 50);

o3("global object", o13(),      "101 1");
o3("global object", o13(10),    "102 2");
o3("global object", o13(10,20), "103 3");

o12 = 100;
o13 = o11.bind(this, 50, 51);

o3("global object", o13(),      "101 2");
o3("global object", o13(10),    "102 3");
o3("global object", o13(10,20), "103 4");

//-----------------------------------------------------------------------------------------------------------


function o14()
{
    o10("Testing Bind to global object");

    o12 = 100;
    var o15 = o11.bind();

    o3("GlobalObject length", o15.length, 0);

    o3("global object", o15(),      "101 0");
    o3("global object", o15(10),    "102 1");
    o3("global object", o15(10,20), "103 2");
}

function o16()
{
    o10("Testing Bind to local object");

    var o17 = { o12 : 200 }
    var o18 = o11.bind(o17);

    o3("Local length", o18.length, 0);

    o3("Local object1", o18(),      "201 0");
    o3("Local object2", o18(10),    "202 1");
    o3("Local object3", o18(10,20), "203 2");

    o17 = { o12 : 200 }
    o18 = o11.bind(o17, 50);

    o3("local length", o18.length, 0);

    o3("local object", o18(),      "201 1");
    o3("local object", o18(10),    "202 2");
    o3("local object", o18(10,20), "203 3");

    o17 = { o12 : 200 }
    o18 = o11.bind(o17, 50, 51);

    o3("local length", o18.length, 0);
    o3("local object", o18(),      "201 2");
    o3("local object", o18(10),    "202 3");
    o3("local object", o18(10,20), "203 4");
}

function o19()
{
    o10("Testing Length");

    var o8 = new Object();

    function o20() { }
    function o15(o21) { }
    function o22(o21,o23) { }
    function o24(o21,o23,o25) { }
    function o26(o21,o23,o25,o27) { }
    function o28(o21,o23,o25,o27,o29) { }

    var o30 = o20.bind(); o3("1 Length0 ", o30.length, 0);
    var o31 = o15.bind(); o3("1 Length1 ", o31.length, 1);
    var o32 = o22.bind(); o3("1 Length2 ", o32.length, 2);
    var o33 = o24.bind(); o3("1 Length3 ", o33.length, 3);
    var o34 = o26.bind(); o3("1 Length4 ", o34.length, 4);
    var o35 = o28.bind(); o3("1 Length5 ", o35.length, 5);

    o30 = o20.bind(o8); o3("2 Length0 ", o30.length, 0);
    o31 = o15.bind(o8); o3("2 Length1 ", o31.length, 1);
    o32 = o22.bind(o8); o3("2 Length2 ", o32.length, 2);
    o33 = o24.bind(o8); o3("2 Length3 ", o33.length, 3);
    o34 = o26.bind(o8); o3("2 Length4 ", o34.length, 4);
    o35 = o28.bind(o8); o3("2 Length5 ", o35.length, 5);

    o30 = o20.bind(o8, 10); o3("3 Length0 ", o30.length, 0);
    o31 = o15.bind(o8, 10); o3("3 Length1 ", o31.length, 0);
    o32 = o22.bind(o8, 10); o3("3 Length2 ", o32.length, 1);
    o33 = o24.bind(o8, 10); o3("3 Length3 ", o33.length, 2);
    o34 = o26.bind(o8, 10); o3("3 Length4 ", o34.length, 3);
    o35 = o28.bind(o8, 10); o3("3 Length5 ", o35.length, 4);
}

function o36()
{
    o10("Testing Construction");

    function o37(o38,o39) { this.o40 = o38 + o39; return this;}

    var o8 = new Object();
    var o41 = o37.bind(o8, 10);
    var o42 = new o41(20);

    o3("Construction ", o42.o40, 30);
}

var o43 = 20;
var o44 = 30;

function o45()
{
    function add()
    {
        return this.o43 + this.o44;
    }

    o3("Add Test", add(), 50);

    var o46 = { o43: 5, o44: 6};
    var o47 = add.bind(o46);

    o3("f Test", o47(), 11);

    var o22 = new o47();

    o3("Proto Test", add.prototype.isPrototypeOf(o22), true);

    // Test toString inline cache behavior when a bound function has a non-typical prototype
    var o38 = decodeURIComponent.bind().toString;
    o3("Proto toString Test", Function.prototype.bind(), '[object Function]');
}

function o48()
{
    function o49(o43,o44)
    {
        this.o43 = o43;
        this.o44 = o44;
    }

    var o50 = o49.bind();
    var o51 = new o50(0, 1);
    o3("TestConstruction0 x", o51.o43, 0);
    o3("TestConstruction0 y", o51.o44, 1);

    var o52 = new Object();
    var o53 = o49.bind(o52);
    var o54 = new o53(100, 101);
    o3("TestConstruction1 x", o54.o43, 100);
    o3("TestConstruction1 y", o54.o44, 101);

    var o55 = new Object();
    var o56 = o49.bind(o55, 200);
    var o57 = new o56(201);
    o3("TestConstruction2 x", o57.o43, 200);
    o3("TestConstruction2 y", o57.o44, 201);

    var o58 = new Object();
    var o59 = o49.bind(o58, 300, 301);
    var o60 = new o59();
    o3("TestConstruction3 x", o60.o43, 300);
    o3("TestConstruction3 y", o60.o44, 301);
}

o14();
o16();
o19(); 
o36();
o45();
o48();
