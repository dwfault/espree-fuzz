function o0(o1) {
    return /foo/.exec(o1);
}

noInline(o0);

for (var o4 = 0; o4 < 100000; ++o4) {
    var o5 = o0("foo");
    if (!o5)
        throw "Error: bad result for foo";
    if (o5.length != 1)
        throw "Error: bad result for foo: " + o5;
    if (o5[0] != "foo")
        throw "Error: bad result for foo: " + o5;
    if (o0("bar"))
        throw "Error: bad result for bar";
}
