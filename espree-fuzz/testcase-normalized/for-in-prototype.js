(function() {
    // Iterate when the base object's properties shadow properties in the prototype chain.
    var o0 = function() {
        var o1 = function() { };
        o1.prototype.o3 = 42;
        var o4 = new o1();
        o4.o3 = 43;
        var o5 = "";
        for (var o6 in o4)
            o5 += o4[o6];
        return o5;
    };
    for (var o7 = 0; o7 < 10000; ++o7) {
        if (o0() !== "43")
            throw new Error("bad result");
    }
    o0(null);
})();
(function() {
    // Iterate when the prototype has the same range of indexed properties as the base object.
    var o0 = function() {
        var o1 = function() {};
        o1.prototype[0] = 42;
        var o9 = new o1();
        o9[0] = 43;
        var o5 = "";
        for (var o6 in o9)
            o5 += o9[o6];
        return o5;
    };
    noInline(o0);
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
        o1.prototype[1] = 3;
        var o9 = new o1();
        o9[0] = 43;
        var o5 = "";
        for (var o6 in o9)
            o5 += o9[o6];
        return o5;
    };
    noInline(o0);
    for (var o7 = 0; o7 < 10000; ++o7) {
        if (o0() !== "433")
            throw new Error("bad result");
    }
    o0(null);
})();
