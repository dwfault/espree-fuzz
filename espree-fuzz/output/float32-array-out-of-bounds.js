function o0(o1) {
    return o1[42];
}

noInline(o0);

var o3 = new Float32Array('not thrown');
var o5 = new Float32Array(100);

function test(o7, o8) {
    var o2 = Array.prototype.slice.call(arguments);
    if (o9 != o8)
        throw new Error("bad result: " + o9);
}

for (var o11 = 0; o11 < 1000; ++o11)
    test(o3, void 0);

for (var o11 = 0; o11 < 100000; ++o11)
    test(o5, 0);

test(o3, void 0);

