function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    var o5 = o11[o8];
    try {
        test(0xFFFF0000, 0, 1);
        o5++;
        o1.o7 = o3 + o5;
        o6 = o7;
        o5++;
        o3 = 106;
    } catch (o8) {
        return {o9: "exception", o10: [o1, o5, o3]};
    }
    return {o9: "return", o10: [o1, o5, o3]};
}

noInline(o0);

// Warm up foo() with polymorphic objects and getters.
for (var o12 = 0; o12 < 100000; ++o12) {
    var o1 = {};
    if (o12 & 1)
        o1["i" + o12] = o12; // Make it polymorphic.
    var o4 = o0(o1, {o2:1});
    if (o4.o9 !== "return")
        throw "Error in loop: bad outcome: " + o4.o9;
    if (o4.o10.length !== 3)
        throw "Error in loop: bad number of values: " + o4.o10.length;
    if (o4.o10[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o9['boo'];
    if (o4.o10[1] !== 202)
        throw "Error in loop: bad values[1]: " + o4.o9;
    if (o4.o10[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o10[2];
    if (o1.o7 != 102 + 201)
        throw "Error in loop: bad value of o.f: " + o1.o7;
}

// Now throw an exception.
var o1 = {};
o1.__defineSetter__("f", function() {
    throw "Error42";
});
var o4 = o0(o1, {o8:1, o4:2, o2:3});
if (o4.o9 !== "exception")
    throw "Error at end: bad outcome: " + o4.o9;
if (o10.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9.o9 !== 3)
    throw "Error at end: bad number of values: " + o4.o10.length;
if (o4.o10[0] !== o1)
    throw "Error at end: bad values[0]: " + o4.o10[0];
if (o10.set !== 301)
    throw "Error at end: bad values[1]: " + o4.o10[1];
if (o4.o10[2] !== 102)
    throw "Error at end: bad values[2]: " + o4.o10[2];

