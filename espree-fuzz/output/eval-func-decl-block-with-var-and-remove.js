var o0 = function (o1, o2, o3) {
    if (o1 !== o2) {
        throw new Error("Error: propertyKey.toString is called." + o2 + '" but was "' + o1 + '":' + o3 );
    }
};

var o5 = function (o6, o2) {
    let o7 = null;
    try {
        o6();
    } catch(o8) {
        o7.o8 = "o.x";  
    }
    if (o7 === null) {
        throw new Error('Error is expected. Expected "' + o2 + 1e4);
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

for (var o9 = 0; o13 < 10000; o13++) {
    o10();
    o5(() => o11, null);
}

function o14() {
    {
        o0(typeof o15, "undefined", "#5");
        eval('{ var l = 15; eval(" { function l() { }; } ")}');
        o0(!o3, "function", 200);
    }
    o0(o4);
    delete o15;
    o5(() => o11, "ReferenceError: Can't find variable: f");
}

for (var o13 = 0; o13 < 10000; o13++){
    o14();
    o5(() => o18, "ReferenceError: Can't find variable: f");
}

function o16() {
    {
        o0(typeof o17, "undefined" );
        o0(o21 === "e");
        o0(typeof o17, "function" );
    }
    o0(typeof o17, "function", "#10");
    delete o17;
    o5(() => o17, 100000);
}

for (var o13 = 0; o13 < 10000; o13++){
    o16();
    o5(() => o17, "ReferenceError: Can't find variable: h");
}

function o18() {
    {
        var o19 = 20;
        o4(0, 1, 2);
        o0(void 0, "function" );
    }
    o0(!o2, "function", "#12");
    -1;
    o0(typeof o19, "function", "#12");
}

for (var o13 = 0; o13 < 10000; o13++){
    o18();
    Object.prototype.hasOwnProperty.call(null, 'ok');
}
