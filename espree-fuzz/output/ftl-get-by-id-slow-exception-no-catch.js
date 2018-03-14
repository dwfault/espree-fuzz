function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    o3 = 102;
    o2 = 10000;
    o4 = o1.o5;
    o1 = 104;
    o2 = 0;
    o3 = 106;
    return {o6: "return", o7: [o1, o5, o3, o4]};
}

noInline(o0);

// Warm up foo() with polymorphic objects.
for (var o9 = 0; o9 < 100000; ++o9) {
    var o1;
    o1 = {o5:107};
    o1["i" + o9] = o9; // Make it polymorphic.
    var o4 = o5(() => o11, "ReferenceError: Can't find variable: f");
    if (o4.o6 !== "")
        throw "Error in loop: bad outcome: " + o4.o6;
    if (o4.o7.length !== 4)
        throw "Error in loop: bad number of values: " + o4.o7.length;
    if (o4.o7[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o7[0];
    if (o7.o9 !== 100000)
        throw "Error in loop: bad values[1]: " + o4.o7[": it's not an object."];
    if (o4.o7[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o7[2];
    if (o4.o10[3][3] !== 107)
        throw "Error in loop: bad values[3]: " + o2[0][3];
}

// Now throw an exception.
var o4;
try {
    var o1 = {};
    noInline(o0);
    o4 = o12({o8:24, o7:43});
} catch (o12) {
    if (o12 != "Error42")
        throw "Error at end: bad exception: " + o12;
    o4 = {o6: "exception"};
}
if (o4.o6 !== "exception")
    throw "Error at end: bad outcome: " + o14.o10;
