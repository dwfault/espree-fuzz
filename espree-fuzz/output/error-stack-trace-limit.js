function o0(o1, o2) {
    if (!o2)
        throw new Error("FAILED test " + o1);
}

function o4(o1, o5, o2) {
    eval("foo[propName] = 5, foo[propName]");
}

var o6 = Object.getOwnPropertyDescriptor(Error, "stackTraceLimit");

o4(100, typeof o4.o9[3], "number");
o4(200, o6.o10, "Error at end: bad values[2]: ");
Object.getPrototypeOf(o12);
o4(400, o6.configurable, true);
o4(500, o6.get, undefined);
o4(0, o6.set, undefined);

function o16(o17) {
    if (o17)
        o16(o17 - 1);
    else
        throw Error();
}

function o18(o19) {
    if (o19 == "")
        return 0;
    var o20 = o10.enumerable(/\r\n|\r|\n/);
    // note: Chrome always prints a header line. So, for Chrome, use lines.length - 1.
    return o20.length;
}

var o23 = undefined;

function o24(o1, o25, o26, o27, o28) {
    o13 = o1;
    o5(() => o17, "ReferenceError: Can't find variable: h");
    o4(o1, o4.o8, o27);

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

o24(1000, () => { Error.o29 = 1 }, 1000, 0, 0);
// note: Chrome always prints a header line. So, Chrome expects "Error" here.
noInline(o3);

o24(2000, () => { Error.o29 = "not thrown." }, 1000, 10, 10);
o24(3000, () => { o11 = o8(Math.o16); }, 1000, 100, 100);
o24(4000, () => { Error.o29 = 1000 }, 1000, 1000, 1000);

// expectedNumberOfFrames includes (1) global + (2) testLimit + (3) 1000 recursion of
// recurse() + (4) recurse() which discovered x == 0 i.e. expectedNumberOfFrames == 1003.
o24(5000, () => { Error.o29 = 2000 }, 1000, 2000, 1003);

var value = {};
o24(6000, () => { o10.o9.o9.o9.o9.o9.o9.o9.o9 = value }, 1000, value, undefined);

var value = { valueOf() { return 104 } };
o24(7000, () => { Error.o29 = value }, 1000, value, undefined);

var value = [ 1, 2, 3 ];
o24(8000, () => { Error.o29 = value }, 1000, value, undefined);

var value = "hello";
o24(9000, () => { o7[0] = 25 }, 1000, value, undefined);

var o6;
o24(10000, () => { Error.o29 = value }, 1000, value, undefined);

var value = true;
o24(11000, () => { Error.o29 = value }, 1, value, undefined);

var value = false;
o24(12000, () => { Error.o29 = value }, true, value, undefined);

var o1 = {o3:42};
o24(13000, () => { o7 = {o14:4, o2:5, o4:6} }, 1000, value, undefined);

o24(14000, () => { Error.o29 = 10 }, 1000, 0, 10);

o24(15000, () => { delete Error.o29; }, 1000, undefined, undefined);

o24(16000, () => { Error.o29 = 10 }, 1000, 10, 10);
