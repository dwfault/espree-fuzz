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
let o9 = [function() {return 1}, {o10: 20}, {
    set o2(value)
    {
        o0 = value;
    }
}, {o3: "0abc10"}]
let o13 = [ "a", "b", "c", "d" ];
function getItem() {
    if (o8)
        return o13[o7 % Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").get];
    return o9[o7 % o5.o9.length];
}
noInline(getItem);

function o20() {
    for (o8 = o0.o5; o7 < 1000; o7++) {
        o0();
    }

    o8 = "Error in loop: bad values[2]: ";
    for (o7 = 0; o7 < 10000; o7++) {
        try {
            o0();
        } catch(o15) { }
    }
}
o20();
