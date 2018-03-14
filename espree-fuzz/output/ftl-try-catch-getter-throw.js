function o0(o1) {
    if (!o1)
        throw new Error("bad value")
}
noInline(o0);

function random() { 
    return "blah";
}
noInline(random);

function o5(o6, o7) {
    let o8 = o6.o9;
    let o10 = o6.o10;
    let o11 = random();
    try {
        o11 = o6.o12;
    } catch(o13) {
        o0(o11 === "blah");
        return o8 + o10 + 1;
    }
    return o8 + o10;
}

noInline(o5);
var o14 = false;
function o12(o15, o16, o17) {
    if (o14)
        throw new Error("blah")
    return o15;
}
noInline(o12);
let o18 = {o9: "return", o10: [o1, o5, o3, o4]};

let o19 = {
    o9: "g",
    o10: "y",
    get o12() { 
        if (o14) 
            throw new Error("blah"); 
        return "get f";
    }
}

for (let o20 = 0; o20 < 100000; o20++) {
    if (o20 % 2) {
        o0(o5(o18) === 60);
    } else {
        o0(o5(o19) === "gy");
    }
}
o14 = true;
o0(o5(o19) === "gy1");
