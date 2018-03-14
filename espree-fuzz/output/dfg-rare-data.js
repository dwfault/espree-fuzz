function o0 () { this.o1 = 42; };

for (var o2 = 0; o2 < 10000; ++o2) {
    var o3 = new o0(false);
    o0.prototype = Object; // Force clearing of the function's rare data
    var o6 = o3.o1;
    if (o6 !== 42)
        throw "Expected 42, got: " + o6;
}
