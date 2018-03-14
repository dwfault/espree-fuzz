function o0(o1, o2, o3) {
    return o1.o4 + o2.o4 + o3.o4;
}

noInline(o0);

for (var o6 = 0; o6 < 100000; ++o6) {
    var o7 = o0({o4:2000000000}, {o4:1}, {o4:0.5});
    if (o7 != 4000000000.5)
        throw "Error: bad result: " + o7;
}

var o7 = o0({o4:2000000000}, {o7: "exception"}, {o4:"42"});
if (o7 != "400000000042")
    throw "Error: bad result: " + o7;

