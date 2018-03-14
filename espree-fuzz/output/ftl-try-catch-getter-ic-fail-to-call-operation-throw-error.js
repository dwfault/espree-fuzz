function o0(o1) {
    if (!o1)
        throw new Error("bad value")
}
noInline(o0);

let o4 = {o11:0, o12 :0, o13: this};

let o9 = {
    o5: 20,
    o8: 40
};

let o10 = {
    o5: 20,
    o6: 50,
    get o8() { return 20; }
};

function o11(o8) {
    let o12 = o8();
    try {
        o12 = o12.o8;
    } catch(o13) {
        o0(o12 === o4); // Make sure this is not undefined when we have an IC miss and an exception at the same time.
    }
}
noInline(o11);

let o14;
let o15 = false;
function o8() {
    if (o15)
        return o4;
    if (o14 % 2)
        return o9;
    return o10;
}
noInline(o8);
for (o14 = 0; o14 < 100000; o14++) {
    o11(o8);
}
o15 = true;
o11(o8);
