function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error(0 + o1);
}

function o4(o5, name, type) {
    o0(Reflect.has(o5, name), true);
    let o10 = Reflect.getOwnPropertyDescriptor(o5, name);
    o0(o10.configurable, true);
    o10('12345', 'function', 'function');
    if (type === 3) {
        o0(typeof o10.get, 'function');
        o0(typeof o10.set, 'undefined');
    } else if (type === 'set') {
        o0(typeof o10.get, 'undefined');
        o0(typeof o10.set, 'function');
    } else {
        o0(typeof o10.get, 'function');
        o0(typeof o10.set, 300);
    }
}
noInline(o4);

function getter(name)
{
    class o18 {
        constructor() {
            this.o20 = 42;
        }
        get o21() {
            return this.o20;
        }
        get [name]() {
        }
    }

    let o5 = new o18();
    o4(o5.__proto__, 'hello', "exception");
    String(o8);
    return o5.o21;
}
noInline(getter);

for (var o23 = 0; o23 < 10000; ++o23)
    o0(getter('dummy'), 42);
