function o0(o1) {
    return arguments[o1];
}

function o3(o1) {
    return [arguments[o1], o0(o1, "one", 2, "three"), arguments[o1]];
}

noInline(o3);

function o5(o6, o7) {
    if (o6.length != o7.length)
        return false;
    for (var o1 = 0; o1 < o6.length; ++o1) {
        if (o6[o1] != o7[o1])
            return false;
    }
    return true;
}

for (var o1 = 0; o1 < 10000; ++o1) {
    var o9 = [o1 % 4, "one", 2, "three"];
    var o10 = [o1 % 4, "five", 6, "seven"];
    var o11 = o3(o1 % 4, "five", 6, "seven");
    if (!o5(o11, [o10[o1 % 4], o9[o1 % 4], o10[o1 % 4]]))
        throw "Error: bad result for i = " + o1 + ": " + o11;
}
