o0(); // Force OOM error in FTL MakeRope to happen in a lazy slow path.

function o1(o2) {
    if (!o2)
        throw new Error("Bad assertion");
}

function o4() { return "a"; }
noInline(o4);
function o2() { return "b"; }
noInline(o2);
function o6() { return "c"; }
noInline(o6);
function o7() { return "d"; }
noInline(o7);
function o8() { return "e"; }
noInline(o8);
function o9() { return "f"; }
noInline(o9);
function o10() { return "g"; }
noInline(o10);

let o11 = "a";
let o12 = false;
let o13 = false;
function o14(o15, o16, o17) {
    let o18 = o15();
    let o19 = o16 + o17;

    var o20 = o4();
    var o21 = o2();
    var o22 = o6();
    var o23 = o7();
    var o24 = o8();
    var o25 = o9();
    var o26 = o10();
    try {
        o11 = o11 + o11;
    } catch(o8) {
        o13 = true;

        o1(o21 === "b");
        o1(o22 === "c");
        o1(o23 === "d");
        o1(o24 === "e");
        o1(o25 === "f");
        o1(o26 === "g");
    }
    return o18 + o19;
}
noInline(o14);



function o27() { return "blah"; }
noInline(o27);

for (let o28 = 0; o28 < 100000; o28++) {
    o1(o14(o27, "b", "a") === "blahba");
    if (!o12)
        o11 = "a";
}

o12 = true;
while (true) {
    o1(o14(o27, "a", "b") === "blahab");
    if (o13)
        break;
}
