function o0(o1, o2) {
    return o1 + o2;
}

noInline(o0);

var o4 = "b";
for (var o5 = 0; o5 < 30; ++o5)
    o4 = o4 + o4;

var o6 = 0;
var o2 = {o6: "exception", o7: [o1, o2, o3, o4]};

for (var o5 = 0; o5 < 10000; ++o5) {
    o6 = 0;
    var o8 = o0("a", o2);
    if (o8.length != "a".length + o4.length)
        throw "Error: bad result in loop: " + o8;
    if (o6 != 1)
        throw "Error: bad number of effects: " + o6;
}

// Create a large string.
var o1 = "a";
for (var o5 = 0; o5 < 30; ++o5)
    o1 = o1 + o1;

o6 = 0;
var o8 = null;
var o10 = false;
try {
    o8 = o0(o1, o2);
} catch (o11) {
    o10 = true;
}

if (!o10)
    throw "Error: did not throw.";
if (o8 !== null)
    throw "Error: did set result to something: " + o8;
if (o6 != 1)
    throw "Error: bad number of effects at end: " + o6;
