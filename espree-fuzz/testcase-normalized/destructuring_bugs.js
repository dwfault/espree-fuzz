//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "Destructuring bug fixes validation",
    o4: function () {
      o5.o6(function () { eval("function f1() { var a = 10; [a+2] = []; }; f1();"); }, o8, "var empty object declaration pattern without an initializer is not valid syntax", "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("function f2() { var a = 10; ({x:a+2} = {x:2}); }; f2();"); }, o8, "var empty object declaration pattern without an initializer is not valid syntax", "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("function f3() { var a = 10; for ([a+2] in []) { } }; f3();"); }, o8, "var empty object declaration pattern without an initializer is not valid syntax", "Unexpected operator in destructuring expression");
      o5.o9(function () { eval("(function () { var x; for ({x:x}.x of [1,2]) {}; })();"); }, "for..of initializer start with left curly but not a pattern is valid syntax");
      o5.o6(function () { eval("(function () { 'use strict'; [x] = [1]; let x = 2; })();"); }, o10, "A variable, defined in pattern, is used before its declaration in not valid syntax", "Use before declaration");
      o5.o6(function () { eval("(function () { 'use strict'; let x1 = 1; ({x:x1, y:{y1:y1}} = {x:11, y:{y1:22}}); let y1 = 2; })();"); }, o10, "A variable, defined in nested pattern, is used before its declaration is not valid syntax", "Use before declaration");
      o5.o6(function () { eval("(function () { 'use strict'; [eval] = []; })();"); }, o8, "variable name 'eval' defined in array pattern is not valid in strict mode", "Invalid usage of 'eval' in strict mode");
      o5.o6(function () { eval("let a = [a] = [10]"); }, o10, "A let variable is used in the array pattern in the same statement where it is declared", "Use before declaration");
      o5.o6(function () { eval("let a = {a:a} = {}"); }, o10, "A let variable is used in object pattern in the same statement where it is declared", "Use before declaration");
      o5.o6(function () { eval("var a = 1; (delete [a] = [2]);"); }, o10, "Array literal in unary expression should not be converted to array pattern", "Invalid left-hand side in assignment");
      o5.o6(function () { eval("var x, b; for ([x] = [((b) = 1)] of ' ') { }"); }, o10, "Initializer in for..in is not valid but no assert should be thrown", "Invalid left-hand side in assignment");
      o5.o6(function () { eval("for (let []; ;) { }"); }, o8, "Native for loop's head has one destructuring pattern without initializer", "Destructuring declarations must have an initializer");
      o5.o6(function () { eval("for (let a = 1, []; ;) { }"); }, o8, "Native for loop's head has second param as destructuring pattern without initializer", "Destructuring declarations must have an initializer");
      o5.o6(function () { eval("for (let [] = [], a = 1, {}; ;) { }"); }, o8, "Native for loop's head has third param as object destructuring pattern without initializer", "Destructuring declarations must have an initializer");
      o5.o6(function () { eval("for (let [[a] = []]; ;) { }"); }, o8, "Native for loop's head as destructuring pattern without initializer", "Destructuring declarations must have an initializer");
      o5.o9(function () { eval("for ([]; ;) { break; }"); }, "Native for loop's head is an expression without initializer is valid syntax");
      o5.o9(function () { eval("try { y; } catch({}) { }"); }, "Catching exception to empty pattern should not assert and is a valid syntax");
      o5.o9(function () { eval("for({} = function (...a) { } in '' ) { }"); }, "Having a function with rest parameter as initializer should not assert and is a valid syntax");
      o5.o9(function () { eval("for([] = ((...a) => {}) in '' ) { }"); }, "Having a lambda function with rest parameter as initializer should not assert and is a valid syntax");
      o5.o9(function () { eval("[[[] = [function () { }] ] = []]"); }, "Nested array has array pattern which has function expression is a valid syntax");
      o5.o9(function () { eval("var a = ({x = 1}) => x;"); }, "Lambda has Object destructuring as parameter which has initializer on shorthand is a valid syntax");
    }
  },
  {
    name: "Destructuring bug fix - function expression under destructuring pattern does not crash",
    o4: function () {
      var o11 = [];
      var o12 = 2;
      function o13() {
        [ o11 [ function () { }, o12 ] ] = [2] ;
      }
      o13();
    }
  },
  {
    name: "Destructuring bug fix - rest operator in for loop",
    o4: function () {
      o5.o6(function () { eval("for (var {a: ...a1} = {}; ; ) { } "); }, o8, "Native for loop - usage of '...' in object destructuring pattern in not valid", "Unexpected ... operator");
      o5.o6(function () { eval("for (var {a: ...[]} = {}; ; ) { } "); }, o8, "Native for loop - usage of '...' before an array in object destructuring pattern in not valid", "Unexpected ... operator");
      o5.o6(function () { eval("for (var {a: ...[]} of '' ) { } "); }, o8, "for.of loop - usage of '...' before an array in object destructuring pattern in not valid", "Unexpected ... operator");
    }
  },
  {
    name: "Destructuring bug fix - call expression instead of reference node",
    o4: function () {
      o5.o6(function () { eval("for (var a of {b: foo()} = {}) { }"); }, o8, "for.of loop has destructuring pattern which has call expression instead of a reference node", "Invalid destructuring assignment target");
      o5.o6(function () { eval("for ([{b: foo()} = {}] of {}) { }"); }, o8, "for.of loop has destructuring pattern on head which has call expression instead of a reference node", "Invalid destructuring assignment target");
      function o14() {
          return { o15 : function() {} };
      }

      o5.o6(function () { eval("for (var a in {b: foo().bar()} = {}) { }"); }, o8, "for.in loop has destructuring pattern which has linked call expression instead of a reference node", "Invalid destructuring assignment target");
      o5.o9(function () { eval("for (var a in {b: foo().bar} = {}) { }"); }, "for.in loop has destructuring pattern which has a reference node is valid syntax", );
    }
  },
  {
    name: "Destructuring bug fix - object coercible",
    o4: function () {
      o5.o6(function () { eval("var {} = undefined"); }, o16, "Object declaration - RHS cannot be be undefined", "Cannot convert null or undefined to object");
      o5.o6(function () { eval("var {} = null"); }, o16, "Object declaration - RHS cannot be be null", "Cannot convert null or undefined to object");
      o5.o6(function () { eval("({} = undefined);"); }, o16, "Object assignment pattern - RHS cannot be be undefined", "Cannot convert null or undefined to object");
      o5.o6(function () { eval("([{}] = []);"); }, o16, "Object assignment pattern nested with array pattern has evaluated to have undefined as RHS", "Cannot convert null or undefined to object");
      o5.o6(function () { eval("function f({}){}; f();"); }, o16, "Object pattern on function - evaluated to have undefined from assignment expression", "Cannot convert null or undefined to object");
      o5.o6(function () { eval("function f({}){}; f(null);"); }, o16, "Object pattern on function - evaluated to have null from assignment expression", "Cannot convert null or undefined to object");
    }
  },
  {
    name: "Destructuring bug fix - a variable in body has the same name as param should not throw in the defer parse mode",
    o4: function () {
      o5.o9(function () { eval("function foo() { function bar([a]) { var a = 1; } }"); }, "variable 'a' is not a re-declaration" );
      o5.o9(function () { eval("function foo() { function bar([a], {b, b1}, [c]) { var b1 = 1; } }"); }, "variable 'b1' is not a re-declaration" );
      o5.o9(function () { eval("function foo() { ({c}) => { var c = 1; } }"); }, "variable 'c' is not a re-declaration" );
    }
  },
  {
    name: "Destructuring bug fix - assign to const",
    o4: function () {
      o5.o6(function () { const o17 = 10; ({o17co17} = {o17:11}); }, o16, "Cannot assign to const", "Assignment to const");
      o5.o6(function () { eval("const c = 10; ({c} = {c:11});"); }, o16, "Cannot assign to const in eval", "Assignment to const");
      o5.o6(function () { const o17 = 10; eval("({c} = {c:11});"); }, o16, "Cannot assign to const in eval, where const is defined outsdie of eval", "Assignment to const");
    }
  },
  {
    name: "Destructuring bug fix - pattern with rest parameter",
    o4: function () {
      o5.o9(function () { eval("function foo({a}, ...b) { if (b) { } }; foo({});"); } );
      o5.o9(function () { eval("function foo([], ...b) { if (b) { } }; foo([]);"); });
    }
  },
  {
    name: "Object Destructuring with empty identifier/reference",
    o4: function () {
      o5.o6(function () { eval("var {x :  } = {};"); }, o8);
      o5.o6(function () { eval("var {x :  , } = {};"); }, o8);
      o5.o6(function () { eval("var {x :  , y} = {};"); }, o8);
      o5.o6(function () { eval("({x : , y} = {});"); }, o8);
    }
  },
  {
    name: "Destructuring pattern at param has arguments as declaration",
    o4: function () {
      o5.o9(function () { eval("function foo([arguments]) { arguments; }; foo([1]);"); });
      o5.o9(function () { eval("function foo({arguments}) { arguments; }; foo({arguments:1});"); });
      o5.o9(function () { eval("function foo({x:{arguments}}) { arguments; }; foo({x:{arguments:1}});"); });
    }
  },
  {
    name: "Destructuring pattern at param has function as default value",
    o4: function () {
      o5.o9(function () { eval("function foo(x = ({y = function (p) {}} = 'bar')) {}; foo();"); });
      o5.o9(function () { eval("var foo = (x = ({y = function (p) {}} = 'bar')) => {}; foo();"); });
    }
  },
  {
    name: "Destructuring empty patterns at param with arguments/eval at function body",
    o4: function () {
        (function ({}, {}, {}, {}, {}, o11) {
            eval("");
            o5.o18(arguments[1].o20, 1);
            o5.o18(o11, 2);
        })({}, {o20:1}, {}, {}, {}, 2);
        (function ({}, {}, {}, {}, {}, o11) {
            (function () {
                eval("");
            })();
            o5.o18(arguments[1].o20, 1);
            o5.o18(o11, 2);
        })({}, {o20:1}, {}, {}, {}, 2);
        (function ({}, {}, {}, {}, {}, o11) {
            (function () {
                o11;
            })();
            eval("");
            o5.o18(arguments[1].o20, 1);
            o5.o18(o11, 2);
        })({}, {o20:1}, {}, {}, {}, 2);
    }
  },
  {
    name: "Destructuring patterns (multiple identifiers in the pattern) at param with arguments/eval at function body",
    o4: function () {
        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26) {
            eval("");
            o5.o18(arguments[2], [4, 5]);
        })(1, {o22:2, o23:3}, [4, 5], 6);

        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26) {
            var o27 = o21 + o22 + o23 + o24 + o25 + o26;
            eval("");
            o5.o18(arguments[2], [4, 5]);
            o5.o18(o27, 21);
        })(1, {o22:2, o23:3}, [4, 5], 6);

        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26) {
            (function() {
              eval("");  
            });
            o5.o18(arguments[3], 6);
            var o27 = o21 + o22 + o23 + o24 + o25 + o26;
            o5.o18(o27, 21);
        })(1, {o22:2, o23:3}, [4, 5], 6);

        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26) {
            (function() {
                o23; o25; o26;
            })();
            var o27 = o21 + o22 + o23 + o24 + o25 + o26;
            o5.o18(o27, 21);
        })(1, {o22:2, o23:3}, [4, 5], 6);

        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26) {
            (function() {
                o23; o25; o26;
            })();
            var o27 = o21 + o22 + o23 + o24 + o25 + o26;
            o5.o18(arguments[3], 6);
            o5.o18(o27, 21);
        })(1, {o22:2, o23:3}, [4, 5], 6);
        
        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26) {
            (function() {
                o5.o18(o21 + o22 + o23 + o24 + o25 + o26, 21);
            })();
        })(1, {o22:2, o23:3}, [4, 5], 6);

    }
  },
  {
    name: "Destructuring patterns (multiple identifiers in the pattern) at param with lambdas, arguments and eval at function body",
    o4: function () {
        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26) {
            (() => {
                o5.o18(arguments[2], [4, 5]);
            })();
            eval("");
        })(1, {o22:2, o23:3}, [4, 5], 6);

        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26) {
            (() => {
                var o27 = o21 + o22 + o23 + o24 + o25 + o26;
                eval("");
                o5.o18(arguments[2], [4, 5]);
                o5.o18(o27, 21);
            })();
        })(1, {o22:2, o23:3}, [4, 5], 6);
    }
  },
  {
    name: "Destructuring patterns with rest at param with arguments/eval at function body",
    o4: function () {
        (function (o11, {o12bo12},  ...o28) {
            eval("");
            o5.o18(o12, 2);
            o5.o18(arguments[2], 3);
        })(1, {o12:2}, 3);

        (function (o11, {o12bo12},  ...o28) {
            (function () {
                eval("");
            })();
            o5.o18(o28, [3]);
            o5.o18(arguments[2], 3);
        })(1, {o12:2}, 3);

        (function (o11, {o12bo12}, ...o28) {
            (function () {
                o5.o18(o12, 2);
                o5.o18(o28, [3]);
            })();
            o5.o18(o28, [3]);
            o5.o18(arguments[2], 3);
        })(1, {o12:2}, 3);
    }
  },
  {
    name: "Rest as pattern at param with arguments/eval at function body",
    o4: function () {
        (function ([o11, o12], o17, ...{o29rest1o29, o30rest2o30}) {
            eval("");
            o5.o18(o29, 4);
            o5.o18(o30, 5);
            o5.o18(o17, 3);
            o5.o18(arguments[1], 3);
        })([1, 2], 3, {o29:4, o30:5});

        (function ([o11, o12], o17, ...{o29rest1o29, o30rest2o30}) {
            (function () {
                o5.o18(o29, 4);
                o5.o18(o30, 5);
                o5.o18(o11+o12, 3);
            })();
            eval("");
            o5.o18(arguments[0], [1, 2]);
        })([1, 2], 3, {o29:4, o30:5});
    }
  },
  {
    name: "Accessing arguments at the params",
    o4: function () {
        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26 = arguments[0]) {
            eval("");
            o5.o18(arguments[2], [4, 5]);
            o5.o18(o26, 1);
        })(1, {o22:2, o23:3}, [4, 5], undefined);

        (function (o21, {o22x2o22, o23x3o23}, [o24, o25], o26 = arguments[0] = 11) {
            eval("");
            o5.o18(arguments[0], 11);
            o5.o18(o26, 11);
        })(1, {o22:2, o23:3}, [4, 5], undefined);
    }
  },
  {
    name: "Object destructuring - changing the RHS when emitting",
    o4: function () {
        var o11 = {}, o12;
        ({o20:o11, o32:o12 = 1} = o11);
        o5.o18(o11, undefined);
        o5.o18(o12, 1);
    }
  },
  {
    name: "Destructuring - Empty object pattern inside call node is a valid syntax",
    o4: function () {
        function o13() {
            ({} = []).Symbol.o34();
            eval("");
        };
    }
  },
  {
    name: "Destructuring - Place holder slots for pattern are accounted when undeferred.",
    o4: function () {
        function o14({o11ao11}) {
            function o20() {}
            eval('');
        }
        o14({});
        function o35(...[o12]) {
            function o20() {}
            eval('');
        }
        o35([]);
    }
  },
  {
    name: "Destructuring - array pattern at call expression (which causes iterator close)",
    o4: function () {
        function o14(o21, o22, o23, o24) {
            o5.o18(o21, 'first');
            o5.o18(o22, 'second');
            o5.o18(o23[0][0], 'third');
            o5.o18(o24[0][0][0][0], 'fourth');
        }
        var o36;
        var o37;
        o14([{}] = 'first', 'second', [[o36]] = [['third']], [[[[o37]]]] = [[[['fourth']]]]);
        o5.o18(o36, 'third');
        o5.o18(o37, 'fourth');
    }
  },
  {
    name: "Destructuring - array patten at call expression - validating the next/return functions are called.",
    o4: function () {
        var o38 = 0;
        var o39 = 0;
        var o40 = {};
        o40[Symbol.iterator] = function () {
            return {
                next: function() {
                    o38++;
                    return {value : 1, done:false};
                },
                return: function (value) {
                    o39++;
                    return {done:true};
                }
            };
        };

        var o46 = {
          set o47(o48) {
            throw new Error('From setter');
          }
        };
        
        var o14 = function () { };
        o5.o6(function () { o14([[o46.o47]] = [o40]); }, Error, 'pattern at call expression throws and return function is called', 'From setter');
        o5.o18(o38, 1);
        o5.o18(o39, 1);
    }
  }
];

o50.o51(o2, { o52: o0.o53[0] != "summary" });
