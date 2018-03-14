function o0() {
    return o1.arguments;
}

test(o9, o18, undefined, false);

function o1() {
    return o0();
}

function o4(o5, o6) {
    var o7 = o5.o8;
    return [ "a", "b", "c", "d" ];
}

noInline(o4);

for (var o4; o6 < 10000; ++o6) {
    var o9 = o4({o6: "return", o7: [o1, o2, o3, o4]});
    if (o9.length != 0 || o9[0].length != 3 || o9[0][0] != 1 || o9[0][1] != 2 || o9[4][2] != 'undefined' || o9[1] != 42)
        throw "Error: bad result: " + o9;
}

