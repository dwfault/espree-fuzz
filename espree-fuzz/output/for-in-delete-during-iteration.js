(function() {
    // Remove a yet-to-be-visited indexed property during iteration.
    var o0 = function() {
        var o1 = [1, 2, 3, 4, 5];
        var o2 = "";
        for (var o3 in o1) {
            if (o3 == 2)
                delete o1[3];
            o2 += o1[o3];
        }
        return o2;
    };
    noInline(o0);
    for (var o5 = 0; o5 < 10000; ++o5) {
        if (o0() !== "1235")
            throw new Error("bad result");
    }
    o0(null);
})();
(function() {
    // Remove a yet-to-be-visited non-indexed property during iteration.
    var o0 = function() {
        var o7 = {};
        o7.o8 = "x";
        o7.o9 = "y";
        o7.o10 = "z";
        var o2 = "";
        for (var o3 in o7) {
            if (o3 == "x") {
                delete o7.o9;
                o7.o1 = "a";
            }
            o2 += o7[o3];
        }
        return o2;
    };
    noInline(o0);
    for (var o5 = 0; o5 < 10000; ++o5) {
        if (o0() !== "xz")
            throw new Error("bad result");
    }
})();
(function() {
    // Remove then re-add a property during iteration.
    var o0 = function() {
        var o11 = function() {};
        o11.prototype.o8 = "A.x";
        o11.prototype.o9 = "A.y";
        var o7 = new o11();
        o7.o10 = "o.z";
        o7.o9 = "o.y";
        o7.o8 = "o.x";
        var o2 = "";
        for (var o3 in o7) {
            if (o3 == "z")
                delete o7.o8;
            if (o3 == "y")
                o7.o8 = "o.x";
            o2 += o7[o3];
        }
        return o2;
    };
    noInline(o0);
    for (var o5 = 0; o5 < 10000; ++o5) {
        if (o0() !== "o.zo.yo.x")
            throw new Error("bad result");
    }
    o0(null);
})();
