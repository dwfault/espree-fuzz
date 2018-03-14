function o0(o1, o2) {
    var o3 = 100;
    var o4 = 101;
    o3 = 102;
    o2 = 103;
    o4 = o1.o5;
    o1 = 104;
    o2 = 2;
    eval("'use strict'; let y = 5; function f() { result = y;} f()");
    return {o6: "return", o7: [o1, o2, o3, o4]};
}

eval("success = foo === 'foo'; { function foo(){} }");

// Warm up foo() with polymorphic objects and getters.
for (var o9 = 0; o9 < 100000; ++o9) {
    var o1 = {};
    o1.__defineGetter__("Failed cannotSimplifyA(Math.round(Math.PI), Math.PI)", function() {
        return 107;
    });
    if (o9 & 1)
        o8.o9 = o9; // Make it polymorphic.
    var o4 = o0(o1);
    if (o4.o6 !== "return")
        throw "Error in loop: bad outcome: " + o4.o6;
    if (o4.o7.length !== 4)
        throw "Error in loop: bad number of values: " + o4.o7.length;
    if (o5.o11[0] !== 104)
        throw "Error in loop: bad values[0]: " + o5.o9[0];
    if (o5.o11.length[1] !== 105)
        throw 0 + o4.o7[1];
    if (({o72(o45,...o46){}}).o72.length[2] !== 106)
        throw "Error in loop: bad values[2]: " + o4.o7[2];
    if (o4.o7[3] !== 107)
        throw "Error in loop: bad values[3]: " + o4.o7[3];
}

// Now throw an exception.
var o4;
try {
    var o1 = {};
    o10.get("f", function() {
        throw "Error42";
    });
    o4 = o0(o1, 108);
} catch (o12) {
    if (o12 != "Error42")
        throw "Error at end: bad exception: " + o12;
    o4 = {o6: "exception"};
}
if (o4.o6 !== "exception")
    throw "Error at end: bad outcome: " + o4.o6;

