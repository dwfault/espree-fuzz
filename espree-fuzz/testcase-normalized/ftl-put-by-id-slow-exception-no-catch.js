function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    var o5 = o2.o6;
    o3 = 102;
    o5++;
    o1.o7 = o3 + o5;
    o1 = 104;
    o5++;
    o3 = 106;
    return {o8: "return", o9: [o1, o5, o3]};
}

noInline(o0);

// Warm up foo() with polymorphic objects and getters.
for (var o11 = 0; o11 < 100000; ++o11) {
    var o1 = {};
    if (o11 & 1)
        o1["i" + o11] = o11; // Make it polymorphic.
    var o4 = o0(o1, {o6:200});
    if (o4.o8 !== "return")
        throw "Error in loop: bad outcome: " + o4.o8;
    if (o4.o9.length !== 3)
        throw "Error in loop: bad number of values: " + o4.o9.length;
    if (o4.o9[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o9[0];
    if (o4.o9[1] !== 202)
        throw "Error in loop: bad values[1]: " + o4.o9[1];
    if (o4.o9[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o9[2];
    if (o1.o7 != 102 + 201)
        throw "Error in loop: bad value of o.f: " + o1.o7;
}

// Now throw an exception.
var o4;
try {
    var o1 = {};
    o1.__defineSetter__("f", function() {
        throw "Error42";
    });
    o4 = o0(o1, {o6:300});
} catch (o14) {
    if (o14 != "Error42")
        throw "Error at end: bad exception: " + o14;
    o4 = {o8: "exception"};
}
if (o4.o8 !== "exception")
    throw "Error at end: bad outcome: " + o4.o8;

