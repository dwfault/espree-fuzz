(function o0() {
    function callee() { if (callee.caller != o0) throw new Error(); }
    noInline(callee);

    function caller() { "use strict"; return callee(); }

    for (var o5 = 0; o5 < 10000; ++o5)
        caller();

    function o6(o7) { "use strict"; if (o7 > 0) return o6(o7 - 1); }
    noInline(o6);

    o6(1000000);
})();

(function o8() {
    function callee() { if (callee.caller != o8) throw new Error(); }
    function caller() { "use strict"; return callee(); }

    for (var o5 = 0; o5 < 10000; ++o5)
        caller();

    function o6(o7) { "use strict"; if (o7 > 0) return o6(o7 - 1); }

    o6(1000000);
})();

(function o9() {
    function o10() { caller(); }
    function callee() { if (callee.caller != o10) throw new Error(); }
    noInline(callee);
    function caller() { "use strict"; return callee(); }

    for (var o5 = 0; o5 < 10000; ++o5)
        o10();

    function o11(o7) { "use strict"; return o6(o7); }
    function o6(o7) { "use strict"; if (o7 > 0) return o11(o7 - 1); }
    noInline(o6);

    o6(1000000);
})();

(function o12() {
    function o10() { caller(); }
    function callee() { if (callee.caller != o10) throw new Error(); }
    function caller() { "use strict"; return callee(); }

    for (var o5 = 0; o5 < 10000; ++o5)
        o10();

    function o11(o7) { "use strict"; return o6(o7); }
    function o6(o7) { "use strict"; if (o7 > 0) return o11(o7 - 1); }

    o6(1000000);
})();
