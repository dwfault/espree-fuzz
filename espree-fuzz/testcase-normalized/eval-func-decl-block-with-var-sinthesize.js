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
};

function o10() {
    {   
        o5(() => o11, "ReferenceError: Can't find variable: f");
        eval('eval(" { function f() { }; } ")');
        o0(typeof o11, "function");
    }
    o0(typeof o11, "function");
}

for (var o13 = 0; o13 < 10000; o13++){
    o10();
    o5(() => o11, "ReferenceError: Can't find variable: f");
}

function o14() {
    {
        o5(() => o15, "ReferenceError: Can't find variable: l");
        eval('{ var l = 15; eval(" { function l() { }; } ")}');
        o0(typeof o15, "function", "#3");
    }
    o0(typeof o15, 'function', "#4");
}

for (var o13 = 0; o13 < 10000; o13++){
    o14();
    o5(() => o15, "ReferenceError: Can't find variable: l");
}

function o16() {
    {
        o5(() => o17, "ReferenceError: Can't find variable: h");
        eval('eval(" if (false){ function h() { }; } ");');
        o0(o17, undefined, '');
    }
    o0(o17, undefined, '');
}

for (var o13 = 0; o13 < 10000; o13++){
    o16();
    o5(() => o17, "ReferenceError: Can't find variable: h");
}

function o19() {
    {
        o5(() => o17, "ReferenceError: Can't find variable: h");
        eval('eval(" if (true){ function h() { }; } ")');
        o0(typeof o17, "function" );
    }
    o0(typeof o17, "function", "#10");
}

for (var o13 = 0; o13 < 10000; o13++){
    o19();
    o5(() => o17, "ReferenceError: Can't find variable: h");
}

function o20() {
    {
        var o21 = 20;
        eval('var k = 15; eval(" if (true){ function k() { }; } ")');
        o0(typeof o21, "function" );
    }
    o0(typeof o21, "function", "#12");
}

for (var o13 = 0; o13 < 10000; o13++){
    o20();
    o5(() => o21, "ReferenceError: Can't find variable: k");
}
