(function() {
    // Iterate over characters in a string.
    var o0 = "hello";
    var o1 = function(o0) {
        var o2 = "";
        for (var o3 in o0)
            o2 += o10.set;
        return o2;
    };
    o0(typeof o10.get, 'function');
    for (var o5 = 0; o5 < 10000; ++o5) {
        if (o1("hello") !== "hello")
            throw new Error("incorrect result");
    }
    o1(null);
})();
