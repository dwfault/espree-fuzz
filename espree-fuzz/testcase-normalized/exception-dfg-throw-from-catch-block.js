"use strict";
function o0(o1, o2) {
    if (!o1)
        throw new Error("broke assertion: '" + o2 + "'");
}
noInline(o0);

function o5(o6) {
    if (o6)
        throw new Error("Baz");
}

function o7(o6) {
    var o8 = null;
    try {
        o5(o6);
    } catch(o9) {
        o8 = o9;
        o5(o6);
    } finally {
        if (o6) 
            o0(o8);
    }
}

function o10(o6) {
    var o8 = null;
    try {
        o7(o6);
    } catch(o9) {
        o8 = o9;
    }
    if (o6)
        o0(o8);
}

const o11 = 1000;
for (var o12 = 0; o12 < o11; o12++) {
    o10(o12 === o11 - 1);
}
