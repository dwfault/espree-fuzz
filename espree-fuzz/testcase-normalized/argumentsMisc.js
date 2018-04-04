//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

// Change arguments inside eval
function o4() {
    var o5 = arguments;
    eval('arguments="test1"');

    write("old.length       : " + o5.length);
    write("arguments.length : " + arguments.length);
    write("Compare the two  : " + (o5 === arguments));
}

o4(10);

function o9() {
    var o5 = arguments;
    eval('write(arguments); var arguments = "test2"; write(arguments);');

    write("old.length       : " + o5.length);
    write("arguments.length : " + arguments.length);
    write("Compare the two  : " + (o5 === arguments));
}

o9(10);

function o10(o11, o11) {
    var o11 = 999;
    write(arguments[0]);
    write(arguments[1]);
}

o10(1, 2);

function o12(o13, o14, o15, o16) {
    eval("function foo(){return arguments.caller;}");
    write("bug1127540: " + (o17() === arguments));
}

o12(1, 2, 3, 4)


function o18(o13) {
    write(arguments[0]);
    delete arguments[0];
    write(arguments[0]);
    arguments[0] = 2;
    write(arguments[0]);
    delete arguments[0];
    write(arguments[0]);
}

o18(1);

// Parent function doesn't use arguments. Modify function.arguments in child
function o19(o13, o14, o15) {
    o13 = "assignToFormal";
    o19.arguments[1] = "funcArgs[1]";
    o20();
    write("Arguments : " + o19.arguments[0] + " " + o19.arguments[1] + " " + o19.arguments[2]);
    write("Formals   : " + o13 + " " + o14 + " " + o15);
}

function o20() {
    o19.arguments[2] = "nested[2]";
    write("In Helper : " + o19.arguments[0] + " " + o19.arguments[1] + " " + o19.arguments[2]);
}

o19("arg1", "arg2", "arg3");

// Parent function uses arguments. Modify function.arguments in child
function o21(o13, o14, o15) {
    o13 = "assignToFormal";
    o21.arguments[1] = "funcArgs[1]";
    arguments[2] = "arguments[2]";
    o22();
    write("Arguments : " + o21.arguments[0] + " " + o21.arguments[1] + " " + o21.arguments[2]);
    write("Formals   : " + o13 + " " + o14 + " " + o15);
}

function o22() {
    o21.arguments[2] = "nested[2]";
    write("In Helper : " + o21.arguments[0] + " " + o21.arguments[1] + " " + o21.arguments[2]);
}

o21("arg1", "arg2", "arg3");

function o23(o11)
{
    return arguments;
}

do
{
    // Put this in a loop so we'll try to apply the scope-caching optimization.
    var o24 = o23('First call');
    o2.o3(o24[0]);
    var o25 = o23('Second call');
    o2.o3(o24[0]);
    o2.o3(o25[0]);
}
while(0);

function o26(o11)
{
    return eval('arguments');
}

do
{
    // Put this in a loop so we'll try to apply the scope-caching optimization.
    var o24 = o26('First call');
    o2.o3(o24[0]);
    var o25 = o26('Second call');
    o2.o3(o24[0]);
    o2.o3(o25[0]);
}
while(0);
