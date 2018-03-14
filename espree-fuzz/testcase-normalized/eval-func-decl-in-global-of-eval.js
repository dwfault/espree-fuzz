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
        let value = 10; 
        eval("function f() { value = 20; }; f();");
    }
}


for (var o14 = 0; o14 < 10000; o14++){
    o5(() => o10(), "SyntaxError: Can't create duplicate variable in eval: 'f'");
    o5(() => o11, "ReferenceError: Can't find variable: f");
}

function o15() {
    {
        var o16 = 20;
        var value = 10;
        eval("function l() { value = 20; }; l();");
        o0(typeof o16, 'function');
        o0(value, 20);
    }
    o0(typeof o16, 'function');
}

for (var o14 = 0; o14 < 10000; o14++){
    o15();
    o5(() => o16, "ReferenceError: Can't find variable: l");
}

function o17() {
    {
        let o18 = 20;
        let value = 10;
        eval("function l() { value = 30; }; l();");
        o0(typeof o18, 'number');
        o0(value, 30);
    }
    o5(() => o18, "ReferenceError: Can't find variable: g");
}

o17();
o5(() => o18, "ReferenceError: Can't find variable: g");

