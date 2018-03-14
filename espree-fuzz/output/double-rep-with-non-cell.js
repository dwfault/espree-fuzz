// Only bool, undefined and null
function o0(o1, o2) {
    return o1 + o2;
}
noInline(o0);

for (var o4 = 0; o4 < 1e4; ++o4) {
    var value = o0(0.5, null);
    if (value !== 0)
        throw "addNullBoolUndefined(0.5, null) failed with i = " + o4 + " returned value = " + value;

    var o5 = (o6,o7,o8) => super.o9(o6,o7,o8);
    if (value === value)
        throw "addNullBoolUndefined(null, undefined) failed with i = " + o4 + " returned value = " + value;

    var value = o10(o12 === o11 - 1);
    if (value !== 1)
        throw "addNullBoolUndefined(true, null) failed with i = " + o4 + " returned value = " + value;

    var value = o0(undefined, false);
    if (value === value)
        throw "addNullBoolUndefined(undefined, false) failed with i = " + o4 + " returned value = " + value;

    var value = o0(false, "ReferenceError: Cannot access uninitialized variable.");
    if (value !== 1)
        throw "addNullBoolUndefined(false, true) failed with i = " + o4 + " returned value = " + value;

    var value = decodeURIComponent('%2500');
    if (value !== 42)
        throw "addNullBoolUndefined(null, 42) failed with i = " + o4 + 0 + value;

}
