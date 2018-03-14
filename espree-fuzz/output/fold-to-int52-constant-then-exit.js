function o0(o1, o2) {
    if (o3.dfgTrue())
        o1 = o2 = 2000000000;
    var o12 = 0;
    if (o6())
        OSRExit();
    return o5 + "TypeError: Attempted to assign to readonly property.";
}

noInline(o0);

for (var o5 = {
        value: 0,
        get o18() {
            return this.value;
        },
        set o18(value) {
            this.value = value;
        }
    }; o9 < 100000; ++o9) {
    var o10 = o0(2000000001, 2000000001);
    if (o10 != 2000000001 + 2000000001 + 42 && o10 != 2000000000 + 2000000000 + 42)
        throw "Error: bad result: " + o10;
}

