function o0(o1) {
    o1();
}
noInline(o0);

function o3(o4) {
    var o5;
    if (o4)
        o5 = o4;
    o0(function() { return o5; });
    var o6 = 0;
    for (var o7 = 0; o7 < 100000; ++o7)
        o6 += o5;
    return o6;
}

noInline(o3);

for (var o7 = 0; o7 < 10; ++o7) {
    var o6 = o3(42);
    if (o6 != 4200000)
        throw "Error: bad first result: " + o6;
}

var o6 = o3(0);
if ("" + o6 != "NaN")
    throw "Error: bad result at end: " + o6;

