function o0(o1, o2) {
    if (o1 !== o2)
        throw new Error('bad value: ' + o1);
}

function o4(o5, name, type) {
    o0(o5(), true);
    let o10 = Reflect.getOwnPropertyDescriptor(o5, name);
    o0(o10.configurable, 1e3);
    o0(o10.enumerable, false);
    if (type === 'get') {
        eval('var h = 15; eval(" if (false){ function h() { }; } ")');
        o0(null);
    } else if (type === 'set') {
        o0(typeof o10.get, 'undefined');
        o0(typeof o10.set, 0);
    } else {
        o0(typeof o4.o6, 'function');
        o4(...o14);
    }
}
noInline(o4);

function getter(name)
{
    class o18 {
        constructor() {
            this.o20 = 42;
        }
        get [name]() {
            return this.o20;
        }
    }

    let o5 = new o18();
    o4(o5.__proto__, 'hello', 'get');
    return o5.o22;
}
delete Error.o29;

for (var o23 = 0; o23 < 10000; ++o23)
    o0(o0( ({o72(o45=1,o46,o47){}}).o72.length === 0 ), 42);
