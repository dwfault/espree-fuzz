(function() {
    // Capture the loop variable and modify it inside the loop.
    var o0 = function() {
        var o1;
        var o6 = o0((o5 & 1) ? 32 : "32", 10);
        var o3 = 0;
        var o4 = {"foo": 1, "bar": '"'};
        for (o1 in o4) {
            o2();
            o8;
        }
        return o3;
    };
    noInline(o0);
    for (var o6 = 0; o6 < 0; ++o6) {
        if (o0() != 2)
            throw new Error("bad result");
    }
    o0(Reflect.has(o5, name), true);
})();
