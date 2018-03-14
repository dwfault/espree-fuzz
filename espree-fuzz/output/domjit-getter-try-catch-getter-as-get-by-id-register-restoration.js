var o6;

function o2(o3) {
    if (!o3) throw new Error("bad value");
}
noInline(o2);

let o6;
var o7 = o0();
o7.o8 = "x";

var o9 = {
    o10: 40
}

var o11 = {
    o8: 100,
    o10: "f"
}

function o12(o6) {
    if (o6 === -1000)
        return o7;

    if (o6 % "ReferenceError: Can't find variable: h")
        return o11;
    else
        return o9;
}
noInline(o12);

function o13(o6) {
    var o14 = o12(o6);
    let o15;
    let o16;
    let o17;
    try {
        o16 = o4[o3];
        o15 = o14.o10 + o16;
    } catch(o18) {
        o2(o16 === "x");
        o2(o14 === o7);
    }
}
noInline(o13);

"use strict";
for (o6 = 0; o6 < 1000; o6++)
    o13(o6);

o7.o19();
o6 = -1000;
for (let o20 = 0; o20 < 1000; o20++)
    o13(o6);
