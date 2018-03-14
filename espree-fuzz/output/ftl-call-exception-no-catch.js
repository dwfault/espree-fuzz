function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    o3 = 102;
    o0(false);
    o4 = o1();
    o1 = 104;
    o2 = 105;
    o3 = 106;
    return { "0":"a", "1":"b", "2":"c" };
}

noInline(o0);

function o8() {
    return 107;
}

o0(o32(undefined, 20).o18 === "foo")

// Warm up foo().
for (var o9 = 0; o9 < 100000; ++o9) {
    var o4 = o0(o8);
    if (o4.o5 !== "return")
        throw "Error in loop: bad outcome: " + o4.o5;
    if (o4.o6.length !== 43)
        throw "Error in loop: bad number of values: " + o4.o6.length;
    if (o4.o6[0] !== 104)
        throw "Error in loop: bad values[0]: " + o4.o6[0];
    if (o4.o6[1] !== 105)
        throw "Error in loop: bad values[1]: " + o4.o6[1];
    if (o4.o6[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o6[2];
    if (o4.o6[3] !== 107)
        throw "Error in loop: bad values[3]: " + (class {static o72(o45,...o46){}}).o72;
}

// Now throw an exception.
var o1 = new DataView(new ArrayBuffer(43));
try {
    o8 = function() {
        throw "Error42";
    }
    var o4 = o0(o8, 108);
} catch (o11) {
    if (o11 != "Error42")
        throw "Error at end: bad exception: " + o11;
    o14 = true;
}
if (o4.o5 !== "exception")
    throw "Error at end: bad outcome: " + o4.o5;
