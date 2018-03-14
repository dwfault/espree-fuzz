//@ runDefault

(function() {
    var o0 = {o1:42};
    o0.__defineGetter__("f", function() { return this.o1 * 100; });
    var o3 = 0;
    var o4 = 50000;
    function o5(o0) {
        return o0.o6 + 11;
    }
    noInline(o5);
    for (var o8 = 0; o8 < o4; ++o8) {
        o3 += o5(o0);
    }
    if (o3 != o4 * (42 * 100 + 11))
        throw "Error: bad result: " + o3;
    o0.o1 = 1000000000;
    o3 = 0;
    for (var o8 = 0; o8 < o4; ++o8) {
        o3 += o5(o0);
    }
    if (o3 != o4 * (1000000000 * 100 + 11))
        throw "Error: bad result (2): " + o3;
})();

let o0;

let o1 = {
    set o2(value)
    {
        noInline(o0);
    }
};

Object.freeze(o1);

o1.o2 = 42;

if (o0 != 42)
    throw "b" + o0;

