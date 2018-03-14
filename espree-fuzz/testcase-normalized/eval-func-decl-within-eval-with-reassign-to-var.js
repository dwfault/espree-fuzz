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
        var o11 = 20;
        eval('var f = 15; eval(" { function f() { }; } ")');
        o0(typeof o11, "function");
    }
    o0(typeof o11, "function", "#1");
}

for (var o13 = 0; o13 < 10000; o13++) {
    o10();
    o5(() => o11, "ReferenceError: Can't find variable: f");
}

function o14() {
    {
        var o15 = 20;
        eval('{ let l = 15; eval(" { function l() { }; } ")}');
        o0(o15, 20, "#3");
    }
    o0(typeof o15, 'number', "#4");
}

for (var o13 = 0; o13 < 10000; o13++){
    o14();
    o5(() => o15, "ReferenceError: Can't find variable: l");
}

function o16() { 
    eval("if (false) { function _bar() { } }"); 
    o0(o17, undefined); 
}

for (var o13 = 0; o13 < 10000; o13++){
    o16();
    o5(() => o17, "ReferenceError: Can't find variable: _bar");
}

// Fixme:  https://bugs.webkit.org/show_bug.cgi?id=167837
// Current test does not work because it should raise exception
// that f could not be redeclared
/*
function goo() {
    {   
        var error = false;
        try {
            let f = 20;
            eval('var f = 15; eval(" { function f() { }; } ")');
        } catch (e) {
            error = e instanceof SyntaxError;
        }
        assert(error, true, "syntax error should be raisen");
    }
    assert(typeof f, "undefined", "#6");
}

for (var i = 0; i < 10000; i++) {
    goo();
    assert(typeof f, "undefined", "#7");
}
*/

function o19() {
    {
        let o20 = 20;
        eval('var h = 15; eval(" if (false){ function h() { }; } ");');
        o0(o20, 15);
    }
    o0(typeof o20, "undefined");
}

for (var o13 = 0; o13 < 10000; o13++) {
    o19();
    o5(() => o20, "ReferenceError: Can't find variable: h");
}

function o21() {
    {
        var o20 = 20;
        eval('var h = 15; eval(" if (false){ function h() { }; } ")');
        o0(typeof o20, "number");
    }
    o0(typeof o20, "number", "#10");
}

for (var o13 = 0; o13 < 10000; o13++){
    o21();
    o5(() => o20, "ReferenceError: Can't find variable: h");
}

function o22() {
    {
        var o23 = 20;
        eval('var k = 15; eval(" if (true){ function k() { }; } ")');
        o0(typeof o23, "function" );
    }
    o0(typeof o23, "function", "#12");
}

for (var o13 = 0; o13 < 10000; o13++){
    o22();
    o5(() => o20, "ReferenceError: Can't find variable: h");
}

function o24() { 
    let o20 = 20; 
    eval("var h; if (false) { function h() { } }"); 
    return o20; 
}

o0(o24(), 20);

for (var o13 = 0; o13 < 10000; o13++) {
    o24();
    o5(() => o20, "ReferenceError: Can't find variable: h");
}
