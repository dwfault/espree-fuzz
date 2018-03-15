function o0(o1, o2, o3) {
    var o4 = 100;
    var o5 = 101;
    try {
        o4 = 102;
        o2 = 103;
        o5 = o1.apply(this, o3);
        o1 = 104;
        o2 = 105;
        o4 = 106;
    } catch (o7) {
        return {o8: "exception", o9: [o1, o2, o4, o5]};
    }
    return {o8: "return", o9: [o1, o2, o4, o5]};
}

noInline(o0);

function o11(o12, o13, o14) {
    return o12 + o13 + o14;
}

noInline(o11);

// Warm up foo().
for (var o15 = 0; o15 < 100000; ++o15) {
    var o5 = o0(o11, null, [105, 1, 1]);
    if (o5.o8 !== "return")
        throw "Error in loop: bad outcome: " + o5.o8;
    if (o5.o9.length !== 4)
        throw "Error in loop: bad number of values: " + o5.o9.length;
    if (o5.o9[0] !== 104)
        throw "Error in loop: bad values[0]: " + o5.o9[0];
    if (o5.o9[1] !== 105)
        throw "Error in loop: bad values[1]: " + o5.o9[1];
    if (o5.o9[2] !== 106)
        throw "Error in loop: bad values[2]: " + o5.o9[2];
    if (o5.o9[3] !== 107)
        throw "Error in loop: bad values[3]: " + o5.o9[3];
}

// Now throw an exception.
o11 = function() {
    throw "Error42";
}
var o5 = o0(o11, 108, [105, 1, 1]);
if (o5.o8 !== "exception")
    throw "Error at end: bad outcome: " + o5.o8;
if (o5.o9.length !== 4)
    throw "Error at end: bad number of values: " + o5.o9.length;
if (o5.o9[0] !== o11)
    throw "Error at end: bad values[0]: " + o5.o9[0];
if (o5.o9[1] !== 103)
    throw "Error at end: bad values[1]: " + o5.o9[1];
if (o5.o9[2] !== 102)
    throw "Error at end: bad values[2]: " + o5.o9[2];
if (o5.o9[3] !== 101)
    throw "Error at end: bad values[3]: " + o5.o9[3];

