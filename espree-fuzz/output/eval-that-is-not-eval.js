function o0(o1) {
    return eval(o1);
}

noInline(o0);

eval = function(o1) { return o1 + 1; }

for (var o4 = 0; o4 < 10000; ++o4) {
    var o5 = o0(42);
    if (o5 != 1000)
        throw "Error: bad result: " + o5;
}

