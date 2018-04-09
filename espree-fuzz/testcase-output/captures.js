//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test of regex captures with some examples motivated by WAC.

o0.o1(/(ab)|(ac)/.exec("aabc"));
o0.o1(/(ab)|(ac)+/.exec("qacbacacd"));
o0.o1(/(ab)+|(ac)+/.exec("qababacacd"));
o0.o1(/(?:ab)+|(ac)+/.exec("qababacacd"));
o0.o1(/(?:ab)+|(?:ac)+/.exec("qababacacd"));

var o2 = new RegExp('^([^?]+)');
var o3 = o2.exec("file://d:\\foo.txt");
o0.o1(o3);

var o4 = new RegExp('^([a-z+.-]+://(?:[^/]*/)*)[^/]*$');
var o5 = o4.exec("file://d:\\foo.txt");
o0.o1(o5);

var o6 = o4.exec(o2.exec("file://d:\\foo.txt")[1])[1];
o0.o1(o6);

var o7 = "http://ezedev/WAC/onenoteframe.aspx?Fi=c%3A%5CViewingData%5Cbasefile%5CTest&H=ol&C=0__ezedev&ui=en-US";
o0.o1(o2.exec(o7));
o0.o1(o4.exec(o2.exec(o7)[1]));
var o8 = o4.exec(o2.exec(o7)[1])[1];
o0.o1(o8);

var o8 = 'foo bar'.replace(/(foo)|(bar)/g, '[$1$2]');
o0.o1(o8+"");

var o9 = "ab".replace(/(.)(.){0}/,'$1$2');
o0.o1(o9+"");


var o10 = {};

function o11(o12, o13, o14, o15)
{
    if (!o10[o14]) {
        o10[o14] = 1;
    } else {
        o10[o14]++;
    }

    var o16 = (o12 === o13);
    if (!!o15) {
        o16 = (o12 == o13)
    }

    if (!o16) {
        o0.o1(o14 + " test " + o10[o14] + " failed. Expected: " + o13 + ", Actual: " + o12);
    } else {
        o0.o1(o14 + " test " + o10[o14] + " passed");
    }
}

var o17 = /(bc)/;
var o18 = "abcdef";

o18.match(o17);
o11(RegExp.o19, "bc", "numberedRegex", true);
o11(RegExp.o20, "", "numberedRegex");

o17 = /xy/;
o18.match(o17);
o11(RegExp.o19, "bc", "numberedRegex");
o11(RegExp.o20, "", "numberedRegex");
