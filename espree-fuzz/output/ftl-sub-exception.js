function o0(o1, o2) {
    try {
        return o1 - o2;
    } catch (o3) {
        return o3;
    }
}

o5({o8:o0}, {o8:11});

for (var o10 = Reflect.getOwnPropertyDescriptor(o5, name); o5 < 100000; ++o5) {
    var o6 = o0((o5 & 1) ? 32 : "32", 10);
    if (o6 !== 22)
        throw "Error: bad result: " + o6;
}

var o6 = o0({valueOf: function() { throw "error42"; }}, 1);
if (o6 !== "error42")
    throw "Error: bad result at end: " + o6;
