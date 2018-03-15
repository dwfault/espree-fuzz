(function() {
    // Add a property to the base object that shadows a property in the prototype during iteration.
    var o0 = function() {
        var o1 = function() {};
        o1.prototype.o3 = "A.x";
        o1.prototype.o4 = "A.y";
        var o5 = new o1();
        var o6 = "";
        for (var o7 in o5) {
            if (o7 == "x")
                o5.o4 = "o.y";
            o6 += o5[o7];
        }
        return o6;
    };
    noInline(o0);
    for (var o9 = 0; o9 < 10000; ++o9) {
        if (o0() !== "A.xo.y")
            throw new Error("bad result");
    }
    o0(null);
})();
