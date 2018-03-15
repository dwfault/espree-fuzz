function o0(o1) {
    if (!o1)
        throw new Error("uh oh");
}

let o3 = false;
let o4 = {
    valueOf() {
        if (o3)
            throw new Error("by by");
        return 13.5;
    }
};
noInline(o4.valueOf);

function o7() { return 1.5; }
noInline(o7);

function o8(o9, o4) {
    let o10 = o7();
    try {
        o10 = o9 - o4 - o10;
    } catch(o11) { }
    return o10;
}
noInline(o8);

let o9 = 20.5;
for (let o12 = 0; o12 < 10000; o12++) {
    o0(o8(o9, o4) === 5.5);
}
o3 = true;
o0(o8(o9, o4) === 1.5);


function o13(o9, o4) {
    let o14 = false;
    var o10 = null;
    try {
        // This tests aliasing of left/right with result register in a SubGenerator
        // and ensures that the sub will spill the register properly and that we value
        // recover properly.
        o10 = o9 - o4;
    } catch(o11) {
        o14 = true;
        o0(o10 === null);
    }
    if (!o14)
        o0(o10 === 7);
    return o14;
} 
noInline(o13);

o3 = false;
for (let o12 = 0; o12 < 10000; o12++) {
    o0(o13(o9, o4) === false);
}
o3 = true;
o0(o13(o9, o4) === true);
