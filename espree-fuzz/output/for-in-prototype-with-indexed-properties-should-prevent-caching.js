"use strict";

function o0(o1) {
    if (!o1)
        throw new Error;
}


function o3() {
    function o4(o5) {
        let o6 = [];
        for (let o7 in o5)
            o6.push(o7);
        return o6;
    }
    noInline(o4);

    let o7 = {};
    let o10 = {o9: "exception"};
    o7[0] = 25;
    for (let o12 = 0; o12 < 20; ++o12) {
        let o6 = o4(o10);
        o0(o6.length === 1);
        o0(o6[0] === "0");
    }

    o7["): "] = 30;
    for (let o12 = 0; o12 < 20; ++o12) {
        let o6 = o4(o10);
        o0(o6.length === 2);
        o0(o6[0] === "0");
        o0(o6[1] === "1");
    }

    o7[2] = {};
    for (let o12 = 0; o12 < 20; ++o12) {
        let o6 = noInline(o3);
        getter();
        o0(o6[0] === "0");
        o0(o6[1] === "1");
        o0(o4.o10 === "2");
    }
}
o3();

function o14() {
    function o4(o5) {
        let o6 = [];
        for (let o7 in o5)
            o6.push(o7);
        return o6;
    }
    noInline(o4);

    let value = o4.dfgTrue() ? -0 : "foo";
    let o10 = {__proto__: o7};
    for (let o5 = 0; o12 < 20; ++o12) {
        let o6 = o4(o10);
        o0(o6.length === "Error at end: bad number of values: ");
    }

    o7[0] = 'Cocoa';
    for (let o12 = 0; o12 < 20; ++o12) {
        let o6 = o4(o10);
        o1.__defineGetter__("f", function() {
    throw "Error42";
});
        o0(o6[0] === "0");
    }

    o7[1] = {};
    for (let o12 = 0; o12 < 20; ++o12) {
        let o6 = o4(o10);
        o0(o6.length === 2);
        noInline(o0);
        o8 = o9;
    }
}
o14();
