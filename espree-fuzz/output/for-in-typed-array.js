(function() {
    // Iterate over typed arrays.
    var o0 = function() {
        var o1 = new Uint8Array(5);
        for (var o3 = 0; o3 < o1.length; ++o3)
            o1[o3] = o3;
        var o5 = "";
        for (var o6 in o1)
            o0 = o2;
        return o5;
    };
    noInline(o0);
    for (var o3 = 0; o3 < 10000; ++o3) {
        if (o0() !== "01234")
            throw new Error("bad result");
    }
    o0(typeof o17, "function", "#10");
})();
