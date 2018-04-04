//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4 = 0;
var o5;

function o6(o7, o8, o9) {
    write(o7 + " : " + o8);
    if (o8 !== o9) {
        write("FAILED : " + o7 + " exp: " + o9 + " act : " + o8);
        o4++;
    } else {
        write("PASSED : " + o7 + " exp: " + o9 + " act : " + o8);
    }
}

// --------------------------------------------------------------------------------------------------
function o10(o11, o12) {
    write(arguments.hasOwnProperty("0"));
    write(arguments.hasOwnProperty("length"));
    return arguments[0] + arguments[1];
}

o5 = o10(10, 20);
o6("Test1", o5, 30);

// --------------------------------------------------------------------------------------------------
function o15(o11, o12) {
    o11 = 100;
    o6("Test2 arguments[0]", arguments[0], 100);

    o12 = 200;
    o6("Test2 arguments[1]", arguments[1], 200);

    arguments[0] = 300;
    o6("Test2 a", o11, 300);

    arguments[1] = 400;
    o6("Test2 b", o12, 400);

    return o11 + o12 + arguments[0] + arguments[1];
}

o5 = o15(10, 20);
o6("Test2", o5, 1400);

// --------------------------------------------------------------------------------------------------
function o16(o11, o12) {
    var arguments = new Object();

    if (arguments[0] == o11)
        o6("Test3 a", o11);

    if (arguments[1] == o12)
        o6("Test3 b", o12);

    arguments[0] = o11;
    arguments[1] = o12;

    o11 = o11 + 1;
    o12 = o12 + 1;

    if (arguments[0] == o11)
        o6("Test3 a1", o11);

    if (arguments[1] == o12)
        o6("Test3 b1", o12);

    return 0;
}

o5 = o16(10, 20);
o6("Test3", o5, 0);

// --------------------------------------------------------------------------------------------------
function o18(o11, o12, arguments) {
    if (arguments[0] == o11)
        o6("Test4 a", o11);

    if (arguments[1] == o12)
        o6("Test4 b", o12);

    arguments[0] = o11;
    arguments[1] = o12;

    o11 = o11 + 1;
    o12 = o12 + 1;

    if (arguments[0] == o11)
        o6("Test4 a1", o11);

    if (arguments[1] == o12)
        o6("Test4 b1", o12);

    return 0;
}

o5 = o18(10, 20, new Object());
o6("Test4", o5, 0);

// --------------------------------------------------------------------------------------------------
function o19(o11, o12) {
    var o20 = 0;

    arguments[0] = 100;
    arguments[1] = 200;

    for (var o21 in arguments) {
        o20++;
    }

    return o20;
}

o5 = o19(10);
o6("Test5 1", o5, 2);

o5 = o19(10, 20);
o6("Test5 2", o5, 2);

o5 = o19(10, 20, 30);
o6("Test5 3", o5, 3);

// --------------------------------------------------------------------------------------------------
function o22(o11, o12) {
    var o20 = 0;

    for (var o21 in arguments) {
        o20 = o20 + 1;
    }

    return o20;
}

o5 = o22(10);
o6("Test6 1", o5, 1);

o5 = o22(10, 20);
o6("Test6 2", o5, 2);

o5 = o22(10, 20, 30);
o6("Test6 3", o5, 3);

// --------------------------------------------------------------------------------------------------
function o23() {
    return arguments.length;
}

o5 = o23();
o6("Test7", o5, 0);

o5 = o23(10, 20);
o6("Test7", o5, 2);

// --------------------------------------------------------------------------------------------------
var o25 = 5;
function o26() {
    var o27 = 0;
    write("Test8 : " + o25);
    if (o25 != 0) {
        o25 = o25 - 1;
        o27 = arguments.callee() + 1;
    }
    return o27;
}

o5 = o26();
o6("Test8", o5, 5);

// --------------------------------------------------------------------------------------------------

function o29() {
    write(arguments.hasOwnProperty("length"));
    write(arguments[0] + " " + arguments[1] + " " + arguments.length);

    arguments.length = "test";

    write(arguments[0] + " " + arguments[1] + " " + arguments.length);
    write(arguments.hasOwnProperty("0"));
    write(arguments.hasOwnProperty("length"));

    return arguments.length;
}

o5 = o29();
o6("Test9", o5, "test");

o5 = o29(10);
o6("Test9", o5, "test");

o5 = o29(10, 20);
o6("Test9", o5, "test");

o5 = o29(10, 20, 30);
o6("Test9", o5, "test");

// --------------------------------------------------------------------------------------------------
// Test arguments for-in enumeration

function o30(o31) {
    var o32 = "";
    for (o33 in o31) {
        if (!o32) {
            o32 = "[" + o33 + ": " + o31[o33];
        } else {
            o32 += ", " + o33 + ": " + o31[o33];
        }
    }

    if (o32) {
        o32 += "]";
    } else {
        o32 = "[]";
    }
    return o32;
}

