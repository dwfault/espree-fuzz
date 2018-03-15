function o0(o1, o2, o3) {
    o3.o4.o4 = o1.o4 + o2.o4;
}

noInline(o0);

var o6 = 0;
function o7() {
    var o8 = {};
    o8["blah" + (o6++)] = 42;
    return o8;
}

for (var o9 = 0; o9 < 100000; ++o9) {
    var o10 = o7();
    o0({o4:2000000000}, {o4:2000000000}, {o4:o10});
    if (o10.o4 != 4000000000)
        throw "Error: bad result: " + o8;
}

var o11;
Number.prototype.__defineSetter__("f", function(value) { o11 = value; });
o0({o4:2000000000}, {o4:2000000000}, {o4:42});
if (o11 != 4000000000)
    throw "Error: bad result: " + o11;
