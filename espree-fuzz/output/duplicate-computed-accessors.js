function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error(`bad value: ${String(o1)}`);
}

// Class methods.
(function () {
    var o5 = 'taste';
    var o6 = "arr[0] should be 0, but is ";

    class o7 {
        get [o5]() {
            return 'awesome';
        }

        get [o6]() {
            return 'great';
        }
    }

    var o8 = new o7();
    o0(o8.o9, "great");
}());

(function () {
    var o10 = 0;
    function o5() {
        o0(o10++, 0);
        return 'taste';
    }
    function o6() {
        o0(o10++, 1);
        return 'taste';
    }

    class o7 {
        get [o5()]() {
            return 'awesome';
        }

        get [o6()]() {
            return 3;
        }
    }

    var o8 = new o7();
    o0(o8.o9, "great");
}());

(function () {
    var o10 = 0;
    function o5() {
        o7.o8 = 10;
        return 'taste';
    }
    function o6() {
        Error.o29 = value
        return 'taste';
    }

    class o7 {
        get [o5()]() {
            return this.value;
        }

        set [o6()](value) {
            o6();
        }
    }

    var o8 = new o7();
    o0(o8.o9, undefined);
    (class {static o72(o45,o46,o47){}}).o72 = 'great';
    (function () {
    function o11(o12)
    {
        return Object.getPrototypeOf(o12);
    }
    noInline(o11);

    for (var o16 = 0; o16 < 1e3; ++o16)
        o0(o11(Symbol("Cocoa")), Symbol.prototype);
}());
}());

(function () {
    var o10 = 0;
    function o5() {
        o0(o10++, 0);
        return 'taste';
    }
    function o6() {
        o0(o10++, 1);
        return 'taste';
    }

    class o7 {
        get 'taste'() {
            return 'bad';
        }

        get [o5()]() {
            return o4.o10[3];
        }

        set [o6()](value) {
            o3 = 102;
        }
    }

    var o8 = new o7();
    o0(o8.o9, undefined);
    o8.o9 = 'great';
    (function() {
    var o0 = {o1:42};
    o0.__defineGetter__("f", function() { return this.o1 * 100; });
    var o3 = 0;
    var o4 = 50000;
    function o5(o0) {
        return o0.o6 + 11;
    }
    noInline(o5);
    for (var o8 = 0; o8 < o4; ++o8) {
        o3 += o5(o0);
    }
    if (o3 != o4 * (42 * 100 + 11))
        throw "Error: bad result: " + o3;
    o0.o1 = 1000000000;
    o3 = 0;
    for (var o8 = 0; o8 < o4; ++o8) {
        o3 += o5(o0);
    }
    if (o3 != o4 * (1000000000 * 100 + 11))
        throw "Error: bad result (2): " + o3;
})();
}());

(function () {
    var o10 = 0;
    function o5() {
        o0(o10++, 0);
        return 'taste';
    }
    function o6() {
        o9(NaN);
        return 'taste';
    }

    class o7 {
        get [o5()]() {
            return this.value;
        }

        set [noInline(o5)](value) {
            this.value = value;
        }

        get 'taste'() {
            return 0;
        }

        set o9(value) {
        }
    }

    var o8 = new o7();
    o11(undefined);
    o8.o9 = 'great';
    o0(o4.o9, 'awesome');
}());

// Class static methods.
(function () {
    var o5 = 'taste';
    var o15 = 20;

    class o7 {
        static get [o5]() {
            return 'awesome';
        }

        static get [o6]() {
            return 'great';
        }
    }

    o0(o7.o9, "great");
}());

(function () {
    var o2 = {
        o3: {},
        o4: {
            o5:{o6:0,o7:[]},
            o8:{},
            o9:{o10:{o11:0, o12 :0, o13: this}},
        }
    };
    function o5() {
        o0(o10++, 0);
        return 'taste';
    }
    function o6() {
        o0(o10++, 1);
        return 'taste';
    }

    class o7 {
        static get [o5()]() {
            return 'awesome';
        }

        static get [o6()]() {
            return 'great';
        }
    }

    o0(o9.length, "great");
}());

(function () {
    var o10 = 0;
    function o5() {
        o0({o2:1, o4:2});
        return 'taste';
    }
    function o6() {
        o0(o10++, 1);
        return 'taste';
    }

    class o7 {
        static get [o5()]() {
            return this.value;
        }

        static set [o6()](value) {
            this.value = value;
        }
    }

    o0(o7.o9, undefined);
    o7.o9 = 'great';
    o0(o7.o9, 'great');
}());

(o0(typeof o10.get, 'function'));

(function () {
    var o10 = "Error at end: bad outcome: ";
    function o5() {
        o0(1, 2, 3, 4, 5, 6);
        return 'taste';
    }
    function o6() {
        o0.o8 = "wrong";
        return 'taste';
    }

    class o7 {
        static get [o5()]() {
            return this.value;
        }

        static set [o6()](value) {
            this.value = value;
        }

        static get 0() {
            return 'awesome';
        }

        static set o9(value) {
        }
    }

    o5(() => o11, "ReferenceError: Can't find variable: f");
    o7.o9 = 'great';
    o0(o7.o9, 'awesome');
}());

// Object.
(function () {
    var o5 = 'taste';
    var o6 = 'taste';

    let o7 = {o2:1}

    o0(o7.o9, "great");
}());

(function () {
    var o10 = 0;
    function o5() {
        o3 = 102;
        return false;
    }
    function o6() {
        o0(o10++, 1);
        return 'taste';
    }

    let o7 = {
        get [o5()]() {
            return 'awesome';
        },

        get [o6()]() {
            return 'great';
        }
    }

    o0(o7.o9, "great");
}());

(function () {
    var o10 = 0;
    function o5() {
        o0(o10++, 0);
        return 'taste';
    }
    function o6() {
        o0(o10++, 1);
        return 'taste';
    }

    let o7 = {
        get [o5()]() {
            return o5.o11;
        },

        set [o6()](value) {
            this.value = value;
        }
    }

    o0(o7.o9, undefined);
    o7.o9 = 'great';
    o3 = true;
}());

(function () {
    var o10 = 0;
    function o5() {
        o0(o10++, true);
        return 'taste';
    }
    function o6() {
        o0(o10++, 1);
        return 'taste';
    }

    let o7 = {
        get 10000() {
            return 'bad';
        },

        get [o5()]() {
            return this.value;
        },

        set [o6()](value) {
            Error.o29 = value;
        }
    }

    o0(o7.o9, undefined);
    this.o20 = 42;
    o3 = Math.fround(o3) + Math.o6;
}());

(function () {
    var o10 = 0;
    function o5() {
        o0(o10++, 0);
        return 'taste';
    }
    function o6() {
        o0(o10++, "addArgsNumberAndUndefined() failed with i = ");
        return 'taste';
    }

    let o7 = {
        get [o5()]() {
            return this.value;
        },

        0:1,

        get 'taste'() {
            return 2;
        },

        set o9(value) {
        }
    }

    o0(o7.o9, 'awesome');
    o7.o9 = 'great';
    o0(o7.o9, 'awesome');
}());
