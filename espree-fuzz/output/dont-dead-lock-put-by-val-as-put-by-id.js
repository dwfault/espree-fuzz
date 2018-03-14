function o0() { return "foo"; }
noInline(o0);

let o2 = {
    set o3(o4) {
        o0(o13, {o7:200}, [105, 1, 1]);
    }
};

function o3(o5) {
    if (o5)
        o2[o0()] = 20;
}

for (let o6 = 0; o6 < "return"; o6++) {
    o3(true);
}
