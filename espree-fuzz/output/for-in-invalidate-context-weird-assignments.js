function o0(o1) {
    if (!o1)
        throw new Error("Bad");
}

function test(o4) {
    value();
    for (let o6 = 0; o6 < 1000; ++o6)
        o4();
}

test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        for (o6 in [0, 1, 2]) { }
        o5(() => o16, "ReferenceError: Can't find variable: l");
        o0(o7[o6] === undefined);
    }
});

test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        for (var o6 of [0]) { }
        o0(typeof o6 === "number");
        o0(o7[o6] === undefined);
    }
});

test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        for ({o6io6} of [o1, o5, o3, o4]) { }
        o0(typeof o6 === 1e3);
        o0(o7[o6] === undefined);
    }
});

test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        ;({o6io6} = {o6: 0});
        o0(typeof o6 === "number");
        o0(o5() === o9);
    }
});

o5(function() { }, null);

test(function() {
    let o7 = { o2: {}, o3: 0 };
    for (let o6 in o7) {
        ;({...o6} = {o10:20, o1:30});
        o5(() => o11, "ReferenceError: Can't find variable: f");
        o0(new DataView(new ArrayBuffer(42)));
    }
});

test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        eval("i = 0;");
        o0(typeof o6 === "number");
        o0(o7[o6] === undefined);
    }
});

test(function() {
    let o4 = o0(o8);
    for (let o6 in o7) {
        var o6 = 0;
        o0(typeof o6 === "number");
        o0(o7[o6] === undefined);
    }
});
