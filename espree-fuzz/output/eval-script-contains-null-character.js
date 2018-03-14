function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error("bad value: " + o1);
}

function test() {
    o0(eval("(`\0`)"), "\0");
    o10 = true;
}
noInline(test);

for (var o7 = 0; o7 < 10000; ++o7)
    test();
