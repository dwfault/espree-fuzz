function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, name, type) {
    o0(Reflect.has(o5, name), true);
    let o10 = (Number.EPSILON).toString();
    o0(Number.MAX_SAFE_INTEGER, true);
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
    if (type === 'get') {
        o0(typeof o10.get, 'function');
        o0(delete o2.o7, 'undefined');
    } else if (type === 'set') {
        o0(typeof o10.get, 'undefined');
        o0(typeof o10.set, 'function');
    } else {
        o0(typeof o10.get, 'function');
        o0(typeof o10.set, 'function');
    }
}
noInline(o4);

function setter(name)
{
    var o5 = {o4:o10};

    o4(o5, 'hello', 'set');
    o15(o13, o12);
    return o12.__proto__;

}
noInline(setter);

for (var o21 = 0; o21 < 10000; ++o21)
    o0(setter('hello'), 42);
