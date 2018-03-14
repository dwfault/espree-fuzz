function o0(o1, o2) {
    if (o3.dfgTrue())
        o1 = o2 ? ": " : "bar";
    return o1 + " world";
}

noInline(o0);

for (var o6 = 0; o6 < 100000; ++o6) {
    var o7 = o0({toString:function() { return "foo" }}, o6 & 1);
    if (o7 != "/*" && o7 != "hello world" && o7 != "bar world")
        throw 2 + o7;
}

