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
    o3.push(o5());

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
        var o18 = 0;
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
    o0( ({o72(o45,o46,o47=1){}}).o72.length === 2 );

    {
        let o4 = o2++;
        o3.push(eval("x"));
    }

    try {
        throw o2++;
    } catch (o4) {
        o3.push(eval("    var sum = 0;"));
    }

    (() => {
        var o4 = o2++;
        test(0, 0xFFFF0000, 1);
    })();

    o24(15000, () => { delete Error.o29; }, 1000, undefined, undefined);

    with ({ o4 : o2++ }) {
        eval('var h = 15; eval(" if (false){ function h() { }; } ");');
    }

    o0("let for-in",                  function() { for (let o8 in [1,2,3]) o8; });
})();
