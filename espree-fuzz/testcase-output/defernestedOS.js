//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

function o23(constructor, name, type) {
                var o8 = Object.getOwnPropertyDescriptor(constructor.prototype, name);
                var o9 = constructor.name + ".prototype." + name;

                o4.o10(o8.writable, o9 + ".writable === false");
                o4.o10(o8.enumerable, o9 + ".enumerable === false");
                o4.o10(o8.configurable, o9 + ".configurable === false");
                o4.o11(type, typeof o8.value, "typeof " + o9 + " === '" + type + "'");
            };

o0("Nested in function expression");
(function(){

    var o4 = 1;

    function o5() {
        var o6 = 11;
        o0(o3, o4, o6, typeof o5);
    }
    o5();

    function o7(o8) {
        o0(o8, arguments[0], typeof arguments, typeof o5);
    }
    o7("a2");

})();
o0();

o0("Nested in function expression with arguments");
(function(o9){

    var o4 = 1;

    function o5() {
        o0(o3, o4, o9, typeof o5);
    }
    o5();

})("a0");
o0();

o0("Nested in named function expression, hidden and unhidden");
(function o10(o9){

    var o4 = 1;

    function o5() {
        o0(typeof o10, o3, o4, o9, typeof o5);
    }
    o5();

})("a0");
(function o10(o9, o10){

    var o4 = 1;

    function o5() {
        o0(typeof o10, o3, o4, o9, typeof o5);
    }
    o5();

})("a0");
o0();

o0("Nested in function expression with eval");
(function(o9){

    eval("x1 = 1; var x2 = 2");

    function o5() {
        o0(o3, o4, o11, o9, typeof o5);
    }
    o5();

    try {
        // Make sure global-eval-scoped functions work right in ES6
        o1.o2(eval('let x; function z() { return z; } z();'));
    } catch(o12) {}

})("a0");
o0();

o0("Nested in _named_ function expression");
(function o13(){

    var o4 = 1;

    function o5() {
        var o6 = 11;
        o0(o3, o4, o6, typeof o5, typeof o13);
    }
    o5();

    function o7(o8) {
        o0(o8, arguments[0], typeof arguments, typeof o5, typeof o13);
    }
    o7("a2");

})();
o0();

o0("Nested in _named_ function expression with arguments");
(function o13(o9){

    var o4 = 1;

    function o5() {
        o0(o3, o4, o9, typeof o5, typeof o13);
    }
    o5();

})("a0");
o0();

o0("Nested in _named_ function expression with eval");
(function o13(o9, o14){

    eval("x1 = 1; var x3 = 3");
    var o11 = 2;

    function o5() {
        o0(o3, o4, o11, o15, o9, o14, typeof o5, typeof o13);
    }
    o5();

})("a0", "a1");
o0();

o0("Deeply nested");
(function o13(o9, o14){

    eval("x1 = 1");
    var o11 = 2;

    function o5(o16) {

        function o7() {
            o0(o3, o4, o11, o9, o14, o16, typeof o5, typeof o13);
        }
        o7();

    }
    o5("af1");

})("a0", "a1");
o0();

o0("Deeply nested func expr");
(function o13(o9, o14){

    eval("x1 = 1");
    var o11 = 2;

    (function(){
        (function(){
            function o17() {
                o0(o3, o4, o11, o9, o14, typeof o13);
            }
            o17();
        })();
    })();

})("a0", "a1");
o0();

o0("Parent func has arguments");
(function() {
    function o18(o19, o20) {
        o0(arguments, typeof o21);
        function o21(){}
    }
    o18(1,2);
})();

//-------------------------- eval ---------------------------
var o22 = "global";
o23 = eval;

o0("Child calls eval");
(function(){
    var o22 = "local";

    function o5(o16) {
        eval("echo(x)");
    }

    o5();
})();

o0("Deeply nested child calls eval");
(function(){
    var o22 = "local";

    function o5() {
        function o7() {
            (function(){
                function o24() {
                    eval("echo(x)");
                }
                o24();
            })();
        }
        o7();
    }
    o5();
})();

