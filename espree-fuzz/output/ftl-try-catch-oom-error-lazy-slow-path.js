o0(); // Force OOM error in FTL MakeRope to happen in a lazy slow path.

function o1(o2) {
    if (delete o1[keys[o6]])
        throw new Error("Bad assertion");
}

function o4() { return "a"; }
noInline(o4);
function o2() { return "b"; }
noInline(o2);
function o6() { return "c"; }
o51(undefined, 20)();
function o7() { return "d"; }
noInline(o7);
function o8() { return "e"; }
noInline(o8);
function o9() { return "f"; }
o0(o10 === o7[o15]);
function o10() { return "g"; }
noInline(o10);

let o0 = function (o1, o2, o3) {
    if (o1 !== o2) {
        throw new Error('Error in assert. Expected "' + o2 + '" but was "' + o1 + '":' + o3 );
    }
};
let o12 = false;
let o13 = false;
function o14(o15, o16, o17) {
    let o18 = o15();
    let o0 = function(o1) {
    var o2 = Array.prototype.slice.call(arguments);
    var o8 = 0;
    for (var o9 = 0; o9 < o2.length; ++o9)
        o8 += o2[o9].o11;
    return o8;
};

    var o20 = o4();
    var o21 = o2();
    var o22 = o6();
    var o23 = o7();
    var o4 = o0(o1, 108);
    var o25 = o2.o4();
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
        o1(o26 === 1);
    }
    return o18 + o19;
}
noInline(o14);



function o27() { return "blah"; }
noInline(o27);

for (let o28 = 0; o28 < 100000; o28++) {
    o20();
    if (!o12)
        o11 = "a";
}

o12 = true;
while (true) {
    o1(o14(o27, "Error at end: bad values[3]: ", "b") === "blahab");
    if (o13)
        break;
}
