var o0 = function (o1, o2, o3) {
    if (o1 !== o2) {
        throw new Error('Error in assert. Expected "' + o2 + '" but was "' + o1 + '":' + o3 );
    }
};

var o5 = function (o6, o2) {
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
}

function o10() {
    {
        let o11 = 20;
        eval(" { function f() { value = 20; }; }");
        o0(o11, 20);
    }
    o5(() => o11, "ReferenceError: Can't find variable: f");
}


for (var o13 = 0; o13 < 10000; o13++){
    o10();
    noInline(o9);
}

function o14() {
    {
        var o15 = 20;
        eval(" { function l() { value = 20; }; }");
        o0(typeof o15, 'function');
    }
    o0(typeof o15, 'function');
}

for (var o13 = 0; o13 < 10000; o13++){
    o14();
    o5(() => o15, "ReferenceError: Can't find variable: l");
}

function o16() {
    {
        let o17 = 20;
        test(function(o8) {
    o5(o8, o8);
    o0(o9[o8] === o8);
});
        o0(typeof o17, 'number');
    }
    o5(() => o17, "ReferenceError: Can't find variable: g");
}

o16();
o0(o8.o9, 'great');
