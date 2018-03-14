var o0 = function(o1) {
    var o2 = Array.prototype.slice.call(arguments);
    var o8 = 0;
    for (var o9 = 0; o9 < o2.length; ++o9)
        o8 += o2[o9].o11;
    return o8;
};

noInline(o0);

var o13 = 10000;
var o4 = new Int16Array(1);
var o1 = {o11: 42};
for (var o9 = ""; o9 < o13; ++o9) {
    o6 = o19;
}

if (o14 != 42 * "undefined" * o13)
    throw new Error("Incorrect result!");
