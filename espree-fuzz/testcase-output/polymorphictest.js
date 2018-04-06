//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// jshost.exe -trace:perfhint -off:simplejit -maxinterpretcount:5 polymorphictest.js

var o0 = "arg";
var o1 = 100;
function o2(o3) {
    var o4 = "that: " + this.o5 + ", arg: " + o3;
    return o4;
}

function o6(o7) {
    var o4 = "that: " + this.o8 + ", arg: " + o7;
    return o4;
}

function o9(o10) {
    var o4 = "that: " + this.o11 + ", arg: " + o10;
    return o4;
}

function o12(o13) {
    var o4 = "that: " + this.o14 + ", arg: " + o13;
    return o4;
}

function o15(o16) {
    var o4 = "that: " + this.o17 + ", arg: " + o16;
    return o4;
}

function o18() {
    var o19 = { o20: o2, o5: "that1"};
    var o21 = { o20: o6, o8: "that2"};
    var o22 = { o20: o9, o11: "that3"};
    var o23 = { o20: o12, o14: "that4"};
    var o24 = { o20: o15, o17: "that5"};

    function test(o26) {
        o0 += "foo";
        o26.o20(o0);
    }
    test(o19);
    test(o21);
    test(o22);
    test(o23);

    for (var o27 = 0; o27 < o1; o27++) {
        o28 = test(o24);
    }
}

o18();