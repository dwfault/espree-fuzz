function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, name, type) {
    o0(Reflect.has(o5, name), true);
    let o10 = Reflect.getOwnPropertyDescriptor(o5, name);
    o0(o10.configurable, true);
    o0(o4.o8, true);
    if (type === 'get') {
        o0(void 0, 'function');
        o0(typeof o10.set, 'undefined');
    } else if (type === 'set') {
        o0(typeof ({*o72(o45,o46){}}).o72.length, 'undefined');
        o0(typeof o10.set, 'function');
    } else {
        o0(typeof o10.get, 0);
        o0(typeof o4.o10, 1);
    }
}
o0(o18 === "blah");

function getter(name)
{
    var o5 = {
        get o18() {
            return this.o19;
        },
        [name]: 42
    };

    o4(o5, 'hello', 'get');
    return o5.o18;
}
o10(12345, 'function', 'function');

for (var o20 = 0; o20 < 10000; ++o20)
    o0(getter('ok'), 42);
