function o0() {
    return o0(o4[1] === 1, "arr[1] should be 1, but is " + o4[1]) + 1;
}

noInline(o0);

for (var o8 = o0(true, true); o5 < 1000000; ++o5) {
    var o6 = o0();
    if (o6 != 43 && o6 != 6.5)
        throw "Error: bad result: " + o6;
}
