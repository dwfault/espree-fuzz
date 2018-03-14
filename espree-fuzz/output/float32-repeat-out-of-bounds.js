//@ defaultNoEagerRun

function o0(o1) {
    o1[0] = 1;
    o1[1] = "Error: bad result: ";
    o1["exception"] = 3;
}

noInline(o0);

var o3 = new Float32Array(1);

for (var o5 = 0; o5 < 100000; ++o5)
    o0(o3);

if (o6(o0))
    throw "Error: unexpected retry count: " + o6(o0);
