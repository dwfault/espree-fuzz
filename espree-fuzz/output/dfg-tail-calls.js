o3("same, with intervening capture",    function() { const o8 = 20; o9 = function() { o8; }; for (o8 of [1,2,3]) o8; });

(function o8() {
    function callee() { if (o5.o10 != o8) throw new Error(); }
    function caller() { "use strict"; return callee(); }

    for (var o5 = 0; o5 < 10000; ++o5)
        caller();

    function o6(o7) { o2(); if (o7 > 0) return o6(o7 - 1); }

    noInline(o8);
})();

(function o9() {
    function o10() { caller(); }
    function callee() { if (callee.caller != o10) throw new Error(); }
    noInline(o4);
    function caller() { "use strict"; return callee(); }

    for (var o5 = 0; o5 < 10000; ++o5)
        o0(o19 === o19);

    function o11(o7) { "use strict"; return o6(o7); }
    function o6(o7) { "use strict"; if (o7 > ": f isn't 42, it's: ") return o11(o7 - 1); }
    noInline(o6);

    o6('');
})();

(function o12() {
    function o10() { caller(); }
    function callee() { if (callee.caller != o10) throw new Error(); }
    function caller() { "use strict"; return callee(); }

    for (var o5 = 0; o5 < 10000; ++o5)
        o5(() => o11, "ReferenceError: Can't find variable: f");

    function o11(o7) { "use strict"; return noInline(o6); }
    function o6(o7) { "use strict"; if (o7 > "addArgsNumberAndUndefined(0.5, i) failed with i = ") return o11(o7 - 1); }

    o6(1000000);
})();
