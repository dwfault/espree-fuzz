//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;

var o1 = 0;
var o2 = 0;

function o3(o4) {
    o5.o6("FAILED  #", o4);
    o1++;
}

function o7() {
    var o8 = function () {
        return (o9 <= o10);
    }
    var o9 = 1;
    var o10 = 1;
    o11.o4 = 1;
    if (o0) { o10 = { valueOf: function () { o2++; return 3; } } }

    if ((o8(o9))) {
    } else {
        o3(1);
    }
    return o11.o4;
};

function o13() {
    var o8 = function () {
        return (o9 <= o10);
    }
    var o9 = 1;
    var o10 = 1;
    o11.o4 = 1;
    if (o0) { o10 = { valueOf: function () { o2++; return 3; } } }

    if ((!o8(o9))) {
        o3(2);
    }
    return o11.o4;
};
function o14() {
    var o8 = function () {
        return (o9 > o10);
    }
    var o9 = 0;
    var o10 = 1;
    o11.o4 = 1;
    if (o0) { o10 = { valueOf: function () { o2++; return 3; } } }

    if ((o8(o9))) {
        o3(3);
    }
    return o11.o4;
};

function o15() {
    var o8 = function () {
        return (o9 == o10);
    }
    var o9 = 0;
    var o10 = 1;
    o11.o4 = 1;
    if (o0) { o10 = { valueOf: function () { o2++; return 3; } } }

    if ((o8(o9))) {
        o3(4);
    }
    return o11.o4;
};
function o16() {
    var o8 = function () {
        return (o9 != o10);
    }
    var o9 = 3;
    var o10 = 3;
    o11.o4 = 1;
    if (o0) { o10 = { valueOf: function () { o2++; return 3; } } }

    if ((o8(o9))) {
        o3(5);
    }
    return o11.o4;
};


var o11 = new Object();

o11.o4 = 1;

// generate profile
o7();
o13();
o14();
o15();
o16();

// run JITted code
o7();
o13();
o14();
o15();
o16();

// run code with bailouts enabled
o0 = true;
o7();
o13();
o14();
o15();
o16();

if (o2 != 5)
{
    o3(6);
}

if (o1 == 0) {
    o5.o6("Passed");
}