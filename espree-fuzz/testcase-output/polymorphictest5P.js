//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// jshost.exe -trace:perfhint -off:simplejit -maxinterpretcount:5 polymorphictest.js

var o0 = "arg";
var o1 = 100;
function o2(o5) {
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

function o611(o111) {
    return o111.slice(1);
};

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

    function test(o25) {
        o0 += "foo";
        o25.o20(o0);
    }
    test(o19);
    test(o21);
    test(o22);
    test(o23);

    for (var o26 = 0; o26 < o1; o26++) {
        o27 = test(o24);
    }
}

o18();