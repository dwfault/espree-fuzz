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

function setter(name)
{
    class o18 {
        constructor() {
            this.o20 = 0;
        }
        set [name](value) {
            this.o20 = value;
        }
    }

    let o5 = new o18();
    o4(o5.__proto__, 'hello', 'set');
    o5.o23 = 42;
    return o5.o20;

}
noInline(setter);

for (var o24 = 0; o24 < 10000; ++o24)
    o0(setter('hello'), 42);
