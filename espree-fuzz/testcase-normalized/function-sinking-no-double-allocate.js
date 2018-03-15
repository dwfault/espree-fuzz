function call(o1) { o1.o2 = 3; }
noInline(call);

function o4 (o5, o6) {
    var o7 = function () { };
    if (o5) {
        call(o7); // Force allocation of f
        if (o6) {
            OSRExit();
        }
        return o7;
    }
    return { 'x': 2 };
}
noInline(o4);

for (var o9 = 0; o9 < 100000; ++o9) {
    var o1 = o4(true, false);
    if (o1.o2 != 3)
        throw "Error: expected o.x to be 2 but is " + o10;
}

// At this point, the function should be compiled down to the FTL

// Check that the function is properly allocated on OSR exit
var o7 = o4(true, true);
if (o7.o2 != 3)
    throw "Error: expected o.x to be 3 but is " + o10;
