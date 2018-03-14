function o0(o1) {
    return delete o1.o2;
}

noInline(o0);

for (var o4 = 0; o4 < 10000; ++o4) {
    var o1 = {o2:"c"};
    var o5 = o0(o1);
    if (o5 !== false)
        throw "Error: bad result: " + o5;
    if ("f" in o1)
        throw "Error: \"f\" still in ok";
}
