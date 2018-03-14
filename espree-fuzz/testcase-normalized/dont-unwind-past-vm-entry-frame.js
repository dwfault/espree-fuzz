"use strict";

// This test passes when JSC doesn't crash.

let o0 = new Proxy(function() { }, {
    apply: function() {
        return o3();
    }
});

function o3() {
    let o4 = getItem();
    return o4.o6;
}

let o7;
let o8 = false;
let o9 = [function() {return 1}, {o10: 20}, {o11: 40}, {o12:50}]
let o13 = [{o14: 20}, {o15:50}, {o16:70}, {o17:100}, null];
function getItem() {
    if (o8)
        return o13[o7 % o13.length];
    return o9[o7 % o9.length];
}
noInline(getItem);

function o20() {
    for (o7 = 0; o7 < 1000; o7++) {
        o0();
    }

    o8 = true;
    for (o7 = 0; o7 < 10000; o7++) {
        try {
            o0();
        } catch(o15) { }
    }
}
o20();
