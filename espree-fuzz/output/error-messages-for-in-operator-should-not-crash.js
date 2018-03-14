let o0 = null;
try {
    eval('let r = "prop" i\\u{006E} 20');
} catch(o2) {
    o0 = o2;
}

if (!o0 || o0.o3 !== "Unexpected escaped characters in keyword tocken: 'i\\u{006E}'")
    throw new Error("Bad");

o0 = null;
try {
    eval('let r = "prop" i\\u006E 20');
} catch(o2) {
    o0 = o2;
}

if (!o0 || o0.o3 !== "Unexpected escaped characters in keyword tocken: 'i\\u006E'")
    throw new Error("Bad");

// This test should not crash.
o0 = null;
try {
    eval('let r = "prop" i\u006E 20');
} catch(o2) {
    o0 = o2;
}

if (!o0 || o0.o3 !== "20 is not an Object. (evaluating \'\"prop\" in 20\')")
    throw new Error("Bad");