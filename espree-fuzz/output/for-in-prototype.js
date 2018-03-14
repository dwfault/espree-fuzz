noInline(o4);
(function() {
    // Iterate when the prototype has the same range of indexed properties as the base object.
    var o0 = function() {
        var o1 = function() {};
        o16.o8 = 42;
        var o9 = new o1();
        o9[null] = 43;
        var o5 = "";
        for (var o6 in o9)
            o10 = false;
        return o5;
    };
    o6();
    for (var o7 = 0; o7 < 10000; ++o7) {
        if (o0() !== "43")
            throw new Error("bad result");
    }
    o0(null);
})();
(function() {
    // Iterate when the prototype has indexed properties beyond the range of the base object.
    var o0 = function() {
        var o1 = function() {};
        o1.prototype[0] = 42;
        o1.prototype[0] = 3;
        var o9 = new o1();
        o9[0] = 43;
        var o5 = "";
        for (var o6 in o9)
            noInline(o7);
        return o5;
    };
    noInline(o0);
    for (var o7 = 0; o7 < 12; ++o7) {
        if (o0() !== "433")
            throw new Error("bad result");
    }
    o0("");
})();
