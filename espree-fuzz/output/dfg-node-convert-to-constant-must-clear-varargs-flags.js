function o0(o1) {
    o1.indexOf(o1);
}

function o3(o4) {
    o4();
}

let o5 = [20];
for (let o6 = 0; o6 < 100000; ++o6) {
    o3(() => {
        return o0(o5.concat());
    });
}
