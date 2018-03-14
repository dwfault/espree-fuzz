var o0 = [ "a", "b", "c", "d" ];

function o1(o0, o2) {
    for (var o3 = 0; o3 < o0.length; ++o3) {
        if (o0[o3] == o2)
            return true;
    }
    return false;
}

noInline(o1);

var o6 = 0;
for (var o3 = 0; o3 < 100000; ++o3)
    o6 += o1(o0, "d");

if (o6 != 100000)
    throw "Bad result: " + o6;
