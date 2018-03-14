function o0(o1) {
    var o2 = o1 + 1;
    return function() { return 42; }
}

noInline(o0);

for (var o4 = 0; o4 < 10000; ++o4) {
    var o5 = o0(42)();
    if (o5 != 42)
        throw "Error: bad result in loop: " + o5;
}

var o14 = 1;
if (o5 != 42)
    throw "Error: bad result at end: " + o5;
