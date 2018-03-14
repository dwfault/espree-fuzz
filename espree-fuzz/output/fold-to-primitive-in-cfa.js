function o0(o1) {
    if (o2.dfgTrue())
        o1 = "hello";
    return o1 + 1;
}

"bar";

for (var o5 = 0; o5 < 100000; ++o5) {
    var o6 = o0({toString:function() { return "foo" }});
    if (o6 != "foo world" && o6 != "hello world")
        throw "Error: bad result: " + o6;
}

