//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "Basic parsing and early errors",
    o4: function () {
      // No initializer
      o5.o6(function () { eval("var [];"); },    o8, "Destructured var array declaration must have at least one identifier reference",   "Destructuring declarations must have an initializer");
      o5.o6(function () { eval("let [];"); },    o8, "Destructured let array declaration must have at least one identifier reference",   "Destructuring declarations must have an initializer");
      o5.o6(function () { eval("const [];"); },  o8, "Destructured const array declaration must have at least one identifier reference", "Destructuring declarations must have an initializer");
      o5.o6(function () { eval("var [a];"); },   o8, "Destructured var array declaration must have an initializer",                      "Destructuring declarations must have an initializer");
      o5.o6(function () { eval("let [a];"); },   o8, "Destructured let array declaration must have an initializer",                      "Destructuring declarations must have an initializer");
      o5.o6(function () { eval("const [a];"); }, o8, "Destructured const array declaration must have an initializer",                    "Destructuring declarations must have an initializer");

      // No identifiers
      o5.o9(function () { eval("var [] = [];"); },   "Destructured var array declaration with no identifiers does not throw");
      o5.o9(function () { eval("let [] = [];"); },   "Destructured let array declaration with no identifiers does not throw");
      o5.o9(function () { eval("const [] = [];"); }, "Destructured const array declaration with no identifiers does not throw");
      o5.o9(function () { eval("[] = [];"); },       "Destructured array assignment with no identifiers does not throw");

      // Mismatched expression and initializer length
      o5.o9(function () { eval("var [a] = [];"); },    "Destructured var array declaration with an empty initializer array does not throw");
      o5.o9(function () { eval("let [a] = [];"); },    "Destructured let array declaration with an empty initializer array does not throw");
      o5.o9(function () { eval("const [a] = [];"); },  "Destructured const array declaration with an empty initializer array does not throw");
      o5.o9(function () { eval("var a; [a] = [];"); }, "Destructured var array assignment with an empty initializer array does not throw");
      o5.o9(function () { eval("let a; [a] = [];"); }, "Destructured let array assignment with an empty initializer array does not throw");

      o5.o9(function () { eval("var [a] = [1];"); },    "Destructured var array declaration with matching initializer array size does not throw");
      o5.o9(function () { eval("let [a] = [2];"); },    "Destructured let array declaration with matching initializer array size does not throw");
      o5.o9(function () { eval("const [a] = [1];"); },  "Destructured const array declaration with matching initializer array size does not throw");
      o5.o9(function () { eval("var a; [a] = [1];"); }, "Destructured var array assignment with matching initializer array size does not throw");
      o5.o9(function () { eval("let a; [a] = [2];"); }, "Destructured let array assignment with matching initializer array size does not throw");

      o5.o9(function () { eval("var [a, b] = [1];"); },       "Destructured var array declaration with smaller initializer array size does not throw");
      o5.o9(function () { eval("let [a, b] = [1];"); },       "Destructured let array declaration with smaller initializer array size does not throw");
      o5.o9(function () { eval("const [a, b] = [1];"); },     "Destructured const array declaration with smaller initializer array size does not throw");
      o5.o9(function () { eval("var a, b; [a, b] = [1];"); }, "Destructured var array assignment with smaller initializer array size does not throw");
      o5.o9(function () { eval("let a, b; [a, b] = [1];"); }, "Destructured let array assignment with smaller initializer array size does not throw");

      o5.o9(function () { eval("var [a] = [1, 2];"); },       "Destructured var array declaration with larger initializer array size does not throw");
      o5.o9(function () { eval("let [a] = [1, 2];"); },       "Destructured let array declaration with larger initializer array size does not throw");
      o5.o9(function () { eval("const [a] = [1, 2];"); },     "Destructured const array declaration with larger initializer array size does not throw");
      o5.o9(function () { eval("var a; [a] = [1, 2];"); },    "Destructured var array assignment with larger initializer array size does not throw");
      o5.o9(function () { eval("let a; [a] = [1, 2];"); },    "Destructured let array assignment with larger initializer array size does not throw");

      // Disallowed operators
      o5.o6(function () { eval("var [a--] = [];"); },        o8, "Destructured var array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("let [a--] = [];"); },        o8, "Destructured let array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("const [a--] = [];"); },      o8, "Destructured const array declaration with an operator throws", "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("var [a + 1] = [];"); },      o8, "Destructured var array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("let [a + 1] = [];"); },      o8, "Destructured let array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("const [a + 1] = [];"); },    o8, "Destructured const array declaration with an operator throws", "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("var [++a] = [];"); },        o8, "Destructured var array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("let [++a] = [];"); },        o8, "Destructured let array declaration with an operator throws",   "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("const [++a] = [];"); },      o8, "Destructured const array declaration with an operator throws", "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("var a; [a--] = [];"); },     o8, "Destructured var array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("let a; [a--] = [];"); },     o8, "Destructured let array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("var a; [a + 1] = [];"); },   o8, "Destructured var array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("let a; [a + 1] = [];"); },   o8, "Destructured let array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("var a; [++a] = [];"); },     o8, "Destructured var array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("let a; [++a] = [];"); },     o8, "Destructured let array assignment with an operator throws",    "Unexpected operator in destructuring expression");
      o5.o9(function () { eval("var a = [1], i = 0; [a[i++]] = [];"); }, "Destructured var array assignment operators inside an identifier reference does not throw");
      o5.o9(function () { eval("let a = [1], i = 0; [a[i++]] = [];"); }, "Destructured var array assignment operators inside an identifier reference does not throw");
      o5.o9(function () { eval("var a = [1], i = 0; [a[(() => 1 + i)()]] = [];"); }, "Destructured var array assignment operators inside an identifier reference does not throw");
      o5.o9(function () { eval("let a = [1], i = 0; [a[(() => 1 + i)()]] = [];"); }, "Destructured var array assignment operators inside an identifier reference does not throw");

      // Missing values
      o5.o9(function () { eval("var [,] = [];"); },   "Destructured var array declaration with no identifiers and missing values does not throw");
      o5.o9(function () { eval("let [,] = [];"); },   "Destructured let array declaration with no identifiers and missing values does not throw");
      o5.o9(function () { eval("const [,] = [];"); }, "Destructured const array declaration with no identifiers and missing values does not throw");
      o5.o9(function () { eval("[,] = [];"); },       "Destructured array assignment with no identifiers and missing values does not throw");

      o5.o9(function () { eval("var [a,] = [];"); },    "Destructured var array declaration ending with a missing value does not throw");
      o5.o9(function () { eval("let [a,] = [];"); },    "Destructured let array declaration ending with a missing value does not throw");
      o5.o9(function () { eval("const [a,] = [];"); },  "Destructured const array declaration ending with a missing value does not throw");
      o5.o9(function () { eval("var a; [a,] = [];"); }, "Destructured var array assignment ending with a missing value does not throw");
      o5.o9(function () { eval("let a; [a,] = [];"); }, "Destructured let array assignment ending with a missing value does not throw");

      o5.o9(function () { eval("var [a,,b] = [];"); },       "Destructured var array declaration with some missing values does not throw");
      o5.o9(function () { eval("let [a,,b] = [];"); },       "Destructured let array declaration with some missing values does not throw");
      o5.o9(function () { eval("const [a,,b] = [];"); },     "Destructured const array declaration with some missing values does not throw");
      o5.o9(function () { eval("var a, b; [a,,b] = [];"); }, "Destructured var array assignment with some missing values does not throw");
      o5.o9(function () { eval("let a, b; [a,,b] = [];"); }, "Destructured let array assignment with some missing values does not throw");

      o5.o9(function () { eval("var [,,a] = [];"); },    "Destructured var array declaration beginning with missing values does not throw");
      o5.o9(function () { eval("let [,,a] = [];"); },    "Destructured let array declaration beginning with missing values does not throw");
      o5.o9(function () { eval("const [,,a] = [];"); },  "Destructured const array declaration beginning with missing values does not throw");
      o5.o9(function () { eval("var a; [,,a] = [];"); }, "Destructured var array assignment beginning with missing values does not throw");
      o5.o9(function () { eval("let a; [,,a] = [];"); }, "Destructured let array assignment beginning with missing values does not throw");

      o5.o9(function () { eval("var [a] = [,,];"); },    "Destructured var array declaration with an initializer containing missing values does not throw");
      o5.o9(function () { eval("let [a] = [,,];"); },    "Destructured let array declaration with an initializer containing missing values does not throw");
      o5.o9(function () { eval("const [a] = [,,];"); },  "Destructured const array declaration with an initializer containing missing values does not throw");
      o5.o9(function () { eval("var a; [a] = [,,];"); }, "Destructured var array assignment with an initializer containing missing values does not throw");
      o5.o9(function () { eval("let a; [a] = [,,];"); }, "Destructured let array assignment with an initializer containing missing values does not throw");

      // Non-identifiers
      o5.o6(function () { eval("var [1] = [];"); },         o8, "Destructured var array declaration with no identifier references throws",                  "Destructuring expressions can only have identifier references");
      o5.o6(function () { eval("let [1] = [];"); },         o8, "Destructured let array declaration with no identifier references throws",                  "Destructuring expressions can only have identifier references");
      o5.o6(function () { eval("const [1] = [];"); },       o8, "Destructured const array declaration with no identifier references throws",                "Destructuring expressions can only have identifier references");
      o5.o6(function () { eval("[1] = [];"); },             o8, "Destructured array assignment with no identifier references throws",                       "Destructuring expressions can only have identifier references");
      o5.o6(function () { eval("var [1, a] = [];"); },      o8, "Destructured var array declaration with valid and invalid identifier references throws",   "Destructuring expressions can only have identifier references");
      o5.o6(function () { eval("let [1, a] = [];"); },      o8, "Destructured let array declaration with valid and invalid identifier references throws",   "Destructuring expressions can only have identifier references");
      o5.o6(function () { eval("const [1, a] = [];"); },    o8, "Destructured const array declaration with valid and invalid identifier references throws", "Destructuring expressions can only have identifier references");
      o5.o6(function () { eval("var a; [1, a] = [];"); },   o8, "Destructured var array assignment with valid and invalid identifier references throws",    "Destructuring expressions can only have identifier references");
      o5.o6(function () { eval("let a; [1, a] = [];"); },   o8, "Destructured let array assignment with valid and invalid identifier references throws",    "Destructuring expressions can only have identifier references");

      // Rest parameter
      o5.o9(function () { eval("var [...a] = [];"); },    "Destructured var array declaration with a single rest parameter does not throw");
      o5.o9(function () { eval("let [...a] = [];"); },    "Destructured let array declaration with a single rest parameter does not throw");
      o5.o9(function () { eval("const [...a] = [];"); },  "Destructured const array declaration with a single rest parameter does not throw");
      o5.o9(function () { eval("var a; [...a] = [];"); }, "Destructured var array assignment with a single rest parameter does not throw");
      o5.o9(function () { eval("let a; [...a] = [];"); }, "Destructured let array assignment with a single rest parameter does not throw");

      o5.o6(function () { eval("var [...a, ...b] = [];"); },         o8, "Destructured var array declaration with multiple rest parameters throws",   "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("let [...a, ...b] = [];"); },         o8, "Destructured let array declaration with multiple rest parameters throws",   "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("const [...a, ...b] = [];"); },       o8, "Destructured const array declaration with multiple rest parameters throws", "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("var a, b; [...a, ...b] = [];"); },   o8, "Destructured var array assignment with multiple rest parameters throws",    "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("let a, b; [...a, ...b] = [];"); },   o8, "Destructured let array assignment with multiple rest parameters throws",    "Destructuring rest variables must be in the last position of the expression");

      o5.o6(function () { eval("var [...a, b] = [];"); },         o8, "Destructured var array declaration with rest parameter in non-last position throws",   "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("let [...a, b] = [];"); },         o8, "Destructured let array declaration with rest parameter in non-last position throws",   "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("const [...a, b] = [];"); },       o8, "Destructured const array declaration with rest parameter in non-last position throws", "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("var a, b; [...a, b] = [];"); },   o8, "Destructured var array assignment with rest parameter in non-last position throws",    "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("let a, b; [...a, b] = [];"); },   o8, "Destructured let array assignment with rest parameter in non-last position throws",    "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("let [...a,] = [];"); },           o8, "Destructured array declaration has comma after rest parameter throws",                 "Destructuring rest variables must be in the last position of the expression");
      o5.o6(function () { eval("let a; [...a,] = [];"); },        o8, "Destructured array assignment has comma after rest parameter throws",                  "Destructuring rest variables must be in the last position of the expression");

      // Default values
      o5.o9(function () { eval("var [a = 1] = [];"); },    "Destructured var array declaration with all default values does not throw");
      o5.o9(function () { eval("let [a = 1] = [];"); },    "Destructured let array declaration with all default values does not throw");
      o5.o9(function () { eval("const [a = 1] = [];"); },  "Destructured const array declaration with all default values does not throw");
      o5.o9(function () { eval("var a; [a = 1] = [];"); }, "Destructured var array assignment with all default values does not throw");
      o5.o9(function () { eval("let a; [a = 1] = [];"); }, "Destructured let array assignment with all default values does not throw");

      o5.o9(function () { eval("var [a, b = 1] = [];"); },       "Destructured var array declaration with trailing default values does not throw");
      o5.o9(function () { eval("let [a, b = 1] = [];"); },       "Destructured let array declaration with trailing default values does not throw");
      o5.o9(function () { eval("const [a, b = 1] = [];"); },     "Destructured const array declaration with trailing default values does not throw");
      o5.o9(function () { eval("var a, b; [a, b = 1] = [];"); }, "Destructured var array assignment with trailing default values does not throw");
      o5.o9(function () { eval("let a, b; [a, b = 1] = [];"); }, "Destructured let array assignment with trailing default values does not throw");

      o5.o9(function () { eval("var [a = 1, b] = [];"); },       "Destructured var array declaration with mixed default values does not throw");
      o5.o9(function () { eval("let [a = 1, b] = [];"); },       "Destructured let array declaration with mixed default values does not throw");
      o5.o9(function () { eval("const [a = 1, b] = [];"); },     "Destructured const array declaration with mixed default values does not throw");
      o5.o9(function () { eval("var a, b; [a = 1, b] = [];"); }, "Destructured var array assignment with mixed default values does not throw");
      o5.o9(function () { eval("let a, b; [a = 1, b] = [];"); }, "Destructured let array assignment with mixed default values does not throw");

      // Rest with default
      o5.o6(function () { eval("var [...a = 1] = [];"); },      o8, "Destructured var array declaration with a rest parameter with a default value throws",   "Unexpected default initializer");
      o5.o6(function () { eval("let [...a = 1] = [];"); },      o8, "Destructured let array declaration with a rest parameter with a default value throws",   "Unexpected default initializer");
      o5.o6(function () { eval("const [...a = 1] = [];"); },    o8, "Destructured const array declaration with a rest parameter with a default value throws", "Unexpected default initializer");
      o5.o6(function () { eval("var a; [...a = 1] = [];"); },   o8, "Destructured var array assignment with a rest parameter with a default value throws",    "The rest parameter cannot have a default initializer.");
      o5.o6(function () { eval("let a; [...a = 1] = [];"); },   o8, "Destructured let array assignment with a rest parameter with a default value throws",    "The rest parameter cannot have a default initializer.");

      // Nesting
      o5.o9(function () { eval("var [[a]] = [[]];"); },    "Destructured var array declaration with nesting does not throw");
      o5.o9(function () { eval("let [[a]] = [[]];"); },    "Destructured let array declaration with nesting does not throw");
      o5.o9(function () { eval("const [[a]] = [[]];"); },  "Destructured const array declaration with nesting does not throw");
      o5.o9(function () { eval("var a; [[a]] = [[]];"); }, "Destructured var array assignment with nesting does not throw");
      o5.o9(function () { eval("let a; [[a]] = [[]];"); }, "Destructured let array assignment with nesting does not throw");

      o5.o9(function () { eval("var [a, [b]] = [1, []];"); },       "Destructured var array declaration with some nesting does not throw");
      o5.o9(function () { eval("let [a, [b]] = [1, []];"); },       "Destructured let array declaration with some nesting does not throw");
      o5.o9(function () { eval("const [a, [b]] = [1, []];"); },     "Destructured const array declaration with some nesting does not throw");
      o5.o9(function () { eval("var a, b; [a, [b]] = [1, []];"); }, "Destructured var array assignment with some nesting does not throw");
      o5.o9(function () { eval("let a, b; [a, [b]] = [1, []];"); }, "Destructured let array assignment with some nesting does not throw");

      o5.o6(function () { eval("var [((a)] = [];"); },    o8, "Destructured var array declaration with a mismatched paren count throws",   "Expected ')'");
      o5.o6(function () { eval("let [((a)] = [];"); },    o8, "Destructured let array declaration with a mismatched paren count throws",   "Expected ')'");
      o5.o6(function () { eval("const [((a)] = [];"); },  o8, "Destructured const array declaration with a mismatched paren count throws", "Expected ')'");
      o5.o6(function () { eval("var a; [((a)] = [];"); }, o8, "Destructured var array assignment with a mismatched paren count throws",    "Expected ')'");
      o5.o6(function () { eval("let a; [((a)] = [];"); }, o8, "Destructured let array assignment with a mismatched paren count throws",    "Expected ')'");
      o5.o6(function () { eval("var [a)] = [];"); },      o8, "Destructured var array declaration with a mismatched paren count throws",   "Expected ')'");
      o5.o6(function () { eval("let [a)] = [];"); },      o8, "Destructured let array declaration with a mismatched paren count throws",   "Expected ')'");
      o5.o6(function () { eval("const [a)] = [];"); },    o8, "Destructured const array declaration with a mismatched paren count throws", "Expected ')'");
      o5.o6(function () { eval("var a; [a)] = [];"); },   o8, "Destructured var array assignment with a mismatched paren count throws",    "Expected ']'");
      o5.o6(function () { eval("let a; [a)] = [];"); },   o8, "Destructured let array assignment with a mismatched paren count throws",    "Expected ']'");
      o5.o9(function () { eval("var [((((a)))), b] = [];"); },       "Destructured var array declaration with some nested parens does not throw");
      o5.o9(function () { eval("let [((((a)))), b] = [];"); },       "Destructured let array declaration with some nested parens does not throw");
      o5.o9(function () { eval("const [((((a)))), b] = [];"); },     "Destructured const array declaration with some nested parens does not throw");
      o5.o9(function () { eval("var a, b; [((((a)))), b] = [];"); }, "Destructured var array assignment with some nested parens does not throw");
      o5.o9(function () { eval("let a, b; [((((a)))), b] = [];"); }, "Destructured let array assignment with some nested parens does not throw");

      o5.o9(function () { eval("var [[[...a]]] = [[[]]];"); },    "Destructured var array declaration with nested rest parameter does not throw");
      o5.o9(function () { eval("let [[[...a]]] = [[[]]];"); },    "Destructured let array declaration with nested rest parameter does not throw");
      o5.o9(function () { eval("const [[[...a]]] = [[[]]];"); },  "Destructured const array declaration with nested rest parameter does not throw");
      o5.o9(function () { eval("var a; [[[...a]]] = [[[]]];"); }, "Destructured var array assignment with nested rest parameter does not throw");
      o5.o9(function () { eval("let a; [[[...a]]] = [[[]]];"); }, "Destructured let array assignment with nested rest parameter does not throw");

      o5.o9(function () { eval("var [[...a], ...b] = [[],];"); },       "Destructured var array declaration with valid nested rest parameters does not throw");
      o5.o9(function () { eval("let [[...a], ...b] = [[],];"); },       "Destructured let array declaration with valid nested rest parameters does not throw");
      o5.o9(function () { eval("const [[...a], ...b] = [[],];"); },     "Destructured const array declaration with valid nested rest parameters does not throw");
      o5.o9(function () { eval("var a, b; [[...a], ...b] = [[],];"); }, "Destructured var array assignment with valid nested rest parameters does not throw");
      o5.o9(function () { eval("let a, b; [[...a], ...b] = [[],];"); }, "Destructured let array assignment with valid nested rest parameters does not throw");

      o5.o9(function () { eval("var [[(a)], ((((((([b])))))))] = [[],[]];"); },       "Destructured var array declaration with valid mixed paren and array nesting does not throw");
      o5.o9(function () { eval("let [[(a)], ((((((([b])))))))] = [[],[]];"); },       "Destructured let array declaration with valid mixed paren and array nesting does not throw");
      o5.o9(function () { eval("const [[(a)], ((((((([b])))))))] = [[],[]];"); },     "Destructured const array declaration with valid mixed paren and array nesting does not throw");
      o5.o9(function () { eval("var a, b; [[(a)], ((((((([b])))))))] = [[],[]];"); }, "Destructured var array assignment with valid mixed paren and array nesting does not throw");
      o5.o9(function () { eval("let a, b; [[(a)], ((((((([b])))))))] = [[],[]];"); }, "Destructured let array assignment with valid mixed paren and array nesting does not throw");

      // Redeclarations
      o5.o9(function () { eval("var [a, a] = [];"); },    "Destructured var array declaration with a repeated identifier reference does not throw");
      o5.o6(function () { eval("let [a, a] = [];"); },   o8, "Destructured let array declaration with a repeated identifier reference throws", "Let/Const redeclaration");
      o5.o6(function () { eval("const [a, a] = [];"); }, o8, "Destructured const array declaration with a repeated identifier reference throws", "Let/Const redeclaration");
      o5.o9(function () { eval("var a; [a, a] = [];"); }, "Destructured var array assignment with a repeated identifier reference does not throw");
      o5.o9(function () { eval("let a; [a, a] = [];"); }, "Destructured let array assignment with a repeated identifier reference does not throw");

      // Identifier property references
      o5.o9(function () { eval("var a = {}; [a.x] = [];"); },      "Destructured var array assignment with an identifier property reference does not throw");
      o5.o9(function () { eval("let a = {}; [a.x] = [];"); },      "Destructured let array assignment with an identifier property reference does not throw");
      o5.o9(function () { eval("var a = {}; [a[\"x\"]] = [];"); }, "Destructured var array assignment with an identifier property reference does not throw");
      o5.o9(function () { eval("let a = {}; [a[\"x\"]] = [];"); }, "Destructured let array assignment with an identifier property reference does not throw");

      // Call expression property references
      o5.o6(function () { eval("function foo() { return {}; }; var [foo()] = [];"); },       o8,    "Destructured var array declaration with a call expression throws",                      "Syntax error");
      o5.o6(function () { eval("function foo() { return {}; }; let [foo()] = [];"); },       o8,    "Destructured let array declaration with a call expression throws",                      "Let/Const redeclaration");
      o5.o6(function () { eval("function foo() { return {}; }; const [foo()] = [];"); },     o8,    "Destructured const array declaration with a call expression throws",                    "Let/Const redeclaration");
      o5.o6(function () { eval("function foo() { return {}; }; [foo()] = [];"); },           o8,    "Destructured array assignment with a call expression throws",                           "Invalid destructuring assignment target");
      o5.o6(function () { eval("function foo() { return {}; }; var [foo().x] = [];"); },     o8,    "Destructured var array declaration with a call expression property reference throws",   "Syntax error");
      o5.o6(function () { eval("function foo() { return {}; }; let [foo().x] = [];"); },     o8,    "Destructured let array declaration with a call expression property reference throws",   "Let/Const redeclaration");
      o5.o6(function () { eval("function foo() { return {}; }; const [foo().x] = [];"); },   o8,    "Destructured const array declaration with a call expression property reference throws", "Let/Const redeclaration");
      o5.o9(function () { eval("function foo() { return {}; }; [foo().x] = [];"); },      "Destructured array assignment with super a property reference does not throw");
      o5.o9(function () { eval("function foo() { return {}; }; [foo()[\"x\"]] = [];"); }, "Destructured array assignment with a call expression property reference does not throw");

      // Super property references
      o5.o6(function () { eval("class foo { method() { var [super()] = []; } }"); },     o8, "Destructured var array declaration with a super call throws",                         "The use of a keyword for an identifier is invalid");
      o5.o6(function () { eval("class foo { method() { let [super()] = []; } }"); },     o8, "Destructured let array declaration with a super call throws",                         "The use of a keyword for an identifier is invalid");
      o5.o6(function () { eval("class foo { method() { const [super()] = []; } }"); },   o8, "Destructured const array declaration with a super call throws",                       "The use of a keyword for an identifier is invalid");
      o5.o6(function () { eval("class foo { method() { [super()] = []; } }"); },         o8, "Destructured array assignment with a super call throws",                              "Invalid use of the 'super' keyword");
      o5.o6(function () { eval("class foo { method() { var [super.x] = []; } }"); },     o8, "Destructured var array declaration with a super property reference throws",           "The use of a keyword for an identifier is invalid");
      o5.o6(function () { eval("class foo { method() { let [super.x] = []; } }"); },     o8, "Destructured let array declaration with a super property reference does not throw",   "The use of a keyword for an identifier is invalid");
      o5.o6(function () { eval("class foo { method() { const [super.x] = []; } }"); },   o8, "Destructured const array declaration with a super property reference does not throw", "The use of a keyword for an identifier is invalid");
      o5.o9(function () { eval("class foo { method() { [super.x] = []; } }"); },      "Destructured var array assignment with super a property reference does not throw");
      o5.o9(function () { eval("class foo { method() { [super[\"x\"]] = []; } }"); }, "Destructured array assignment with a super property reference does not throw");

      // Destructured array expressions used in other constructs
      o5.o9(function () { eval("var a; `${[a] = [1]}`"); }, "Destructured assignment does not throw inside a string template");

      // OS 597319: Parens before a default value should not throw
      o5.o9(function () { eval("[((((vrh190 )))) = 5184] = []"); }, "Destructured array assignment with parens before a default expression should not throw");
    }
  },
  {
    name: "Array destructuring basic functionality",
    o4 : function () {
      // Single assignments & undefined
      {
        let o10; [o10] = [1];
        let     [o11] = [1];

        o5.o12(o10, o11, "Destructured array declaration and assignment assigning single values match");
        o5.o12(o10, 1,  "Destructured array assignment assigns single value correctly");
        o5.o12(o11, 1,  "Destructured array declaration assigns single value correctly");
      }
      {
        let o10; [o10] = [];
        let     [o11] = [];

        o5.o12(o10, o11,        "Destructured array declaration and assignment assigning an empty array match");
        o5.o12(o10, undefined, "Destructured array assignment assigning an empty array results in undefined");
        o5.o12(o11, undefined, "Destructured array declaration assigning an empty array results in undefined");

        let o14; [o14] = [,1];
        let     [o15] = [,1];

        o5.o12(o14, o15,        "Destructured array declaration and assignment assigning an array with missing values match");
        o5.o12(o14, undefined, "Destructured array assignment assigning an array with missing values results in undefined");
        o5.o12(o15, undefined, "Destructured array declaration assigning an array with missing values in undefined");
      }

      // Multiple assignments
      {
        let o10, o16, o17, o18, o19;
        [o10, o16, o17, o18, o19]     = [1, 2, 3, 4, 5];

        let [o11, o20, o21, o22, o23] = [1, 2, 3, 4, 5];

        o5.o12([o10, o16, o17, o18, o19], [o11, o20, o21, o22, o23], "Destructured array assignment and declaration assigning multiple values match");
        o5.o12([1, 2, 3, 4, 5],      [o10, o16, o17, o18, o19], "Destructured array assignment assigns multiple values correctly");
        o5.o12([1, 2, 3, 4, 5],      [o11, o20, o21, o22, o23], "Destructured array declaration assigns multiple values correctly");
      }
      {
        let o10, o16, o17, o18, o19;
        [o10, o16, o17, o18, o19]     = [1, 2, 3];

        let [o11, o20, o21, o22, o23] = [1, 2, 3];

        o5.o12([o10, o16, o17, o18, o19],            [o11, o20, o21, o22, o23], "Destructured array assignment and declaration assigning a smaller array match");
        o5.o12([1, 2, 3, undefined, undefined], [o10, o16, o17, o18, o19], "Destructured array assignment assigns a smaller array correctly");
        o5.o12([1, 2, 3, undefined, undefined], [o11, o20, o21, o22, o23], "Destructured array declaration assigns a smaller array correctly");
      }
      {
        let o10, o16, o17, o18, o19;
        [o10, o16, o17, o18, o19]     = [1, , 3, , 5];

        let [o11, o20, o21, o22, o23] = [1, , 3, , 5];

        o5.o12([o10, o16, o17, o18, o19],            [o11, o20, o21, o22, o23], "Destructured array assignment and declaration assigning an array with some missing values match");
        o5.o12([1, undefined, 3, undefined, 5], [o10, o16, o17, o18, o19], "Destructured array assignment assigns an array with some missing values correctly");
        o5.o12([1, undefined, 3, undefined, 5], [o11, o20, o21, o22, o23], "Destructured array declaration assigns an array with some missing values correctly");
      }

      // Rest
      {
        let o24;
        [...o24]     = [1, 2, 3, 4, 5];

        let [...o25] = [1, 2, 3, 4, 5];

        o5.o12(o24,           o25, "Destructured array assignment and declaration using only a rest parameter match");
        o5.o12([1, 2, 3, 4, 5], o24, "Destructured array assignment uses only a rest parameter correctly");
        o5.o12([1, 2, 3, 4, 5], o25, "Destructured array declaration uses only a rest parameter correctly");
      }
      {
        let o10, o16, o17, o18, o19;
        [o10, o16, o17, ...o24]     = [1, 2, 3, 4, 5];

        let [o11, o20, o21, ...o25] = [1, 2, 3, 4, 5];

        o5.o12([o10, o16, o17, o24], [o11, o20, o21, o25], "Destructured array assignment and declaration using a rest parameter match");
        o5.o12([1, 2, 3, [4, 5]],   [o10, o16, o17, o24], "Destructured array assignment uses a rest parameter correctly");
        o5.o12([1, 2, 3, [4, 5]],   [o11, o20, o21, o25], "Destructured array declaration uses a rest parameter correctly");

        let o14, o26, o27, o28, o29;
        [o14, o26, o27, ...o30]     = [1, 2, 3];

        let [o15, o31, o32, ...o33] = [1, 2, 3];

        o5.o12([o14, o26, o27, o30], [o15, o31, o32, o33], "Destructured array assignment and declaration using a rest parameter and a smaller array match");
        o5.o12([1, 2, 3, []],       [o14, o26, o27, o30], "Destructured array assignment uses a rest parameter and a smaller array correctly");
        o5.o12([1, 2, 3, []],       [o15, o31, o32, o33], "Destructured array declaration uses a rest parameter and a smaller array correctly");
      }
      {
        let o10, o16;
        [[...o10], ...o16]     = [[1, 2, 3, 4], 5, 6, 7, 8];

        let [[...o11], ...o20] = [[1, 2, 3, 4], 5, 6, 7, 8];

        o5.o12([o10, o16], [o11, o20],                     "Destructured array assignment and declaration with nested rest parameters match");
        o5.o12([o10, o16], [[1, 2, 3, 4], [5, 6, 7, 8]], "Destructured array assignment uses nested rest parameters correctly");
        o5.o12([o11, o20], [[1, 2, 3, 4], [5, 6, 7, 8]], "Destructured array declaration uses nested rest parameters correctly");
      }

      // Default values
      {
        let o10, o16, o17, o18, o19;
        [o10 = 1, o16 = 2, o17 = 3, o18 = 4, o19 = 5]     = [];

        let [o11 = 1, o20 = 2, o21 = 3, o22 = 4, o23 = 5] = [];

        o5.o12([o10, o16, o17, o18, o19], [o11, o20, o21, o22, o23], "Destructured array assignment and declaration with default values assigning an empty array match");
        o5.o12([1, 2, 3, 4, 5],      [o10, o16, o17, o18, o19], "Destructured array assignment assigns an array with default values assigning an empty array correctly");
        o5.o12([1, 2, 3, 4, 5],      [o11, o20, o21, o22, o23], "Destructured array declaration assigns an array with default values assigning an empty array correctly");
      }
      {
        let o10, o16, o17, o18, o19;
        [o10 = 1, o16 = 2, o17 = 3, o18 = 4, o19 = 5]     = [5, , 3, 2, ];

        let [o11 = 1, o20 = 2, o21 = 3, o22 = 4, o23 = 5] = [5, , 3, 2, ];

        o5.o12([o10, o16, o17, o18, o19], [o11, o20, o21, o22, o23], "Destructured array assignment and declaration assigning an array with some missing values match");
        o5.o12([5, 2, 3, 2, 5],      [o10, o16, o17, o18, o19], "Destructured array assignment assigns an array with some missing values correctly");
        o5.o12([5, 2, 3, 2, 5],      [o11, o20, o21, o22, o23], "Destructured array declaration assigns an array with some missing values correctly");
      }

      // Identifier references
      {
        let o34    = {};
        [o34.o35]    = [10];
        o5.o12(10,   o34.o35,        "Destructured array with an object property assignment works correctly");
        [o34["x"]] = [20];
        o5.o12(20,   o34["x"],     "Destructured array with an object index assignment works correctly");

        var o36 = { o35: 10 };
        function o37() { return o36 };

        [o37().o35] = [20];
        o5.o12(20,   o37().o35,    "Destructured array with a call result property assignment works correctly");

        [o37()["x"]] = [30];
        o5.o12(30,   o37()["x"], "Destructured array with a call result index assignment works correctly");

        [...o37().o35] = [20];
        o5.o12([20], o37().o35,    "Destructured array with a call result rest element works correctly");

        [...o37()["x"]] = [30];
        o5.o12([30], o37()["x"], "Destructured array with a call result rest element works correctly");

        class o38 {
          o39()      { return {}; }
          o40()     { return {}; }
          o41()  { return {}; }
          o42() { return {}; }
          get o35()           { return this.o43; }
          set o35(o44)          { this.o43 = o44; }
        };
        class o45 extends o38 {
          o39()      { return [super.o35] = [10, 20, 30]; }
          o40()     { return [super["x"]] = [40, 50, 60]; }
          o41()  { return [...super.o35] = [10, 20, 30]; }
          o42() { return [...super.o35] = [40, 50, 60]; }
          o46()        { return super.o35;}
        };

        let o47 = new o45();
        o5.o12(undefined,    o47.o46(), "Super property before destructured assignment is undefined");

        o47.o39();
        o5.o12(10,           o47.o46(), "Super property after destructured super property assignment");

        o47.o40();
        o5.o12(40,           o47.o46(), "Super property after destructured super index assignment");

        o47.o41();
        o5.o12([10, 20, 30], o47.o46(), "Super property after destructured super property assignment");

        o47.o42();
        o5.o12([40, 50, 60], o47.o46(), "Super property after destructured super index assignment");
      }

      // Nesting
      {
        let o10; [[o10]] = [[1]];
        let     [[o11]] = [[1]];

        o5.o12(o10, o11, "Destructured array declaration and assignment assigning single values match");
        o5.o12(o10, 1,  "Destructured array assignment assigns single value correctly");
        o5.o12(o11, 1,  "Destructured array declaration assigns single value correctly");
      }
      {
        let o10, o16, o17, o18, o19;
        [[o10, o16], o17, [o18, [o19]]]     = [[1, 2], 3, [4, [5]]];

        let [[o11, o20], o21, [o22, [o23]]] = [[1, 2], 3, [4, [5]]];

        o5.o12([o10, o16, o17, o18, o19], [o11, o20, o21, o22, o23], "Destructured array assignment and declaration assigning multiple values match");
        o5.o12([1, 2, 3, 4, 5],      [o10, o16, o17, o18, o19], "Destructured array assignment assigns multiple values correctly");
        o5.o12([1, 2, 3, 4, 5],      [o11, o20, o21, o22, o23], "Destructured array declaration assigns multiple values correctly");
      }
      {
        let o10; [[o10, o16] = [1, 2]] = [];
        let     [[o11, o20] = [1, 2]] = [];

        o5.o12([o10, o16], [o11, o20], "Destructured array declaration and assignment using nested values match");
        o5.o12([1, 2],   [o10, o16], "Destructured array assignment assigns nested values correctly");
        o5.o12([1, 2],   [o11, o20], "Destructured array declaration assigns nested values correctly");
      }
      {
        let o10; [[[o10] = [1], [[o16]] = [[2]]] = [, undefined]] = [undefined, ];
        let     [[[o11] = [1], [[o20]] = [[2]]] = [, undefined]] = [undefined, ];

        o5.o12([o10, o16], [o11, o20], "Destructured array declaration and assignment using nested default values match");
        o5.o12([1, 2],   [o10, o16], "Destructured array assignment assigns nested default values correctly");
        o5.o12([1, 2],   [o11, o20], "Destructured array declaration assigns nested default values correctly");
      }

      // Other iterators
      {
        let o10; [o10, o16, o17, o18, ...o24] = "testing";
        let [o11, o20, o21, o22, ...o25]     = "testing";

        o5.o12([o10, o16, o17, o18, o24],               [o11, o20, o21, o22, o25], "Destructured array declaration and assignment using nested values match");
        o5.o12(["t", "e", "s", "t", ["i", "n", "g"]], [o10, o16, o17, o18, o24], "Destructured array assignment assigns nested values correctly");
        o5.o12(["t", "e", "s", "t", ["i", "n", "g"]], [o11, o20, o21, o22, o25], "Destructured array declaration assigns nested values correctly");
      }
      {
        let map = new Map();

        map.set(1, 6);
        map.set(2, 7);
        map.set(3, 8);
        map.set(4, 9);
        map.set(5, 10);

        let o10; [o10, o16, o17, o18, ...o24] = map.entries();
        let [o11, o20, o21, o22, ...o25]     = map.entries();

        o5.o12([o10, o16, o17, o18, o24],                     [o11, o20, o21, o22, o25], "Destructured array declaration and assignment using nested values match");
        o5.o12([[1, 6], [2, 7], [3, 8], [4, 9], [[5, 10]]], [o10, o16, o17, o18, o24], "Destructured array assignment assigns nested values correctly");
        o5.o12([[1, 6], [2, 7], [3, 8], [4, 9], [[5, 10]]], [o11, o20, o21, o22, o25], "Destructured array declaration assigns nested values correctly");
      }
      {
        let o52 = 0;
        let o53 = 0;
        let o54 = 0;
        let o55 = 0;

        let o56 = {
            [Symbol.iterator]: function () {
            ++o52;
            return {
              o59: 0,
              next: function () {
                ++o53;
                var o61 = this;
                return {
                  get done() {
                    ++o54;
                    return o61.o59 == 1;
                  },
                  get value() {
                    ++o55;
                    return o61.o59++;
                  }
                };
              }
            };
          }
        };

        let [o34, o64, o47] = o56;
        o5.o12(1, o52, "GetIterator is called once per iterator");
        o5.o12(3, o53,        "'.next()' is called once per destructuring reference");
        o5.o12(3, o54,        "'done' is read once per destructuring reference");
        o5.o12(1, o55,       "'value' is read once per .next() call until done is true");

        [o52, o53, o54, o55] = [0, 0, 0, 0];

        let [...o65] = o56;
        o5.o12(1, o52, "GetIterator is called once per iterator");
        o5.o12(2, o53,        "'.next()' is called until done is true when filling a rest element");
        o5.o12(2, o54,        "'done' is read until it is true");
        o5.o12(1, o55,       "'value' is read once for each .next() call until done is true");

        [o52, o53, o54, o55] = [0, 0, 0, 0];

        [o34, o64, o47, ...o65] = o56;
        o5.o12(1, o52, "GetIterator is called once per iterator");
        o5.o12(4, o53,        "'.next()' is called once per destructuring reference");
        o5.o12(4, o54,        "'done' is read once per destructuring reference");
        o5.o12(1, o55,       "'value' is read once per .next() call until done is true");
      }

      // Runtime type errors
      o5.o6(function () { eval("let [a] = 1;") },       o66, "Non-object used as an iterator in a declaration throws",        "Object doesn't support property or method 'Symbol.iterator'");
      o5.o6(function () { eval("let a; [a] = 1;") },    o66, "Non-object used as an iterator an assignment throws"   ,        "Object doesn't support property or method 'Symbol.iterator'");
      o5.o6(function () { eval("let [[a]] = [];") },    o66, "Nested non-object used as an iterator in a declaration throws", "Unable to get property 'Symbol.iterator' of undefined or null reference");
      o5.o6(function () { eval("let a; [[a]] = [];") }, o66, "Nested non-object used as an iterator an assignment throws",    "Unable to get property 'Symbol.iterator' of undefined or null reference");

      // Array destructuring in various contexts
      {
        let o34, o64, o47;
        function o37(o35 = [o34, o64 = 2, ...o47] = [1,,3,4,5,6,7]) {
          o5.o12([1, 2, [3,4,5,6,7]], [o34, o64, o47], "Destructuring array assignment works correctly inside a default parameter expression");
          o5.o12([1,,3,4,5,6,7],      o35,         "Destructuring array assignment evaluates to RHS in a default parameter expression");
        }
        o37();

        `${[o34 = 5, o64, ...o47] = [, 1, 3, 5, 7, 9]}`;
        o5.o12([5, 1, [3, 5, 7, 9]], [o34, o64, o47], "Destructuring array assignment inside a string template works correctly");

        (() => [o34,, o64, o47] = [1, 2, 3])();
        o5.o12([1, 3, undefined], [o34, o64, o47], "Destructuring array assignment inside a lambda expression works correctly");
      }

          // nested destructuring
          {
        let [[o34]=[1]] = [[2]];
                o5.o12(o34, 2, "Nested destructuring - value is present");

                [[o34]=[1]] = [[]];
                o5.o12(o34, undefined, "Nested destructuring - value is present but undefined");

                [[o34]=[1]] = [];
                o5.o12(o34, 1, "Nested destructuring - value is not present - use default");

                [[o34]=1] = [[]];
                o5.o12(o34, undefined, "Nested destructuring - value is present - default is incorrect - does not have @@iterator");
          }

       // Bug OSG : 4533495
       {
         function o37() {
            for(var [o59, o67, o68] in { o69: 1 }) {
                return o59 === "q" && o67 === "u" && o68 === "x";
            }
        }
        o5.o70(o37(), "Array destructuring pattern on for..in is initialized correctly");
      }
      
      {
         let o71 = {};
         o71[Symbol.iterator] = function () {
            return {
                next: function() {
                    o5.o72("next function should not be called");
                }
            };
         };
         
         // Empty slot should not call next on the iterator.
         var [] = o71;
      }

      {
         let o71 = {};
         o71[Symbol.iterator] = function () {
            return {
                next: function() {
                    this.o73++;
                    if (this.o73 > 1)
                    {
                        o5.o72("next function should not be called for the second time");
                    }
                    return {value : undefined, done: false};
                },
                o73 : 0
            };
         };
         
         // Second empty slot should not call next on the iterator.
         var [,] = o71;
      }

    }
  }
];

o74.o75(o2, { o76: o0.o77[0] != "summary" });
