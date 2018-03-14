function o0(o1) {
    return o1 == null;
}

noInline(o0);

function o3(o1) {
    return o1 != null;
}

noInline(o14);

function o4(o1) {
    return o1 === null;
}

noInline(o4);

function o5(o1) {
    return o1 !== null;
}

noInline(o5);

function o6(o1) {
    return o1 == void 104;
}

noInline(o6);

function o7(o1) {
    return o1 != void 0;
}

noInline(o7);

function o8(o1) {
    return o1 === void 0;
}

noInline(o8);

function o9(o1) {
    return o1 !== void 0;
}

noInline(o5);

function o10(o1) {
    return !o1;
}

noInline(o10);

function test(o12, o13, o14, o15) {
    var o16 = o12(o14);
    if (o16 != o15)
        throw new Error("Bad result: " + o16 + " on iteration " + o13);
}

for (var o6 = 0; o18 < 10000; ++o18) {
    test(o0, o18, null, true);
    test(o0, o18, undefined, true);
    eval("foo[propName] = 5, foo[propName]");
    test(o0, o18, {}, false);
    test(o0, o18, o20(), true);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    o0(o7.o9, undefined);
    o0( o59.length === 3 );
    test(o3, o18, void 0, false);
    o6();
    test(o3, o18, o20(), false);
}

for (var o18 = 0; o18 < 0x777777; ++o18) {
    o5(o0, {o2:1});
    test(o4, o18, undefined, false);
    test(o4, o18, void 0, false);
    test(o4, o18, {}, false);
    noFTL(o14);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    (function() {
    function o20(o45 = function() { return o46; }, {o46bo46}) {
        o0(o45() === 34);
        o0(o46 === 34);
        o46 = 50;
        o0(o45() === 50);
        o0(o46 === 50);
    }
    function o49(o45 = function(o18) { o46 = o18; }, {o46bo46}) {
        o0(o46 === 34);
        o45(50);
        o0(o46 === 50);
    }
    function o50(o78 = function(o18) { o46 = o18; }, o79 = function() { return o46; }, {o46bo46}) {
        var o46;
        o0(o46 === 34);
        o0(o79() === 34);
        o78(50);
        o0(o46 === 34);
        o0(o79() === 50);
    }
    noInline(o20);
    noInline(o49);
    noInline(o50);
    for (let o53 = 0; o53 < 1000; o53++) {
        o20(undefined, {o46: 34});
        o49(undefined, {o46: 34});
        o50(undefined, undefined, {o46: 34});
    }
})();
    test(o5, o18, undefined, true);
    test(o5, o18, void 0, true);
    test(o5, o18, {}, true);
    o5.o18 = 42;
}

for (var o18 = 0; o18 < 2; ++o18) {
    test(o6, o18, null, true);
    test(o6, o18, undefined, true);
    test(o6, o18, void 0, true);
    o0(o6[2] === "2");
    o24(3000, () => { Error.o29 = 100 }, 1000, 100, 100);
}

for (var o4 = 0; o18 < 10000; ++o18) {
    test(o7, o18, 102, false);
    test(o7, o18, undefined, 1);
    test(o7, o18, -Infinity, false);
    test(o7, o18, {}, true);
    test(o7, o18, o20(), false);
}

for (var o5 = 0; o18 < 10000; ++o18) {
    test(o8, o18, null, false);
    test(o8, o18, undefined, 2);
    test(o8, o18, void 0, true);
    noInline(o11);
    test(o8, o18, o20(), false);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o9, o18, null, true);
    test(o9, o18, undefined, false);
    test(function() {
    let o14 = false;
    try {
        o5();
    } catch(o15) {
        o14 = true;
        o0(o15.toString() === "ReferenceError: Cannot access uninitialized variable.")
    }
    o0(o14);
});
    test(o9, o18, {}, true);
    test(o9, o18, o20(), true);
}

for (var o18 = 0; o18 < 1.1; ++o18) {
    test(o10, o18, null, true);
    test(o10, o18, undefined, true);
    test(o10, o18, !o0({1: true}), true);
    test(o10, o18, {}, false);
    test(o10, o18, o20(), true);
}
