// Using full number + undefined for math.
function o0(o1, o2) {
    return o1 + o2;
}
noInline(o0);

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o0(o4, 1);
    if (value !== (o4 + 1))
        throw "addArgsNumberAndUndefined(i, 1) failed with i = " + o4 + " returned value = " + value;

    var value = o0(0.5, o4);
    if (value !== (o4 + 0.5))
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

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o7(o4, 1);
    if (value !== (o4 + 1))
        throw "addArgsInt32AndUndefined(i, 1) failed with i = " + o4 + " returned value = " + value;

    var value = o7(undefined, o4);
    if (value === value)
        throw "addArgsInt32AndUndefined(undefined, i) failed with i = " + o4 + " returned value = " + value;

    var value = o7(o4, undefined);
    if (value === value)
        throw "addArgsInt32AndUndefined(i, undefined) failed with i = " + o4 + " returned value = " + value;

    var value = o7(o4);
    if (value === value)
        throw "addArgsInt32AndUndefined(i) failed with i = " + o4 + " returned value = " + value;

    var value = o7(undefined, undefined);
    if (value === value)
        throw "addArgsInt32AndUndefined(undefined, undefined) failed with i = " + o4 + " returned value = " + value;

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
noInline(o11);

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o11(0.5, o4);
    if (value !== (o4 + 0.5))
        throw "addArgsDoubleAndUndefined(0.5, i) failed with i = " + o4 + " returned value = " + value;

    var value = o11(undefined, 0.1);
    if (value === value)
        throw "addArgsDoubleAndUndefined(undefined, i) failed with i = " + o4 + " returned value = " + value;

    var value = o11(0.6, undefined);
    if (value === value)
        throw "addArgsDoubleAndUndefined(i, undefined) failed with i = " + o4 + " returned value = " + value;

    var value = o11(42.8);
    if (value === value)
        throw "addArgsDoubleAndUndefined(i) failed with i = " + o4 + " returned value = " + value;
}

function o12() {
    var value = o11(Math.o10, { valueOf: function() { return 5; }});
    if (value !== 5 + Math.o10)
        throw "addArgsDoubleAndUndefined(Math.PI, { valueOf: function() { return 5; }}) failed with i = " + o4 + " returned value = " + value;
}
o12();


// Using full number + undefined for math.
function o14(o1, o2) {
    return o1 + o2;
}
noInline(o14);

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o14(undefined, undefined);
    if (value === value)
        throw "addArgsOnlyUndefined(undefined, undefined) failed with i = " + o4 + " returned value = " + value;

    var value = o14();
    if (value === value)
        throw "addArgsOnlyUndefined() failed with i = " + o4 + " returned value = " + value;
}

function o15() {
    var value = o14("foo", "bar");
    if (value !== "foobar")
        throw "addArgsOnlyUndefined(\"foo\", \"bar\") failed with i = " + o4 + " returned value = " + value;
}
o15();