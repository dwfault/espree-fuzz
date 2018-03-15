function o0() {
    return function o1(o2) {
        var o3 = o1;
        var o4 = eval(o2);
        return [
            o3,
            o1,
            function () {
                return o1;
            },
            o4
        ];
    }
}

function o6() {
    var o1 = o0();
    
    function o7(o4, o8, o9) {
        if (o4[0] !== o1)
            throw "Error: bad first entry: " + o4[0];
        if (o4[1] !== o8)
            throw "Error: bad first entry: " + o4[1];
        var o10 = o4[2]();
        if (o10 !== o8)
            throw "Error: bad second entry: " + o4[2] + "; returned: " + o10;
        if (o4[3] !== o9)
            throw "Error: bad third entry: " + o4[3] + "; expected: " + o9;
    }
    
    o7(o1("42"), o1, 42);
    o7(o1("bar"), o1, o1);
    o7(o1("var bar = 42; function fuzz() { return bar; }; fuzz()"), 42, 42);
}

// Execute check() more than once. At the time that we wrote this regression test, trunk would fail on
// the second execution. Executing 100 times would also gives us some optimizing JIT coverage.
for (var o11 = 0; o11 < 100; ++o11)
    o6();