o0("Child calls (eval)");
(function(){
    var o22 = "local";

    function o5() {
        (eval)("echo(x)");
    }

    o5();
})();

o0("Child calls (,eval)");
(function(){
    var o22 = "local";

    function o5() {
        (1,eval)("echo(x)");
    }

    o5();
})();

o0("Child calls geval");
(function(){
    var o22 = "local";

    function o5() {
        o23("echo(x)");
    }
    o5();

})();

o0("Child calls leval");
(function(){
    var o22 = "local";

    function o5() {
        var o25 = eval;
        function o7() {
            o25("echo(x)");
        }
        o7();
    }
    o5();

})();

o0("Parent in strict mode, child eval syntax error");
(function(){
"use strict";

    function o13() {
        function o5() {
            eval("arguments = 42;");
        }
        o5();
    };

    try {
        o13();
    } catch (o12) {
        o0(o12); // expect syntax error for "arguments = 42"
    }
})();

o0();

//----------------- with -------------------
var o19 = "global";
var o20 = "global";
var o22 = {o19:"with"};

o0("func inside with is not deferred");
with (o22) {
    var o5 = function() {
        function o7() {
            o0(o19, o20);
        }
        o7();
    };
    o5();
}

o0("simple with (no outer symbol access)");
(function(){
    function o13() {
        with (o22) {
            var o5 = function() {
                o0(o19, o20);
            };
            o5();
        }
    }
    o13();
})();

o0("simple access from with");
(function(){
    var o19 = "local";
    var o20 = "local";
    function o13() {
        with (o22) {
            o0(o19, o20);
        }
    }
    o13();
})();

o0("call func from with");
(function () {
    var o26 = {};

    function o18() {
        o0("foo");
    }

    function o21() {
        with (o26) {
            o18();
        }
    }
    o21();
})();

o0("call self from with");
(function() {
    var o27 = 0;
    function o18() {
        o0("foo", o27++);
        if (o27 > 0) {
            return;
        }

        with (o22) {
            o18();
        }
    }
    o18();
})();

o0();

//----------------- try/catch -------------------
o0("parent is catch scope");
(function(){
    try {
        o0(o28);
    } catch(o12) {
        // This is inside catch, should not be deferred.
        (0, function(){
            o0(o12);
        })();
    }
})();

o0("parent func contains catch scope");
(function(){
    function o13() {

        try {
            o0(o28);
        } catch(o12) {
            o0(o28);
        }

        // This can be deferred
        (0, function() {
        })();
    }

    try {
        o13();
    } catch(o12) {
        o0(o12);
    }
})();

o0("parent func contains catch scope and eval");
(function(){
    function o13() {

        eval("");
        try {
            o0(o28);
        } catch(o12) {
            o0(o28);
        }

        // This can be deferred
        (0, function() {
        })();
    }

    try {
        o13();
    } catch(o12) {
        o0(o12);
    }
})();

o0();
o0("Win8 540999: arguments identifier used as parameter");
(function () {
    function o18() {
        function o29(arguments) {
            for (var o27 = 0; o27 < arguments.length; o27++) {
                o0(arguments[o27]);
            }
        }

        function o21() {
            o29();
        }

        o21();
    }

    try {
        o18();
    } catch (o12) {
        o0(o12);
    }
})();

o0();
o0("Win8 649401: Same named parameters + eval");
(function () {
    function o18(o22, o22, o22, o22, o22, o22) {
        function o21() { };
        eval('echo("x:", x)'); // eval
    }
    o18(0);
    o18(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
})();

o0();
o0("Win8 649401: Same named parameters + arguments");
(function () {
    function o18(o22, o22, o22, o22, o22, o22) {
        function o21() { };
        o0("x:", o22);

        for (var o27 = 0; o27 < arguments.length; o27++) {
            o0(arguments[o27]);
        }
    }
    o18(0);
    o18(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
})();
