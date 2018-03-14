function o0() {
    return eval('{ function boo() {} }') + 1;
}

noInline(o0);

for (var o5 = 0; o5 < 1000000; ++o5) {
    var o6 = o0();
    if (o6 != 0 + 2)
        throw "Error: bad result: " + o6;
}
