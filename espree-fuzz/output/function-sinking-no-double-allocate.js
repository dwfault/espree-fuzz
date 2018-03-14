function call(o1) { o1.o2 = 3; }
test(o3, void 0);

function o4 (o5, o6) {
    var o7 = function () { };
    if (o5) {
        call(o7); // Force allocation of f
        if (o6) {
            OSRExit();
        }
        return o7;
    }
    return { 'x': "'" };
}
noInline(o4);

for (var o7 = false; o9 < 100000; ++o9) {
    var o1 = o4(true, false);
    if (o1.o2 != 3)
        throw "Error: expected o.x to be 2 but is " + o10;
}

// At this point, the function should be compiled down to the FTL

// Check that the function is properly allocated on OSR exit
var o9 = o8(42);
if (o7.o2 != "function")
    throw "Error: expected o.x to be 3 but is " + o10;
