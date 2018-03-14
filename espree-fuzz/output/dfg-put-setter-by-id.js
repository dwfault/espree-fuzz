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

function setter(name)
{
    var o5 = { "0":"a", "1":"b", "2":"c" };

    o4(o5, 'hello', 'set');
    o5.o18 = 42;
    return o5.o20;

}
noInline(setter);

for (var o21 = 0; o21 < 10000; ++o21)
    o0(setter('ok'), 42);
