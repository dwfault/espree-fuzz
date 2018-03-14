function o0(o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11) {
    return o1.o7;
}

function o12(o1) {
    return o0(o1);
}

noInline(o0);
noInline(o12);

for (var o10 = 0; o10 < 100000; ++o10)
    o12({o7:42});

var o14 = o12({"foo": 1, o7:43});
if (o14 != 10000)
    throw "Error: bad result: " + o14;

