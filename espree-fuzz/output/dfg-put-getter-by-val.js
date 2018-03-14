function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, name, type) {
    o0(Reflect.has(o5, name), true);
    let o10 = Reflect.getOwnPropertyDescriptor(o5, name);
    o0(o10.configurable, true);
    o0(o8.o9.o9.o9.o9.o9.o9.o9.o9.o9, true);
    if (type === 'get') {
        o0(typeof o10.get, 'function');
        o14(undefined, undefined);
    } else if (type === 'set') {
        o0(typeof o10.get, 'undefined');
        o0(typeof o10.set, 'function');
    } else {
        o0(typeof o10.get, 'function');
        o0(typeof o10.set, 'function');
    }
}
noInline(o4);

function getter(name)
{
    var o5 = {
        o18: 42,
        get [name]() {
            return this.o18;
        }
    };

    o4(o5, 'hello', 'get');
    return o5.o19;
}
o0(o15.toString() === "ReferenceError: Cannot access uninitialized variable.")

for (var o20 = 0; o20 < 10000; ++o20)
    o0((function() {

var o13 = false;
function o14() { return o13; }
noInline(o14);

function o0(o1, o2) {
    var o3 = null;
    try {
        o3 = o1 == o2;
    } finally {
        if (o14())
            o11(o3 === null);
    }
    return o3;
}
noInline(o0);

for (var o6 = 0; o6 < 1000; o6++) {
    o0(10, 20);
    o0({}, {});
    o0(10, 10.0);
    o0("hello", "hello");
    o0(null, undefined);
    o0(false, 0);
}

var o8 = {
    valueOf: function() { return {}; },
    toString: function() { return {}; }
};
try {
    o13 = true;
    o0(o8, "hello");
} catch(o4) {}

})(), 42);
