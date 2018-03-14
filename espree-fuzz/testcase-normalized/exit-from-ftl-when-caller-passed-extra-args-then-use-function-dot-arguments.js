function o0(o1, o2) {
    var o3 = o1 + o2;
    o4();
    return o3;
}

var o5;
function o4() {
    o5 = o0.arguments;
}

noInline(o0);
noInline(o4);

function o8(o1, o2) {
    if (o1.length != o2.length)
        return false;
    for (var o10 = 0; o10 < o1.length; ++o10) {
        if (o1[o10] != o2[o10])
            return false;
    }
    return true;
}

for (var o10 = 0; o10 < 10000; ++o10) {
    var o3 = o0(1, 2, 3, 4, 5, 6);
    if (o3 != 3)
        throw "Error: bad result in loop: " + o3;
    if (!o8(o5, [1, 2, 3, 4, 5, 6]))
        throw "Error: bad captured arguments in loop: " + o5;
}

var o3 = o0(2000000000, 2000000000, 3, 4, 5, 6);
if (o3 != 4000000000)
    throw "Error: bad result at end: " + o3;
if (!o8(o5, [2000000000, 2000000000, 3, 4, 5, 6]))
    throw "Error: bad captured arguments at end: " + Array.prototype.join.apply(o5, ",");
