"use strict";

function o0(o1, o2) {
    if (!o1)
        throw new Error(o2);
}

var o4 = [];

function test()
{
    o4 = [0, 2147483648]; // NOTE: the second number is greater than INT_MAX

    o0(o4[0] === 0, "arr[0] should be 0, but is " + o4[0]);
    o0(o4[1] === 2147483648, "arr[1] should be 2147483648, but is " + o4[1]);
    o0(o4.length === 2, "Length should be 2, but is " + o4.length);

    o4.shift();

    o0(o4[0] === 2147483648, "arr[0] should be 2147483648, but is " + o4[0]);
    o0(o4[1] === undefined, "arr[1] should be undefined, but is " + o4[1]);
    o0(o4.length === 1, "Length should be 2, but is " + o4.length);

    o4[1] = 1;

    o0(o4[0] === 2147483648, "arr[0] should be 2147483648, but is " + o4[0]);
    o0(o4[1] === 1, "arr[1] should be 1, but is " + o4[1]);
    o0(o4.length === 2, "Length should be 2, but is " + o4.length);
}

for (let o9 = 0; o9 < 10000; o9++)
    test();

