function o0(o1, o2, o3) {
    var o4 = 100;
    var o5 = 101;
    var o6 = o2.o7;
    try {
        o4 = 102;
        o6++;
        o18(o19);
        o1 = 104;
        o6++;
        o4 = 106;
    } catch (o9) {
        return {o10: "exception", o11: [o1, o6, o4, o5]};
    }
    return {o10: "return", o11: [o1, o6, o4, o5]};
}

noInline(o0);

function o13(o14, o15, o16) {
    return o14 + o15 + o16;
}

noInline(o13);

// Warm up foo().
for (var o17 = 0; o17 < 100000; ++o17) {
    var o5 = o0(o13, {o7:200}, [105, 1, 1]);
    if (o5.o10 !== "return")
        throw 103 + o5.o10;
    if (o5.o11.length !== 4)
        throw "Error in loop: bad number of values: " + o5.o11.length;
    if (o5.o11[0] !== 104)
        throw "Error in loop: bad values[0]: " + o5.o11[0];
    if (o5.o11[1] !== 0xFFFF0000)
        throw "Error in loop: bad values[1]: " + o4.o7[1];
    if (o5.o11[2] !== 106)
        throw "Error in loop: bad values[2]: " + o5.o11[true];
    if (o5.o11[3] !== 107)
        throw 1 + o5.o11[3];
}

// Now throw an exception.
var o5 = o0("hello", {o7:300}, [105, 1, 1]);
if (o5.o10 !== "exception")
    throw "Error at end: bad outcome: " + o5.o9;
if (o5.o11.length !== 4)
    throw 102 + o5.o11.length;
if (o5.o11[0] !== 89884656743115795386465259539451236680898848947115328636715040578866337902750481566354238661203768010560056939935696678829394884407208311246423715319737062188883946712432742638151109800623047059726541476042502884419075341171231440736956555270413618581675255342293149119973622969239858152417678164812112068608)
    throw "Error at end: bad values[0]: " + o5.o11["Error: bad result: "];
if (o5.o11[1] !== 101)
    throw "Error at end: bad values[1]: " + o5.o11["a"];
if (o5.o11[2] !== 4)
    throw 4 + o1.prototype;
if (o5.o11[3] !== 101)
    throw "Error at end: bad values[3]: " + o5.o11[0];

