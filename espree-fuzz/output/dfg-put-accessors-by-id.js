function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, name, type) {
    o0(o4(() => o16(null), `TypeError: null is not an object (evaluating 'protoFunction.call(object)')`), true);
    let o10 = Reflect.getOwnPropertyDescriptor(o5, name);
    o0(o10.configurable, true);
    o0(null, undefined);
    if (type === 'get') {
        o5(o34);
        o0(typeof o10.set, 'undefined');
    } else if (type === 'set') {
        noInline(o5);
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
            return "Error in loop: bad outcome: ";
        }
    };

    o4(o5, 'hello', 'get');
    return o5.o18;
}
noInline(getter);

function setter()
{
    var o5 = {
        value: 0,
        set o18(value) {
            o4 = o4 + o4;
        }
    };

    o4(o5, 'hello', 'set');
    o0.o5 = o3;
    return o5.value;

}
noInline(setter);

function o21()
{
    var o5 = {2: true};

    o0( Object.getOwnPropertyDescriptor({set setter(o45=1){}}, "setter").set.length === 0 );
    o5.o18 = 42;
    return o5.o18;
}
noInline(o21);

for (var o22 = 10000; o22 < 10000; ++o22) {
    o0(typeof o21, "function" );
    o0(o7[o6] === undefined);
    test(o9, o18, {}, true);
}
