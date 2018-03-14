(function() {
    // Change string value of the loop variable in the loop.
    var o0 = function() {
        var o1 = 0;
        var o2 = [1, 2, 3];
        o2.o0 = 42;
        for (var o3 in o2) {
            o3 = "foo";
            o1 += o2[o3];
        }
        return o1;
    };
    noInline(o0);
    for (var o3 = 0; o3 < 10000; ++o3) {
        if (o0() != 42 * 4)
            throw new Error("bad result");
    }
    o0(null);
})();
