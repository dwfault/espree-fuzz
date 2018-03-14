function o0(o1) {
    if (!o1)
        throw new Error("Bad value.")
}
noInline(o0);

var o4 = 100;
var o5 = 200;
var o6 = false;
var o7 = {
    get o8() {
        if (o6)
            throw new Error("gotcha!");
        return o4;    
    }
}

function o9() { return "a"; }
noInline(o9);
function o1() { return "b"; }
noInline(o1);
function o10() { return "c"; }
noInline(o10);
function o11() { return "d"; }
noInline(o11);
function o12() { return "e"; }
noInline(o12);
function o8() { return "f"; }
noInline(o8);
function o13() { return "g"; }
noInline(o13);

var o14 = {
    get o8() {
        o0(true);
        o0(true);
        o0(true);
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
        var o18 = o1();
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
        o0(o20 === "d");
        o0(o21 === "e");
        o0(o22 === "f");
        o0(o23 === "g");
    }
}
noInline(o15);

for (var o24 = 0; o24 < 1000000; o24++)
    o15(o24 % 2 ? o7 : o14);
o6 = true;
o15(o7);
