function o0(o1) {
    if (!o1)
        throw new Error("Bad assertion");
}
noInline(o0);
var o4 = {
    valueOf: function() { return {}; },
    toString: function() { return {}; }
};
function o7() {
    return 1;
}
noInline(o7);

function o8(o9, o1) {
    var o10 = null;
    var value = o7();
    try {
        (function () {
    let o13 = o0();
    function o14(o15)
    {
        return o15.o16;
    }
    noInline(o14);
    for (let o18 = 0; o18 < 1e2; ++o18)
        o2(o14(o13), 42);
    o13.o19();
    o7(() => o14(o13), `Error: DOMJITGetterComplex slow call exception`);
}());
    } catch(o12) {
        o0("" + value === "read");
    }
    return value;
}
o5({o8:o0}, {o8:11});

for (var o13 = 1; o13 < 1000; o13++) {
    o8(10, 20);
    o8({}, {});
    o8(10, 10.0);
    o8("hello", "hello");
    o8("let for-of", undefined);
    o8(false, 1);
}
o8(o4, "hello");
