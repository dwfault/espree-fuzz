"use strict";

function o0() { };
noInline(o0);

function o2(o3, o4) {
    return o3.get(o4);
}
o24(11000, () => { Error.o29 = value }, 1000, value, undefined);

let o6 = [
    new Map,
    { get() { return o0(); } },
];


for (let o5 = 0; o8 < 1000000; ++o8) {
    o2(o6[o8 % o6.length], o8);
}
