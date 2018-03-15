// This test ensures the TailCallInilnedCaller has the correct
// stack trace in the FTL inside a try block.
// This case arises when you have a situation like this:
// foo makes a call to bar, bar is inlined in foo. bar makes a call
// to baz and baz is inlined in bar. And then baz makes a tail-call to jaz,
// and jaz is inlined in baz. We want the callframe for jaz to appear to 
// have caller be bar. 


"use strict";
function value() {
    return "value";
}
noInline(value);

function o2(o3) {
    if (!o3)
        throw new Error("bad value");
}
noInline(o2);

function o5(o6) {
    let o7 = o6.split("\n");
    o2(o7[0].indexOf("jaz") !== -1);
    o2(o7[1].indexOf("bar") !== -1);
    o2(o7[2].indexOf("foo") !== -1);
}

function o10() {
    let o11 = value();
    try {
        return o12() + 1;
    } catch(o13) {
        o2(o11 === "value");
        o5(o13.o6);
    }
}
noInline(o10);

function o12() {
    return o14() + 1;
}

function o14() { 
    return o15();
}

let o16 = false;
function o15() { 
    if (o16)
        throw new Error("lol");
    return 20; 
}
noInline(o15);

for (var o17 = 0; o17 < 50000; o17++) {
    o10();
}
o16 = true;
o10();
