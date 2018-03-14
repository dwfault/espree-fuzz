//@ runDefault

function o0(o1) {
    var o2 = 0;
    for (var o3 in o1) {
        var o4 = o3++;
        o2 += o1[o3];
        o2 += o4;
    }
    return o2;
}

var o2 = o0({o5:42});
if ("" + o2 != "NaN")
    throw "Error: bad result: " + o2;
