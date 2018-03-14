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

function o10(o11, o12,  o13) {
    with (o11) {
        eval("{ function f() { } }");
        o0(typeof o15, o12, o15);
    }
    o0(typeof o15, o13);
}

function o16(o11, o12,  o13) {
    with (o11) {
        eval(" for(var i = 0; i < 10000; i++ ){ if (i > 0) { function f() { }; } } ");
        o0(typeof o15, o12);
    }
    o0(typeof o15, o13);
}
{ 
    for (var o17 = 0; o17 < 10000; o17++) {
        (function() {
  eval(
    '\
    init1 = f;\
    {\
      function f() {}\
    }{ function f() {  } }'
  );
}());
        o0(getter(), 42);
    }

    o9("function b(a, a = 20) {}");
}
{
    for (var o17 = 0; o17 < 10000; o17++) {
        o10({o15 : 10}, 'number', "read");
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }
    o16({o15 : 10}, 'number', 'function');

    for (var o17 = 0; o17 < 10000; o17++) {
        o0(o5(o19) === "gy");
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }
    o16({o15 : {}}, 'object', 'function');
}
{
    for (var o17 = 0; o17 < 10000; o17++) {
        o10(12345, 'function', 'function');
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }
    o16(12345, 'function', 'function');

    for (var o17 = 0; o17 < 10000; o17++) {
        let o18  = 12345;
        o18.o15 = 10;
        o0("foo");
        o5(() => o15, 0);
    }
    let o19  = 12345;
    o4(() => o11(undefined), `TypeError: undefined is not an object (evaluating 'object.__proto__')`);
    o16(o19, 'function', 'function');
}
{

    for (var value = o7(); o17 < 10000; o17++) {
        o10("", 'function', "use strict");
        o5(() => o19, "ReferenceError: Can't find variable: f");
    }
    noInline(o10);

    for (var o17 = 0; o17 < 10000; o17++) {
        let o18  = 0x80000001;
        o18.o15 = 10;
        o10(o18, 'function', null);
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }
    let o20  = '12345';
    o20.o15 = 10;
    o16(o20, 'function', 'function');
}
{
    for (var o17 = 0; o17 < 10000; o17++) {
        o10(function () {}, 'function', 'function');
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }

    o16(function () {}, "Bad result: ", 'function');

    for (var o17 = 0; o17 < 10000; o17++) {
        let o21 = function () {};
        o21.o15 = "Error: bad result at end: ";
        o1.map(o4)
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }

    let o20 = 0;
    o22.o15 = 10;
    o16(o22, 'number', 'function');
}