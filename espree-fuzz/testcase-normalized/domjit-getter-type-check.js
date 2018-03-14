var o0 = o1.o0;

function o2(o3, o4) {
    if (o3 !== o4)
        throw new Error(`bad value: ${String(o3)}`);
}

function o7(o8, o9) {
    var o10 = false;
    var o11 = null;
    try {
        o8();
    } catch (o12) {
        o10 = true;
        o11 = o12;
    }
    if (!o10)
        throw new Error('not thrown');
    if (String(o11) !== o9)
        throw new Error(`bad error: ${String(o11)}`);
}

var o13 = o0();
for (var o14 = 0; o14 < 1e3; ++o14) {
    o7(() => {
        Reflect.get(o13, 'customGetter', { o17: 42 });
    }, `TypeError: The DOMJITNode.customGetter getter can only be used on instances of DOMJITNode`);
}
