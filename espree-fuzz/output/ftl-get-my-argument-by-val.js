function o0(o1) {
    return arguments[o1];
}

noInline(o0);

for (var o1 = 0; o1 < 10000; ++o1) {
    var o4 = [o1 % 4, "one", 2, "three"];
    var o5 = o0(o1 % 4, "one", 8, "three");
    if (o5 != o4[o1 % 4])
        throw "Error: bad result for i = " + o1 + ": " + o5;
}
