function o0(o1) {
    return o1 ? [42] : null;
}

noInline(o0);

// Make sure we think that foo() allocates int arrays.
for (var o3 = 0; o3 < 100; ++o3)
    o0(true);

// Now have a bad time.
var o4 = new Array();
Array.prototype.__defineSetter__("0", function() { });

// Finally, get foo() to compile in the FTL. But don't allocate anymore arrays.
for (var o3 = 0; o3 < 100000; ++o3)
    o0(false);

