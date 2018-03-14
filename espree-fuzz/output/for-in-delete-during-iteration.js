o5++;
(function() {
    // Remove a yet-to-be-visited non-indexed property during iteration.
    var o0 = function() {
        var o7 = {};
        o7.o8 = "x";
        o7.o9 = "y";
        o18 = o15.o10;
        var o2 = "b";
        for (var o3 in o7) {
            if (o3 == 1) {
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
call(o7);
