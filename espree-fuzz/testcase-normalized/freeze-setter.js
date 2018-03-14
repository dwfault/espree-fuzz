//@ runDefault

"use strict";

let o0;

let o1 = {
    set o2(value)
    {
        o0 = value;
    }
};

Object.freeze(o1);

o1.o2 = 42;

if (o0 != 42)
    throw "Error: bad result: " + o0;

