var o0 = function (o1, o2) {
    if (o1 !== o2) {
        throw new Error('Error in assert. Expected-' + o2 + ' but was ' + o1);
    }
};

var o4 = function (o5, o2) {
    let o6 = null;
    try {
        o5();
    } catch(o7) {
        o6 = o7;  
    }
    if (o6 === null) {
        throw new Error('Error is expected. Expected "' + o2 + '" but error was not thrown."');
    }
    if (o6.toString() !== o2) {
        throw new Error('Error is expected. Expected "' + o2 + '" but error was "' + o6 + '"');
    }
};

var o9 = function (o5) {
    try  {
        o5();   
    } catch (o7) {
       throw new Error('Error is not expected. But was throw error: "' + o7 + '"');
    }
}

var o1 = 0;

eval("'use strict'; let y = 5; function f() { result = y;} f()");
o0(o1, 5);

eval("'use strict'; const x = 10; function f() { result = x;} f()");
o0(o1, 10);

eval("'use strict'; class A { constructor() { this.id = 'foo'; } }; function foo() { return (new A).id; }; result = foo();");
o0(o1, 'foo');


eval("let y = 15; function f() { result = y;} f()");
o0(o1, 15);

eval("const x = 20; function f() { result = x;} f()");
o0(o1, 20);

eval("class B { constructor() { this.id = 'boo'; } }; function foo() { return (new B).id; }; result = foo();");
o0(o1, 'boo');

function o11 () {
    var o12 = 0;

    eval("'use strict'; let y = 5; function f() { res = y;} f()");
    o0(o12, 5);

    eval("'use strict'; const x = 10; function f() { result = x;} f()");
    o0(o12, 10);

    eval("'use strict'; class C { constructor() { this.id = 'foo'; } }; function foo() { return (new C).id; }; result = foo();");
    o0(o12, 'foo');


    eval("let y = 15; function f() { result = y;} f()");
    o0(o12, 15);

    eval("const x = 20; function f() { result = x;} f()");
    o0(o12, 20);

    eval("class D { constructor() { this.id = 'boo'; } }; function foo() { return (new D).id; }; result = foo();");
    o0(o12, 'boo');
}

o11();

function o13 () {
    {
        let o14;
        eval("'use strict'; let y = 5; function f() { result = y;} f()");
        o0(typeof o14, 'undefined');

        eval("'use strict'; const x = 10; function f() { result = x;} f()");
        o0(typeof o14, 'undefined');

        eval("'use strict'; class E { constructor() { this.id = 'foo'; } }; function f() { return (new E).id; }; result = f();");
        o0(typeof o14, 'undefined');
    }
}

function o15 () {
    {
        let o14;
        eval("let y = 15; function f() { result = y;} f()");
    }
}

function o16 () {
    {
        let o14;
        eval("const x = 20; function f() { result = x; } f()");
    }
}

function o17() {
    {
        let o14;
        eval("var x = 20; function f() { result = x; } f()");
    }   
}

function o18 () {
    var o6; 
    {
        let o14;
        try {
            eval("let y = 15; function f() { result = y;} f()");
        } catch (o19) {
            o6 = o19;
        }
        o0(typeof o14, 'undefined');
    }
    o0(o6.toString(), 'SyntaxError: Can\'t create duplicate variable in eval: \'f\'');
}

function o20 () {
    var o6; 
    {
        let o14;
        try {
            eval("const x = 20; function f() { result = x; } f()");
        } catch (o19) {
            o6 = o19;
        }
        o0(typeof o14, 'undefined');
    }
    o0(o6.toString(), 'SyntaxError: Can\'t create duplicate variable in eval: \'f\'');
}

function o21 () {
    var o6; 
    {
        let o14;
        try {
            eval("var x = 20; function f() { result = x; } f()");
        } catch (o19) {
            o6 = o19;
        }
        o0(typeof o14, 'undefined');
    }
    o0(o6.toString(), 'SyntaxError: Can\'t create duplicate variable in eval: \'f\'');
}

o9(() => o13());
o4(() => o15(), 'SyntaxError: Can\'t create duplicate variable in eval: \'f\'');
o4(() => o16(), 'SyntaxError: Can\'t create duplicate variable in eval: \'f\'');
o4(() => o17(), 'SyntaxError: Can\'t create duplicate variable in eval: \'f\'');

o18();
o20();
o21();
