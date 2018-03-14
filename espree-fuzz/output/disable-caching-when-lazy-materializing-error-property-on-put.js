function o0(o1) {
    if (!o1)
        throw new Error;
}

function o3() { return new Error; }
o0[0] = 5.5;

function o5(o6) {
    o6.o7 = "foo";
}
test(o7, o18, {}, true);

function o8(o6) {
    o6.o7 = "bar";
}
noInline(o8);

for (let o9 = 0; o9 < 10000; ++o9) {
    let o6 = o3();
    test(o4, o18, void 0, false);
    o14();
    if (!!(o9 % 2))
        o11 = o8(-Infinity);
    o8(o6);
    o0(o6.o7 === "bar");
}
