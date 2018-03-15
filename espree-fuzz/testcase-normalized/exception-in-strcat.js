function o0(o1, o2) {
    return o1 + "x" + o2;
}

noInline(o0);

for (var o4 = 0; o4 < 10000; ++o4) {
    var o5 = o0({toString: function() { return "a"; }}, 42);
    if (o5 != "ax42")
        throw "Error: bad result: " + o5;
}

var o5 = null;
var o7 = false;
try {
    o5 = o0({toString: function() { throw "error"; }}, 42);
} catch (o8) {
    o7 = true;
}

if (!o7)
    throw "Error: did not throw";
if (o5 !== null)
    throw "Error: did set result: " + o5;
