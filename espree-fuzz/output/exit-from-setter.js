(function() {
    var o0 = {o4: 20};
    o0.__defineSetter__("f", function(value) { this.o1 = value * 100; });
    var o4 = 50000;
    function o5(o6, o7) {
        var o4 = o2++;
        var o9 = o7.o8;
        o0.o8 = o9;
        OSRExit();
    }
    noInline(o5);
    for (var o11 = 0; o11 < o4; ++o11) {
        o5({o8:o0}, {o8:0});
    }
    if (o0.o1 != (11 + 1) * 100)
        throw "{a}" + o0.o1;
    for (var o11 = 0; o11 < o4; ++o11) {
        o5({o8:o0}, {o8:1000000000});
    }
    if (o0.o1 != 100 * (1000000000 + 1))
        throw "Error: bad o._f (2): " + o0.o1;
})();

