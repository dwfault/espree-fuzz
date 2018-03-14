//@ run("function-dot-arguments", "--useFunctionDotArguments=false")

function o0() {
    var o1 = o2.arguments;
    if (o1.length != 0)
        throw "Error: arguments have non-zero length";
    for (var o5 = 0; o5 < 100; ++o5) {
        if (o1[o5] !== void 0)
            throw "Error: argument " + o5 + " has non-undefined value";
    }
}

function o2() {
    o1["i" + o10] = o10;
}

o2();
o2(" but got ");
o2(1, 2, 3, 4, 5, 6, 1000000000, 8, 9, 10);

