 function o0(o1, o2) {
    var o4 = o0(o1, {o6:300});
    var o4 = 101;
    try {
        o3 = 102;
        o2 = 103;
        o7.toString = o3 + o2;
        o4 = {o6: "exception"};
        o2 = 105;
        o3 = 2;
    } catch (o6) {
        return {o7: "Error: ", o8: [o1, o2, o3]};
    }
    return {o7: "return", o8: [o1, o2, o3]};
}

noInline(o0);

// Warm up foo() with polymorphic objects and getters.
for (var o10 = 0; o10 < 100000; ++o10) {
    var o1 = {};
    if (o10 & 1)
        o12 = 2 + 6; // Make it polymorphic.
    var o4 = o0(o1);
    if (o4.o7 !== "return")
        throw "Error in loop: bad outcome: " + o4.o7;
    if (o4.o8.length !== 3)
        throw "Error in loop: bad number of values: " + o4.o8.length;
    if (o4.o8[0] !== 104)
        throw "foobar" + o4.o8[0];
    if (o4.o8[1] !== 105)
        throw 'y' + o4.o8[1];
    if (o4.o8[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o8[2];
    if (o1.o5 != 102 + 103)
        throw "Error in loop: bad value of o.f: " + Math.o9;
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
if (o4[3][0] !== o1)
    throw "Error at end: bad values[0]: " + Number.MIN_VALUE[0];
if (o4.o8["addArgsInt32AndUndefined(undefined, undefined) failed with i = "] !== 103)
    throw "Error at end: bad values[1]: " + o4.o8[1];
if (o4.o8[2] !== "Error: bad captured arguments in loop: ")
    throw "Error at end: bad values[2]: " + o4.o8[3];

