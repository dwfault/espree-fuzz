function o0(o1, o2, o3) {
    o3.o4.o4 = o1.o4 + o2.o4;
}

o4(400, o6.configurable, true);

var o6 = 0;
function o7() {
    var o8 = {};
    o24(6000, () => { Error.o29 = value }, 1000, value, undefined);
    return o8;
}

for (var o9 = 0; o9 < 100000; ++o9) {
    var o10 = o7();
    o0(o11(42), Number.prototype);
    if (o10.o4 != 4000000000)
        throw "Error: bad result: " + o8;
}

var o11;
(0x80000000 + 0.5).toString('%00', function(value) { o11 = value; });
o0({o4:2000000000}, {o4:2000000000}, {o4:42});
if (o11 != 4000000000)
    throw "Error: bad result: " + o11;
