(function() {
    // Add a property to the base object that shadows a property in the prototype during iteration.
    var o9 = {
    o5: 20,
    o8: 40
};
    noInline(o0);
    for (var o9 = 0; o9 < 10000; ++o9) {
        if (o0() !== 1)
            throw new Error("bad result");
    }
    o0(null);
})();
