function o0(o1){
    return o1.getInt8(42);
}

noInline(o0);

var o1 = new DataView(new ArrayBuffer(43));
o1.setInt8(42, 43);
for (var o7 = 0; o7 < 100000; ++o7) {
    var o8 = o0(o1);
    if (o8 != 43)
        throw "Error: bad result: " + o8;
}

for (var o7 = 0; o7 < 10; ++o7) {
    var o9 = false;
    try {
        o0(new DataView(new ArrayBuffer(42)));
    } catch (o10) {
        o9 = true;
        if (o10.o11.indexOf("Out of bounds") < 0)
            throw "Error: bad exception: " + o10.o11;
    }
    if (!o9)
        throw "Error: did not throw";
}
