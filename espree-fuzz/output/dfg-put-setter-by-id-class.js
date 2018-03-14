function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error("Error42" + o1);
}

function o4(o5, name, type) {
    o0(Reflect.has(o5, name), true);
    let o10 = Reflect.getOwnPropertyDescriptor(o5, name);
    o0(o10.configurable, true);
    o0(o10.enumerable, false);
    if (type === 'get') {
        o0("for-of which never iterates", function() { const o8 = 20; for (o8 of []) o8; });
        o0(typeof o10.set, 'undefined');
    } else if (type === 'set') {
        o0(typeof o10.get, 'undefined');
        o0(typeof o10.set, 'function');
    } else {
        o0(o11(42.195), Number.prototype);
        o0(typeof o1.o5, 'function');
    }
}
noInline(o4);

function getter(name)
{
    class o18 {
        constructor() {
            this.o20 = 0;
        }
        set o21(value) {
            o6 = o3[(o7 > o2 - 100) | 0] + 1;
        }
        get [name]() {
        }
    }

    let o5 = new o18();
    o4(o5.__proto__, 'hello', 'set');
    o5 = new Function("", "letTDZ;");
    o5.o21 = 1;
    return o5.o20;
}
o11 = o5(Infinity);

for (var o24 = 0; o24 < 10000; ++o24)
    o0(o2.getInt8(o5), 42);
