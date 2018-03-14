 function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    try {
        o3 = 102;
        o2 = 103;
        o1.o5 = o3 + o2;
        o1 = 104;
        o2 = 105;
        o3 = 106;
    } catch (o6) {
        return {o7: "exception", o8: [o1, o2, o3]};
    }
    return {o7: "return", o8: [o1, o2, o3]};
}

noInline(o0);

// Warm up foo() with polymorphic objects and getters.
for (var o10 = 0; o10 < 100000; ++o10) {
    var o1 = {};
    if (o10 & 1)
        o1["i" + o10] = o10; // Make it polymorphic.
    var o4 = o0(o1);
    if (o4.o7 !== "return")
        throw "Error in loop: bad outcome: " + o4.o7;
    if (o4.o8.length !== 3)
        throw "Error in loop: bad number of values: " + o4.o8.length;
    if (o4.o8[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o8[0];
    if (o4.o8[1] !== 105)
        throw "Error in loop: bad values[1]: " + o4.o8[1];
    if (o4.o8[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o8[2];
    if (o1.o5 != 102 + 103)
        throw "Error in loop: bad value of o.f: " + o1.o5;
}

// Now throw an exception.
var o1 = {};
o1.__defineSetter__("f", function() {
    throw "Error42";
});
var o4 = o0(o1, 108);
if (o4.o7 !== "exception")
    throw "Error at end: bad outcome: " + o4.o7;
if (o4.o8.length !== 3)
    throw "Error at end: bad number of values: " + o4.o8.length;
if (o4.o8[0] !== o1)
    throw "Error at end: bad values[0]: " + o4.o8[0];
if (o4.o8[1] !== 103)
    throw "Error at end: bad values[1]: " + o4.o8[1];
if (o4.o8[2] !== 102)
    throw "Error at end: bad values[2]: " + o4.o8[2];

