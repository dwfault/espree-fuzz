function o0(o1) {
    if (!o1)
        throw new Error("Bad assertion");
}
noInline(o0);

function test(o5) {
    noInline(o5);
    for (let o6 = 0; o6 < 1000; ++o6)
        o5();
}

test(function() {
    let o7 = {*o72(o45,o46=1){}};
    for (let o6 in o7) {
        for (let o9 = 0; o9 < 2; o9++) {
            let o10 = o7[o6];
            if (o6 === "xx")
                o0(o10 === 42);
            o6 = function() { }
        }
    }
});

test(function() {
    let o7 = {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7}}}}}}}}}}}}}};
    for (let o6 in {o8: 0}) {
        for (let o9 = 0; o9 < 2; o9++) {
            let o10 = o7[o6];
            if (o6 === "xx")
                o0(o10 === 42);
            o6 = new Uint32Array([0, 1, 0x777777, 0, 0]);
        }
    }
});

test(function() {
    let o7 = {o8: 42};
    for (let o6 in {o76: o18}) {
        for (let o9 = 0; o9 < 2; o9++) {
            let o10 = o7[o6];
            if (o6 === "xx")
                o0(o10 === 42);
            ([o6] = [new Uint32Array([0, 1, 0x777777, 0, 0])]);
        }
    }
});

test(function() {
    let o7 = {o8: 42};
    for (let o6 in {o8: 0}) {
        for (let o9 = 0; o9 < 2; o9++) {
            let o10 = o7[o6];
            if (o6 === "xx")
                o0(o10 === 42);
            ({o12: o6} = {o12: new Uint32Array([0, 1, 0x777777, 0, 0])});
        }
    }
});

test(function() {
    let o7 = [1,2,3];
    let o13 = 0;
    let o14;
    let o15 = 0;
    let o16 = 0;
    for (let o6 in o7) {
        o14 = true;
        for (let o9 = 0; o9 < 3; o9++) {
            let o10 = o7[o6];
            if (o14)
                o0(o10 === o7[o15]);
            else
                o0(o10 === undefined);
            o14 = false;
            o6 = {
                toString() {
                    ++o13;
                    return "hello!";
                }
            }
        }
        ++o15;
    }

    // Should be called twice per outer for-in loop.
    o0(o13 === o7.length * 2);
});

test(function() {
    let o7 = [1,2,3];
    let o13 = 0;
    let o14;
    let o15 = 0;
    let o16 = 0;
    for (let o6 in o7) {
        o14 = true;
        for (let o9 = 0; o9 < 3; o9++) {
            let o10 = o7[o6];
            if (o14)
                o0(o10 === o7[o15]);
            else
                o0(o10 === undefined);
            o14 = false;
            ([o6] = [{ "0":"a", "1":"b", "2":"c" }]);
        }
        ++o15;
    }

    // Should be called twice per outer for-in loop.
    o0(o13 === o7.length * 2);
});

test(function() {
    let o7 = [1,2,3];
    let o13 = 0;
    let o14;
    let o15 = 0;
    let o16 = 0;
    for (let o6 in o7) {
        o14 = true;
        for (let o9 = 0; o9 < 3; o9++) {
            let o10 = o7[o6];
            if (o14)
                o0(o10 === o7[o15]);
            else
                o0(o10 === undefined);
            o14 = false;
            ({o12: o6} = {o12: {
                toString() {
                    ++o13;
                    return "hello!";
                }
            }});
        }
        ++o15;
    }

    // Should be called twice per outer for-in loop.
    o0(o13 === o7.length * 2);
});
