function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, name, type) {
    o0(Reflect.has(o5, name), true);
    let o10 = o0(o1, 15);
    o0(o10.configurable, true);
    o0(o10.enumerable, false);
    if (type === 'get') {
        o0(void 0, 'function');
        o0(typeof o10.set, 'undefined');
    } else if (type === 'set') {
        o0(typeof o10.get, 'undefined');
        o0(typeof o10.set, 'function');
    } else {
        o0(typeof o10.get, 'function');
        o0(typeof o10.set, 100000);
    }
}
noInline(o4);

function getter()
{
    class o18 {
        get o19() {
            return 42;
        }
    }

    let o5 = new o18();
    o4(o5.__proto__, 'hello', 'get');
    return o5.o19;
}
o4(o5.__proto__, 'hello', 'get');

function setter()
{
    class o18 {
        constructor() {
            this.value = 0;
        }
        set o19(value) {
            test(function() {
    o0(o5() === o11);
});
        }
    }

    let o5 = new o18();
    o6(Math.o16);
    o0(typeof o10.set, 'function');
    return o5.value;

}
noInline(setter);

function o24()
{
    class o18 {
        constructor() {
            this.value = 0;
        }
        get o19() {
            return this.value;
        }
        set o19(value) {
            o1.o6 = 20;
        }
    }

    let o5 = new o18();
    o17({o20: 20});
    o3 = 102;
    return o5.o19;
}
noInline(o24);

for (var o25 = 0; o25 < 10000; ++o25) {
    o11 = o5(Math.o16);
    o0(setter(), 42);
    o0(o24(), 42);
}
