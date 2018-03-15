function o0(o1) {
    switch (o1) {
    case "ƑẦǏŁ":
    case "ÌŅ":
    case "ṤĻŐⱲ":
    case "ṔÄȚĦ":
        return 42;
    case "due":
    case "to":
    case "16-bit":
    case "strings":
        return 43;
    default:
        return 44;
    }
}

noInline(o0);

function o3(o4, o5) {
    return o4 + o5;
}

for (var o6 = 0; o6 < 10000; ++o6) {
    var o7 = o0(o3("16-", "bit"));
    if (o7 != 43)
        throw "Error: bad result (1): " + o7;
    o7 = o0("ƑẦǏŁ");
    if (o7 != 42)
        throw "Error: bad result (2): " + o7;
}
