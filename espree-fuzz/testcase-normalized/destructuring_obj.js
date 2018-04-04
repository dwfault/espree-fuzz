//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "Basic object destructuring syntax",
    o4: function () {
      o5.o6(function () { eval("var {} = {};"); },  "var object declaration pattern with no identifier is valid syntax");
      o5.o6(function () { eval("let {} = {};"); },  "let object declaration pattern with no identifier is valid syntax");
      o5.o6(function () { eval("const {} = {};"); }, "const object declaration pattern with no identifier is valid syntax");
      o5.o6(function () { eval("({} = {});"); },      "Object pattern as an expression with no identifier is valid syntax");
      o5.o6(function () { eval("var {x:y} = {};"); }, "var object declaration pattern with a single member is valid syntax");
      o5.o6(function () { eval("let {x:y} = {};"); }, "let object declaration pattern with a single member is valid syntax");
      o5.o6(function () { eval("const {x:y} = {};"); }, "const object declaration pattern with a single member is valid syntax");
      o5.o6(function () { eval("({x:y} = {});"); }, "Object pattern as an expression with a single member is valid syntax");
      o5.o6(function () { eval("var {x} = {};"); }, "var object declaration pattern with a single member as shorthand is valid syntax");
      o5.o6(function () { eval("({x:y} = {});"); }, "Object pattern as an expression with a single member as shorthand is valid syntax");
      o5.o6(function () { eval("var {x} = {}, {y} = {};"); }, "Multiple object pattern in a single var declaration is valid syntax");
    }
  },

  {
    name: "Basic object destructuring invalid syntax",
    o4: function () {
      o5.o8(function () { eval("var {};"); }, o9, "var empty object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      o5.o8(function () { eval("let {};"); }, o9, "let empty object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      o5.o8(function () { eval("const {};"); }, o9, "const empty object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      o5.o8(function () { eval("var {a};"); }, o9, "var object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      o5.o8(function () { eval("let {a};"); }, o9, "let object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      o5.o8(function () { eval("const {a};"); }, o9, "const object declaration pattern without an initializer is not valid syntax", "Destructuring declarations must have an initializer");
      o5.o8(function () { eval("var {,} = {}"); }, o9, "Object declaration pattern without an identifier is not valid syntax", "Expected identifier, string or number");
      o5.o8(function () { eval("({,} = {});"); }, o9, "Object expression pattern without an identifier is not valid syntax", "Expected identifier, string or number");

      o5.o8(function () { eval("var {x:y--} = {};"); }, o9, "Object declaration pattern with an operator -- is not valid syntax", "Unexpected operator in destructuring expression");
      o5.o8(function () { eval("var {x:y+1} = {};"); }, o9, "Object declaration pattern with an operator + is not valid syntax", "Unexpected operator in destructuring expression");

      o5.o8(function () { eval("var y; ({x:y--} = {});"); }, o9, "Object expression pattern with an operator -- is not valid syntax",   "Unexpected operator in destructuring expression");
      o5.o8(function () { eval("var y; ({x:y+1} = {});"); }, o9, "Object expression pattern with an operator + is not valid syntax",   "Unexpected operator in destructuring expression");
    }
  },

  {
    name: "Object destructuring syntax with initializer",
    o4: function () {
      o5.o6(function () { eval("var {x:x = 20} = {};"); }, "var object declaration pattern with default is valid syntax");
      o5.o6(function () { eval("let {x:x = 20} = {};"); }, "let object declaration pattern with default is valid syntax");
      o5.o6(function () { eval("const {x:x = 20} = {};"); }, "const object declaration pattern with default is valid syntax");
      o5.o6(function () { eval("var x; ({x:x = 20} = {});"); }, "Object declaration pattern with default is valid syntax");

      o5.o6(function () { eval("var {x, x1:y = 20} = {};"); }, "Object declaration pattern with default other than first is valid syntax");
      o5.o6(function () { eval("var {x:z = 1, x1:y = 20} = {};"); }, "Object declaration pattern with defaults on more than one is valid syntax");

      o5.o6(function () { eval("var x, y; ({x, x1:y = 20} = {});"); }, "Object expression pattern with default other than first is valid syntax");
      o5.o6(function () { eval("var z, y; ({x:z = 1, x1:y = 20} = {});"); }, "Object expression pattern with defaults on more than one is valid syntax");
    }
  },

  {
    name: "Object destructuring syntax with identifier reference",
    o4: function () {
      o5.o8(function () { eval("function foo() { return {}; }; let {x:foo()} = {};"); }, o9,  "Object declaration pattern with a call expression is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo() { return {}; }; ({x:foo()} = {});"); }, o9,  "Object expression pattern with a call expression is not valid syntax", "Invalid destructuring assignment target");
      o5.o8(function () { eval("function foo() { return {}; }; var {x:foo().x} = {};"); }, o9,  "Object declaration pattern with property reference on call is not valid syntax", "Syntax error");

      o5.o6(function () { eval("var a = {}; ({x:a.x} = {});"); }, "Object expresion pattern with a property reference is valid syntax");
      o5.o6(function () { eval("let a = {}; ({x:a['x']} = {});"); }, "Object expression pattern with a property reference as index is valid syntax");

      o5.o6(function () { eval("function foo() { return {}; }; ({x:foo().x} = {});"); }, "Object declaration pattern with property reference on call is valid syntax");
      o5.o6(function () { eval("function foo() { return {}; }; ({x:foo()['x']} = {});"); }, "Object declaration pattern with property reference as index on call is valid syntax");

      o5.o8(function () { eval("class foo { method() { let {x:super()} = {}; } }"); },o9, "Object declaration pattern with a super call is not valid syntax", "The use of a keyword for an identifier is invalid");
      o5.o8(function () { eval("class foo { method() { ({x:super()} = {}); } }"); }, o9, "Object expression pattern with a super call is not valid syntax", "Invalid use of the 'super' keyword");
      o5.o8(function () { eval("class foo { method() { var {x:super.x} = {}; } }"); }, o9, "Object declaration pattern with a property reference on super is not valid syntax", "The use of a keyword for an identifier is invalid");
      o5.o6(function () { eval("class foo { method() { ({x:super.x} = {}); } }"); }, "Object expression pattern with a property reference on super is valid syntax");
      o5.o6(function () { eval("class foo { method() { ({x:super['x']} = {}); } }"); }, "Object expression pattern with a property reference as an index on super is valid syntax");

      o5.o6(function () { eval("var a = [1], i = 0; ({x:a[i++]} = {});"); }, "Object Destructuring pattern assignment operators inside an identifier reference is valid syntax");
      }
   },

   {
    name: "Object destructuring syntax with computed property name",
    o4: function () {

      o5.o6(function () { eval("var zee = 'x'; var {[zee]:x1} = {}"); }, "Object declaration pattern with computed property name is valid syntax");
      o5.o6(function () { eval("var zee = 'x'; var x1; ({[zee]:x1} = {})"); }, "Object expression pattern with computed property name is valid syntax");
      o5.o6(function () { eval("var zee = 'x'; var {[zee + 'foo']:x1} = {}"); }, "Object declaration pattern with computed property name with add operator is valid syntax");
      o5.o6(function () { eval("var zee = 'x'; var x1; ({[zee +'foo']:x1} = {})"); }, "Object expression pattern with computed property name with add operator is valid syntax");
    }
   },
   {
    name: "Destructing syntax - having rest element as pattern",
    o4: function () {
      o5.o6(function () { eval("let [...[a]] = [[]];"); }, "Under declaration, having rest element as array pattern is valid syntax");
      o5.o6(function () { eval("let a; [...[a]] = [[]];"); }, "Under expression, having rest element as array pattern is valid syntax");

      o5.o6(function () { eval("let [...{a}] = [{}];"); }, "Under declaration, having rest element as object pattern is valid syntax");
      o5.o6(function () { eval("let a; [...{a}] = [{}];"); }, "Under expression, having rest element as object pattern is valid syntax");

      o5.o6(function () { eval("let a; [...[a = 1]] = [[]];"); }, "Under expression, having rest element as array pattern has initializer is valid syntax");
      o5.o6(function () { eval("let a; [...{a:a = 1}] = [{}];"); }, "Under expression, having rest element as object pattern has initializer is valid syntax");

      o5.o6(function () { eval("let obj = {x:1}; [...obj.x] = [10];"); }, "Rest element being property reference is valid syntax");
      o5.o6(function () { eval("let obj = {x:1}; [...obj['x']] = [10];"); }, "Rest element being property reference as index is valid syntax");

      o5.o6(function () { eval("function foo() { return {x:1}; }; [...foo().x] = [10];"); }, "Rest element being property reference on call expression is valid syntax");
      o5.o6(function () { eval("function foo() { return {x:1}; }; [...foo()['x']] = [10];"); }, "Rest element being property reference as index on call expression is valid syntax");

      o5.o6(function () { eval("let [...[...[...a]]] = [[[]]];"); }, "Nesting rest element inside another rest element is valid syntax");

      o5.o8(function () { eval("let [...[a+1] = [{}];"); },   o9, "Under declaration, having rest element as pattern which has operator is not valid syntax",   "Unexpected operator in destructuring expression");
      o5.o8(function () { eval("let a; [...1+a] = [{}];"); }, o9, "Under declaration, rest element has operator is not valid syntax",   "Invalid destructuring assignment target");

      o5.o8(function () { eval("let a; [...[a+1] = [{}];"); }, o9, "Under expression, having rest element as pattern which has operator is not valid syntax",   "Unexpected operator in destructuring expression");
      o5.o8(function () { eval("function foo() { return {x:1}; }; [...foo()] = [10];"); }, o9, "Under expression, having rest element as call expression is not valid syntax", "Invalid destructuring assignment target");
      o5.o8(function () { eval("let [...[a] = []] = [[]];"); }, o9, "Under declaration - rest as array pattern cannot have initializer", "The rest parameter cannot have a default initializer.");
      o5.o8(function () { eval("let [...{x} = {}] = [{}];"); }, o9, "Under declaration - rest as object pattern cannot have initializer", "The rest parameter cannot have a default initializer.");
      o5.o8(function () { eval("let a; ([...[a] = []] = [[]]);"); }, o9, "Under assignment - rest as array pattern cannot have initializer", "The rest parameter cannot have a default initializer.");
      o5.o8(function () { eval("let x; ([...{x} = {}] = [{}]);"); }, o9, "Under assignment - rest as object pattern cannot have initializer", "The rest parameter cannot have a default initializer.");
    }
   },
   {
    name: "Object destructuring syntax with repeated identifier",
    o4: function () {
      o5.o6(function () { eval("var {a:a, a:a} = {};"); },    "var declaration pattern with a repeated identifier is valid syntax");
      o5.o8(function () { eval("let {a:a, a:a} = {};"); },   o9, "let declaration pattern with a repeated identifier is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("const {a:a, a:a} = {};"); }, o9, "const declaration pattern with a repeated identifier is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("let {b, b} = {};"); },   o9, "let declaration pattern with a repeated identifier as shorthand is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("const {b, b} = {};"); }, o9, "const declaration pattern with a repeated identifier as shorthand is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("let {x:c, y:c} = {};"); },   o9, "let declaration pattern with a repeated identifier but different matching pattern is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("const {x:c, y:c} = {};"); }, o9, "const declaration pattern with a repeated identifier but different matching pattern is not valid syntax", "Let/Const redeclaration");
      o5.o6(function () { eval("let a; ({a:a, a:a} = {});"); }, "Object expression pattern with a repeated identifier is valid syntax");
    }
   },
   {
    name: "Object destructuring syntax on misc expressions",
    o4: function () {
      o5.o6(function () { eval("let a; ({a:((((a1))))} = {a:20})"); }, "Object expression pattern with parens is valid syntax");
      o5.o6(function () { eval("let a; ({a:((((a1 = 31))))} = {})"); }, "Object expression pattern with parens and defaults is valid syntax");
      o5.o6(function () { eval("let a, r1; ({a:a1 = r1} = {})"); }, "Object expression pattern with defaults as reference is valid syntax");
      o5.o6(function () { eval("let a, r1; ({a:((((a1 = r1))))} = {})"); }, "Object expression pattern with defaults as reference under parens is valid syntax");
      o5.o6(function () { eval("let a, r1; ({a:a1 = r1 = 44} = {})"); }, "Object expression pattern with chained assignments as defaults is valid syntax");
      o5.o6(function () { eval("let a, r1; ({a:(a1 = r1 = 44)} = {})"); }, "Object expression pattern with chained assignments as defaults under paren is valid syntax");
      o5.o8(function () { eval("let a, r1; ({a:(a1 = r1) = 44} = {})"); }, o9, "Object expression pattern with chained assignments but paren in between is not valid syntax", "Unexpected operator in destructuring expression");
      o5.o6(function () { eval("var a; `${({a} = {})}`"); }, "Object expression pattern inside a string template is valid syntax");
      o5.o8(function () { eval("for (let {x} = {} of []) {}"); }, o9, "for.of has declaration pattern with initializer is not valid syntax", "for-of loop head declarations cannot have an initializer");
      o5.o8(function () { eval("for (let {x} = {} in []) {}"); }, o9, "for.in has declaration pattern with initializer is not valid syntax", "for-in loop head declarations cannot have an initializer");
      o5.o8(function () { eval("for (var [x] = [] of []) {}"); }, o9, "for.of has var declaration pattern with initializer is not valid syntax", "for-of loop head declarations cannot have an initializer");
      o5.o8(function () { eval("function foo() {for (let {x} = {} of []) {}; }; foo();"); }, o9, "Inside function - for.of has declaration pattern with initializer is not valid syntax", "for-of loop head declarations cannot have an initializer");
      o5.o6(function () { eval("var a; [a = class aClass {}] = []"); }, "Expression pattern has class as initializer is valid syntax");
      o5.o6(function () { eval("var a; for ({x:x = class aClass {}} of []) {}"); }, "for.of's expression pattern has class as initializer is valid syntax");
      o5.o6(function () { eval("var {x:[...y]} = {x:[1]}"); }, "rest element nesting under object pattern is valid syntax");
      o5.o8(function () { eval("let {foo() {}} = {};"); }, o9, "Invalid object pattern as it has the function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      o5.o8(function () { eval("let {get foo() {}} = {};"); }, o9, "Invalid object pattern as it has the get function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      o5.o8(function () { eval("let {set foo() {}} = {};"); }, o9, "Invalid object pattern as it has the set function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      o5.o8(function () { eval("let {get ['foo']() {}} = {};"); }, o9, "Invalid object pattern as it has the get function name as computed property instead of binding identifier", "Invalid destructuring assignment target");
      o5.o8(function () { eval("let {set ['foo'](a) {}} = {};"); }, o9, "Invalid object pattern as it has the set function name as computed property instead of binding identifier", "Invalid destructuring assignment target");

      o5.o8(function () { eval("({foo() {}} = {});"); }, o9, "Invalid object expression pattern as it has the function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      o5.o8(function () { eval("({get foo() {}} = {});"); }, o9, "Invalid object expression pattern as it has the get function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      o5.o8(function () { eval("({set foo(a) {}} = {});"); }, o9, "Invalid object expression pattern as it has the set function short-hand instead of binding identifier", "Invalid destructuring assignment target");
      o5.o8(function () { eval("({get ['foo']() {}} = {});"); }, o9, "Invalid object expression pattern as it has the get function name as computed property instead of binding identifier", "Invalid destructuring assignment target");
      o5.o8(function () { eval("({set ['foo'](a) {}} = {});"); }, o9, "Invalid object expression pattern as it has the set function name as computed property instead of binding identifier", "Invalid destructuring assignment target");

      o5.o8(function () { eval("for(var [z] = function ([a]) { } in []) {}"); }, o9, "Initializer as function expression is not valid syntax", "for-in loop head declarations cannot have an initializer");
    }
  },
  {
    name: "Object destructuring with `get` and `set` identifiers",
    o4: function () {
        var { getgetget } = { get: 1 };
        let { setsetset } = { set: 2 };
        o5.o12(1, get, "`get` is a valid object destructuring name");
        o5.o12(2, set, "`set` is a valid object destructuring name");

        o5.o8(function () { eval("var { get foo() { } } = { get: 1 };"); }, o9, "getter accessor is not a valid object destructuring name", "Invalid destructuring assignment target");
        o5.o8(function () { eval("var { set bar(x) { } } = { set: 2 };"); }, o9, "setter accessor is not a valid object destructuring name", "Invalid destructuring assignment target");

        const { get: o13 } = { get: 3 };
        var { set: o14 } = { set: 4 };
        o5.o12(3, o13, "`get` is a valid object destructuring name mapping");
        o5.o12(4, o14, "`set` is a valid object destructuring name mapping");
    }
  },
  {
    name: "Object destructuring with shorthand initializer",
    o4: function () {
        o5.o6(function () { eval("({x = 1} = {});"); }, "Object pattern has shorthand with initializer is a valid syntax");
        o5.o6(function () { eval("({x, y = 1, z = 2} = {});"); }, "Object pattern has multiple shorthands with initializer is a valid syntax");
        o5.o8(function () { eval("var a = 1; ({x, y = 1, z = 2} = {a = 2});"); }, o9,"Initializer is allowed on shorthand of object pattern but not on object literal", "Expected ':'");
        o5.o8(function () { eval("var a = 1; ({x, y = {a = 1}} = {});"); }, o9,"Object literal is within object pattern but has shorthand initializer is not valid syntax", "Expected ':'");
        o5.o6(function () { eval("var a = 1; ({x = {a = 1} = {}} = {});"); }, "Chained object patterns have shorthand initializers is a valid syntax");
        o5.o6(function () { eval("var a = 1; var {x = {a = 1} = {}} = {};"); }, "Chained object declaration pattern have shorthand initializers is a valid syntax");
        o5.o6(function () { eval("[{x : [{y:{z = 1}}] }] = [{x:[{y:{}}]}];"); }, "Mixed nesting pattern has shorthand initializer is a valid syntax");
        o5.o6(function () { eval("[{x : [{y:{z = 1}, z1 = 2}] }, {x2 = 3}, {x3 : {y3:[{z3 = 4}]}} ] = [{x:[{y:{}}]}, {}, {x3:{y3:[{}]}}];"); }, 
                                            "Mixed object patterns both on nested and on same level have initializers on shorthand and is a valid syntax");
        o5.o6(function () { eval("var [{x : [{y:{z = 1}, z1 = 2}] }, {x2 = 3}, {x3 : {y3:[{z3 = 4}]}} ] = [{x:[{y:{}}]}, {}, {x3:{y3:[{}]}}];"); }, 
                                            "Declaration - mixed object patterns both on nested and on same level have initializers on shorthand and is a valid syntax");
        o5.o6(function () { eval("[...{x = 1}] = [{}]"); }, "Object pattern following rest has shorthand initializer is a valid syntax");
        {
            let o15 = 1;
            ({o13:{o15a1o15 = 2}} = {o13:{}});
            o5.o12(o15, 2);
        }
        
        o5.o8(function () { eval("var a = 1; switch(true) {  case {a = 1} : break; };"); }, o9, "Object literal on case has initializer is not valid syntax", "Expected ':'");
       
    }
  },
  {
    name: "Object destructuring basic functionality",
    o4: function () {
        {
           var o16, o17;
           let {o13:o18} = {o13:20};
           o5.o12(o18, 20,  "Object declaration pattern should match the pattern and initializes that variable correctly");
           let {o19x2o19} = {o19:20};
           o5.o12(o19, 20,  "Object declaration pattern (shorthand) should match the pattern and initializes that variable correctly");

           ({o13:o16} = {o13:20});
           o5.o12(o16, 20,  "Object expression pattern should match the pattern and initializes that variable correctly");

           ({o17x4o17} = {o17:20});
           o5.o12(o17, 20,  "Object expression pattern (shorthand) should match the pattern and initializes that variable correctly even under a paren");
        }

        {
           let {o13:o18} = {};
           o5.o12(o18, undefined,  "Object declaration pattern find no match pattern on rhs and initialize to undefined");

           let {o19x2o19} = {o21:20};
           o5.o12(o19, undefined,  "Object declaration pattern does not match pattern on rhs and initialize to undefined");

           let o16, o17;
           ({o13:o16} = {});
           o5.o12(o16, undefined,  "Object expression pattern find no match pattern on rhs and initialize to undefined");

           ({o17x4o17} = {o22:20});
           o5.o12(o17, undefined,  "Object expression pattern does not match pattern on rhs and initialize to undefined");
        }

        {
           let {o13:o18, o14: o23, o24: o25} = {o13:11, o14:22, o24:33, o26:44};
           o5.o12(o18, 11,  "Object declaration pattern with multiple members should match the first member correctly");
           o5.o12(o23, 22,  "Object declaration pattern with multiple members should match the second member correctly");
           o5.o12(o25, 33,  "Object declaration pattern with multiple members should match the third member correctly");

           let o19, o27, o28;
           ({o13:o19, o14: o27, o24: o28} = {o13:11, o29:44, o14:22, o24:33});

           o5.o12(o19, 11,  "Object expression pattern with multiple members should match the first member correctly");
           o5.o12(o27, 22,  "Object expression pattern with multiple members should match the second member correctly");
           o5.o12(o28, 33,  "Object expression pattern with multiple members should match the third member correctly");

        }

        {
           var o23, o18;
           var o24 = {o13:o18} = {o14:o23} = {o13:10, o14:20};
           o5.o12(o18, 10,  "Object declaration pattern with chained assignments should match first member to rhs correctly");
           o5.o12(o23, 20,  "Object expression pattern with chained assignments should match second member to rhs correctly");
        }
    }
  },
  {
    name: "Object destructuring functionality with initializer",
    o4 : function () {

           let {o13:o30 = 1} = {o13:undefined};
           o5.o12(o30, 1,  "Object declaration pattern should match the pattern but it is evaluated to undefined so assign default correctly");

           let {o13:o15 = 1} = {o13:null};
           o5.o12(o15, null,  "Object declaration pattern should match the pattern and assigned null correctly");


           let {o13:o18 = 1, o14:o23 = 2, o24: o25 = 3} = {};
           o5.o12(o18, 1,  "Object declaration pattern - first member initialized with default when no match found on rhs");
           o5.o12(o23, 2,  "Object declaration pattern - second member initialized with default when no match found on rhs");
           o5.o12(o25, 3,  "Object declaration pattern - third member initialized with default when no match found on rhs");

           let o19, o27, o28;
           ({o13:o19 = 1, o14:o27 = 2, o24:o28 = 3} = {o24:11});

           o5.o12(o19, 1, "Object expression pattern - first member initialized with default when no match found on rhs");
           o5.o12(o27, 2, "Object expression pattern - second member initialized with default when no match found on rhs");
           o5.o12(o28, 11, "Object expression pattern - third member has pattern match on rhs and should have assigned correctly");

           let { o13: { o14:o24 } = { o14:21 } } = {};
           o5.o12(o24, 21,  "Object declaration pattern has default on nested");


           let {
                o13:{
                    o14:{
                        o24:{
                            o31:o32 = 31
                          } = { o31:21 }
                      } = { o24:{ o31:20 } }
                  } = { o14: { o24:{} } }
              } = { o13:{ o14:{ o24:{} } } };
           o5.o12(o32, 31,  "Object declaration pattern has defaults on different level and got the inner most default");

           ({
               o13:{
                   o14:{
                       o24:{
                           o31:o32 = 31
                         } = {o31:21}
                     } = {o24:{o31:20}}
                  } = {o14:{o24:{}}}
           } = {o13:{o14:{o24:undefined}}});

           o5.o12(o32, 21,"Object expression pattern has default on different level but got the rhs");
        }
    },
    {
        name: "Object destructuring functionality with non-name pattern",
        o4 : function () {
           let {1:o18, 0:o23} = [11, 22];
           let {0:o19} = {"0":33};
           let {o33:o16} = {o33:44};

           o5.o12(o18, 22,  "Object declaration pattern should match the second index on rhs array");
           o5.o12(o23, 11,  "Object declaration pattern should match the first index on rhs array");
           o5.o12(o19, 33,  "Object declaration pattern should match '0' on rhs");
           o5.o12(o16, 44,  "Object declaration pattern should match the name even though it is a keyword");
        }
    },

    {
        name: "Object destructuring functionality with computed property",
        o4 : function () {
            {
               let key = 'x', o19;
               let {[key]:o18} = {o13:20};
               o5.o12(o18, 20,  "Object declaration pattern should match the computed property name as a pattern");

               ({[key]:o19} = {o13:20});
               o5.o12(o19, 20,  "Object expression pattern should match the computed property name as a pattern");

               ({[`abc${"def"}`]:o19} = {o35:30});
               o5.o12(o19, 30,  "Object expression pattern should match the the complex computed property name as a pattern");
            }

            {
                let [o36,o37] = [0,0];
                function o38() {
                    if (o36++ == 0) return 'x';
                    else return 'y'
                }
                function o39() {
                    o5.o12(o36, 0,  "RHS object should be initialized before");
                    if (o37++ == 0) return 'this is x';
                    else return 'this is y';
                }
                let  {[o38()]:o18, [o38()]:o23} = {o13:o39(), o14:o39()};

                o5.o12(o18, 'this is x',  "Object declaration pattern depicting initializing order should match first pattern evaluated on runtime");
                o5.o12(o23, 'this is y',  "Object declaration pattern depicting initializing order should match second pattern evaluated on runtime");
            }
        }
    },

    {
        name: "Object destructuring functionality with property reference",
        o4 : function () {
            let o30    = {};
            ({o13:o30.o13} = {o13:10});
            o5.o12(10, o30.o13, "Object expression pattern should assign value on property reference on object correctly");

            ({o13:o30['x']} = {o13:20});
            o5.o12(20, o30["x"], "Object expression pattern should assign value on property reference as index on object correctly");

            var o40 = { o13: 10, o14: 20 };
            function o26() { return o40 };

            ({o13:o26().o13, o14:o26().o14} = {o13:20, o14:30});
            o5.o12(20, o40.o13,  "Object expression pattern should assign value on first property reference on a call expression correctly");
            o5.o12(30, o40.o14,  "Object expression pattern should assign value on second property reference on a call expression correctly");

            (((((({o13:o26().o13, o14:o26().o14} = {o13:201, o14:301}))))));
            o5.o12(201, o40.o13,  "Object expression pattern (under deep parens) should assign value on first property reference on a call expression correctly");
            o5.o12(301, o40.o14, "Object expression pattern (under deep parens) should assign value on second property reference on a call expression correctly");

        }
    },
    {
       name: "Destructing functionality - rest element as pattern",
       o4 : function () {
           let [...[o30]] = [1, 2, 3];
           o5.o12(o30, 1, "Having rest element as array pattern and the identifier is initialized with first value");

           let [...{1:o18}] = [1, 2, 3];
           o5.o12(o18, 2, "Having rest element as object pattern and the identifier is initialized with second value");

           let [...[,...[[o19]]]] = [[1, 2], [3, 4], 5];
           o5.o12(o19, 3, "Rest element nesting another rest element and initialized with correct value");
      }
    },
    {
        name: "Object destructuring functionality with mixed array and object pattern",
        o4 : function () {

            let {o41:o42, o43 : [,{o14yo14}]} = {o41:'first', o43:[{o14:20, o24:30}, {o14:21, o24:31}, {o14:22, o24:32}]};
            o5.o12(o42, 'first', "Destructing declaration pattern should match first pattern on rhs");
            o5.o12(o14, 21, "Destructing declaration pattern should match second but nested array pattern on rhs");

            let o44 = {
                o45: "Foobar",
                o46: [
                   {
                    o47: "en",
                    o45: "first"
                   },
                   {
                    o47: "de",
                    o45: "second"
                   },
                   {
                    o47: "ps",
                    o45: "third"
                   },
                ],
                o48: "http://foobar.com"
            };

            let { o45: o49, o46: [{o47 : o50}] } = o44;
            o5.o12(o49,   'Foobar',    "Destructing declaration pattern should match first pattern on rhs");
            o5.o12(o50,   'en',    "Destructing declaration pattern should match second pattern on rhs");

            ({ o46: [,{o47 : o50}] } = o44);
            o5.o12(o50,   'de',    "Destructing expression pattern should skip first array item and match second item on rhs");

            let [{o13xo13}, {o24zo24}] = [{o13:1, o24:20}, {o13:2, o24:30}, {o13:3,o24:40}];
            o5.o12(o13,   1,    "Object under array declaration pattern should match the first pattern");
            o5.o12(o24,   30,    "Object under array declaration pattern should match the second pattern");

            [{o13:o13}, , {o24:o24}] = [{o13:11, o24:201}, {o13:21, o24:301}, {o13:31,o24:401}];
            o5.o12(o13,   11,    "Object under array expression pattern should match the first pattern");
            o5.o12(o24,   401,    "Object under array expression pattern should match the third pattern");
        }
    },
    {
        name: "Object destructuring functionality with for/while",
        o4 : function () {
            let o36 = 0, o51 = [20, 30];
            for ( let {o13:o52} of [{o13:20}, {o13:30}]) {
                o5.o12(o52,   o51[o36++],    "Object declaration pattern under for..of should match pattern correctly");
            }

            function o53() {
                return {o13:[{o14:[20]}, {o14:[30]}]};
            }

            o36 = 0;
            for ({o14:[o52]} of o53().o13) {
                o5.o12(o52,   o51[o36++],    "Object expression pattern under for..of should match pattern correctly");
            }

            o36 = 0; o51 = [10, 12, 14, 16, 18];
            for (let {o13xo13, o14yo14} = {o13:10, o14:20}; o13<o14; {o13:o13} = {o13:o13+2}) {
                o5.o12(o13,   o51[o36++],    "Object declaration pattern under native..for should match pattern correctly");
            }

            let o27 = 20;
            o36 = 0; o51 = [18, 16, 14, 12, 10];
            while ({o14:o27} = {o14:o27-2}) {
                o5.o12(o27,   o51[o36++],    "Object expression pattern under while should match pattern correctly");
                if (o27 == 10) {
                    break;
                }
            }
        }
    }
];

o54.o55(o2, { o56: o0.o57[0] != "summary" });
