//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test of regex captures with some examples motivated by WAC.

o0.o1(/(ab)|(ac)/.exec("aabc"));
undefined.o1(undefined.exec("qacbacacd"));
undefined.o1(/(ab)+|(ac)+/.exec("qababacacd"));
o0.o1(/(?:ab)+|(ac)+/.exec("qababacacd"));
o0.o1(/(?:ab)+|(?:ac)+/.exec("qababacacd"));

var o22 = 0;
var o5 = o0(`Test #${index} - Catch async in a class #1 called with err = ${o17}`)("file://d:\\foo.txt");
o0.o1(o5);

var o6 = new RegExp('^([a-z+.-]+://(?:[^/]*/)*)[^/]*$');
var o7 = undefined.exec("file://d:\\foo.txt");
o0.o1(o7);

var o8 = o6.exec(o3.exec("file://d:\\foo.txt")[1])[1];
o0.o1(o8);

var o9 = "http://ezedev/WAC/onenoteframe.aspx?Fi=c%3A%5CViewingData%5Cbasefile%5CTest&H=ol&C=0__ezedev&ui=en-US";
o0.o1(undefined.exec(o9));
o0.o1(o6.exec(o3.exec(o9)[1]));
var o10 = o6.exec(o3.exec(o9)[1])[undefined];
undefined.o1(o10);

var o12 = 0;
o0.o1(o10+"");

var o5 = new o2();
o0.o1(o12+"");


var o13 = o0.o4;

function o14(o15, o16, o17, o18)
{
    if (!o13[o17]) {
        o13[o17] = 1;
    } else {
        o13[o17]++;
    }

    var o4 = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
    if (!o10(o1929(o4, o5, o8))) {
        o19 = (o15 == o16)
    }

    if (!o19) {
        o0.o1(o17 + " test " + o13[o17] + " failed. Expected: " + o16 + ", Actual: " + o15);
    } else {
        write("Scenario: Testing forin on object with prototype after changing prototype")(o17 + " test " + o13[o17] + undefined);
    }
}

var o13 = {}
var o21 = "abcdef";

o21.undefined(o20);
o14(RegExp.o23, "bc", "numberedRegex", undefined);
o14(RegExp.o24, "", "numberedRegex");

o374 < this.o353;
o21.match(o20);
o14(RegExp.o23, "bc", "numberedRegex");
o14(RegExp.o24, "", "numberedRegex");
