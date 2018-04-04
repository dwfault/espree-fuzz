//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    o1 += 0x7fffffff;
    return o1 & o2;
}
o3("test0: " + o0(1, 1));
o3("test0: " + o0(1, 1.1));

function o4(o1, o2) {
    return o1 + 0x7fffffff & o2 | o1;

    function o5() { o1; }
}
o3("test0slot: " + o4(1, 1));
o3("test0slot: " + o4(1, 1.1));

function o6(o1, o2) {
    o1 += 0x7fffffff;
    var o7 = o2 & 0;
    o1 += o2;
    return o1 & 0x7fffffff | o7;
}
o3("test1: " + o6(1, 1));
o3("test1: " + o6(1, 1.1));

function o8(o1, o2) {
    var o7 = o2 & 0;
    return o1 + 0x7fffffff + o7 & 0x7fffffff | o1 | o7;

    function o9() { o1; }
}
o3("test1slot: " + o8(1, 1));
o3("test1slot: " + o8(1, 1.1));

function o10(o1, o2) {
    o1 += 0x7fffffff;
    o1 += o2;
    return o1 & 0x7fffffff;
}
o3("test2: " + o10(1, 1));
o3("test2: " + o10(1, 1.1));

function o11(o1, o2) {
    return o1 + 0x7fffffff + o2 & 0x7fffffff | o1;

    function o12() { o1; }
}
o3("test2slot: " + o11(1, 1));
o3("test2slot: " + o11(1, 1.1));

function o13(o1) {
    o1 += 0x7fffffff;
    o1 += 1.1;
    return o1 & 0x7fffffff;
}
o3("test3: " + o13(1));
o3("test3: " + o13(1));

function o14(o1) {
    return o1 + 0x7fffffff + 1.1 & 0x7fffffff | o1;

    function o15() { o1; }
}
o3("test3slot: " + o14(1));
o3("test3slot: " + o14(1));

function o16() {
    return ~-0;
}
o3("test4: " + o16());
o3("test4: " + o16());

function o17() {
    var o18 = 0;
    var o19 = 1;
    o20();
    o19 = 2.2;
    return o20();

    function o20() {
        return o19 < (o19 & -o18) ? 0 : 1;
    }
};
o3("test5: " + o17());
for(var o18 = 0; o18 < 100; ++o18)
    o17();
o3("test5: " + o17());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function o3() {
    var o21;
    if(this.o22)
        o21 = function (o23) { this.o22.o24(o23); };
    else if(this.o25)
        o21 = function (o23) {
            var o26 = this.o25.o27("div");
            o26.o28 = o23;
            this.o25.o29.o30(o26);
        };
    else
        o21 = function (o23) { this.print(o23); };
    o3 = function () {
        var o23 = "";
        for(var o18 = 0; o18 < arguments.length; ++o18)
            o23 += arguments[o18];
        o21(o23);
    };
    o3.apply(this, arguments);
}
