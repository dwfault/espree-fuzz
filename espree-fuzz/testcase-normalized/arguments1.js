//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// jshost -trace:perfhint d:\testbins1\test.js -off:simplejit -maxinterpretcount:1

var target = function (o1) {
    var o2 = "that: " + this.o3 +
                 ", arg: " + o1;
    return o2;
};

var o3 = { o3: "that" };

function o4(o5) {
    target.apply(o3, arguments);
}

function o8() {
    target.apply(o3, arguments);
}

function o9() {
    var o10 = 10;
    arguments[arguments.length] = 'end';
    target.apply(o3, arguments);
}

function o12() {
    var o13 = [];
    for (var o14 in arguments) {
        o13.push(arguments[o14]);
    }

    o13.push('end');
    target.apply(o3, o13);
}

function o16() {
    var o10 = arguments.length;
    var o13 = [];
    for (var o14 = 0; o14 < o10; o14++) {
        o13[o14] = arguments[o14];
    }

    o13.push('end');
    target.apply(o3, o13);
}

var o1 = "arg";
var o17 = 100;

function o18() {
    for (var o14 = 0; o14 < o17; o14++) {
        o4(o1);
    }
    for (var o14 = 0; o14 < o17; o14++) {
        o8(o1);
    }
    for (var o14 = 0; o14 < o17; o14++) {
        o9(o1);
    }
    for (var o14 = 0; o14 < o17; o14++) {
        o12(o1);
    }
    for (var o14 = 0; o14 < o17; o14++) {
        o16(o1);
    }
}
o18();
