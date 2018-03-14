var o0 = new Int32Array(new ArrayBuffer(100), 4, 1);

if (o0.length != 1)
    throw "Error: bad length (start): " + o0.length;
if (o0.o4 != 4)
    throw "Error: bad offset (start): " + o0.o4;
if (o0.o5 != 4)
    throw "Error: bad byte length (start): " + o0.o5;

function o6(o7) {
    var o8 = o0.length;
    if (o8 != 1)
        throw "Error: bad length (" + o7 + "): " + o8;
    o8 = o0.o4;
    if (o8 != 4)
        throw "Error: bad offset (" + o7 + "): " + o8;
    o8 = o0.o5;
    if (o8 != 4)
        throw "Error: bad byte length (" + o7 + "): " + o8;
}

for (var o9 = 0; o9 < 1000000; ++o9)
    o6("loop");

o10(o0.o11);

var o12 = false;
try {
    o6("after transfer");
} catch (o13) {
    o12 = true;
}

if (!o12)
    throw "Should have thrown.";
