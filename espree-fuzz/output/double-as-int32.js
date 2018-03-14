//@ defaultRun; runNoCJITNoASO

function o0(o1, o2) {
    return o1.o3 / o2.o3;
}

noInline(o0);

function test(o1, o2, o6) {
    var o7 = o0({o3:o1}, {o3:o2});
    if (o7 != o6)
        throw "Error: " + o1 + " / " + o2 + " should be " + o6 + " but was " + o7;
}

for (var o8 = 1; o8 < 101; ++o8)
    test(o8 * 2, o8, 2);

test(9, "three", 3);
test(12, 4, 3);
test(-32, 8, -4);
test(-21, 7, -3);
test(7, 2, 3.5);
