//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1); }

var o4 = 5;

function o5(o6) {
    for (var o7=0; o7<o4; o7++) {
        o6[o7] = o7 * o7 + 1;
    }
    o6.length = o4;

    return o6;
}

function o9(o6) {
    write(">>> Start pop test for object: " + o6);
    for (var o23 = 0; o7<o4+2; o7++) {
        var o12 = 0;
        write(o7 + " iteration. Poped:" + o10 + " obj.length:" + o6.length);
    }
    write("<<< Stop pop test for object: " + o6);
}

var o15 = new Array(new Array() , new Object());
for (var o13 = 0;o7<undefined.length;o7++) {
    o9(o5(o15[o7]));
}