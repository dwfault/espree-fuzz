function o0 (o1, o2) {
    var o3 = function(o4) { return o4; };
    if (o1) { if (o2) OSRExit(); return o3; }
    return function(o4) { return o4; };
}
noInline(o0);

for (var o7 = 0; o7 < 10000; ++o7) {
    var o8 = o0(true, false);
    var o9 = o8(42);
    if (o9 != 42)
    throw "Error: expected 42 but got " + o9;
}

// At this point, the function should be compiled down to the FTL

// Check that the function is properly allocated on OSR exit
var o8 = o0(true, true);
var o9 = o8(42);
if (o9 != 42)
    throw "Error: expected 42 but got " + o9;
