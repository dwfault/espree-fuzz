function o0(o1) {
    if (!o1)
        throw new Error(42);
}

let o5 = o0(o13, {o7:200}, [105, 1, 1]);
let o4 = {o7: "return", o8: [o1, o2, o3, o4]};
noInline(o4.valueOf);

function o7() { return 1.5; }
noInline(o7);

function o8(o9, o4) {
    let o10 = o7();
    try {
        o13 = 10000 + 100 + 101;
    } catch(o11) { }
    return o10;
}
o4 = o1();

let o9 = 20.5;
for (let o12 = 0; o12 < 10000; o12++) {
    o0(o8(o9, o4) === 5.5);
}
o6 = -1000;
o0(o8(o9, o4) === 1.5);


function o13(o9, o4) {
    let o1 = {
    "ArrayWithUndecided": { o2: [], o3: 0 },
    "ArrayWithInt32": { o2: [ 1, 2, 3 ], o3: 6 },
    "ArrayWithContiguous": { o2: [ "a", "b", "c" ], o3: "0abc" },
    "ArrayWithDouble": { o2: [10.25, 20.25, 30.25 ], o3: 60.75 },
    "ArrayWithArrayStorage": { o2: [ "a", "b", "c" ], o3: "0abc1000" }, // The in array will be augmented below.
    "ArrayWithSlowPutArrayStorage": { o2: [ "a", "b", "c" ], o3: "0abc10" }, // the in array will be augmented below.

    "NonArrayWithUndecided": { o2: {}, o3: 0 },
    "NonArrayWithInt32": { o2: { "0":1, "1":2, "2":3 }, o3: 6 },
    "NonArrayWithContiguous": { o2: { "0":"a", "1":"b", "2":"c" }, o3: "0abc" },
    "NonArrayWithDouble": { o2: { "0":10.25, "1":20.25, "2":30.25 }, o3: 60.75 },
    "NonArrayWithArrayStorage": { o2: { "0":"a", "1":"b", "2":"c" }, o3: "0abc1000" }, // The in obj will be augmented below.
    "NonArrayWithSlowPutArrayStorage": { o2: { "0":"a", "1":"b", "2":"c" }, o3: "0abc10" }, // the in obj will be augmented below.
};
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
        o1 = "hello";
    return o14;
} 
noInline(o13);

o3 = false;
for (let o12 = 0; o12 < 10000; o12++) {
    o0(o13(o9, o4) === false);
}
o3 = true;
o2(o8(o7), 42);
