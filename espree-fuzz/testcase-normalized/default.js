//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "Default argument parsing",
    o4: function () {
      // Incomplete expressions
      o5.o6(function () { eval("function foo(a =) { return a; }"); },               o8, "Incomplete default expression throws in a function",                "Syntax error");
      o5.o6(function () { eval("var x = function(a =) { return a; }"); },           o8, "Incomplete default expression throws in a function expression",     "Syntax error");
      o5.o6(function () { eval("(a =) => a"); },                                    o8, "Incomplete default expression throws in a lambda",                  "Syntax error");
      o5.o6(function () { eval("var x = { foo(a =) { return a; } }"); },            o8, "Incomplete default expression throws in an object method",          "Syntax error");
      o5.o6(function () { eval("var x = class { foo(a =) { return a; } }"); },      o8, "Incomplete default expression throws in a class method",            "Syntax error");
      o5.o6(function () { eval("var x = { foo: function (a =) { return a; } }"); }, o8, "Incomplete default expression throws in an object member function", "Syntax error");
      o5.o6(function () { eval("function * foo(a =) { return a; }"); },             o8, "Incomplete default expression throws in a generator function",      "Syntax error");
      o5.o6(function () { eval("var x = function*(a =) { return a; }"); },          o8, "Incomplete default expression throws in a generator function",      "Syntax error");
      o5.o6(function () { eval("var x = class { * foo(a =) { return a; } }"); },    o8, "Incomplete default expression throws in a class generator method",  "Syntax error");

      // Duplicate parameters
      o5.o6(function () { eval("function f(a, b, a, c = 10) { }"); },               o8, "Duplicate parameters are not allowed before the default argument", "Duplicate formal parameter names not allowed in this context");
      o5.o6(function () { eval("function f(a, b = 10, a) { }"); },                  o8, "Duplicate parameters are not allolwed after the default argument", "Duplicate formal parameter names not allowed in this context");
      o5.o6(function () { eval("function f(a, b, a, c) { \"use strict\"; }"); },    o8, "When function is in strict mode duplicate parameters are not allowed for simple parameter list", "Duplicate formal parameter names not allowed in strict mode");
      o5.o6(function () { eval("function f(a, b = 1) { \"use strict\"; }"); },      o8, "Strict mode cannot be applied to functions with default parameters", "Cannot apply strict mode on functions with non-simple parameter list");
      o5.o6(function () { eval("function f() { \"use strict\"; function g(a, b, a) { } }"); },      o8, "When a function is already in strict mode duplicate parameters are not allowed for simple parameter list", "Duplicate formal parameter names not allowed in strict mode");
      o5.o6(function () { eval("function f() { \"use strict\"; function g(a, b, a = 10) { } }"); }, o8, "When a function is already in strict mode duplicate parameters are not allowed for formal parameter list", "Duplicate formal parameter names not allowed in strict mode");

      o5.o9(function o10() { "use strict"; function o11(o12, o13 = 10) { } },           "Default arguments are allowed for functions which are already in strict mode");
      o5.o9(function o10(o12, o13, o12, o14) { return o12 + o13 + o14; },                       "In non-strict mode duplicate parameters are allowed");
      
      o5.o9(function () { var o15 = { set o10(o12 = 1) {} }; }, "Default parameters can be used with setters inside an object literal");
      o5.o9(function () { class o14 { set o10(o12 = 1) {} }; }, "Default parameters can be used with setters inside a class");
      o5.o9(function () { var o15 = { set o10({o12ao12}) {} }; }, "Setter can have destructured param list");
      o5.o9(function () { var o15 = { set o10({o12ao12, o13bo13}) {} }; }, "Setter can have destructured param list with more than one parameter");
      o5.o9(function () { var o15 = { set o10([o12, o13]) {} }; }, "Setter can have destructured array pattern with more than one parameter");
      o5.o9(function () { var o15 = { set o10([o12, ...o13]) {} }; }, "Setter can have destructured array pattern with rest");
      o5.o6(function () { eval("var obj = { set f(...a) {} };"); }, o8, "Rest parameter cannot be used with setters inside an object literal", "Unexpected ... operator");
      o5.o6(function () { eval("var obj = { set f(a, b = 1) {} };"); }, o8, "Setters can have only one parameter even if one of them is default parameter", "Setter functions must have exactly one parameter");
      o5.o6(function () { eval("var obj = { set f(a = 1, b) {} };"); }, o8, "Setters can have only one parameter even if one of them is default parameter", "Setter functions must have exactly one parameter");
      o5.o6(function () { eval("var obj = { set f(a = 1, ...b) {} };") }, o8, "Setters can have only one parameter even if one of them is rest parameter", "Setter functions must have exactly one parameter");
      o5.o6(function () { eval("var obj = { set f(a = 1, {b}) {} };"); }, o8, "Setters can have only one parameter even if one of them is destructured parameter", "Setter functions must have exactly one parameter");
      o5.o6(function () { eval("var obj = { set f({a}, b = 1) {} };"); }, o8, "Setters can have only one parameter even if one of them is default parameter", "Setter functions must have exactly one parameter");
      o5.o6(function () { eval("var obj = { get f(a = 1) {} };"); }, o8, "Getter cannnot have any parameter even if it is default parameter", "Getter functions must have no parameters");
      o5.o6(function () { eval("var obj = { get f(...a) {} };"); }, o8, "Getter cannot have any parameter even if it is rest parameter", "Getter functions must have no parameters");
      o5.o6(function () { eval("var obj = { get f({a}) {} };"); }, o8, "Getter cannot have any parameter even if it is destructured parameter", "Getter functions must have no parameters");

      o5.o6(function () { eval("function foo(a *= 5)"); },                          o8, "Other assignment operators do not work");

      // Redeclaration errors - non-simple in this case means any parameter list with a default expression
      o5.o9(function () { eval("function foo(a = 1) { var a; }"); },            "Var redeclaration with a non-simple parameter list");
      o5.o9(function () { eval("function foo(a = 1, b) { var b; }"); },         "Var redeclaration does not throw with a non-simple parameter list on a non-default parameter");
      o5.o6(function () { function o16(o12 = 1) { eval('var a;'); }; o16() },     o17, "Var redeclaration throws with a non-simple parameter list inside an eval", "Let/Const redeclaration");
      o5.o6(function () { function o16(o12 = 1, o13) { eval('var b;'); }; o16(); }, o17, "Var redeclaration throws with a non-simple parameter list on a non-default parameter inside eval", "Let/Const redeclaration");

      o5.o9(function () { function o16(o12 = 1) { eval('let a;'); }; o16() },           "Let redeclaration inside an eval does not throw with a non-simple parameter list");
      o5.o9(function () { function o16(o12 = 1) { eval('const a = "str";'); }; o16() }, "Const redeclaration inside an eval does not throw with a non-simple parameter list");
      o5.o9(function () { function o16(o12 = 1) { eval('let a;'); }; o16() },           "Let redeclaration of a non-default parameter inside an eval does not throw with a non-simple parameter list");
      o5.o9(function () { function o16(o12 = 1) { eval('const a = 0;'); }; o16() },     "Const redeclaration of a non-default parameter inside an eval does not throw with a non-simple parameter list");

      o5.o6(function () { eval("x = 3 => x"); },                                    o8, "Lambda formals without parentheses cannot have default expressions", "Expected \'(\'");
      o5.o6(function () { eval("var a = 0, b = 0; (x = ++a,++b) => x"); },          o8, "Default expressions cannot have comma separated expressions",        "Expected identifier");
    }
  },
  {
    name: "Default argument sanity checks and expressions",
    o4: function () {
      function o16(o12, o13 = 2, o14 = 1, o18 = o12 + o13 + o14, o19) { return o18; }
      o5.o20(o16(),     o16(undefined, undefined, undefined, undefined, undefined), "Passing undefined has the same behavior as a default expression");
      o5.o20(o16(1),    o16(1, 2),    "Passing some arguments leaves default values for the rest");
      o5.o20(o16(1, 2), o16(1, 2, 1), "Passing some arguments leaves default values for the rest");
      o5.o20(o16(3, 5), o16(3, 5, 1), "Overriding default values leaves other default values in tact");

      function o22(o12 = 1, o13 = ++o12, o14 = ++o13, o18 = ++o14) { return [o12,o13,o14,o18]; }
      o5.o20([2,3,4,4], o22(),              "Side effects chain properly");
      o5.o20([1,1,1,1], o22(0,undefined,0), "Side effects chain properly with some arguments passed");

      function o23(o12 = 15, o13 = arguments[1], o14 = arguments[0]) { return [o12,o13,o14]; }
      o5.o20([15,undefined,undefined], o23(), "Arguments object uses original parameters passed");

      function o25(o12, o13 = 5 * arguments[0]) { return arguments[1]; }
      o5.o20(undefined, o25(5), "Arguments object does not return default expression");

      this.o26 = { test : "test" };
      function o28(o12 = this.o26, o13 = this.o26 = 1.1, o14 = this.o26, o18 = this.o29 = 2, o19 = this.o29) { return [o12,o13,o14,o18,o19]; }
      o5.o20([{test:"test"}, 1.1, 1.1, 2, 2], o28(), "'this' is able to be referenced and modified");

      var o30, o31, o32;
      function o10(o12 = 10, o13 = 20, o14) {
          o5.o20(o12, o30, "First argument");
          o5.o20(o13, o31, "Second argument");
          o5.o20(o14, o32, "Third argument");
      }
      o30 = null, o31 = 20, o32 = 1;
      o10(null, undefined, 1);
      o30 = null, o31 = null, o32 = null;
      o10(null, null, null);
      o30 = 10, o31 = null, o32 = 3;
      o10(undefined, null, 3);

      function o33() {
        this.o34 = 1;
        var o35 = (o12 = this.o34++) => {
          o5.o20(o12,          1, "Lambda default parameters use 'this' correctly");
          o5.o20(this.o34, 2, "Lambda default parameters using 'this' support side effects");
        };
        o35();
      }
      o33();

      // Function length with and without default
      function o36(o12, o13, o14) {}
      function o37(o12, o13, o14 = 1) {}
      function o38(o12, o13 = 1, o14 = 1) {}
      function o39(o12, o13 = 1, o14) {}
      function o40(o12 = 2, o13, o14) {}
      function o41(o12 = 2, o13 = 5, o14 = "str") {}

      o5.o20(3, o36.length, "No default parameters gives correct length");
      o5.o20(2, o37.length, "One trailing default parameter gives correct length");
      o5.o20(1, o38.length, "Two trailing default parameters gives correct length");
      o5.o20(1, o39.length, "One default parameter with following non-default gives correct length");
      o5.o20(0, o40.length, "One default parameter with two following non-defaults gives correct length");
      o5.o20(0, o41.length, "All default parameters gives correct length");
    }
  },
  {
    name: "Use before declaration in parameter lists",
    o4: function () {
      o5.o6(function () { eval("function foo(a = b, b = a) {}; foo();"); },   o17, "Unevaluated parameters cannot be referenced in a default initializer", "Use before declaration");
      o5.o6(function () { eval("function foo(a = a, b = b) {}; foo();"); },   o17, "Unevaluated parameters cannot be referenced in a default initializer", "Use before declaration");
      o5.o6(function () { eval("function foo(a = (b = 5), b) {}; foo();"); }, o17, "Unevaluated parameters cannot be modified in a default initializer", "Use before declaration");

      function o43(o12 = (arguments[1] = 5), o13) { return o13 };
      o5.o20(undefined, o43(),     "Unevaluated parameters are referenceable using the arguments object");
      o5.o20(undefined, o43(1),    "Side effects on the arguments object are allowed but has no effect on default parameter initialization");
      o5.o20(2,         o43(1, 2), "Side effects on the arguments object are allowed but has no effect on default parameter initialization");
    }
  },
  {
    name: "Parameter scope does not have visibility of body declarations",
    o4: function () {
      function o44(o12 = o45) { var o45 = 1; return o12; }
      o5.o6(function() { o44(); },
                    o17,
                    "Shadowed var in parameter scope is not affected by body initialization when setting the default value",
                    "'x' is undefined");

      function o46(o12 = () => o45) { var o45 = 1; return o12(); }
      o5.o6(function () { o46(); },
                    o17,
                    "Arrow function capturing var at parameter scope is not affected by body declaration",
                    "'x' is undefined");

      function o47(o12 = () => o45) { var o45 = 1; return o12; } // a() undefined
      o5.o6(function () { o47()(); },
                    o17,
                    "Attempted closure capture of body scoped var throws in an arrow function default expression",
                    "'x' is undefined");

      function o48(o12 = function() { return o45; }) { var o45 = 1; return o12(); }
      o5.o6(function () { o48(); },
                    o17,
                    "Attempted closure capture of body scoped var throws in an anonymous function default expression",
                    "'x' is undefined");

      function o49(o12 = function o50() { return 1; }, o13 = o50()) { return [o12(), o13]; }
      o5.o6(function () { o49(); },
                    o17,
                    "Named function expression does not leak name into subsequent default expressions",
                    "'bar' is undefined");
      function o51(o12 = o52) {
          {
              function o52() {
                  return 2;
              }
          }
          o5.o20(1, o12, "First argument should get the initial value from outer variable");
          o5.o20(2, o52(), "Block scoped function should be visible in the body also");
      }
      var o52 = 1;
      o51();
      
      var o53 = 10; 
      function o54(o13 = function () { return o53; }) { 
          o5.o20(undefined, o53, "Inside the function body the assignment hasn't happened yet"); 
          var o53 = 20; 
          o5.o20(20, o53, "Assignment to the symbol inside the function changes the value"); 
          return o13; 
      } 
      o5.o20(10, o54()(), "Function in the param scope correctly binds to the outer variable");
      
      function o55(o12 = o56, o13 = function o11() {
          return function o57() {
              o5.o20(10, o56, "x1 is captured from the outer scope");
          };
      }) {
          var o56 = 100;
          o13()();
      };
      var o56 = 10;
      o55();
      
      var o58 = 1;
      function o59(o12 = o58, o13 = function() { return o58; }) {
          {
             function o58() {
            }
          }
          var o58 = 2;
          return o13;
      }
      o5.o20(1, o59()(), "Symbol capture at the param scope is unaffected by the inner definitions");
      
      var o60 = 1;
      function o61(o12 = o60, o13 = function(o62) { return o60; }) {
          var o60 = 2;
          return o13;
      }
      o5.o20(1, o61()(), "Symbol capture at the param scope is unaffected by other references in the body and param");
    }
  },
  {
    name: "Parameter scope shadowing tests",
    o4: function () {
      // These tests exercise logic in FindOrAddPidRef for when we need to look at parameter scope

      // Original sym in parameter scope
      var o63 = function(o64 = o65) {
        for (var o65 in o66) {
            for (var o65 in o67) {
            }
        }
      }

      // False positive PidRef (no decl) at parameter scope
      function o68() {
        for (var o65 in o12) {
            var o10 = function(o13 = o65) {
                for (var o65 in o14) {}
            };
        }
      }

      function o69() {
        let o70 = (o71) => {
            let  o72 = { o71zo71 };
            o5.o20(10, o72.o71, "Identifier reference in object literal should get the correct reference from the arguments");
            var o71;
        }
        o70(10);
      };
      o69();

    }
  },
  {
    name: "Arrow function bodies in parameter scope",
    o4: function () {
      // Nested parameter scopes
      function o73(o12 = ((o45 = 1) => o45)()) { return o12; }
      o5.o20(1, o73(), "Arrow function with default value works at parameter scope");

      function o74(o12 = (o13 = (o45 = () => 1)) => 1) { return o12; }
      o5.o20(1, o74()(), "Nested arrow function with default value works at parameter scope");
    }
  },
  {
    name: "OS 1583694: Arguments sym is not set correctly on undo defer",
    o4: function () {
      eval();
      var arguments;
    }
  },
  {
    name: "Split parameter scope",
    o4: function () {
        o5.o9(function o10(o12 = 1, o13 = class o14 { o10() { return 2; }}) { }, "Class methods that do not refer to a formal are allowed in the param scope");

        o5.o6(function () { eval("function f(a = eval('1')) { }") }, o8, "Eval is not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o5.o6(function () { eval("function f(a, b = function () { eval('1'); }) { }") }, o8, "Evals in child functions are not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o5.o6(function () { eval("function f(a, b = function () { function f() { eval('1'); } }) { }") }, o8, "Evals in nested child functions are not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o5.o6(function () { eval("function f(a, b = eval('a')) { }") }, o8, "Eval is not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o5.o6(function () { eval("async function f(a = eval('b')) { }"); }, o8, "Eval is not allowed in the param scope of async functions", "'eval' is not allowed in the default initializer");
        o5.o6(function () { eval("function f(a = async function(y) { eval('b'); }) { }"); }, o8, "Eval is not allowed in the param scope of nested async functions", "'eval' is not allowed in the default initializer");
        
        o5.o9(function (o12 = eval) { }, "An assignment of eval does not cause syntax error");
        o5.o9(function (o12 = eval()) { }, "If no arguments are passed to eval then it won't cause syntax error");
        o5.o9(function () { eval("function f( x = function y() { function z() { x; }; }) { }"); }, "Split scope functions inside eval shouldn't throw");
    }
  },
  {
    name: "Unmapped arguments - Non simple parameter list",
    o4: function () {
        function o75 (o45 = 10, o76 = 20, o71) {
            o45 += 2;
            o76 += 2;
            o71 += 2;

            o5.o20(arguments[0], undefined,  "arguments[0] is not mapped with first formal and did not change when the first formal changed");
            o5.o20(arguments[1], undefined,  "arguments[1] is not mapped with second formal and did not change when the second formal changed");
            o5.o20(arguments[2], 30,  "arguments[2] is not mapped with third formal and did not change when the third formal changed");

            arguments[0] = 1;
            arguments[1] = 2;
            arguments[2] = 3;

            o5.o20(o45, 12,  "Changing arguments[0], did not change the first formal");
            o5.o20(o76, 22,  "Changing arguments[1], did not change the second formal");
            o5.o20(o71, 32,  "Changing arguments[2], did not change the third formal");
        }
        o75(undefined, undefined, 30);

        function o77 (o45 = 10, o76 = 20, o71) {
            eval('');
            o45 += 2;
            o76 += 2;
            o71 += 2;

            o5.o20(arguments[0], undefined,  "Function has eval - arguments[0] is not mapped with first formal and did not change when the first formal changed");
            o5.o20(arguments[1], undefined,  "Function has eval - arguments[1] is not mapped with second formal and did not change when the second formal changed");
            o5.o20(arguments[2], 30,  "Function has eval - arguments[2] is not mapped with third formal and did not change when the third formal changed");

            arguments[0] = 1;
            arguments[1] = 2;
            arguments[2] = 3;

            o5.o20(o45, 12,  "Function has eval - Changing arguments[0], did not change the first formal");
            o5.o20(o76, 22,  "Function has eval - Changing arguments[1], did not change the second formal");
            o5.o20(o71, 32,  "Function has eval - Changing arguments[2], did not change the third formal");
        }
        o77(undefined, undefined, 30);

        function o78 (o45 = 10, o76 = 20, o71) {
            (function () {
                eval('');
            })();
            o45 += 2;
            o76 += 2;
            o71 += 2;

            o5.o20(arguments[0], undefined,  "Function's inner function has eval - arguments[0] is not mapped with first formal and did not change when the first formal changed");
            o5.o20(arguments[1], undefined,  "Function's inner function has eval - arguments[1] is not mapped with second formal and did not change when the second formal changed");
            o5.o20(arguments[2], 30,  "Function's inner function has eval - arguments[2] is not mapped with third formal and did not change when the third formal changed");

            arguments[0] = 1;
            arguments[1] = 2;
            arguments[2] = 3;

            o5.o20(o45, 12,  "Function's inner function has eval - Changing arguments[0], did not change the first formal");
            o5.o20(o76, 22,  "Function's inner function has eval - Changing arguments[1], did not change the second formal");
            o5.o20(o71, 32,  "Function's inner function has eval - Changing arguments[2], did not change the third formal");
        }
        o78(undefined, undefined, 30);

        function o79 (o12, o13, o14, o18 = 1) {
            var o19 = 10;
            o5.o20(2, arguments[0], "Unmapped arguments value has the expected value in the body");
            (function () {
                eval('');
            }());
        };
        o79.call(1, 2);
        
        function o81 (o12, o13, o14, o18 = 1) {
            var o19 = 10;
            var o18 = 11;
            o5.o20(2, arguments[0], "Unmapped arguments value has the expected value, even with duplicate symbol in the body");
            (function () {
                eval('');
            }());
        };
        o81.call(1, 2);
    }
  },
  {
    name: "Param of lambda has default as function",
    o4: function () {
        o5.o9(function () { eval("[ (a = function () { }) => {} ];"); }, "Lambda defined, inside an array literal, has a default as a function should not assert");
    }
  }
];

o82.o83(o2, { o84: o0.o85[0] != "summary" });
