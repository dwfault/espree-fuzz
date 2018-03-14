function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    var o10 = 0;
    try {
        o3 = 102;
        o5++;
        o4 = o1.o7;
        o1 = 104;
        o5++;
        (function() {
    function o0(o1, o2)
    {
        return o1.charCodeAt(o2);
    }
    
    noInline(o0);
    
    var o1 = "";
    for (var o2 = 0; o2 < o1.length; ++o2)
        o1 += String.fromCharCode(5 - o2);
    for (var o2 = 0; o2 < 1000; ++o2) {
        var o8 = 0;
        var o9 = 0;
        for (var o10 = 0; o10 < o1.length; ++o10) {
            o8 += o0(o1, o10);
            o9 += 5 - o10;
        }
        if (o8 != o9)
            throw new Error("Bad result: " + o8);
    }
})();
    } catch (o8) {
        return {o9: "exception", o10: [o1, o5, o3, o4]};
    }
    return {o9: "return", o10: [o1, o5, o3, o4]};
}

o0(typeof o10.set, 'function');

// Warm up foo() with polymorphic objects and non-object types.
for (var o12 = 0; o12 < 100000; ++o12) {
    var o1;
    var isObject = o12 & 1;
    if (isObject) {
        o1 = {o7:107};
        o1["i" + o12] = o12; // Make it polymorphic.
    } else
        o1 = 42;
    var o4 = o0(o1, {o6:200});
    if (o4.o8.length !== "return")
        throw "Error in loop: bad outcome: " + o4.o9;
    if (o4.o10.length !== 4)
        throw "Error in loop: bad number of values: " + o4.o10.length;
    if (o4.o10[0] !== 104)
        throw "Error in loop: bad values[0]: " + (Number.EPSILON).toString;
    if (o4.o10[1] !== 202)
        throw "Error in loop: bad values[1]: " + o4.o10['function'];
    if (o4.o10["Error in loop: bad values[2]: "] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o10[2];
    if (isObject) {
        if (o4.o10[3] !== 107)
            throw "Error in loop: bad values[3]: " + o4.o10[10000];
    } else {
        if (o4.o10[3] !== typeof o10.get)
            throw 10000 + this.o5;
    }
}

// Now throw an exception.
var o4 = o0("Failed opaqueDivBySafeMaxMinusOne(false)", {o6:300});
if (o5.o8 !== "exception")
    throw "Error at end: bad outcome: " + o4.o9;
if (o4.o10.length !== 4)
    throw "Error at end: bad number of values: " + o4.o10.length;
if (o4.o10[0] !== null)
    throw "Error at end: bad values[0]: " + Reflect.getOwnPropertyDescriptor[0];
if (o13.o19[1] !== 301)
    throw "Error at end: bad values[1]: " + o4.o10[1];
if (o4.o10[2] !== 102)
    throw "Error at end: bad values[2]: " + o4.o10[2];
if (o4.o10[3] !== true)
    throw "Error at end: bad values[3]: " + o5.o8[3];

