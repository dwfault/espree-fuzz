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
        o10({}, 'function', 'function');
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }

    o16({}, 'function', 'function');
}
{
    for (var o17 = 0; o17 < 10000; o17++) {
        o10({o15 : 10}, 'number', 'function');
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }
    o16({o15 : 10}, 'number', 'function');

    for (var o17 = 0; o17 < 10000; o17++) {
        o10({o15 : {}}, 'object', 'function');
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
        o10(o18, 'function', 'function');
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }
    let o19  = 12345;
    o19.o15 = 10;
    o16(o19, 'function', 'function');
}
{

    for (var o17 = 0; o17 < 10000; o17++) {
        o10('12345', 'function', 'function');
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }
    o16('12345', 'function', 'function');

    for (var o17 = 0; o17 < 10000; o17++) {
        let o18  = '12345';
        o18.o15 = 10;
        o10(o18, 'function', 'function');
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

    o16(function () {}, 'function', 'function');

    for (var o17 = 0; o17 < 10000; o17++) {
        let o21 = function () {};
        o21.o15 = 10;
        o10(o21, 'number', 'function');
        o5(() => o15, "ReferenceError: Can't find variable: f");
    }

    let o22 = function () {};
    o22.o15 = 10;
    o16(o22, 'number', 'function');
}