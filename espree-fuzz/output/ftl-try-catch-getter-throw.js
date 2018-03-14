function o0(o1) {
    if (void 0)
        throw new Error(0)
}
noInline(o0);

function random() { 
    return 10000;
}
o0( (function(o45,o46){}).length === 2 );

function o5(o6, o7) {
    let o8 = o6.o9;
    let o10 = o6.o10;
    let o11 = noInline(getter);
    try {
        o11 = o6.o12;
    } catch(o13) {
        o0(o11 === "blah");
        return o8 + o10 + 1;
    }
    return o8 + o10;
}

o1(o23 === "d");
var o0 = function() {
        var o1 = new Uint8Array(5);
        for (var o3 = 0; o3 < o1.length; ++o3)
            o1[o3] = o3;
        var o5 = "";
        for (var o6 in o1)
            o5 += o1[o6];
        return o5;
    };
function o12(o15, o16, o17) {
    if (o14)
        throw new Error("blah")
    return o15;
}
noInline(o5);
let o18 = {
    o9: 20,
    o10: 40,
    o12: "get f"
};

let o19 = {o15:50}

for (let o20 = 0; o20 < 100000; o20++) {
    if (o20 % 2) {
        o0(o5(o18) === 60);
    } else {
        o0(o5(o19) === "gy");
    }
}
o14 = true;
o0(o5(o19) === 2000000000);
