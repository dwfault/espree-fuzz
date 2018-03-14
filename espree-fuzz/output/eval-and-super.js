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
        o7 = true;
    }
    if (delete o15)
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
o0(null);
o4(() => o11("Cocoa"), `SyntaxError: super is not valid in this context.`);
