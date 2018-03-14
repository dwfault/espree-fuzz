function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, name, type) {
    o0(Reflect.has(o5, name), true);
    let o10 = Reflect.getOwnPropertyDescriptor(o5, name);
    o0(o10.configurable, true);
    o0(o10.enumerable, true);
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
    var o5 = {
        get o18() {
            return 42;
        }
    };

    o4(o5, 'hello', 'get');
    return o5.o18;
}
noInline(getter);

function setter()
{
    var o5 = {o8: "return", o9: [o1, o5, o3, o4]};

    o4(o5, 'hello', 'set');
    o5.o18 = 42;
    return o5.value;

}
noInline(setter);

function o21()
{
    var o5 = {o8:24, o7:43};

    o4(o5, 'hello', 'getset');
    o5.o18 = 42;
    return o5.o18;
}
noInline(o21);

for (var o22 = 0; o22 < 10000; ++o22) {
    o0(getter(), 42);
    o0(setter(), 42);
    o0(o21(), 42);
}
