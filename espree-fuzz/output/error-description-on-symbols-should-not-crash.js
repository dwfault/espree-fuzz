//@ runFTLNoCJIT

function o0(o1, o2) {
    if (o1 != o2) {
        throw "ERROR: expect " + o2 + ", actual " + o1;
    }
}

var o3;

try {
    o4[2]()();
} catch (o5) {
    o3 = o5;
}

o0(o3, "TypeError: Symbol(1) is not a function. (In 'Symbol(1)()', 'Symbol(1)' is a Symbol)");
