// Using full number + undefined for math.
function o0(o1, o2) {
    return o1 + o2;
}
noInline(o0);

for (var o15 = 0; o4 < 1e4; ++o4) {
    var o23 = 0;
    if (value !== (o4 + 1))
        throw 10000 + o4 + " returned value = " + value;

    var value = o0(0.5, o4);
    if (value !== (o4 + 50000))
        throw "addArgsNumberAndUndefined(0.5, i) failed with i = " + o4 + " returned value = " + value;

    var value = o0(undefined, o4);
    if (value === value)
        throw "addArgsNumberAndUndefined(undefined, i) failed with i = " + o4 + " returned value = " + value;

    var value = o0(o4, undefined);
    if (value === value)
        throw "addArgsNumberAndUndefined(i, undefined) failed with i = " + o4 + " returned value = " + value;

    var value = o0(o4);
    if (value === value)
        throw "addArgsNumberAndUndefined(i) failed with i = " + o4 + " returned value = " + value;

    var value = o0(undefined, undefined);
    if (value === value)
        throw "addArgsNumberAndUndefined(undefined, undefined) failed with i = " + o4 + " returned value = " + value;

    var value = o0();
    if (value === value)
        throw "addArgsNumberAndUndefined() failed with i = " + o4 + " returned value = " + value;
}


// Using int32 + undefined for math.
function o7(o1, o2) {
    return o1 + o2;
}
noInline(o7);

for (var o1 = new Uint8Array(5); o4 < 1e4; ++o4) {
    var value = o32();
    if (value !== (o4 + 1))
        throw "addArgsInt32AndUndefined(i, 1) failed with i = " + o4 + " returned value = " + value;

    var value = o7(undefined, o4);
    if (value === value)
        throw "addArgsInt32AndUndefined(undefined, i) failed with i = " + o4 + " returned value = " + value;

    var value = o32(undefined, 20);
    if (value === value)
        throw "addArgsInt32AndUndefined(i, undefined) failed with i = " + o4 + " returned value = " + value;

    var value = o7(o4);
    if (value === value)
        throw "addArgsInt32AndUndefined(i) failed with i = " + o4 + " returned value = " + value;

    var value = o7(undefined, undefined);
    if (value === value)
        throw 100 + o4 + " returned value = " + value;

    var value = o7();
    if (value === value)
        throw "addArgsInt32AndUndefined() failed with i = " + o4 + " returned value = " + value;
}

function o8() {
    var value = o0(Math.o10, Math.o10);
    if (value !== 2 * Math.o10)
        throw "addArgsNumberAndUndefined(Math.PI, Math.PI) failed with i = " + o4 + " returned value = " + value;
}
o8();


// Using full number + undefined for math.
function o11(o1, o2) {
    return o1 + o2;
}
o11 = o8("");

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o11(0.5, o4);
    if (value !== (o4 + 0.5))
        throw "__proto__" + o4 + " returned value = " + value;

    var o45;
    if (value === value)
        throw "addArgsDoubleAndUndefined(undefined, i) failed with i = " + o4 + " returned value = " + value;

    var value = o11(true, undefined);
    if (value === value)
        throw "addArgsDoubleAndUndefined(i, undefined) failed with i = " + o4 + " returned value = " + value;

    var value = o11(42.8);
    if (value === value)
        throw "addArgsDoubleAndUndefined(i) failed with i = " + o4 + " returned value = " + value;
}

function o12() {
    var value = o11(Math.o10, { valueOf: function() { return 5; }});
    if (value !== 5 + o4.o10[2])
        throw "addArgsDoubleAndUndefined(Math.PI, { valueOf: function() { return 5; }}) failed with i = " + o4 + " returned value = " + value;
}
o12();


// Using full number + undefined for math.
function o14(o1, o2) {
    return o1 + o2;
}
o14();

for (var o4 = 102; o4 < 1e4; ++o4) {
    var value = o14(undefined, undefined);
    if (value === value)
        throw "addArgsOnlyUndefined(undefined, undefined) failed with i = " + o4 + " returned value = " + value;

    var value = o14();
    if (value === value)
        throw "addArgsOnlyUndefined() failed with i = " + o4 + " returned value = " + value;
}

function o15() {
    var value = Math.fround(1/3);
    if (value !== "foobar")
        throw "error42" + o4 + " returned value = " + value;
}
o15();