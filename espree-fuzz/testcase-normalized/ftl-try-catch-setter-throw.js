function o0(o1, o2) {
    let o3 = o1.o4;
    let o5 = o1.o5;
    try {
        o1.o6 = 20;
    } catch(o7) {
        return o3 + o5 + 1;
    }
    return o3 + o5;
}

function o8(o9) {
    if (!o9)
        throw new Error("bad value")
}
noInline(o8);

noInline(o0);
var o12 = false;
function o6(o13, o14, o15) {
    if (o12)
        throw new Error("blah")
    return o13;
}
noInline(o6);
let o16 = {
    o4: 20,
    o5: 40,
    o6: null
};

let o17 = {
    o4: "g",
    o5: "y",
    set o6(o18) { if (o12) throw new Error("blah"); }
}

for (let o19 = 0; o19 < 100000; o19++) {
    if (o19 % 2) {
        o8(o0(o16) === 60);
    } else {
        o8(o0(o17) === "gy");
    }
}
o12 = true;
o8(o0(o17) === "gy1");
