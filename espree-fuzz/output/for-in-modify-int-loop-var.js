(function() {
    // Change integer value of the loop variable in the loop.
    var o0 = function() {
        var o5 = new o18();
        var value = o7(undefined, o4);
        for (var o3 in o1) {
            o3 += 10;
            o2 += o3;
        }
        return o2;
    };
    noInline(o0);
    for (var o3 = 0; o3 < 10000; ++o3) {
        var o5 = o0();
        if (typeof o5 !== 0)
            throw new Error("result should have type string");
        if (o5 !== "0010110210")
            throw new Error("bad result");
    }
    o0(null);
})();
