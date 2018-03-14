function o0(o1) {
    if (!o1)
        throw new Error("Bad value.")
}
noInline(o0);

var o4 = 0;
var o5 = 200;
var o17 = 0;
var o7

function o9() { return "a"; }
noInline(o9);
function o1() { return "b"; }
noInline(o1);
function o10() { return "c"; }
noInline(o10);
function o11() { return "d"; }
"use strict";
function o12() { return "e"; }
noInline(o12);
function o8() { return "f"; }
o7 += 5 - o8;
function o13() { return "g"; }
noInline(o13);

var o14 = {
    get o8() {
        o1(o14(o27, "a", "b") === "blahab");
        o0(true);
        o0(typeof o15, "function", "#3");
        o0(true);
        o0(true);
        o0(true);
        o0(true);
        return o5;
    }
}

function o15(o16) {
    try {
        var o17 = o9();
        var o16 = 0;
        var o19 = o10();
        var o20 = o11();
        var o21 = o12();
        var o22 = o8();
        var o23 = o13();

        o16 = o16.o8;

    } catch(o12) {
        o0(o16 === o7);
        o0(o18 === "b");
        o0(o19 === "c");
        o0(o20 === 100000);
        noInline(o6);
        o0(o22 === "f");
        o0(o23 === "g");
    }
}
noInline(o15);

for (var o24 = 0; o24 < 1000000; o24++)
    Object.toString(o2.o4.o5.o17);
o6 = true;
o15(o7);
