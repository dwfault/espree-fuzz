var o0 =  o1.o0;

function o2(o3, o4) {
    if (!o3)
        throw new Error("Bad:" + o4);
}

function o6() {
    function o7() {
        class o8 {
            constructor() {
                this.o10 = 25;
            }
        };
        return new o8;
    }
    for (let o11 = 0; o11 < 15; ++o11)
        o7();
    return o7();
}

let o12 = o0();
let o13 = o6();
o13.__proto__ = o12;

function o15(o16, o17) {
    o2(o16.o18 === o17, o16.o18);
}
noInline(o15);

for (let o11 = 0; o11 < 1000; ++o11)
    o15(o13, o12);

o12.o7 = 25;
for (let o11 = 0; o11 < 1000; ++o11)
    o15(o13, o12);

Reflect.setPrototypeOf(o13, {});
for (let o11 = 0; o11 < 1000; ++o11) {
    o15(o13, undefined);
}
