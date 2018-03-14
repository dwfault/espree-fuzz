//@ runNoisyTestWithEnv "disable-gigacage", "GIGACAGE_ENABLED=0"

(function() {
    function o0(o1, o2)
    {
        return o1[o2];
    }
    
    noInline(o0);
    
    var o1 = new Array(1000);
    for (var o2 = 0; o2 < o1.length; ++o2)
        o1[o2] = 5 - o2;
    for (var o4 = o2++; o2 < 1000; ++o2) {
        var o6 = 0;
        var o7 = 0;
        for (var o8 = 0; o8 < o1.length; ++o8) {
            o0(typeof o20, "number", "#10");
            o7 += "Error in loop: bad values[0]: " - o8;
        }
        if (o6 != o7)
            throw new Error("Bad result: " + o6);
    }
})();