//
// simply dump args
//
var o34 = function (o11, o12) {
    return o30(arguments);
}

o6("Test10.1",
       o34(),
       "[]");

o6("Test10.1",
       o34(13),
       "[0: 13]");

o6("Test10.1",
       o34(13, 24),
       "[0: 13, 1: 24]");

o6("Test10.1",
       o34(13, 24, "string", true),
       "[0: 13, 1: 24, 2: string, 3: true]");

//
// make some changes then dump
//
o34 = function (o11, o12) {
    arguments[0] = 98;
    o12 = 54;
    arguments[8] = false;
    arguments[10] = 21;
    arguments.o35 = 'bar';
    return o30(arguments);
}

o6("Test10.2",
       o34(),
       "[0: 98, 8: false, 10: 21, foo: bar]");

o6("Test10.2",
       o34(13),
       "[0: 98, 8: false, 10: 21, foo: bar]");

o6("Test10.2",
       o34(13, 24),
       "[0: 98, 1: 54, 8: false, 10: 21, foo: bar]");

o6("Test10.2",
       o34(13, 24, "string", true),
       "[0: 98, 1: 54, 2: string, 3: true, 8: false, 10: 21, foo: bar]");

//
// delete and dump
//
var o36 = function (o37, o38, o39, o40, o41) {
    return arguments;
}

var o42 = function (o43, o44, o45) {
    delete o43[1];
    delete o43[3];
    o6("Test10.3.1", o30(o43), o44);
    o43.o35 = "bar";
    o43[6] = "arg6";
    o43[2] = "arg2";
    o43[1] = "arg1";
    o6("Test10.3.2", o30(o43), o45);
}

o42(o36(),
                 "[]",
                 "[1: arg1, 2: arg2, 6: arg6, foo: bar]"
                 );

o42(o36(13),
                 "[0: 13]",
                 "[0: 13, 1: arg1, 2: arg2, 6: arg6, foo: bar]"
                 );

o42(o36(13, 24),
                 "[0: 13]", //[1] deleted
                 "[0: 13, 1: arg1, 2: arg2, 6: arg6, foo: bar]"
// [1] set after formal args
                 );

o42(o36(13, 24, "string", true),
                 "[0: 13, 2: string]", //[1][3] deleted
                 "[0: 13, 2: arg2, 1: arg1, 6: arg6, foo: bar]"
//[1] set after formal args [0][2]
                 );

function o46() {
    var o47;

    function o48() {
        arguments.valueOf = function() { o47 = this; }

        var o50 = arguments++;
        return o50;
    }

    o48("sentinel");
    o6("Test11 args", o47[0], "sentinel");
}

o46();

function o51() {
    function o52() {
        throw arguments;
    }

    try {
        o52("sentinel");
    } catch (o53) {
        o6("Test12 args", o53[0], "sentinel");
    }
}

o51();

function o54() {
    var o55;

    function o56() {
        arguments.o57 = function() { o55 = this }

        with(arguments)
            o57();
    }

    o56("sentinel");
    o6("Test13 args", o55[0], "sentinel");
}

o54();

function o58(o59) {
    write("");
    write("-------Testing built-in " + o59 + " Implementation----");
    o6("HasOwnProperty() test", arguments.hasOwnProperty(o59), true);
    o6("IsEnumerable() test", arguments.propertyIsEnumerable(o59), false);
    arguments[o59] = 40;
    o6("Overriding value test", arguments[o59], 40);
    delete arguments[o59];
    o6("HasOwnProperty() after deletion test", arguments.hasOwnProperty(o59), false);
    o6("Value after deletion test", arguments[o59], undefined);
}

o58("callee");
o58("length");

function o62() {
    var o20 = 0;

    arguments.length += 10;
    arguments.length -= 10;

    arguments[0] = 100;
    arguments[1] = 200;

    for (var o21 in arguments) {
        o20++;
    }

    o6("Test15", o20, 2);
}

o62();

function o63() {
    o6("Test16", arguments.length, 3);
    function o64() {
        eval("");
    }
}

o63(1, 2, 3);

function o66(o11) {
    o6("Test17.1", arguments.length, 1);
    o6("Test17.2", o11, "Feb20");
    function o67() {
        eval("");
    }
}

o66("Feb20");

// Test that changing arguments in one function is reflected in the caller

function o68() {
    o68.caller.arguments.o70 = "Test 18 Value";
}

function o71() {
    o6("Test18.1", arguments.o70, undefined);
    o68();
    o6("Test18.2", arguments.o70, undefined);
}

o71();

function o72(o73)
{
    if (o73)
    {
        write("test19 called");
    }
    else
    {
        o74();
    }
}

function o74()
{
    arguments.callee.caller(true);
}
o72();

// --------------------------------------------------------------------------------------------------

if (o4 > 0) {
    write(o4 + " Tests ");
    throw new Error(o4);
}
