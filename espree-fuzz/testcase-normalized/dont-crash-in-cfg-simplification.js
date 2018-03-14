function o0() {}
noInline(o0);

function o2() { }

function o3() {
    if (typeof o2 !== "undefined") {
    } else {
        // The test here is to make sure that we don't merge this basic block
        // with itself. If we did, we'd infinite loop in the compiler and eventually
        // crash due to OOM when growing a Vector.
        while (true) o0();
    }
}
noInline(o3);
for (let o4 = 0; o4 < 10000; ++o4)
    o3();
