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
    o0(typeof o11, "function", "#1");
    delete o11;
    o5(() => o11, "ReferenceError: Can't find variable: f", "#1");
}

for (var o13 = 0; o13 < 10000; o13++) {
    o10();
    o5(() => o11, "ReferenceError: Can't find variable: f");
}

function o14() {
    {
        o0(typeof o15, "undefined", "#5");
        eval('{ var l = 15; eval(" { function l() { }; } ")}');
        o0(typeof o15, "function", "#3");
    }
    o0(typeof o15, 'function', "#4");
    delete o15;
    o5(() => o11, "ReferenceError: Can't find variable: f");
}

for (var o13 = 0; o13 < 10000; o13++){
    o14();
    o5(() => o11, "ReferenceError: Can't find variable: f");
}

function o16() {
    {
        o0(typeof o17, "undefined" );
        eval('eval(" if (true){ function h() { }; } ")');
        o0(typeof o17, "function" );
    }
    o0(typeof o17, "function", "#10");
    delete o17;
    o5(() => o17, "ReferenceError: Can't find variable: h");
}

for (var o13 = 0; o13 < 10000; o13++){
    o16();
    o5(() => o17, "ReferenceError: Can't find variable: h");
}

function o18() {
    {
        var o19 = 20;
        eval('var k = 15; eval(" if (true){ function k() { }; } ")');
        o0(typeof o19, "function" );
    }
    o0(typeof o19, "function", "#12");
    delete o19;
    o0(typeof o19, "function", "#12");
}

for (var o13 = 0; o13 < 10000; o13++){
    o18();
    o5(() => o19, "ReferenceError: Can't find variable: k");
}
