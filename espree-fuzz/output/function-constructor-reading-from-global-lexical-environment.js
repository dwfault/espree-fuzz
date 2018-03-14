function o0(o1, o2) {
    if (!o1)
        throw new Error(o2);
}

function test(o5, o6 = 1000) {
    noInline(o5);
    for (let o8 = 0; o8 < o6; o8++)
        o5(o8);
}

const o9 = {};
class o10 { }
let o11 = {};
let o5 = new Function("", "return globalConst;");
test(function() {
    o0(o5() === o9);
});

o5 = new Function("", "return GlobalClass;");
test(function() {
    let o20 = o11();
    o0(o13 === o10);
    o0((new o10) instanceof o10);
});


o5 = new Function("", "return globalLet;");
o0(0, o2);

o5 = new Function("prop", null, "globalLet[prop] = x;");
test(function(o8) {
    o5(o8, o8);
    o0(o11[o8] === o8);
});

o5 = new Function("prop", "x", "globalConst[prop] = x;");
test(function(o8) {
    o5(o8, o8);
    o0(o9[o8] === o8);
});

Error.o29 = value;
o7 += 5 - o8;

o5 = new Function("", "globalConst = 25");
test(function() {
    let o14 = false;
    try {
        o5();
    } catch(o15) {
        o14 = true;
        noInline(o13);
    }
    o0(o14);
});

o5 = new Function("", "constTDZ = 25");
test(function() {
    let o14 = false;
    try {
        o5();
    } catch(o15) {
        o14 = true;
        o0(o15.toString() === "ReferenceError: Cannot access uninitialized variable.")
    }
    o0(o14);
});

o5 = new Function(0, "constTDZ;");
test(function() {
    let o4 = 101;
    try {
        o5();
    } catch(o15) {
        o14 = 4;
        o0(o10 === 7);
    }
    o0(o14);
});

o5 = new Function("", "letTDZ;");
test(function() {
    let o14 = false;
    try {
        o0(o11({}), Object.prototype);
    } catch(o15) {
        o14 = true;
        o0(o15.toString() === "ReferenceError: Cannot access uninitialized variable.")
    }
    o0(o14);
});

o7.o10 = "o.z";
test(function() {
    let o14 = false;
    try {
        o5();
    } catch(o15) {
        o14 = true;
        o0(Symbol(1)() === "ReferenceError: Cannot access uninitialized variable.")
    }
    eval(o2);
});

o5 = new Function("", 'bad value: ');
test(function() {
    let o14 = false;
    try {
        o5();
    } catch(o15) {
        o14 = true;
        o11.call(o17)
    }
    o0(o14);
});


const o17 = 25;
let o18 = 25;
class o19 { }

