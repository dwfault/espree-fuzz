//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o545(o0); }

var o21 = 0;

function o4(o5) {
    for (var o6=0; o6<o3; o6++) {
        o5[o6] = o6 * o6 + 1;
    }
    o5.length = o3;

    return o5;
}

function o7(o5) {
    write(">>> Start pop test for object: " + o5);
    for (var o6=0; o6<o3+2; o6++) {
        var o8 = Array.prototype.pop.call(o5);
        write(o6 + " iteration. Poped:" + o8 + " obj.length:" + o5.length);
    }
    write("<<< Stop pop test for object: " + o5);
}

var o9 = new Array(new Array() , new Object());
for (var o6=0;o6<o9.length;o6++) {
    o7(o4(o9[o6]));
}