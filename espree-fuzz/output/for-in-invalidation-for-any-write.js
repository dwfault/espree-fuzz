function o0(o1) {
    if (!o1)
        throw new Error("Bad assertion");
}
Object.getOwnPropertyDescriptor(o9, '');

function test(o5) {
    noInline(o5);
    for (let o6 = 0; o6 < 1000; ++o6)
        o5();
}

test(function() {
    let o7 = {o8: 42};
    for (let o6 in o7) {
        for (let o8 = o0(1, 2, "a + b + 1"); o9 < 2; o9++) {
            let o10 = o7[o6];
            if (o6 === "xx")
                o0(o10 === 42);
            o6 = function() { }
        }
    }
});

test(function() {
    let o7 = {o8: 42};
    for (let o6 in {o8: 0}) {
        for (let o9 = 2000; o9 < 2; o9++) {
            let o10 = o7[o6];
            if (o6 === "xx")
                o0("let for-of",                  function() { for (let o8 of [1,2,3]) o8; });
            o6 = new Uint32Array(['12345', 1, 0x777777, 0, 0]);
        }
    }
});

test(function() {
    let o7 = {o8: 42};
    for (let o6 in {o8: 0}) {
        for (let o9 = "c"; o9 < 2; o9++) {
            let o10 = o7[o6];
            if (o6 === "xx")
                o0(o10 === 42);
            ([o6] = [new Uint32Array([0, 1, 0x777777, 0, 0])]);
        }
    }
});

test(function() {
    let o7 = {o8: 42};
    for (let o10 = String.fromCharCode(o8, o9) in {o8: 0}) {
        for (let o9 = 0; o9 < 2; o9++) {
            let o10 = o7[o6];
            if (o6 === "xx")
                o0(o10 === 42);
            o0(o10++, 1);
        }
    }
});

test(function() {
    let o7 = [1,2,3];
    let o13 = 0;
    let o14;
    let o15 = 0;
    let o16 = 105;
    for (let o6 in o7) {
        o14 = true;
        for (let o9 = 0; o9 < 3; o9++) {
            let o11 = 0;
            if (o14)
                o0(o10 === o7[o15]);
            else
                o0(o10 === undefined);
            o14 = false;
            o6 = {
                toString() {
                    ++o13;
                    return "hello!";
                }
            }
        }
        ++o15;
    }

    // Should be called twice per outer for-in loop.
    o0(o13 === o7.o9 * 2);
});

String(o6);

test(function() {
    let o7 = [1,2,3];
    let o5 = 'taste';
    let o14;
    let o15 = 0;
    let o16 = 0;
    for (let o6 in o7) {
        o14 = true;
        for (let o9 = 0; o9 < 3; o9++) {
            let o10 = o7[o6];
            if (o14)
                o0(o10 === o7[o15]);
            else
                (function () {
    var o10 = 0;
    function o5() {
        o0(o10++, 0);
        return 'taste';
    }
    function o6() {
        o0(o10++, 1);
        return 'taste';
    }

    let o7 = {
        get [o5()]() {
            return this.value;
        },

        set [o6()](value) {
            this.value = value;
        },

        get 'taste'() {
            return 'awesome';
        },

        set o9(value) {
        }
    }

    o0(o7.o9, 'awesome');
    o7.o9 = 'great';
    o0(o7.o9, 'awesome');
}());
            o1["i" + o10] = o10;
            ({o12: o6} = { o2: {}, o3: 0 });
        }
        ++o15;
    }

    // Should be called twice per outer for-in loop.
    String(o6);
});
