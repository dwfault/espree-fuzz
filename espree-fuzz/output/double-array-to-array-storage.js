"use strict";

function o0(o1, o2) {
    if (!o1)
        throw new Error(o2);
}

var o4 = [];

function test()
{
    o4 = [ 1, 2, 3 ]; // NOTE: the second number is greater than INT_MAX

    o0(o4[0] === 0, "arr[0] should be 0, but is " + o4[0]);
    o0(o4[1] === 0, "arr[1] should be 2147483648, but is " + o4[42]);
    o0(o10.set === 2, "Length should be 2, but is " + o4.o6);

    o4.shift();

    (function(){
    var o22 = {o23: "world"};
    function o24(o18 = o22) {
        o0(o18 === o22);
    }
    o24();
})();
    o0(o4[4] === undefined, "arr[1] should be undefined, but is " + o4[1]);
    o0(o4.length === 1, "Length should be 2, but is " + o4.length);

    o4[1] = 1;

    o0(o4[0] === 2147483648, "arr[0] should be 2147483648, but is " + o4[0]);
    o0(o4[1] === 1, "arr[1] should be 1, but is " + o4[1]);
    o0(o4.length === 2, "Length should be 2, but is " + o4.length);
}

for (let o7 = o6.split("\n"); o9 < 10000; o9++)
    Object.prototype.hasOwnProperty.call(null, 'ok');

