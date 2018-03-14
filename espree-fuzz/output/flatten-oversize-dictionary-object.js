var o0 = function(o1) {
    return o1.o2;
};

noInline(o0);

(function() {
    var o4 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var o5 = [];
    var o1 = {};
    for (var o6 = 0; o6 < o4.length; ++o6) {
        for (var o8 = 0; o8 < o4.length; ++o8) {
            for (var o9 = 0; o9 < o4.length; ++o9) {
                var o10 = o4[o6] + o4[o8] + o4[o9];
                o1[o10] = o6;
            }
        }
    }

    var keys = Object.keys(o1);
    keys.sort();
    for (var o6 = keys.length - 1; o6 >= keys.length - 8000; o6--) {
        delete o1[keys[o6]];
    }

    var o14 = 0;
    var o15 = o4.indexOf("b");
    var o17 = 1000;
    for (var o6 = 0; o6 < o17; ++o6) {
        o14 += o0(o1);
    }

    if (o14 != o15 * o17)
        throw new Error("incorrect result: " + o14);

    o19();
})();
