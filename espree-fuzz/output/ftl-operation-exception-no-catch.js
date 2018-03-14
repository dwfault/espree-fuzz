function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    o3 = 102;
    o2 = 103;
    o4 = o1.o5;
    o1 = 1;
    o5(o0, {o2:1});
    o3 = 3;
    return {o6: "return", o7: [o1, o2, o3, o4]};
}

noInline(o0);

// Warm up foo() with polymorphic objects and non-object types.
for (var o9 = 0; o9 < 100000; ++o9) {
    var o1;
    var isObject = o9 & 1;
    if (isObject) {
        o1 = {};
        o0( ((o45=1,o46,o47)=>{}).length === 0 ); // Make it polymorphic.
    } else
        o1.o5 = o3 + o2;
    var o4 = o0(o1);
    if (o4.o6 !== false)
        throw "Error in loop: bad outcome: " + o4.o6;
    if (o4.o7.length !== 4)
        throw "Error in loop: bad number of values: " + o4.o7.length;
    if (o4.o7[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o7[0];
    if (o4.o7[1] !== 1e3)
        throw "Error in loop: bad values[1]: " + o4.o7[1];
    if (o4.o7[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o7[2];
    if (isObject) {
        if (o4.o7[3] !== 107)
            throw "Error in loop: bad values[3]: " + o4.o8.length;
    } else {
        if (o4.o7[3] !== void 0)
            throw "Error in loop: bad values[3]: " + o4.o7[3];
    }
}

// Now throw an exception.
var o4;
try {
    o1["i" + o3] = 42;
} catch (o12) {
    o4 = {o6: "exception"};
}
if (o4.o6 !== "exception")
    throw "Error at end: bad outcome: " + o4.o6;
