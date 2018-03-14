"use strict";

function o0() { };
noInline(o0);

function o2(o3, o4) {
    return o3.get(o4);
}
noInline(o2);

let o6 = [
    new Map,
    {},
];


for (let o8 = 0; o8 < 1000000; ++o8) {
    o2(o6[o8 % o6.length], o8);
}
