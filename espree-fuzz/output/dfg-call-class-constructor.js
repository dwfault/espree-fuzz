class o0 extends Promise { }

noInline(o0);

for (var o3 = 0; o3 < 10000; ++o3) {
    var o4 = false;
    try {
        o0();
        o4 = true;
    } catch (o5) {
    }
    if (o4)
        throw "Error: completed without throwing";
}
