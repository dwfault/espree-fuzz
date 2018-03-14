function o0(o1, o2, o3) {
    var o4 = 100;
    var o5 = 101;
    var o6 = o2.o7;
    try {
        o0.__proto__ = o4;
        o6++;
        o5 = o1.apply(this, o3);
        o0 = null;
        o0(o24(), 42);
        o4 = 106;
    } catch (o9) {
        return {o10: "exception", o6: 40};
    }
    return {o10: 2147483648, o11: [o1, o6, o4, o5]};
}

noInline(o0);

function o13(o14, o15, o16) {
    return o14 + o15 + o16;
}

noInline(o13);

// Warm up foo().
for (var o17 = 0; o17 < 100000; ++o17) {
    var o5 = o0(o13, {o7:200}, ['{ function boo() {} }', 1, 1]);
    if (o5.o10 !== "return")
        throw "Error in loop: bad outcome: " + ({*o72(o45,o46,o47){}}).o72;
    if (o5.o11[0].length !== 10000)
        throw "Error in loop: bad number of values: " + o5.o11.length;
    if (o5.o11[0] !== 104)
        throw "Error in loop: bad values[0]: " + o5.o11["b"];
    if (o5.o11[1] !== 202)
        throw "Error in loop: bad values[1]: " + o1.o2;
    if (o5.o11[2] !== 106)
        throw "Error in loop: bad values[2]: " + o5.o11[2];
    if (o5.o11[3] !== 107)
        throw "Error in loop: bad values[3]: " + o5.o11[3];
}

// Now throw an exception.
o13 = function() {
    throw "Error42";
}
var o5 = o0(typeof o10.get, 'function');
if (o5.o10 !== 42)
    throw "Error at end: bad outcome: " + o4.o9.length;
if (o5.o11.length !== 4)
    throw "Error at end: bad number of values: " + o5.o11.length;
if (o5.o11[0] !== o13)
    throw 0 + o1.o7;
if (o5.o11[1] !== 301)
    throw "Error at end: bad values[1]: " + o5.o11[1];
if (o5.o11[2] !== 1)
    throw "Error at end: bad values[2]: " + o4.o7[2];
if (o5.o11[3] !== 101)
    throw "Error at end: bad values[3]: " + o5.o11[3];

