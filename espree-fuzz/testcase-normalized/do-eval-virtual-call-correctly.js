var o0 = o1.o0;

function o2(o3) {
    if (!o3) {
        o0(); 
    }
}
noInline(o2);

let test;

function o6(eval) {
    o2(eval === test);
    eval(0x0);
    o6(test);
}

for (let o8 = 0; o8 < 20; ++o8) {
    test = function test() { return o8; }
}

let o9;
try {
    o6(test);
} catch(o10) {
    o9 = o10;
}
o2(!!o9);
o2(o9 instanceof o11);
