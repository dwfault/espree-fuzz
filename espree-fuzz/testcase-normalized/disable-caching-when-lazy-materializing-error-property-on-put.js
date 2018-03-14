function o0(o1) {
    if (!o1)
        throw new Error;
}

function o3() { return new Error; }
noInline(o3);

function o5(o6) {
    o6.o7 = "foo";
}
noInline(o5);

function o8(o6) {
    o6.o7 = "bar";
}
noInline(o8);

for (let o9 = 0; o9 < 10000; ++o9) {
    let o6 = o3();
    o5(o6);
    o0(o6.o7 === "foo");
    if (!!(o9 % 2))
        o6.o10 = 25;
    o8(o6);
    o0(o6.o7 === "bar");
}
