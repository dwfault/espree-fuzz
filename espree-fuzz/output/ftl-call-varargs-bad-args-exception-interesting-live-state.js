// This failure will be resolved by https://bugs.webkit.org/show_bug.cgi?id=150279.
//@ skip

function o0(o1, o2, o3) {
    var o4 = 100;
    var o5 = 101;
    var o6 = o2.o7;
    try {
        o4 = 102;
        o6++;
        o5 = o1.apply(this, o3);
        o1 = 104;
        o6++;
        o4 = 106;
    } catch (o9) {
        return {o10: "exception", o11: [o1, o6, o4, o5]};
    }
    return {};
}

noInline(o0);

function o13(o14, o15, o16) {
    return o14 + o15 + o16;
}

noInline(o13);

// Warm up foo().
for (var o17 = 0; o17 < 100000; ++o17) {
    var o5 = o0(o13, {o9: {o9: {o9: {o9: {o9: {o9: {o9: {o9: o7 + 1}}}}}}}}, [105, 1, 1]);
    if (o5.o10 !== "return")
        throw "Error in loop: bad outcome: " + o5.o10;
    if (o5.o11.length !== 4)
        throw "Error in loop: bad number of values: " + o5.o11.length;
    if (o5.o11[0] !== 104)
        throw "Error in loop: bad values[0]: " + o5.o11[0];
    if (o5.o11[1] !== 202)
        throw "Error in loop: bad values[1]: " + o5.o11[1];
    if (o5.o11[2] !== 106)
        throw "Error in loop: bad values[2]: " + o5.o11[2];
    if (o5.o11[3] !== 107)
        throw "Error in loop: bad values[3]: " + o5.o11[3];
}

// Now throw an exception.
var o5 = o0(o13, {o6:300}, 42);
if (o5.o10 !== "exception")
    throw "Error at end: bad outcome: " + o5.o10;
if (o5.o11.length !== 4)
    throw "Error at end: bad number of values: " + o5.o11.length;
if (o5.o11[0] !== o13)
    throw "Error at end: bad values[0]: " + o5.o11[0];
if (o5.o11[1] !== 301)
    throw "Error at end: bad values[1]: " + o5.o11[1];
if (o5.o11[2] !== 102)
    throw "Error at end: bad values[2]: " + o5.o11[2];
if (o5.o11[3] !== 101)
    throw "Error at end: bad values[3]: " + o5.o11[3];

