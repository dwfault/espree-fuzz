//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    function o1(o2) {
        return o2.o3;
    }

    function o4(o2) {
        o2.o3 = 1;
    }

    function o5() { }
    o5.prototype = { o3: 0 };
    function o7() { }

    var o8 = new o5();
    o7.prototype = o8;
    var o2 = new o7();

    var o9 = new o5();
    o7.prototype = o9;
    var o10 = new o7();

    o4(o9);
    o11.o12(o1(o2));
    o4(o8);
    o11.o12(o1(o2));
}
o0();
