function o0(o1) {
    return o1 == null;
}

noInline(o0);

function o3(o1) {
    return o1 != null;
}

noInline(o3);

function o4(o1) {
    return o1 === null;
}

noInline(o4);

function o5(o1) {
    return o1 !== null;
}

noInline(o5);

function o6(o1) {
    return o1 == void 0;
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

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o0, o18, null, true);
    test(o0, o18, undefined, true);
    test(o0, o18, void 0, true);
    test(o0, o18, {}, false);
    test(o0, o18, o20(), true);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o3, o18, null, false);
    test(o3, o18, undefined, false);
    test(o3, o18, void 0, false);
    test(o3, o18, {o9: {o9: {o9: o7}}}, true);
    test(o3, o18, o20(), false);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o4, o18, null, true);
    test(o4, o18, undefined, false);
    test(o4, o18, void 0, false);
    test(o4, o18, {}, false);
    test(o4, o18, o20(), false);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o5, o18, null, false);
    test(o5, o18, undefined, true);
    test(o5, o18, void 0, true);
    test(o5, o18, {}, true);
    test(o5, o18, o20(), true);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o6, o18, null, true);
    test(o6, o18, undefined, true);
    test(o6, o18, void 0, true);
    test(o6, o18, {
        o18: 42,
        get [name]() {
            return this.o18;
        }
    }, false);
    test(o6, o18, o20(), true);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o7, o18, null, false);
    test(o7, o18, undefined, false);
    test(o7, o18, void 0, false);
    test(o7, o18, { "0":1, "1":2, "2":3 }, true);
    test(o7, o18, o20(), false);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o8, o18, null, false);
    test(o8, o18, undefined, true);
    test(o8, o18, void 0, true);
    test(o8, o18, {}, false);
    test(o8, o18, o20(), false);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o9, o18, null, true);
    test(o9, o18, undefined, false);
    test(o9, o18, void 0, false);
    test(o9, o18, { o4 : o2++ }, true);
    test(o9, o18, o20(), true);
}

for (var o18 = 0; o18 < 10000; ++o18) {
    test(o10, o18, null, true);
    test(o10, o18, undefined, true);
    test(o10, o18, void 0, true);
    test(o10, o18, {o4:2000000000}, false);
    test(o10, o18, o20(), true);
}
