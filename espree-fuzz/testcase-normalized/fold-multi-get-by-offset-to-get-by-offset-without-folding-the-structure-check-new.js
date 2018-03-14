function o0(o1) {
    return o1.o2;
}

function o3(o1) {
    return o1.o4;
}

function o5(o1, o6, o7) {
    var o8 = 0;
    if (o9()) {
        o6 = o1;
        o7 = o1;
        o8 += 10000;
    }
    o8 += o0(o6);
    o8 += o3(o7);
    return o8;
}

noInline(o5);

for (var o11 = 0; o11 < 100000; ++o11) {
    var o1, o6, o7;
    var o12;
    var o13;
    o1 = {o2:100, o4:101};
    o13 = 10000 + 100 + 101;
    if (o11 & 1) {
        o6 = {o14:1, o2:2, o4:3};
        o7 = {o14:4, o2:5, o4:6};
        o12 = 2 + 6;
    } else {
        o6 = {o2:7, o4:8};
        o7 = {o4:9, o2:10};
        o12 = 7 + 9;
    }
    var o8 = o5(o1, o6, o7);
    if (o8 != o12 && o8 != o13)
        throw "Error: bad result: " + o8 + " (expected " + o12 + " or " + o13 + ")";
}

