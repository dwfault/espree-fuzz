// Using full number + null for math.
function o0(o1, o2) {
    return o1 + o2;
}
noInline(o0);

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o0(o4, 1);
    if (value !== (o4 + 1))
        throw "addArgsNumberAndNull(i, 1) failed with i = " + o4 + " returned value = " + value;

    var value = o0(0.5, o4);
    if (value !== (o4 + 0.5))
        throw "addArgsNumberAndNull(0.5, i) failed with i = " + o4 + " returned value = " + value;

    var value = o0(null, o4);
    if (value !== o4)
        throw "addArgsNumberAndNull(null, i) failed with i = " + o4 + " returned value = " + value;

    var value = o0(o4, null);
    if (value !== o4)
        throw "addArgsNumberAndNull(i, null) failed with i = " + o4 + " returned value = " + value;

    var value = o0(null, null);
    if (value !== 0)
        throw "addArgsNumberAndNull(null, null) failed with i = " + o4 + " returned value = " + value;
}


// Using int32 + null for math.
function o6(o1, o2) {
    return o1 + o2;
}
noInline(o6);

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o6(o4, 1);
    if (value !== (o4 + 1))
        throw "addArgsInt32AndNull(i, 1) failed with i = " + o4 + " returned value = " + value;

    var value = o6(null, o4);
    if (value !== o4)
        throw "addArgsInt32AndNull(null, i) failed with i = " + o4 + " returned value = " + value;

    var value = o6(o4, null);
    if (value !== o4)
        throw "addArgsInt32AndNull(i, null) failed with i = " + o4 + " returned value = " + value;

    var value = o6(null, null);
    if (value !== 0)
        throw "addArgsInt32AndNull(null, null) failed with i = " + o4 + " returned value = " + value;
}

function o7() {
    var value = o0(Math.o9, Math.o9);
    if (value !== 2 * Math.o9)
        throw "addArgsNumberAndNull(Math.PI, Math.PI) failed with i = " + o4 + " returned value = " + value;
}
o7();


// Using full number + null for math.
function o10(o1, o2) {
    return o1 + o2;
}
noInline(o10);

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o10(0.5, o4);
    if (value !== (o4 + 0.5))
        throw "addArgsDoubleAndNull(0.5, i) failed with i = " + o4 + " returned value = " + value;

    var value = o10(null, 0.1);
    if (value !== 0.1)
        throw "addArgsDoubleAndNull(null, i) failed with i = " + o4 + " returned value = " + value;

    var value = o10(0.6, null);
    if (value !== 0.6)
        throw "addArgsDoubleAndNull(i, null) failed with i = " + o4 + " returned value = " + value;
}

function o11() {
    var value = o10(Math.o9, { valueOf: function() { return 5; }});
    if (value !== 5 + Math.o9)
        throw "addArgsDoubleAndNull(Math.PI, { valueOf: function() { return 5; }}) failed with i = " + o4 + " returned value = " + value;
}
o11();


// Using only null
function o13(o1, o2) {
    return o1 + o2;
}
noInline(o13);

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o13(null, null);
    if (value !== 0)
        throw "addArgsOnlyNull(null, null) failed with i = " + o4 + " returned value = " + value;
}

function o14() {
    var value = o13("foo", "bar");
    if (value !== "foobar")
        throw "addArgsOnlyNull(\"foo\", \"bar\") failed with i = " + o4 + " returned value = " + value;
}
o14();