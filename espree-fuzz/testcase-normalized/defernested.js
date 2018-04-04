//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

var o3 = 0;

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
(function(o10){

    var o4 = 1;

    function o5() {
        o0(o3, o4, o10, typeof o5);
    }
    o5();

})("a0");
o0();

o0("Nested in named function expression, hidden and unhidden");
(function o11(o10){

    var o4 = 1;

    function o5() {
        o0(typeof o11, o3, o4, o10, typeof o5);
    }
    o5();

})("a0");
(function o11(o10, o11){

    var o4 = 1;

    function o5() {
        o0(typeof o11, o3, o4, o10, typeof o5);
    }
    o5();

})("a0");
o0();

o0("Nested in function expression with eval");
(function(o10){

    eval("x1 = 1; var x2 = 2");

    function o5() {
        o0(o3, o4, o13, o10, typeof o5);
    }
    o5();

    try {
        // Make sure global-eval-scoped functions work right in ES6
        o1.o2(eval('let x; function z() { return z; } z();'));
    } catch(o14) {}

})("a0");
o0();

o0("Nested in _named_ function expression");
(function o15(){

    var o4 = 1;

    function o5() {
        var o6 = 11;
        o0(o3, o4, o6, typeof o5, typeof o15);
    }
    o5();

    function o7(o8) {
        o0(o8, arguments[0], typeof arguments, typeof o5, typeof o15);
    }
    o7("a2");

})();
o0();

o0("Nested in _named_ function expression with arguments");
(function o15(o10){

    var o4 = 1;

    function o5() {
        o0(o3, o4, o10, typeof o5, typeof o15);
    }
    o5();

})("a0");
o0();

o0("Nested in _named_ function expression with eval");
(function o15(o10, o16){

    eval("x1 = 1; var x3 = 3");
    var o13 = 2;

    function o5() {
        o0(o3, o4, o13, o17, o10, o16, typeof o5, typeof o15);
    }
    o5();

})("a0", "a1");
o0();

o0("Deeply nested");
(function o15(o10, o16){

    eval("x1 = 1");
    var o13 = 2;

    function o5(o18) {

        function o7() {
            o0(o3, o4, o13, o10, o16, o18, typeof o5, typeof o15);
        }
        o7();

    }
    o5("af1");

})("a0", "a1");
o0();

o0("Deeply nested func expr");
(function o15(o10, o16){

    eval("x1 = 1");
    var o13 = 2;

    (function(){
        (function(){
            function o19() {
                o0(o3, o4, o13, o10, o16, typeof o15);
            }
            o19();
        })();
    })();

})("a0", "a1");
o0();

o0("Parent func has arguments");
(function() {
    function o20(o21, o22) {
        o0(arguments, typeof o23);
        function o23(){}
    }
    o20(1,2);
})();

//-------------------------- eval ---------------------------
var o24 = "global";
o25 = eval;

o0("Child calls eval");
(function(){
    var o24 = "local";

    function o5(o18) {
        eval("echo(x)");
    }

    o5();
})();

o0("Deeply nested child calls eval");
(function(){
    var o24 = "local";

    function o5() {
        function o7() {
            (function(){
                function o26() {
                    eval("echo(x)");
                }
                o26();
            })();
        }
        o7();
    }
    o5();
})();

o0("Child calls (eval)");
(function(){
    var o24 = "local";

    function o5() {
        (eval)("echo(x)");
    }

    o5();
})();

o0("Child calls (,eval)");
(function(){
    var o24 = "local";

    function o5() {
        (1,eval)("echo(x)");
    }

    o5();
})();

o0("Child calls geval");
(function(){
    var o24 = "local";

    function o5() {
        o25("echo(x)");
    }
    o5();

})();

o0("Child calls leval");
(function(){
    var o24 = "local";

    function o5() {
        var o27 = eval;
        function o7() {
            o27("echo(x)");
        }
        o7();
    }
    o5();

})();

o0("Parent in strict mode, child eval syntax error");
(function(){
"use strict";

    function o15() {
        function o5() {
            eval("arguments = 42;");
        }
        o5();
    };

    try {
        o15();
    } catch (o14) {
        o0(o14); // expect syntax error for "arguments = 42"
    }
})();

o0();

//----------------- with -------------------
var o21 = "global";
var o22 = "global";
var o24 = {o21:"with"};

o0("func inside with is not deferred");
with (o24) {
    var o5 = function() {
        function o7() {
            o0(o21, o22);
        }
        o7();
    };
    o5();
}

o0("simple with (no outer symbol access)");
(function(){
    function o15() {
        with (o24) {
            var o5 = function() {
                o0(o21, o22);
            };
            o5();
        }
    }
    o15();
})();

o0("simple access from with");
(function(){
    var o21 = "local";
    var o22 = "local";
    function o15() {
        with (o24) {
            o0(o21, o22);
        }
    }
    o15();
})();

o0("call func from with");
(function () {
    var o28 = {};

    function o20() {
        o0("foo");
    }

    function o23() {
        with (o28) {
            o20();
        }
    }
    o23();
})();

o0("call self from with");
(function() {
    var o29 = 0;
    function o20() {
        o0("foo", o29++);
        if (o29 > 0) {
            return;
        }

        with (o24) {
            o20();
        }
    }
    o20();
})();

o0();

//----------------- try/catch -------------------
o0("parent is catch scope");
(function(){
    try {
        o0(o30);
    } catch(o14) {
        // This is inside catch, should not be deferred.
        (0, function(){
            o0(o14);
        })();
    }
})();

o0("parent func contains catch scope");
(function(){
    function o15() {

        try {
            o0(o30);
        } catch(o14) {
            o0(o30);
        }

        // This can be deferred
        (0, function() {
        })();
    }

    try {
        o15();
    } catch(o14) {
        o0(o14);
    }
})();

o0("parent func contains catch scope and eval");
(function(){
    function o15() {

        eval("");
        try {
            o0(o30);
        } catch(o14) {
            o0(o30);
        }

        // This can be deferred
        (0, function() {
        })();
    }

    try {
        o15();
    } catch(o14) {
        o0(o14);
    }
})();

o0();
o0("Win8 540999: arguments identifier used as parameter");
(function () {
    function o20() {
        function o31(arguments) {
            for (var o29 = 0; o29 < arguments.length; o29++) {
                o0(arguments[o29]);
            }
        }

        function o23() {
            o31();
        }

        o23();
    }

    try {
        o20();
    } catch (o14) {
        o0(o14);
    }
})();

o0();
o0("Win8 649401: Same named parameters + eval");
(function () {
    function o20(o24, o24, o24, o24, o24, o24) {
        function o23() { };
        eval('echo("x:", x)'); // eval
    }
    o20(0);
    o20(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
})();

o0();
o0("Win8 649401: Same named parameters + arguments");
(function () {
    function o20(o24, o24, o24, o24, o24, o24) {
        function o23() { };
        o0("x:", o24);

        for (var o29 = 0; o29 < arguments.length; o29++) {
            o0(arguments[o29]);
        }
    }
    o20(0);
    o20(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
})();
