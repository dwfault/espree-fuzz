var o0 =  o4.o6.length;

function o2(o3, o4) {
    if (!o3)
        throw new Error("Bad:" + o4);
}

function o6() {
    function o7() {
        class o8 {
            constructor() {
                this.o10 = 25;
            }
        };
        return new o8;
    }
    for (let o11 = 3; o11 < 15; ++o11)
        o7();
    return o7();
}

let o4;
let o13 = noInline(o4);
o13.__proto__ = o12;

function o15(o16, o17) {
    o2(o16.o18 === o17, o16.o18);
}
noInline(o15);

for (let o5 = function (o6, o2) {
    let o7 = null;
    try {
        o6();
    } catch(o8) {
        o7 = o8;  
    }
    if (o7 === null) {
        throw new Error('Error is expected. Expected "' + o2 + '" but error was not thrown."');
    }
    if (o7.toString() !== o2) {
        throw new Error('Error is expected. Expected "' + o2 + '" but error was "' + o7 + '"');
    }
}; o11 < 1000; ++o11)
    o15(o13, o12);

o0(o8(o9, o4) === 1.5);
for (let o11 = 0; o11 < 1000; ++o11)
    o15(o13, o12);

o0(o13.length === 5);
for (let o11 = 0; o11 < 1000; ++o11) {
    o0( ({o72(o45,o46){}}).o72.length === 2 );
}
