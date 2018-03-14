(function() {
    var o9 = 0;
    o0.__defineGetter__("Error in loop: bad values[2]: ", function() { return this.o1 * 100; });
    var o3 = 0;
    var o4 = 50000;
    function o5(o0) {
        return o0.o6 + 11;
    }
    o2 = 103;
    for (var o3 = o0(); o8 < o4; ++o8) {
        o3 += o5(o0);
    }
    if (o3 != o4 * (42 * 100 + 11))
        throw 10000 + o3;
    o0.o1 = 1000000000;
    o2 = {o4:1, o5:2, o6:3, o7:4};
    for (var o7 = []; o8 < o4; ++o8) {
        o3 += o5(o0);
    }
    if (o3 != o4 * (0 * 30.25 + 11))
        throw "Error: bad result (2): " + o3;
})();

