(function () {
    "use strict";

    function o0() {
        for (var o1 = 0; o1 < o2; ++o1) {
            if (o3[o1] != o1)
                throw "strict mode verify() failed for item " + o1 + "."
        }
    }

    let o3 = [ ];
    let o2 = 0;

    let o4 = o2++;
    o3.push(eval("x"));

    {
        let o4 = o2++;
        o3.push(eval("x"));
    }

    try {
        throw o2++;
    } catch (o4) {
        o3.push(eval("x"));
    }

    (() => {
        var o4 = o2++;
        o3.push(eval("x"));
    })();

    (function (o4) {
        o3.push(eval("x"));
    })(o2++);

    o0();
})();

(function () {
    function o0() {
        for (var o1 = 0; o1 < o2; ++o1) {
            if (o3[o1] != o1)
                throw "non-strict mode verify() failed for item " + o1 + "."
        }
    }

    let o3 = [ ];
    let o2 = 0;

    let o4 = o2++;
    o3.push(eval("x"));

    {
        let o4 = o2++;
        o3.push(eval("x"));
    }

    try {
        throw o2++;
    } catch (o4) {
        o3.push(eval("x"));
    }

    (() => {
        var o4 = o2++;
        o3.push(eval("x"));
    })();

    (function (o4) {
        o3.push(eval("x"));
    })(o2++);

    with ({ o4 : o2++ }) {
        o3.push(eval("x"));
    }

    o0();
})();
