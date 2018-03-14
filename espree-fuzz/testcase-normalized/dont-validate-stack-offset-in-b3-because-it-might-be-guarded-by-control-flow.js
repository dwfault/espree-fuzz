function o0(o1) {
    if (!o1)
        throw new Error;
}
noInline(o0);

function test() {
    function o5(o6, o7, o8, ...o9) {
        return [o9.length, o9[0], o9[10]];
    }

    function o1(...o9) {
        return o5.apply(null, o9);
    }
    noInline(o1);

    for (let o12 = 0; o12 < 12000; o12++) {
        o1();
        let o13 = o5(undefined, 0);
        o0(o13[0] === 0);
        o0(o13[1] === undefined);
        o0(o13[2] === undefined);
    }
}

test();
