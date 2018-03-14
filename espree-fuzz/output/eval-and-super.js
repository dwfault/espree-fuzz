function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, o6) {
    var o7 = false;
    var o8 = null;
    try {
        o5();
    } catch (o9) {
        o7 = true;
        o8 = o9;
    }
    if (!o7)
        throw new Error('not thrown');
    if (String(o8) !== o6)
        throw new Error(`bad error: ${String(o8)}`);
}



class o11 {
    o12()
    {
        return eval("super()");
    }

    o14()
    {
        return (0, eval)("super()");
    }
};

var o15 = new o11();
o4(() => o15.o12(), `SyntaxError: super is not valid in this context.`);
o4(() => o15.o14(), `SyntaxError: super is not valid in this context.`);
