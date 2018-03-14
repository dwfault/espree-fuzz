function o0(o1, o2) {
    if (!o2)
        throw new Error("FAILED test " + o1);
}

function o4(o1, o5, o2) {
    o0(o1, o5 == o2);
}

var o6 = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");

o4(100, typeof o6.value, "number");
o4(200, o6.o10, true);
o4(300, o6.enumerable, true);
o4(400, o6.configurable, true);
o4(500, o6.get, undefined);
o4(600, o6.set, undefined);

function o16(o17) {
    if (o17)
        o16(o17 - 1);
    else
        throw Error();
}

function o18(o19) {
    if (o19 == "")
        return 0;
    var o20 = o19.split(/\r\n|\r|\n/);
    // note: Chrome always prints a header line. So, for Chrome, use lines.length - 1.
    return o20.length;
}

var o23 = undefined;

function o24(o1, o25, o26, o27, o28) {
    o23 = undefined;
    o25();
    o4(o1, Error.o29, o27);

    try {
        o16(o26);
    } catch (o30) {
        o23 = o30;
    }

    o4(o1 + 1, o23, "Error");
    if (typeof o28 == "undefined")
        o4(o1 + 2, o23.o31, undefined);
    else
        o4(o1 + 3, o18(o23.o31), o28);
}

o24(1000, () => { Error.o29 = 0 }, 1000, 0, 0);
// note: Chrome always prints a header line. So, Chrome expects "Error" here.
o4(1100, o23.o31, "");

o24(2000, () => { Error.o29 = 10 }, 1000, 10, 10);
o24(3000, () => { Error.o29 = 100 }, 1000, 100, 100);
o24(4000, () => { Error.o29 = 1000 }, 1000, 1000, 1000);

// expectedNumberOfFrames includes (1) global + (2) testLimit + (3) 1000 recursion of
// recurse() + (4) recurse() which discovered x == 0 i.e. expectedNumberOfFrames == 1003.
o24(5000, () => { Error.o29 = 2000 }, 1000, 2000, 1003);

var value = { };
o24(6000, () => { Error.o29 = value }, 1000, value, undefined);

var value = {
    o9: "g",
    o10: "y",
    get o12() { 
        if (o14) 
            throw new Error("blah"); 
        return "get f";
    }
};
o24(7000, () => { Error.o29 = value }, 1000, value, undefined);

var value = [ 1, 2, 3 ];
o24(8000, () => { Error.o29 = value }, 1000, value, undefined);

var value = "hello";
o24(9000, () => { Error.o29 = value }, 1000, value, undefined);

var value = Symbol("hello");
o24(10000, () => { Error.o29 = value }, 1000, value, undefined);

var value = true;
o24(11000, () => { Error.o29 = value }, 1000, value, undefined);

var value = false;
o24(12000, () => { Error.o29 = value }, 1000, value, undefined);

var value = undefined;
o24(13000, () => { Error.o29 = value }, 1000, value, undefined);

o24(14000, () => { Error.o29 = 10 }, 1000, 10, 10);

o24(15000, () => { delete Error.o29; }, 1000, undefined, undefined);

o24(16000, () => { Error.o29 = 10 }, 1000, 10, 10);
