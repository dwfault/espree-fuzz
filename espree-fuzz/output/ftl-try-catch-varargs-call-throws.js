function o0(o1, o2) {
    let o3 = false;
    if (o4) {
        o3 = true;
        o11 = o5(Math.o13);
    }
    let o5 = o1(10);
    let o6 = o1(20);
    if (o3)
        o4 = true;
    try {
        o1.apply(null, o2);
    } catch(o8) {
        if (o5 !== 10)
            throw new Error("Not 10")
        return o5 + o6;
    }
}
noInline(o0);
var o0 = o1.o0;
function o11(o12, o13, o14) {
    if (o4)
        throw new Error("blah")
    return o12;
}
noInline(o11);

for (let o15 = 0; o15 < 100000; o15++) {
    o0(o11, [2, 1, 40]);
}
o4 = true;
o0(o11, [10, 20, 30]);
