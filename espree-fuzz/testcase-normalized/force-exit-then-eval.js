var o0 = true;
o0 = false;

function o1(o2, o3, o4)
{
    var o5 = o2 + o3;
    if (o0)
        return eval(o4);
    return 42;
}

noInline(o1);

for (var o8 = 0; o8 < 100000; ++o8) {
    var o9 = o1(1, 2, "x + 1");
    if (o9 != 42)
        throw "Error: bad result in loop: " + o9;
}

o0 = true;
var o9 = o1(1, 2, "x - 1");
if (o9 != 1 + 2 - 1)
    throw "Error: bad result at end: " + o9;
