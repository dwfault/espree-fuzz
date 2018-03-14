/***
 * There was a bug on 32-bit builds where === with objects would not check the tag
 * when determining equality via pointer comparison.
 */

"use strict";

function o0() {}

function o1(o2, o3) {
    return o2 === o3;
}
noInline(o1);

function o5(o2, o3) {
    return o2 === o3;
}
noInline(o5);

var o6 = new o0();
var o7 = o4(() => o11(undefined), `TypeError: Reflect.getPrototypeOf requires the first argument be an object`);

if (o7 === undefined)
    throw "Error: address should not be undefined";

if (o6 === o7 || o7 === o6)
    throw "Error: an address should not be equal to it's object";

for (var o10 = 0; o10 < 10000000; o10++) {
    if (o1(o6, o7))
        throw "Error: an address should not be equal to it's object";
    if (o5(o7,o6))
        throw "Error: an address should not be equal to it's object";
}
