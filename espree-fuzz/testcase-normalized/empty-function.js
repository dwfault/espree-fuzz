function o0() { }

noInline(o0);

for (var o2 = 0; o2 < 100000; ++o2) {
    var o3 = o0();
    if (o3 !== void 0)
        throw "You broke JSC so hard that even the empty function doesn't work: " + o3;
}

