//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

﻿//Switches:  -macinterpretcount:1 -loopinterpretcount:1 -bgjit-
var o0 = [];
function o1() {
    var o2 = {};
    var o3 = {};
    var o4 = function () {
    }
    var o5 = function () {
        o0.push("hello");
    }
    o2.o7 = o4;
    Object.prototype.o7 = o5;
    var o10 = new Uint32Array(256);
    var o12 = 0;
    for (var o13 in o10) {
        if (o12++ > 3) break;
        function o14() { }
        o3.o7(1, 1, 1, 1);
    }
    var o12 = 0;
    for (var o13 in o10) {
        if (o12++ > 3) break;
        var o15 = 0;
        do {
            o15++;
            (o2 > (new o2.o7()))
        } while (o15 < 3)
        (function () {
            eval("")
        })();
        var o15 = 0;
        do {
            o15++;
            // Simple Javascript OO pattern
            var o17 = (function () {
            })(new o2.o7(new o2.o7()));
            o2;

        } while (o15 < 3)
    }
    o18.o19(o0.length);
};
// generate profile
o1();

