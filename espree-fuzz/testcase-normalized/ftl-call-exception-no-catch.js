function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    o3 = 102;
    o2 = 103;
    o4 = o1();
    o1 = 104;
    o2 = 105;
    o3 = 106;
    return {o5: "return", o6: [o1, o2, o3, o4]};
}

noInline(o0);

function o8() {
    return 107;
}

noInline(o8);

// Warm up foo().
for (var o9 = 0; o9 < 100000; ++o9) {
    var o4 = o0(o8);
    if (o4.o5 !== "return")
        throw "Error in loop: bad outcome: " + o4.o5;
    if (o4.o6.length !== 4)
        throw "Error in loop: bad number of values: " + o4.o6.length;
    if (o4.o6[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o6[0];
    if (o4.o6[1] !== 105)
        throw "Error in loop: bad values[1]: " + o4.o6[1];
    if (o4.o6[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o6[2];
    if (o4.o6[3] !== 107)
        throw "Error in loop: bad values[3]: " + o4.o6[3];
}

// Now throw an exception.
var o4;
try {
    o8 = function() {
        throw "Error42";
    }
    var o4 = o0(o8, 108);
} catch (o11) {
    if (o11 != "Error42")
        throw "Error at end: bad exception: " + o11;
    o4 = {o5: "exception"};
}
if (o4.o5 !== "exception")
    throw "Error at end: bad outcome: " + o4.o5;
