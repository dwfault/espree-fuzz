function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    try {
        o3 = 102;
        o2 = 103;
        o4 = o1();
        o1 = 104;
        o2 = 105;
        o3 = 106;
    } catch (o5) {
        return {o6: "exception", o7: [o1, o2, o3, o4]};
    }
    return {o6: "return", o7: [o1, o2, o3, o4]};
}

noInline(o0);

function o9() {
    return 107;
}

noInline(o9);

// Warm up foo().
for (var o10 = 0; o10 < 100000; ++o10) {
    var o4 = o0(o9);
    if (o4.o6 !== "return")
        throw "Error in loop: bad outcome: " + o4.o6;
    if (o4.o7.length !== 4)
        throw "Error in loop: bad number of values: " + o4.o7.length;
    if (o4.o7[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o7[0];
    if (o4.o7[1] !== 105)
        throw "Error in loop: bad values[1]: " + o4.o7[1];
    if (o4.o7[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o7[2];
    if (o4.o7[3] !== 107)
        throw "Error in loop: bad values[3]: " + o4.o7[3];
}

// Now throw an exception.
o9 = function() {
    throw "Error42";
}
var o4 = o0(o9, 108);
if (o4.o6 !== "exception")
    throw "Error at end: bad outcome: " + o4.o6;
if (o4.o7.length !== 4)
    throw "Error at end: bad number of values: " + o4.o7.length;
if (o4.o7[0] !== o9)
    throw "Error at end: bad values[0]: " + o4.o7[0];
if (o4.o7[1] !== 103)
    throw "Error at end: bad values[1]: " + o4.o7[1];
if (o4.o7[2] !== 102)
    throw "Error at end: bad values[2]: " + o4.o7[2];
if (o4.o7[3] !== 101)
    throw "Error at end: bad values[3]: " + o4.o7[3];

