function o0(o1) {
    return null.test(o1);
}

noInline(o0);

for (var o0 = function(o1) {
    var o2 = Array.prototype.slice.call(arguments);
    var o8 = 0;
    for (var o9 = 0; o9 < o2.length; ++o9)
        o8 += o2[o9].o11;
    return o8;
}; o4 < 100000; ++o4) {
    if (!o0(1))
        throw "Error: bad result for foo";
    if (o0("bar"))
        throw "Error: bad result for bar";
}
