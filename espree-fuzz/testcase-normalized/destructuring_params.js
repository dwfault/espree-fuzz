//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "Basic destructuring syntax as params",
    o4: function () {
      o5.o6(function () { eval("function foo({x:x}) {}"); }, "Object destructuring pattern as a formal is valid syntax");
      o5.o6(function () { eval("function foo({x}) {}"); },   "Object destructuring pattern (shorthand) as a formal is valid syntax");
      o5.o6(function () { eval("function foo([x]) {}"); },   "Array destructuring pattern as a formal is valid syntax");

      o5.o6(function () { eval("function foo({x:x}, y) {}"); },   "Object destructuring pattern as a first formal is valid syntax");
      o5.o6(function () { eval("function foo([x], y) {}"); },   "Array destructuring pattern as a first formal is valid syntax");

      o5.o6(function () { eval("function foo(y, {x:x}) {}"); },   "Object destructuring pattern as a second formal is valid syntax");
      o5.o6(function () { eval("function foo(y, [x]) {}"); },   "Array destructuring pattern as a second formal is valid syntax");


      o5.o6(function () { eval("function foo({}) {}"); },   "Object destructuring pattern (with empty syntax) as a formal is valid syntax");
      o5.o6(function () { eval("function foo([]) {}"); },   "Array destructuring pattern (with empty syntax) as a formal is valid syntax");
      o5.o6(function () { eval("function foo([,]) {}"); },   "Array destructuring pattern (with empty syntax and comma) as a formal is valid syntax");
    }
  },
  {
    name: "Destructuring syntax as params - invalid syntax",
    o4: function () {
      o5.o8(function () { eval("function foo({,}) {}"); }, o9,  "Object destructuring pattern as a formal with empty names is not valid syntax", "Expected identifier, string or number");
      o5.o8(function () { eval("function foo(({})) {}"); }, o9,  "Object destructuring pattern as a formal surrounded with parens is not valid syntax", "Expected identifier");
      o5.o8(function () { eval("function foo(([])) {}"); }, o9,  "Array destructuring pattern as a formal surrounded with parens is not valid syntax", "Expected identifier");
      o5.o8(function () { eval("function foo([x}) {}"); }, o9,  "Array destructuring pattern without right bracket is not valid syntax", "Unexpected operator in destructuring expression");
      o5.o8(function () { eval("function foo({x:abc+1}) {}"); }, o9,  "Object destructuring pattern with operator is not valid syntax", "Unexpected operator in destructuring expression");
      o5.o8(function () { eval("function foo({x:abc.d}) {}"); }, o9,  "Object destructuring pattern as a formal with property reference is not valid syntax", "Syntax error");
      o5.o8(function () { eval("function foo([abc.d]) {}"); }, o9,  "Array destructuring pattern as a formal with property reference is not valid syntax", "Syntax error");
      o5.o8(function () { eval("function foo([super]) {}"); }, o9,  "Array destructuring pattern as a formal identifier as super is not valid syntax", "The use of a keyword for an identifier is invalid");
      o5.o8(function () { eval("function foo({x:super}) {}"); },  o9, "Object destructuring pattern as a formal identifier as super is not valid syntax", "The use of a keyword for an identifier is invalid");
      o5.o8(function () { eval("function foo({x:super()}) {}"); }, o9,  "Object destructuring pattern as a formal identifier as super call is not valid syntax", "The use of a keyword for an identifier is invalid");
      o5.o8(function () { eval("function foo([super()]) {}"); }, o9,  "Array destructuring pattern as a formal identifier as super call is not valid syntax", "The use of a keyword for an identifier is invalid");
    }
  },
  {
    name: "Destructuring syntax as params - Multiple and mixed patterns",
    o4: function () {
      o5.o6(function () { eval("function foo({x:x}, {y:y}, {z:z}) {}"); },   "Three params as object pattern is valid syntax");
      o5.o6(function () { eval("function foo([x], [y], [z]) {}"); },   "Three params as array pattern is valid syntax");

      o5.o6(function () { eval("function foo({x1:x1, x2:x2, x3:x3}, {y1:y1, y1:y2}) {}"); },   "Two params as object pattern, and each pattern has more than one matching name is valid syntax");
      o5.o6(function () { eval("function foo([x1, x2, x3], [y1, y2, y3]) {}"); },   "Two params as array pattern, and each pattern has more than one matching name is valid syntax");

      o5.o6(function () { eval("function foo({x1:x1}, [y1]) {}"); },   "Two params with first object pattern and second array pattern is valid syntax");
      o5.o6(function () { eval("function foo([x1], {y1:y1}) {}"); },   "Two params with first array pattern and second object pattern is valid syntax");

      o5.o6(function () { eval("function foo(x1, {x2, x3}, [x4, x5], x6) {}"); }, "Multiple params with mixed of binding identifier and binding pattern is valid syntax");

      o5.o6(function () { eval("function foo({x1:[y1]}) {}"); },   "Object destructuring pattern nesting array pattern as a formal is valid syntax");
      o5.o6(function () { eval("function foo([x1, {y1:y1}]) {}"); },   "Array destructuring pattern nesting object pattern as a formal is valid syntax");
    }
  },
  {
    name: "Destructuring syntax as params - class/function expression/function expression with names/lambda",
    o4: function () {
      o5.o6(function () { eval("({x}) => x;"); },   "Object destructuring pattern as a formal on lambda is valid syntax");
      o5.o6(function () { eval("([x]) => x;"); },   "Array destructuring pattern as a formal on lambda is valid syntax");

      o5.o6(function () { eval("class foo { constructor({x1}){} }"); },   "Object destructuring pattern as a formal on constructor of class is valid syntax");
      o5.o6(function () { eval("class foo { constructor([x1]){} }"); },   "Array destructuring pattern as a formal on constructor of class is valid syntax");
      o5.o6(function () { eval("class foo { method({x1}){ }; set prop({x1}){} }"); },   "Object destructuring pattern on method and setter of class is valid syntax");
      o5.o6(function () { eval("class foo { method([x1]){ }; set prop([x1]){} }"); },   "Array destructuring pattern on method and setter of class is valid syntax");

      o5.o6(function () { eval("let foo = function ({x1}, [x2]){};"); },   "Destructuring patterns as formals on function expression is valid syntax");
      o5.o6(function () { eval("(function({x1}, [x2]){})"); },   "Destructuring patterns as formals on anonymous function is valid syntax");

      o5.o6(function () { eval("let bar = function foo({x1}, [x2]){};"); },   "Destructuring patterns as formals on named function expression is valid syntax");
      o5.o6(function () { eval("new Function('{x}', '[y]', 'return x + y');"); },   "Destructuring patterns as formals on function constructor is valid syntax");
      o5.o6(function () { eval("let obj = { foo({x}) {}, set prop([x]) {} }"); },   "Destructuring pattern as a formal on functions of object literal is valid syntax");
    }
  },
  {
    name: "Destructuring syntax as params - Initializer",
    o4: function () {
      o5.o6(function () { eval("function foo({x:x = 10}) {}"); },   "One param as object destructuring pattern with initializer is valid syntax");
      o5.o6(function () { eval("function foo([x = 20]) {}"); },   "One param as array destructuring pattern with initializer is valid syntax");

      o5.o6(function () { eval("function foo({x1:x1 = 1}, {y1:y1 = 2}) {}"); },   "Two params as object destructuring pattern with initializer is valid syntax");
      o5.o6(function () { eval("function foo([x1 = 1], [y1 = 2]) {}"); },   "Two params as array destructuring pattern with initializer is valid syntax");

      o5.o6(function () { eval("function foo({x1:x1 = 1, x2:x2 = 2, x3:x3 = 3}) {}"); },   "One param as object destructuring pattern has three names with initializer is valid syntax");
      o5.o6(function () { eval("function foo([x1 = 1, x2 = 2, x3 = 3]) {}"); },   "One param as array destructuring pattern has three names with initializer is valid syntax");

      o5.o6(function () { eval("function foo({x1:x1 = 1}, [y1 = 2]) {}"); },   "First param as object pattern and second as array pattern with initializer is valid syntax");
      o5.o6(function () { eval("function foo([x1 = 1], {y1:y1 = 2}) {}"); },   "First param as array pattern and second as object pattern with initializer is valid syntax");

      o5.o6(function () { eval("function foo({x:x} = {x:1}) {}"); }, "Object destructuring pattern has default value is valid syntax");
      o5.o6(function () { eval("function foo([x] = [1]) {}"); },  "Array destructuring pattern has default value is valid syntax");

      o5.o6(function () { eval("function foo({x:x = 1} = {x:2}) {}"); }, "Object destructuring pattern has default and identifier has initializer is valid syntax");
      o5.o6(function () { eval("function foo([x = 1] = [2]) {}"); }, "Array destructuring pattern has default and identifier has initializer is valid syntax");

      o5.o6(function () { eval("function foo({x1:[y1 = 1]}) {}"); },   "Object destructuring pattern nesting array pattern which has initializer is valid syntax");
      o5.o6(function () { eval("function foo([x1, {y1:y1 = 1}]) {}"); },   "Array destructuring pattern nesting object pattern which has initializer is valid syntax");

      o5.o6(function () { eval("function foo({x1:[y1 = 1] = [2]} = {x1:[3]}) {}"); },   "Object destructuring pattern has default and nesting array pattern which has initializer is valid syntax");
      o5.o6(function () { eval("function foo([{y1:y1 = 1} = {y1:2}] = [{y1:3}]) {}"); },   "Array destructuring pattern has default and nesting object pattern which has initializer is valid syntax");
    }
  },
  {
    name: "Destructuring syntax as params - redeclarations",
    o4: function () {
      o5.o8(function () { eval("function foo({x:x, x:x}) {}"); },  o9,  "One formal as object pattern has duplicate binding identifiers is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo({x:x}, {x:x}) {}"); },  o9,  "Two formals as object patterns have duplicate binding identifiers is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo([x, x]) {}"); }, o9,   "One formal as array pattern has duplicate binding identifiers is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo([x], [x]) {}"); },  o9,  "Two formals as array patterns have duplicate binding identifiers is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo([x], {x:x}) {}"); },  o9,  "Mixed array and object pattern with duplicate identifiers is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo([x], x) {}"); },  o9,  "First formal as array pattern has matching name with the second formal is not valid syntax", "Duplicate formal parameter names not allowed in this context");
      o5.o8(function () { eval("function foo(x, [x]) {}"); },  o9,  "First normal formal is matching with the second formal which is array pattern is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo({x:{z:[z1]}}, z1) {}"); },  o9,  "First formal as nesting object pattern has matching name with the second formal is not valid syntax", "Duplicate formal parameter names not allowed in this context");
      o5.o8(function () { eval("function foo([x]) { let x = 10;}"); },  o9,  "Object destructuring pattern as a formal is valid syntax", "Let/Const redeclaration");
      o5.o6(function () { eval("function foo([x]) { var x = 10;}"); },  "var declared names matching with formal (as array pattern) is valid syntax");
    }
  },
  {
    name: "Destructuring on param - basic functionality",
    o4 : function () {
            function o10({o11:o11}) {
                return o11;
            }
            let o12 = o10({o11:1});
            o5.o13(o12, 1, "Object pattern as a formal matches with actual param and initializes the identifier correctly");

            function o14([o11]) {
                return o11;
            }
            o12 = o14([2]);
            o5.o13(o12, 2,  "Array pattern as a formal matches with actual param and initializes the identifier correctly");

            function o15({o11xo11}, [o16], o17) {
                return o11 + o16 + o17;
            }
            o12 = o15({o11:1}, [2], 3);
            o5.o13(o12, 6,  "First formal as object pattern and second formal as array pattern should match and initialize identifiers correctly");

            let o18 = function ([o11], {o16:o16}, o17) {
                return o11 + o16 + o17;
            }
            o12 = o18([1], {o16:2}, 3);
            o5.o13(o12, 6,  "First formal as array pattern and second formal as object pattern should match and initialize identifiers correctly");
        }
   },
  {
    name: "Destructuring on param - initializer",
    o4 : function () {
            function o10({o11:o19 = 11}, [o20 = 22]) {
                o5.o13(o19, 1, "Identifier from the first pattern has initializer but matches the actual first param and initializes correctly");
                o5.o13(o20, 2, "Identifier from the second pattern has initializer byt matches the actual second param and initializes correctly");
            }
            o10({o11:1}, [2]);

            function o14({o11:o19 = 11}, [o20 = 22]) {
                o5.o13(o19, 11, "Identifier from the first pattern gets undefined from the actual first param so initializes with initializer");
                o5.o13(o20, 22, "Identifier from the second pattern gets undefined from the actual second param so initializes with initializer");
            }
            o14({}, []);

            (function ({o11:o19 = 11} = {o11:111}, [o20 = 22] = [222]) {
                o5.o13(o19, 111, "First pattern matches with default as the actual first param is undefined");
                o5.o13(o20, 222, "Second pattern matches with default as the actual second param is undefined");
            })(undefined, undefined);
        }
   },
  {
    name: "Destructuring on param - functionality on lambda/function expression",
    o4 : function () {
            (function({o11:o19}) {
                o5.o13(o19, 1,  "Anonymous function - object pattern as a formal matches with actual param and initializes identifier correctly");
            })({o11:1});

            let o10 = ([o19]) => o19 * 2;
            o5.o13(o10([2]), 4,  "Lambda - array pattern as a formal matches with actual param and initializes identifier correctly");

            let o14 = ({o11:o20}) => o20 * 4;
            o5.o13(o14({o11:2}), 8,  "Lambda - object pattern as a formal matches with actual param and initializes identifier correctly");

            let o15 = function o22({o11:o19}) {
                o5.o13(o19, 1,  "Named function expression - object pattern as a formal matches with actual param and initializes identifier correctly");
            }
            o15({o11:1});

            let o18 = new Function("{x}", "[y]", "return x + y");
            o5.o13(o18({o11:1}, [2]), 3,  "Function constructor - patterns as formals match with actual params and initialize identifiers correctly");
        }
   },
  {
    name: "Destructuring on param - captures",
    o4 : function () {
        function o10({o11:o19}) {
            function o24() {
                o5.o13(o19, 1,  "Identifier from object pattern is captured and initialized correctly");
            }
            o24();
        }
        o10({o11:1});

        function o14([o19]) {
            function o25() {
                o5.o13(o19, 2,  "Identifier from array pattern is captured and initialized correctly");
            }
            o25();
        }
        o14([2]);

        function o15({o11:o19}, [o26], o17) {
            (function () {
                o19++;
            })();
            (function () {
                o26++;
            })();
            var o27 = o19 + o26 + o17;
            o5.o13(o27, 62,  "Identifiers from patterns are captured and initialized correctly");
        }
        o15({o11:10}, [20], 30);
     }
   },
  {
    name: "Destructuring on param - capture due to eval",
    o4 : function () {
        function o10({o11:o19}, [o20]) {
            eval('');
            o5.o13(o19, 1,  "Function has eval - identifier from the object pattern is initialized correctly");
            o5.o13(o20, 2,  "Function has eval - identifier from the array pattern is initialized correctly under eval");
        }
        o10({o11:1}, [2]);

        function o14({o11:o19}, [o20]) {
            eval('');
            (function () {
                o19;
                o20;
            })();
            o5.o13(o19, 3, "Function has eval and inner function - identifier from the object pattern is initialized correctly");
            o5.o13(o20, 4, "Function has eval and inner function - identifier from the array pattern is initialized correctly");
        }
        o14({o11:3}, [4]);

        function o15({o11:o19}, [o20]) {
            (function () {
                eval('');
                o5.o13(o19, 5,  "Function's inner function has eval - identifier from the object pattern is initialized correctly");
                o5.o13(o20, 6,  "Function's inner function has eval - identifier from the object pattern is initialized correctly");
            })();
        }
        o15({o11:5}, [6]);
     }
   },
  {
    name: "Destructuring on param - captures (eval and arguments)",
    o4 : function () {
        function o10({o11:o19}, [o20]) {
            o5.o13(arguments[0], {o11:1},  "arguments[0] is initialized correctly with first actual argument");
            o5.o13(arguments[1], [2],  "arguments[1] is initialized correctly with second actual argument");
        }
        o10({o11:1}, [2]);

        function o14({o11:o19}, [o20]) {
            (function() {
            })();
            eval('');
            o5.o13(arguments[0], {o11:1},  "Function has inner function and eval - arguments[0] is initialized correctly with first actual argument");
            o5.o13(arguments[1], [2],  "Function has inner function and eval - arguments[1] is initialized correctly with second actual argument");
        }
        o14({o11:1}, [2]);

        function o15({o11:o19}, [o20]) {
            (function() {
                eval('');
            })();
            o5.o13(arguments[0], {o11:1},  "Function's inner function has eval - arguments[0] is initialized correctly with first actual argument");
            o5.o13(arguments[1], [2],  "Function's inner function has eval - arguments[1] is initialized correctly with second actual argument");
        }
        o15({o11:1}, [2]);

        (function({o11:o19}, o20) {
            o20 = 3;
            o5.o13(arguments[1], 2,  "arguments object is unmapped - changing second formal does not change arguments[1]");
        })({o11:1}, 2);

        (function ([o19], o20) {
            arguments[1] = 2;
            o5.o13(o20, 1,  "arguments object is unmapped - changing arguments[1] does not change second param");
        })([], 1);

        (function ({o11:o19}, o20) {
            o20 = 2;
            (function() {
                eval('');
            })();
            o5.o13(arguments[1], 1,  "Function's inner function has eval - arguments object is unmapped - changing second formal does not change arguments[1]");
        })({}, 1);

        (function ([o19], o20) {
            (function() {
                eval('');
            })();
            arguments[1] = 2;
            o5.o13(o20, 1,  "Function's inner function has eval - arguments object is unmapped - changing arguments[1] does not change second param");
        })([], 1);

    }
  },
  {
    name: "Destructuring on param - multiple/mixed/nested parameters",
    o4 : function () {
        (function (o19, {o20x2o20, o29x3o29}, [o30, o31], o32) {
            var o27 = o19 + o20 + o29 + o30 + o31 + o32;
            o5.o13(o27, 21,  "Identifiers under various patterns are matched and initialized correctly");
        })(1, {o20:2, o29:3}, [4, 5], 6);

        (function (o19, {o20x2o20, o29x3o29}, [o30, o31], o32) {
            var o27 = o19 + o20 + o29 + o30 + o31 + o32;
            eval('');
            o5.o13(o27, 21,  "Function has eval - identifiers under various patterns are matched and initialized correctly");
        })(1, {o20:2, o29:3}, [4, 5], 6);

        (function (o19, {o20x2o20, o29x3o29}, [o30, o31], o32) {
            var o27 = o19 + o20 + o29 + o30 + o31 + o32;
            (function() {
                eval('');
            });
            o5.o13(o27, 21,  "Function's inner function has eval - identifiers under various patterns are matched and initialized correctly");
        })(1, {o20:2, o29:3}, [4, 5], 6);

     }
   },
  {
    name: "Destructuring on param - misc",
    o4 : function () {
        let o10 = function o22(o33, {o11:o19}, [o20]) {
            o5.o13(o19, 1,  "Function expression with name - identifier from second formal is matched and initialized correctly");
            o5.o13(o20, 2,  "Function expression with name - identifier from third formal is matched and initialized correctly");
        }
        o10(0, {o11:1}, [2]);

        let o14 = function o34(o33, {o11:o19}, [o20]) {
            eval('');
            o5.o13(o19, 1,  "Function expression with name has eval - identifier from second formal is matched and initialized correctly");
            o5.o13(o20, 2,  "Function expression with name has eval - identifier from third formal is matched and initialized correctly");
        }
        o14(0, {o11:1}, [2]);

        let o15 = function o35(o33, {o11:o19}, [o20]) {
            with(o19) {
                o5.o13(o36, 1,  "Function expression with name has 'with' - identifier from second formal is matched and initialized correctly");
                o5.o13(o20, 2,  "Function expression with name has 'with' - identifier from third formal is matched and initialized correctly");
            }
        }
        o15(0, {o11:{o36:1}}, [2]);

        let o18 = function o37(o33, {o11:o19}, [o20]) {
            try {
                throw 'abc';
            }
            catch(o38) {
                (function () {
                    o5.o13(o19, 1,  "Function expression with name has 'try/catch' - identifier from second formal is matched and initialized correctly");
                    o5.o13(o20, 2,  "Function expression with name has 'try/catch' - identifier from third formal is matched and initialized correctly");
                })();
            }
        }
        o18(0, {o11:1}, [2]);

        let o39 = function o40(o33, {o11:o19}, [o20]) {
            try {
                throw 'abc';
            }
            catch(o38) {
                (function () {
                    eval('');
                    o5.o13(o19, 1,  "Function expression with name has 'try/catch and eval' - identifier from second formal is matched and initialized correctly");
                    o5.o13(o20, 2,  "Function expression with name has 'try/catch and eval' - identifier from third formal is matched and initialized correctly");
                })();
            }
        }
        o39(0, {o11:1}, [2]);
     }
   },
  {
    name: "Destructuring on param - class",
    o4 : function () {
        class o41 {
            add([o19]) {
                this.o19 += o19;
            }

            set o43({o19x1o19}) {
                this.o19 = o19;
            }

            get o43() {
                return this.o19;
            }

            static o44({o19x1o19}, [o20], o29) {
                return (o19+o20+o29)/3;
            }
        }

        o5.o13(o41.o44({o19:3}, [4], 5), 4,  "Class's static function - identifiers from formal patterns are matched and initialized correctly");

        let o45 = new o41();
        o45.o43 = {o19:1};
        o5.o13(o45.o43, 1, "Class's setter - identifier from the formal object pattern is matched and initialized correctly");

        o45.add([2]);
        o5.o13(o45.o43, 3, "Class's method - identifier from the formal array pattern is matched and initialized correctly");
     }
   }
];

o46.o47(o2, { o48: o0.o49[0] != "summary" });
