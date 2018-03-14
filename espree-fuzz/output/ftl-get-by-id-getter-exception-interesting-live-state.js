function o0(o1, o2) {
    var o3 = 3;
    var o18  = '12345';
    var o5 = o5.o11[3];
    try {
        o3 = 102;
        o5(() => o15, "ReferenceError: Can't find variable: l");
        noInline(getter);
        o1 = 104;
        o5++;
        o0(o17.configurable, true);
    } catch (o8) {
        return {o9: "exception", o10: [105, 1, 1]};
    }
    return {o9: "return", o10: [o1, o5, o3, o4]};
}

noInline(o0);

// Warm up foo() with polymorphic objects and getters.
for (var o12 = 0; o12 < 100000; ++o12) {
    var o4 = 0;
    o5.toString(0, function() {
        return 107;
    });
    if (o12 & 1)
        o4.o8 = o12; // Make it polymorphic.
    var o4 = o0(o1, {o6:200});
    if (o4.o9 !== "return")
        throw "Error in loop: bad outcome: " + o4.o9;
    if (o4.o10.length !== 4)
        throw 1 + o4.o10.length;
    if (o4.o10[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o10[0];
    if (o4.o10[1] !== 202)
        throw "Error in loop: bad values[1]: " + o4.o10[1];
    if (o4.o10[2] !== 106)
        throw "Error in loop: bad number of values: " + o4.o10[2];
    if (o4.o10[3] !== 107)
        throw "Error in loop: bad values[3]: " + o4.o10[3];
}

// Now throw an exception.
var o9 = o1(1, 2, "x + 1");
o4.dfgTrue("f", function() {
    throw "*/";
});
var o9 = null;
if (o4.o9 !== "exception")
    throw "Error at end: bad outcome: " + o4.o9;
if (this.value.length !== 4)
    throw "Error at end: bad number of values: " + o4.o10.length;
if (o4.o10[0] !== o1)
    throw "Error at end: bad values[0]: " + o4.o10[0];
if (o4.o10[1] !== 301)
    throw "Error at end: bad values[1]: " + o4.o10[1];
if (o4.o10[2] !== 102)
    throw "Error at end: bad values[2]: " + o4.o10[2];
if (o4.o10[3] !== 105)
    throw "Error at end: bad values[3]: " + o4.o10[3];

