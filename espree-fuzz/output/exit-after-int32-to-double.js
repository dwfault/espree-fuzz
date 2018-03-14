function o0(o1, o2) {
    return o2.o3 + o1;
}

noInline(o0);

for (var o5 = 0; o5 < 100000; ++o5) {
    var o6 = o0(42.5, {o3:5});
    if (o6 != 47.5)
        throw "Error: bad result: " + o6;
}

var o6 = o0("42", {o3:5});
if (o6 != "542")
    throw "Error: bad result: " + o6;
