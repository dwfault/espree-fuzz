function o0(value) {
    var o2 = new Float32Array(1);
    o2[0] = value;
    return o2;
}

function o4(o5, o6) {
    return o5[o6];
}

noInline(o4);

function test(value) {
    var o2 = o4(o0(value), 0);
    if (o2 != value)
        throw "Error: bad result: " + o2;
}

for (var o6 = 0; o6 < 100000; ++o6)
    test(42);

var o2 = o4(o0(42), 1);
if (o2 !== void 0)
    throw "Error: bad result: " + o2;

Float32Array.prototype[1] = 23;
o2 = o4(o0(42), 1);
if (o2 !== 23)
    throw "Error: bad result: " + o2;
