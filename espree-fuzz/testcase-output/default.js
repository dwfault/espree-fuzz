//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "Default argument parsing",
    o3: function () {
      // Incomplete expressions
      o4.o5(function () { eval("function foo(a =) { return a; }"); },               o6, "Incomplete default expression throws in a function",                "Syntax error");
      o4.o5(function () { eval("var x = function(a =) { return a; }"); },           o6, "Incomplete default expression throws in a function expression",     "Syntax error");
      o4.o5(function () { eval("(a =) => a"); },                                    o6, "Incomplete default expression throws in a lambda",                  "Syntax error");
      o4.o5(function () { eval("var x = { foo(a =) { return a; } }"); },            o6, "Incomplete default expression throws in an object method",          "Syntax error");
      o4.o5(function () { eval("var x = class { foo(a =) { return a; } }"); },      o6, "Incomplete default expression throws in a class method",            "Syntax error");
      o4.o5(function () { eval("var x = { foo: function (a =) { return a; } }"); }, o6, "Incomplete default expression throws in an object member function", "Syntax error");
      o4.o5(function () { eval("function * foo(a =) { return a; }"); },             o6, "Incomplete default expression throws in a generator function",      "Syntax error");
      o4.o5(function () { eval("var x = function*(a =) { return a; }"); },          o6, "Incomplete default expression throws in a generator function",      "Syntax error");
      o4.o5(function () { eval("var x = class { * foo(a =) { return a; } }"); },    o6, "Incomplete default expression throws in a class generator method",  "Syntax error");

      // Duplicate parameters
      o4.o5(function () { eval("function f(a, b, a, c = 10) { }"); },               o6, "Duplicate parameters are not allowed before the default argument", "Duplicate formal parameter names not allowed in this context");
      o4.o5(function () { eval("function f(a, b = 10, a) { }"); },                  o6, "Duplicate parameters are not allolwed after the default argument", "Duplicate formal parameter names not allowed in this context");
      o4.o5(function () { eval("function f(a, b, a, c) { \"use strict\"; }"); },    o6, "When function is in strict mode duplicate parameters are not allowed for simple parameter list", "Duplicate formal parameter names not allowed in strict mode");
      o4.o5(function () { eval("function f(a, b = 1) { \"use strict\"; }"); },      o6, "Strict mode cannot be applied to functions with default parameters", "Cannot apply strict mode on functions with non-simple parameter list");
      o4.o5(function () { eval("function f() { \"use strict\"; function g(a, b, a) { } }"); },      o6, "When a function is already in strict mode duplicate parameters are not allowed for simple parameter list", "Duplicate formal parameter names not allowed in strict mode");
      o4.o5(function () { eval("function f() { \"use strict\"; function g(a, b, a = 10) { } }"); }, o6, "When a function is already in strict mode duplicate parameters are not allowed for formal parameter list", "Duplicate formal parameter names not allowed in strict mode");

      o4.o7(function o8() { "use strict"; function o9(o10, o11 = 10) { } },           "Default arguments are allowed for functions which are already in strict mode");
      o4.o7(function o8(o10, o11, o10, o12) { return o10 + o11 + o12; },                       "In non-strict mode duplicate parameters are allowed");
      
      o4.o7(function () { var o13 = { set o8(o10 = 1) {} }; }, "Default parameters can be used with setters inside an object literal");
      o4.o7(function () { class o12 { set o8(o10 = 1) {} }; }, "Default parameters can be used with setters inside a class");
      o4.o7(function () { var o13 = { set o8({o10ao10}) {} }; }, "Setter can have destructured param list");
      o4.o7(function () { var o13 = { set o8({o10ao10, o11bo11}) {} }; }, "Setter can have destructured param list with more than one parameter");
      o4.o7(function () { var o13 = { set o8([o10, o11]) {} }; }, "Setter can have destructured array pattern with more than one parameter");
      o4.o7(function () { var o13 = { set o8([o10, ...o11]) {} }; }, "Setter can have destructured array pattern with rest");
      o4.o5(function () { eval("var obj = { set f(...a) {} };"); }, o6, "Rest parameter cannot be used with setters inside an object literal", "Unexpected ... operator");
      o4.o5(function () { eval("var obj = { set f(a, b = 1) {} };"); }, o6, "Setters can have only one parameter even if one of them is default parameter", "Setter functions must have exactly one parameter");
      o4.o5(function () { eval("var obj = { set f(a = 1, b) {} };"); }, o6, "Setters can have only one parameter even if one of them is default parameter", "Setter functions must have exactly one parameter");
      o4.o5(function () { eval("var obj = { set f(a = 1, ...b) {} };") }, o6, "Setters can have only one parameter even if one of them is rest parameter", "Setter functions must have exactly one parameter");
      o4.o5(function () { eval("var obj = { set f(a = 1, {b}) {} };"); }, o6, "Setters can have only one parameter even if one of them is destructured parameter", "Setter functions must have exactly one parameter");
      o4.o5(function () { eval("var obj = { set f({a}, b = 1) {} };"); }, o6, "Setters can have only one parameter even if one of them is default parameter", "Setter functions must have exactly one parameter");
      o4.o5(function () { eval("var obj = { get f(a = 1) {} };"); }, o6, "Getter cannnot have any parameter even if it is default parameter", "Getter functions must have no parameters");
      o4.o5(function () { eval("var obj = { get f(...a) {} };"); }, o6, "Getter cannot have any parameter even if it is rest parameter", "Getter functions must have no parameters");
      o4.o5(function () { eval("var obj = { get f({a}) {} };"); }, o6, "Getter cannot have any parameter even if it is destructured parameter", "Getter functions must have no parameters");

      o4.o5(function () { eval("function foo(a *= 5)"); },                          o6, "Other assignment operators do not work");

      // Redeclaration errors - non-simple in this case means any parameter list with a default expression
      o4.o7(function () { eval("function foo(a = 1) { var a; }"); },            "Var redeclaration with a non-simple parameter list");
      o4.o7(function () { eval("function foo(a = 1, b) { var b; }"); },         "Var redeclaration does not throw with a non-simple parameter list on a non-default parameter");
      o4.o5(function () { function o14(o10 = 1) { eval('var a;'); }; o14() },     o15, "Var redeclaration throws with a non-simple parameter list inside an eval", "Let/Const redeclaration");
      o4.o5(function () { function o14(o10 = 1, o11) { eval('var b;'); }; o14(); }, o15, "Var redeclaration throws with a non-simple parameter list on a non-default parameter inside eval", "Let/Const redeclaration");

      o4.o7(function () { function o14(o10 = 1) { eval('let a;'); }; o14() },           "Let redeclaration inside an eval does not throw with a non-simple parameter list");
      o4.o7(function () { function o14(o10 = 1) { eval('const a = "str";'); }; o14() }, "Const redeclaration inside an eval does not throw with a non-simple parameter list");
      o4.o7(function () { function o14(o10 = 1) { eval('let a;'); }; o14() },           "Let redeclaration of a non-default parameter inside an eval does not throw with a non-simple parameter list");
      o4.o7(function () { function o14(o10 = 1) { eval('const a = 0;'); }; o14() },     "Const redeclaration of a non-default parameter inside an eval does not throw with a non-simple parameter list");

      o4.o5(function () { eval("x = 3 => x"); },                                    o6, "Lambda formals without parentheses cannot have default expressions", "Expected \'(\'");
      o4.o5(function () { eval("var a = 0, b = 0; (x = ++a,++b) => x"); },          o6, "Default expressions cannot have comma separated expressions",        "Expected identifier");
    }
  },
  {
    name: "Default argument sanity checks and expressions",
    o3: function () {
      function o14(o10, o11 = 2, o12 = 1, o16 = o10 + o11 + o12, o17) { return o16; }
      o4.o18(o14(),     o14(undefined, undefined, undefined, undefined, undefined), "Passing undefined has the same behavior as a default expression");
      o4.o18(o14(1),    o14(1, 2),    "Passing some arguments leaves default values for the rest");
      o4.o18(o14(1, 2), o14(1, 2, 1), "Passing some arguments leaves default values for the rest");
      o4.o18(o14(3, 5), o14(3, 5, 1), "Overriding default values leaves other default values in tact");

      function o19(o10 = 1, o11 = ++o10, o12 = ++o11, o16 = ++o12) { return [o10,o11,o12,o16]; }
      o4.o18([2,3,4,4], o19(),              "Side effects chain properly");
      o4.o18([1,1,1,1], o19(0,undefined,0), "Side effects chain properly with some arguments passed");

      function o20(o10 = 15, o11 = arguments[1], o12 = arguments[0]) { return [o10,o11,o12]; }
      o4.o18([15,undefined,undefined], o20(), "Arguments object uses original parameters passed");

      function o21(o10, o11 = 5 * arguments[0]) { return arguments[1]; }
      o4.o18(undefined, o21(5), "Arguments object does not return default expression");

      this.o22 = { test : "test" };
      function o23(o10 = this.o22, o11 = this.o22 = 1.1, o12 = this.o22, o16 = this.o24 = 2, o17 = this.o24) { return [o10,o11,o12,o16,o17]; }
      o4.o18([{test:"test"}, 1.1, 1.1, 2, 2], o23(), "'this' is able to be referenced and modified");

      var o25, o26, o27;
      function o8(o10 = 10, o11 = 20, o12) {
          o4.o18(o10, o25, "First argument");
          o4.o18(o11, o26, "Second argument");
          o4.o18(o12, o27, "Third argument");
      }
      o25 = null, o26 = 20, o27 = 1;
      o8(null, undefined, 1);
      o25 = null, o26 = null, o27 = null;
      o8(null, null, null);
      o25 = 10, o26 = null, o27 = 3;
      o8(undefined, null, 3);

      function o28() {
        this.o29 = 1;
        var o30 = (o10 = this.o29++) => {
          o4.o18(o10,          1, "Lambda default parameters use 'this' correctly");
          o4.o18(this.o29, 2, "Lambda default parameters using 'this' support side effects");
        };
        o30();
      }
      o28();

      // Function length with and without default
      function o31(o10, o11, o12) {}
      function o32(o10, o11, o12 = 1) {}
      function o33(o10, o11 = 1, o12 = 1) {}
      function o34(o10, o11 = 1, o12) {}
      function o35(o10 = 2, o11, o12) {}
      function o36(o10 = 2, o11 = 5, o12 = "str") {}

      o4.o18(3, o31.length, "No default parameters gives correct length");
      o4.o18(2, o32.length, "One trailing default parameter gives correct length");
      o4.o18(1, o33.length, "Two trailing default parameters gives correct length");
      o4.o18(1, o34.length, "One default parameter with following non-default gives correct length");
      o4.o18(0, o35.length, "One default parameter with two following non-defaults gives correct length");
      o4.o18(0, o36.length, "All default parameters gives correct length");
    }
  },
  {
    name: "Use before declaration in parameter lists",
    o3: function () {
      o4.o5(function () { eval("function foo(a = b, b = a) {}; foo();"); },   o15, "Unevaluated parameters cannot be referenced in a default initializer", "Use before declaration");
      o4.o5(function () { eval("function foo(a = a, b = b) {}; foo();"); },   o15, "Unevaluated parameters cannot be referenced in a default initializer", "Use before declaration");
      o4.o5(function () { eval("function foo(a = (b = 5), b) {}; foo();"); }, o15, "Unevaluated parameters cannot be modified in a default initializer", "Use before declaration");

      function o37(o10 = (arguments[1] = 5), o11) { return o11 };
      o4.o18(undefined, o37(),     "Unevaluated parameters are referenceable using the arguments object");
      o4.o18(undefined, o37(1),    "Side effects on the arguments object are allowed but has no effect on default parameter initialization");
      o4.o18(2,         o37(1, 2), "Side effects on the arguments object are allowed but has no effect on default parameter initialization");
    }
  },
  {
    name: "Parameter scope does not have visibility of body declarations",
    o3: function () {
      function o38(o10 = o39) { var o39 = 1; return o10; }
      o4.o5(function() { o38(); },
                    o15,
                    "Shadowed var in parameter scope is not affected by body initialization when setting the default value",
                    "'x' is undefined");

      function o40(o10 = () => o39) { var o39 = 1; return o10(); }
      o4.o5(function () { o40(); },
                    o15,
                    "Arrow function capturing var at parameter scope is not affected by body declaration",
                    "'x' is undefined");

      function o41(o10 = () => o39) { var o39 = 1; return o10; } // a() undefined
      o4.o5(function () { o41()(); },
                    o15,
                    "Attempted closure capture of body scoped var throws in an arrow function default expression",
                    "'x' is undefined");

      function o42(o10 = function() { return o39; }) { var o39 = 1; return o10(); }
      o4.o5(function () { o42(); },
                    o15,
                    "Attempted closure capture of body scoped var throws in an anonymous function default expression",
                    "'x' is undefined");

      function o43(o10 = function o44() { return 1; }, o11 = o44()) { return [o10(), o11]; }
      o4.o5(function () { o43(); },
                    o15,
                    "Named function expression does not leak name into subsequent default expressions",
                    "'bar' is undefined");
      function o45(o10 = o46) {
          {
              function o46() {
                  return 2;
              }
          }
          o4.o18(1, o10, "First argument should get the initial value from outer variable");
          o4.o18(2, o46(), "Block scoped function should be visible in the body also");
      }
      var o46 = 1;
      o45();
      
      var o47 = 10; 
      function o48(o11 = function () { return o47; }) { 
          o4.o18(undefined, o47, "Inside the function body the assignment hasn't happened yet"); 
          var o47 = 20; 
          o4.o18(20, o47, "Assignment to the symbol inside the function changes the value"); 
          return o11; 
      } 
      o4.o18(10, o48()(), "Function in the param scope correctly binds to the outer variable");
      
      function o49(o10 = o50, o11 = function o9() {
          return function o51() {
              o4.o18(10, o50, "x1 is captured from the outer scope");
          };
      }) {
          var o50 = 100;
          o11()();
      };
      var o50 = 10;
      o49();
      
      var o52 = 1;
      function o53(o10 = o52, o11 = function() { return o52; }) {
          {
             function o52() {
            }
          }
          var o52 = 2;
          return o11;
      }
      o4.o18(1, o53()(), "Symbol capture at the param scope is unaffected by the inner definitions");
      
      var o54 = 1;
      function o55(o10 = o54, o11 = function(o56) { return o54; }) {
          var o54 = 2;
          return o11;
      }
      o4.o18(1, o55()(), "Symbol capture at the param scope is unaffected by other references in the body and param");
    }
  },
  {
    name: "Parameter scope shadowing tests",
    o3: function () {
      // These tests exercise logic in FindOrAddPidRef for when we need to look at parameter scope

      // Original sym in parameter scope
      var o57 = function(o58 = o59) {
        for (var o59 in o60) {
            for (var o59 in o61) {
            }
        }
      }

      // False positive PidRef (no decl) at parameter scope
      function o62() {
        for (var o59 in o10) {
            var o8 = function(o11 = o59) {
                for (var o59 in o12) {}
            };
        }
      }

      function o63() {
        let o64 = (o65) => {
            let  o66 = { o65zo65 };
            o4.o18(10, o66.o65, "Identifier reference in object literal should get the correct reference from the arguments");
            var o65;
        }
        o64(10);
      };
      o63();

    }
  },
  {
    name: "Arrow function bodies in parameter scope",
    o3: function () {
      // Nested parameter scopes
      function o67(o10 = ((o39 = 1) => o39)()) { return o10; }
      o4.o18(1, o67(), "Arrow function with default value works at parameter scope");

      function o68(o10 = (o11 = (o39 = () => 1)) => 1) { return o10; }
      o4.o18(1, o68()(), "Nested arrow function with default value works at parameter scope");
    }
  },
  {
    name: "OS 1583694: Arguments sym is not set correctly on undo defer",
    o3: function () {
      eval();
      var arguments;
    }
  },
  {
    name: "Split parameter scope",
    o3: function () {
        o4.o7(function o8(o10 = 1, o11 = class o12 { o8() { return 2; }}) { }, "Class methods that do not refer to a formal are allowed in the param scope");

        o4.o5(function () { eval("function f(a = eval('1')) { }") }, o6, "Eval is not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o4.o5(function () { eval("function f(a, b = function () { eval('1'); }) { }") }, o6, "Evals in child functions are not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o4.o5(function () { eval("function f(a, b = function () { function f() { eval('1'); } }) { }") }, o6, "Evals in nested child functions are not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o4.o5(function () { eval("function f(a, b = eval('a')) { }") }, o6, "Eval is not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o4.o5(function () { eval("async function f(a = eval('b')) { }"); }, o6, "Eval is not allowed in the param scope of async functions", "'eval' is not allowed in the default initializer");
        o4.o5(function () { eval("function f(a = async function(y) { eval('b'); }) { }"); }, o6, "Eval is not allowed in the param scope of nested async functions", "'eval' is not allowed in the default initializer");
        
        o4.o7(function (o10 = eval) { }, "An assignment of eval does not cause syntax error");
        o4.o7(function (o10 = eval()) { }, "If no arguments are passed to eval then it won't cause syntax error");
        o4.o7(function () { eval("function f( x = function y() { function z() { x; }; }) { }"); }, "Split scope functions inside eval shouldn't throw");
    }
  },
  {
    name: "Unmapped arguments - Non simple parameter list",
    o3: function () {
        function o69 (o39 = 10, o70 = 20, o65) {
            o39 += 2;
            o70 += 2;
            o65 += 2;

            o4.o18(arguments[0], undefined,  "arguments[0] is not mapped with first formal and did not change when the first formal changed");
            o4.o18(arguments[1], undefined,  "arguments[1] is not mapped with second formal and did not change when the second formal changed");
            o4.o18(arguments[2], 30,  "arguments[2] is not mapped with third formal and did not change when the third formal changed");

            arguments[0] = 1;
            arguments[1] = 2;
            arguments[2] = 3;

            o4.o18(o39, 12,  "Changing arguments[0], did not change the first formal");
            o4.o18(o70, 22,  "Changing arguments[1], did not change the second formal");
            o4.o18(o65, 32,  "Changing arguments[2], did not change the third formal");
        }
        o69(undefined, undefined, 30);

        function o71 (o39 = 10, o70 = 20, o65) {
            eval('');
            o39 += 2;
            o70 += 2;
            o65 += 2;

            o4.o18(arguments[0], undefined,  "Function has eval - arguments[0] is not mapped with first formal and did not change when the first formal changed");
            o4.o18(arguments[1], undefined,  "Function has eval - arguments[1] is not mapped with second formal and did not change when the second formal changed");
            o4.o18(arguments[2], 30,  "Function has eval - arguments[2] is not mapped with third formal and did not change when the third formal changed");

            arguments[0] = 1;
            arguments[1] = 2;
            arguments[2] = 3;

            o4.o18(o39, 12,  "Function has eval - Changing arguments[0], did not change the first formal");
            o4.o18(o70, 22,  "Function has eval - Changing arguments[1], did not change the second formal");
            o4.o18(o65, 32,  "Function has eval - Changing arguments[2], did not change the third formal");
        }
        o71(undefined, undefined, 30);

        function o72 (o39 = 10, o70 = 20, o65) {
            (function () {
                eval('');
            })();
            o39 += 2;
            o70 += 2;
            o65 += 2;

            o4.o18(arguments[0], undefined,  "Function's inner function has eval - arguments[0] is not mapped with first formal and did not change when the first formal changed");
            o4.o18(arguments[1], undefined,  "Function's inner function has eval - arguments[1] is not mapped with second formal and did not change when the second formal changed");
            o4.o18(arguments[2], 30,  "Function's inner function has eval - arguments[2] is not mapped with third formal and did not change when the third formal changed");

            arguments[0] = 1;
            arguments[1] = 2;
            arguments[2] = 3;

            o4.o18(o39, 12,  "Function's inner function has eval - Changing arguments[0], did not change the first formal");
            o4.o18(o70, 22,  "Function's inner function has eval - Changing arguments[1], did not change the second formal");
            o4.o18(o65, 32,  "Function's inner function has eval - Changing arguments[2], did not change the third formal");
        }
        o72(undefined, undefined, 30);

        function o73 (o10, o11, o12, o16 = 1) {
            var o17 = 10;
            o4.o18(2, arguments[0], "Unmapped arguments value has the expected value in the body");
            (function () {
                eval('');
            }());
        };
        o73.call(1, 2);
        
        function o74 (o10, o11, o12, o16 = 1) {
            var o17 = 10;
            var o16 = 11;
            o4.o18(2, arguments[0], "Unmapped arguments value has the expected value, even with duplicate symbol in the body");
            (function () {
                eval('');
            }());
        };
        o74.call(1, 2);
    }
  },
  {
    name: "Param of lambda has default as function",
    o3: function () {
        o4.o7(function () { eval("[ (a = function () { }) => {} ];"); }, "Lambda defined, inside an array literal, has a default as a function should not assert");
    }
  }
];

o75.o76(o2, { o77: o0.o78[0] != "summary" });
