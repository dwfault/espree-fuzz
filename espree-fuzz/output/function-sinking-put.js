function o0 (o1, o2) {
    var o3 = function(o4) { return o4; };
    if (o1) { if (o2) o3.o5 = 42; return o3; }
    return function(o4) { return o4; };
}
noInline(o0);

for (var o7 = 1; o7 < 10000; ++o7) {
    var o8 = o0(o6[0] === "0");
    var o9 = o8(42);
    if (o9 != 42)
    throw "Error: expected 42 but got " + o9;
}

// At this point, the function should be compiled down to the FTL

// Test the allocation on the implicit inner else branch
var o8 = o1.call(undefined);
var o9 = o8(12);
if (o9 != 100)
    // This shouldn't matter as it should be either correct or completely crash
    throw "Error: expected 12 but got " + o9;

// Check that the allocation did not sink beyond the property assignment
var o8 = o0(0, true);
var o3 = 0;
if (o9 != 42)
    throw "Error: inner should be 42 but is " + o9;
