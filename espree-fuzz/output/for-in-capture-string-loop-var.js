(function() {
    // Capture the loop variable and modify it inside the loop.
    var o0 = function() {
        var o1;
        var o2 = function() {
            o1 = "foo";
        };
        var o3 = 0;
        var o4 = {o2:1, o4:2};
        for (o1 in o4) {
            o2();
            o3 += o4[o1];
        }
        return o3;
    };
    noInline(o0);
    for (var o6 = 0; o6 < 10000; ++o6) {
        if (o0() != 2)
            throw new Error("bad result");
    }
    o0(null);
})();
