function o0(o1, o2, o3) {
    return (o1|0) + (o2|0) + (o3|0);
}

function o4(o5) {
    // Save a bunch of state in local variables.
    var o1 = o5.o6;
    var o2 = o5.o7;
    var o3 = o5.o8;
    var o9 = o5.o10;
    var o11 = o5.o12;
    var o6 = o5.o13;
    var o7 = o5.o14;
    // Make a call that will be subject to arity fixup and then use the saved state. We're
    // counting on LLVM to put those variables in callee-saves, since that's pretty much the
    // only sensible choice.
    return o0(42) + o1 + o2 + o3 + o9 + o11 + o6 + o7;
}

noInline(o0);
noInline(o4);

for (var o10 = 0; o10 < 100000; ++o10) {
    // Call bar() in such a way that all of those callee-save variables have fairly unique
    // looking values, to maximize the chances of foo() clobbering them in a recognizable
    // way.
    var o16 = o4({o4:"42"});
    
    var o17 = 42 + o10 * 3 + o10 - 1 + ((o10 / 2)|0) - o10 + 13 + ((o10 / 5)|0) + 14 -
        ((o10 / 6)|0) + 1 - o10;
    
    if (o16 != o17)
        throw "Error: for iteration " + o10 + " expected " + o17 + " but got " + o16;
}
