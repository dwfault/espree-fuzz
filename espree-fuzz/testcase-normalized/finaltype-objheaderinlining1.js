//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = { o2: 0 };
    o3(o1);
    o3.call(o1, o1);

    function o3(o1) {
        o1.o2 = 0;
        this.o5 = 0;
        ++o1.o2;
        o1.o6 = 0;
    };
}
o0();

function o7() {
    var o1 = new o8();
    o9(o1);
    o9.call(o1, o1);

    function o9(o1) {
        o1.o2 = 0;
        this.o5 = 0;
        ++o1.o2;
        o1.o6 = 0;
    };
}
function o8() {
    this.o2 = 0;
}
o7();

o10.o11('pass');
