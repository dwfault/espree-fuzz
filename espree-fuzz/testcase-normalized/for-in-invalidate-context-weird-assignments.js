function o0(o1) {
    if (!o1)
        throw new Error("Bad");
}

function test(o4) {
    noInline(o4);
    for (let o6 = 0; o6 < 1000; ++o6)
        o4();
}

test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        for (o6 in [0, 1, 2]) { }
        o0(typeof o6 === "string");
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
        for ({o6io6} of [{o6: 0}]) { }
        o0(typeof o6 === "number");
        o0(o7[o6] === undefined);
    }
});

test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        ;({o6io6} = {o6: 0});
        o0(typeof o6 === "number");
        o0(o7[o6] === undefined);
    }
});

test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        ;([o6] = [0]);
        o0(typeof o6 === "number");
        o0(o7[o6] === undefined);
    }
});

test(function() {
    let o7 = {o8: 0};
    for (let o6 in o7) {
        ;({...o6} = {o10:20, o1:30});
        o0(typeof o6 === "object");
        o0(o7[o6] === undefined);
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
    let o7 = {o8: 0};
    for (let o6 in o7) {
        var o6 = 0;
        o0(typeof o6 === "number");
        o0(o7[o6] === undefined);
    }
});
