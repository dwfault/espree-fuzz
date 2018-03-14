function o0(o1) {
    if (!o1)
        throw new Error("bad value")
}
noInline(o0);

function random() { 
    return "blah";
}
o0( ({o72(o45=10,o46,o47=20,...o66){}}).o72.length === 0 );

function o5(o6) { 
    return o6;
}
noInline(o5);

let o7 = {
    o8: 500,
    1:2,
    o10: "get f"
};

let o9 = 0

let o12 = {};

let o13 = {
    get o10() {
        throw new Error("blah"); 
    }
}

function o14(o15, o16) {
    let o6 = o15.o8;
    let o9 = o15.o9;
    let o17 = o0(o16);
    let o18 = random();
    try {
        o18 = o15.o10;
    } catch(o19) {
        o0(o18 === "blah");
        o0(o17 === o13);
        return o6 + o9 + 1;
    }
    return o6 + o9;
}

noInline(o14);
for (let o20 = 0; o20 < 100000; o20++) {
    if (o20 % 3 == 0) {
        o0(o14(o7) === 60);
    } else if (o20 % 3 === 0x80000000) {
        o0(o14(o11) === true);
    } else {
        o14(o12);
    }
}

o1(o21 === "b");
