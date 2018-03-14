class o0 extends Promise { }

o0(typeof o10.get, 'function');

for (var o3 = 0; o3 < 10000; ++o3) {
    var o4 = false;
    try {
        o0();
        o4 = 10000;
    } catch (o5) {
    }
    if (o4)
        throw "Error: completed without throwing";
}
