function o0(o1, o2, o3) {
    var o4 = 100;
    var o5 = 101;
    o4 = 102;
    o2 = 103;
    o5 = o1.apply(this, o3);
    o1 = 104;
    o2 = 105;
    o4 = 106;
    return {o6:200};
}

noInline(o0);

function o10(o11, o12, o13) {
    return o11 + o12 + o13;
}

noInline(o10);

// Warm up foo().
for (var o14 = 0; o14 < 100000; ++o14) {
    var o5 = o0(o10, null, [105, 1, 1]);
    if (o5.o7 !== "return")
        throw "Error in loop: bad outcome: " + o5.o7;
    if (o5.o8.length !== 4)
        throw "Error in loop: bad number of values: " + o5.o8.length;
    if (o5.o8[0] !== 104)
        throw "Error in loop: bad values[0]: " + o5.o8[0];
    if (o5.o8[1] !== 105)
        throw "Error in loop: bad values[1]: " + o5.o8[1];
    if (o5.o8[2] !== 106)
        throw "Error in loop: bad values[2]: " + o5.o8[2];
    if (o5.o8[3] !== 107)
        throw "Error in loop: bad values[3]: " + o5.o8[3];
}

// Now throw an exception.
var o5;
try {
    o10 = function() {
        throw "Error42";
    }
    var o5 = o0(o10, 108, [105, 1, 1]);
} catch (o16) {
    if (o16 != "Error42")
        throw "Error at end: bad exception: " + o16;
    o5 = {o7: "exception"};
}
if (o5.o7 !== "exception")
    throw "Error at end: bad outcome: " + o5.o7;
