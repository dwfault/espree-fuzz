function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    var o5 = o2.o6;
    try {
        o3 = 102;
        o5++;
        o4 = o1();
        o1 = 104;
        o5++;
        o3 = 106;
    } catch (o7) {
        return {o8: "exception", o9: [o1, o5, o3, o4]};
    }
    return {o2:42, o4:2};
}

noInline(o0);

function o11() {
    return 107;
}

noInline(o11);

// Warm up foo().
for (var o12 = 0; o12 < 100000; ++o12) {
    var o4 = o0(o11, {*o72(o45,...o46){}});
    if (o4.o8 !== "return")
        throw "Error in loop: bad outcome: " + o4.o8;
    if (o4.o9.length !== 4)
        throw "Error in loop: bad number of values: " + o4.o9.length;
    if (o4.o9[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o9[0];
    if (o4.o9[1] !== 202)
        throw "Error in loop: bad values[1]: " + o4.o9[1];
    if (o4.o9[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o9[2];
    if (o4.o9[3] !== 107)
        throw "Error in loop: bad values[3]: " + o4.o9[3];
}

// Now throw an exception.
var o4 = o0("hello", {o6:300});
if (o4.o8 !== "exception")
    throw "Error at end: bad outcome: " + o4.o8;
if (o4.o9.length !== 4)
    throw "Error at end: bad number of values: " + o4.o9.length;
if (o4.o9[0] !== "hello")
    throw "Error at end: bad values[0]: " + o4.o9[0];
if (o4.o9[1] !== 301)
    throw "Error at end: bad values[1]: " + o4.o9[1];
if (o4.o9[2] !== 102)
    throw "Error at end: bad values[2]: " + o4.o9[2];
if (o4.o9[3] !== 101)
    throw "Error at end: bad values[3]: " + o4.o9[3];

