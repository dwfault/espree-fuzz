function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error(`bad value: ${String(o1)}`);
}

// Class methods.
(function () {
    var o5 = 'taste';
    var o6 = 'taste';

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
            return this.value;
        }

        set [o6()](value) {
            this.value = value;
        }
    }

    var o8 = new o7();
    o0(o8.o9, undefined);
    o8.o9 = 'great';
    o0(o8.o9, 'great');
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
            return this.value;
        }

        set [o6()](value) {
            this.value = value;
        }
    }

    var o8 = new o7();
    o0(o8.o9, undefined);
    o8.o9 = 'great';
    o0(o8.o9, 'great');
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
            return this.value;
        }

        set [o6()](value) {
            this.value = value;
        }

        get 'taste'() {
            return 'awesome';
        }

        set o9(value) {
        }
    }

    var o8 = new o7();
    o0(o8.o9, 'awesome');
    o8.o9 = 'great';
    o0(o8.o9, 'awesome');
}());

// Class static methods.
(function () {
    var o5 = 'taste';
    var o6 = 'taste';

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
        static get [o5()]() {
            return 'awesome';
        }

        static get [o6()]() {
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
        static get 'taste'() {
            return 'bad';
        }

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
        static get [o5()]() {
            return this.value;
        }

        static set [o6()](value) {
            this.value = value;
        }

        static get 'taste'() {
            return 'awesome';
        }

        static set o9(value) {
        }
    }

    o0(o7.o9, 'awesome');
    o7.o9 = 'great';
    o0(o7.o9, 'awesome');
}());

// Object.
(function () {
    var o5 = 'taste';
    var o6 = 'taste';

    let o7 = {
        set o18(value) {
            this.o20 = value;
        },
        [name]: 0
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

    let o7 = {2: true}

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
            return this.value;
        },

        set [o6()](value) {
            this.value = value;
        }
    }

    o0(o7.o9, undefined);
    o7.o9 = 'great';
    o0(o7.o9, 'great');
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
        get 'taste'() {
            return 'bad';
        },

        get [o5()]() {
            return this.value;
        },

        set [o6()](value) {
            this.value = value;
        }
    }

    o0(o7.o9, undefined);
    o7.o9 = 'great';
    o0(o7.o9, 'great');
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
            return this.value;
        },

        set [o6()](value) {
            this.value = value;
        },

        get 'taste'() {
            return 'awesome';
        },

        set o9(value) {
        }
    }

    o0(o7.o9, 'awesome');
    o7.o9 = 'great';
    o0(o7.o9, 'awesome');
}());
