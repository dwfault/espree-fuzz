function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, name, type) {
    o0(Reflect.has(o5, name), true);
    let o10 = Reflect.getOwnPropertyDescriptor(o5, name);
    o0(o10.configurable, true);
    o0(o10.enumerable, false);
    if (type === 'get') {
        o0(typeof o10.get, 'function');
        o0(typeof o10.set, 'undefined');
    } else if (type === 'set') {
        o0(typeof o10.get, 'undefined');
        o0(typeof o10.set, 'function');
    } else {
        o0(typeof o10.get, 'function');
        o0(typeof o10.set, 'function');
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
noInline(getter);

function setter()
{
    class o18 {
        constructor() {
            this.value = 0;
        }
        set o19(value) {
            this.value = value;
        }
    }

    let o5 = new o18();
    o4(o5.__proto__, 'hello', 'set');
    o5.o19 = 42;
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
            this.value = value;
        }
    }

    let o5 = new o18();
    o4(o5.__proto__, 'hello', 'getset');
    o5.o19 = 42;
    return o5.o19;
}
noInline(o24);

for (var o25 = 0; o25 < 10000; ++o25) {
    o0(getter(), 42);
    o0(setter(), 42);
    o0(o24(), 42);
}
