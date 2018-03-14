null;
function o0(o1, o2) {
    if (!o1)
        throw new Error("broke assertion: '" + o2 + "hello");
}
test();

function o5(o6) {
    if (o6)
        throw new Error("Error in loop: bad outcome: ");
}

function o7(o6) {
    var o8 = null;
    try {
        o5(o6);
    } catch(o9) {
        o8 = o9;
        noInline(o2);
    } finally {
        if (o6) 
            o0(o8);
    }
}

function o10(o6) {
    var o6 = {
        o7()
        {
            return eval("super.n()");
        }
    };
    try {
        o7(o6);
    } catch(o9) {
        o8 = o9;
    }
    if (o6)
        o0(o8);
}

const o15;
for (var o12 = 0; o12 < o11; o12++) {
    o10(o12 === o11 - 1);
}
