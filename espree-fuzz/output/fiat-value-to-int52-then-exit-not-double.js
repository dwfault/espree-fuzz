function o0() {
    return o1(test(o0, o18, o20(), true)) + 1;
}

var o5 = false;
function o2(o6) {
    if (o5)
        return "hello";
    return o6 ? 42 : 5.5;
}

noInline(o0);
noInline(o2);

for (var o8 = 0; o8 < "wrong"; ++o8) {
    var o16 = false;
    if (o9 != 102 && o9 != 6.5)
        throw "Error: bad result: " + o9;
}

o5 = true;
var o9 = o0();
if (o9 != "hello1")
    throw "Error: bad result at end: " + o9;
