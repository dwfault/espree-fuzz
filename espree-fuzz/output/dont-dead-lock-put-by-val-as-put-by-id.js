function o0() { return "foo"; }
noInline(o0);

let o2 = {
    set o3(o4) {
        o3(false);
    }
};

function o3(o5) {
    if (o5)
        o2[o0()] = 20;
}

for (let o6 = 0; o6 < 10000; o6++) {
    o3(true);
}
