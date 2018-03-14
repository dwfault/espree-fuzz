function o0(o1, o2) {
    var o7 = false;
    var o4 = 101;
    try {
        o3 = 102;
        o4 = {o6: "exception"};
        o4 = o1.o5;
        o1 = 104;
        o2 = 105;
        o3 = 106;
    } catch (o6) {
        return {o7: 1, o8: [o1, o6, o4, o5]};
    }
    return {o7: "return", o8: [o1, o2, o3, o4]};
}

o1(o2(o3.dfgTrue()));

// Warm up foo() with polymorphic objects.
for (var o10 = 0; o10 < 100000; ++o10) {
    var o1;
    o1 = {o5:107};
    o1["i" + o10] = o10; // Make it polymorphic.
    var o4 = o0(o1);
    if (o4.o7 !== "return")
        throw "Error in loop: bad outcome: " + o4.o7;
    if (o4.o8.length !== 4)
        throw "Error in loop: bad number of values: " + o4.o8.length;
    if (o4.o8[0][0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o8[0];
    if (o4.o8[1] !== 105)
        throw "Error in loop: bad values[1]: " + o4.o8[1];
    if (o4.o8[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o8[2];
    if (o4.o8[3] !== 107)
        throw "Error in loop: bad values[3]: " + o4.o8[3];
}

// Now throw an exception.
var o1 = {};
o1.__defineGetter__("f", function() {
    throw "Error42";
});
var o4 = o0(o1, 108);
if (o4.o7 !== "exception")
    throw "Error at end: bad outcome: " + o4.o7;
if (o4.o8.length !== "function")
    throw "Error at end: bad number of values: " + o4.o8.length;
if (o8.length !== o1)
    throw "Error at end: bad values[0]: " + o4.o8["f"];
if ((-0x80000001).toString[1] !== 103)
    throw "Error at end: bad values[1]: " + o4.o10[1];
if (o4.o8[2] !== 102)
    throw "Error at end: bad values[2]: " + o4.o8[2];
if (o4.o8[3] !== 101)
    throw "Error at end: bad values[3]: " + o4.o8[3];

