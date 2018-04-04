//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "Basic destructuring syntax as catch param",
    o4: function () {
      o5.o6(function () { eval("try {} catch({}) {}"); }, "Object destructuring pattern (empty) as a catch param is valid syntax");
      o5.o6(function () { eval("try {} catch([]) {}"); }, "Array destructuring pattern (empty) as a catch param  is valid syntax");
      o5.o6(function () { eval("try {} catch({x:x}) {}"); }, "Object destructuring pattern as a catch param  is valid syntax");
      o5.o6(function () { eval("try {} catch([e]) {}"); }, "Object destructuring pattern as a catch param  is valid syntax");
      o5.o6(function () { eval("try {} catch({x}) {}"); }, "Object destructuring pattern (as short-hand) as a catch param  is valid syntax");
      o5.o6(function () { eval("function foo() {try {} catch({x, y:[y]}) {} }"); }, "Object destructuring pattern as a catch param inside a function is valid syntax");
      o5.o6(function () { eval("function foo() {try {} catch([x, {y:[y]}]) {} }"); }, "Object destructuring pattern as a catch param inside a function is valid syntax");
    }
  },
  {
    name: "Destructuring syntax as catch param - invalid syntax",
    o4: function () {
      o5.o8(function () { eval("function foo() {try {} catch({,}) {} }"); }, o9,  "Object destructuring pattern as a catch param with empty names is not valid syntax", "Expected identifier, string or number");
      o5.o8(function () { eval("function foo() {try {} catch(([])) {} }"); }, o9,  "Object destructuring pattern as a catch param with empty names is not valid syntax", "Expected identifier");
      o5.o8(function () { eval("function foo() {try {} catch({x:abc+1}) {} }"); }, o9,  "Object destructuring pattern as a catch param with operator is not valid syntax", "Unexpected operator in destructuring expression");
      o5.o8(function () { eval("function foo() {try {} catch([abc.d]) {} }"); }, o9,  "Array destructuring pattern as a catch param with property reference is not valid syntax", "Syntax error");
      o5.o8(function () { eval("function foo() {try {} catch([x], [y]) {} }"); }, o9,  "More than one patterns/identifiers as catch params is not valid syntax", "Expected ')'");
      o5.o8(function () { eval("function foo() {'use strict'; try {} catch([arguments]) {} }"); }, o9,  "StrictMode - identifier under pattern named as 'arguments' is not valid syntax", "Invalid usage of 'arguments' in strict mode");
      o5.o8(function () { eval("function foo() {'use strict'; try {} catch([eval]) {} }"); }, o9,  "StrictMode - identifier under pattern named as 'eval' is not valid syntax", "Invalid usage of 'eval' in strict mode");
    }
  },
  {
    name: "Destructuring syntax as params - Initializer",
    o4: function () {
      o5.o6(function () { eval("function foo() {try {} catch({x:x = 20}) {} }"); },   "Catch param as object destructuring pattern with initializer is valid syntax");
      o5.o6(function () { eval("function foo() {try {} catch([x = 20]) {} }"); },   "Catch param as array destructuring pattern with initializer is valid syntax");

      o5.o6(function () { eval("function foo() {try {} catch({x1:x1 = 1, x2:x2 = 2, x3:x3 = 3}) {} }"); },   "Catch param as object destructuring pattern has three names with initializer is valid syntax");
      o5.o6(function () { eval("function foo() {try {} catch([x1 = 1, x2 = 2, x3 = 3]) {} }"); },   "Catch param as array destructuring pattern has three names with initializer is valid syntax");

      o5.o8(function () { eval("function foo() {try {} catch({x:x} = {x:1}) {} }"); }, o9,  "Catch param as pattern with default is not valid syntax", "Destructuring declarations cannot have an initializer");
    }
  },
  {
    name: "Destructuring syntax as params - redeclarations",
    o4: function () {
      o5.o8(function () { eval("function foo() {try {} catch({x:x, x:x}) {} }"); },  o9,  "Catch param as object pattern has duplicate binding identifiers is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo() {try {} catch([x, x]) {} }"); }, o9,   "Catch param as array pattern has duplicate binding identifiers is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo() {try {} catch({z1, x:{z:[z1]}}) {} }"); }, o9,  "Catch param has nesting pattern has has matching is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo() {try {} catch([x]) { let x = 10;} }"); }, o9,  "Catch param as a pattern and matching name with let/const variable in body is not valid syntax", "Let/Const redeclaration");
      o5.o8(function () { eval("function foo() {try {} catch([x]) { function x() {} } }"); }, o9,  "Catch param as a pattern and matching name with function name in body is not valid syntax", "Let/Const redeclaration");
      o5.o6(function () { eval("function foo() {try {} catch([x]) { var x = 10;} }"); },  "Catch param as a pattern and matching name with var declared name in body is valid syntax");
    }
  },
  {
    name: "Destructuring on catch param - basic functionality",
    o4: function () {
        try {
            throw [1];
        }
        catch ([o10]) {
            o5.o11(o10, 1, "Array pattern as a catch param matches with actual exception and initializes the identifier correctly");
        }

        try {
            throw {o12:2};
        }
        catch({o12e2o12}) {
            o5.o11(o12, 2, "Object pattern as a catch param matches with actual exception and initializes the identifier correctly");
        }

        try {
            throw [3, {o13:[4]}];
        }
        catch([o14, {o13:[o13]}]) {
            o5.o11(o14, 3, "First identifier in catch param as pattern is matched and initialized correctly");
            o5.o11(o13, 4, "Second identifier in catch param as pattern is matched and initialized correctly");
        }
    }
   },
  {
    name: "Destructuring on catch param - initializer",
    o4: function () {
        try {
            throw [];
        }
        catch ([o10 = 11]) {
            o5.o11(o10, 11, "Array pattern as a catch param has initializer and initializes with initializer value");
        }

        try {
            throw {};
        }
        catch({o12:o12 = 22}) {
            o5.o11(o12, 22, "Object pattern as a catch param has initializer and initializes with initializer value");
        }

        try {
            throw [, {o13:[]}];
        }
        catch([o14 = 11, {o13:[o13 = 22]} = {o13:[]}]) {
            o5.o11(o14, 11, "First identifier in catch params as a pattern is initialized with initializer value");
            o5.o11(o13, 22, "Second identifier in catch params as a pattern is initialized with initializer value");
        }
    }
   },
  {
    name: "Destructuring on catch param - captures",
    o4 : function () {
        (function () {
            try {
                throw {o15:'x1', o16:'x2', o17:'x3'};
            }
            catch ({o15x1o15, o16x2o16, o17x3o17}) {
                (function () {
                    o15;o16;o17;
                })();
                let o18 = o15+o16+o17;
                o5.o11(o18, 'x1x2x3',  "Inner Function - capturing all identifiers from object pattern in inner function is working correctly");
            }
        })();

        (function () {
            try {
                throw ['y1', 'y2', 'y3'];
            }
            catch ([o15, o16, o17]) {
                (function () {
                    o15;o16;o17;
                })();
                let o18 = o15+o16+o17;
                o5.o11(o18, 'y1y2y3',  "Inner Function - capturing all identifiers from array pattern in inner function is working correctly");
            }

        })();

        (function () {
            try {
                throw ['y1', 'y2', 'y3'];
            }
            catch ([o15, o16, o17]) {
                (function () {
                    o16;
                })();
                let o18 = o15+o16+o17;
                o5.o11(o18, 'y1y2y3',  "Inner Function - capturing only one identifier from pattern in inner function is working correctly");
            }

        })();

        (function () {
            try {
                throw ['y1', 'y2', 'y3'];
            }
            catch ([o15, o16, o17]) {
                eval('');
                let o18 = o15+o16+o17;
                o5.o11(o18, 'y1y2y3',  "Has eval - identifiers from catch params are initialized correctly");
            }

        })();

        (function () {
            try {
                throw ['y1', 'y2', 'y3'];
            }
            catch ([o15, o16, o17]) {
                (function () {
                    o15;o16;o17;
                })();
                eval('');
                let o18 = o15+o16+o17;
                o5.o11(o18, 'y1y2y3',  "Has eval and inner function - identifiers from catch params are initialized correctly");
            }
        })();

        (function () {
            try {
                throw ['y1', 'y2', 'y3'];
            }
            catch ([o15, o16, o17]) {
                (function () {
                    eval('');
                    o15;o16;o17;
                })();
                let o18 = o15+o16+o17;
                o5.o11(o18, 'y1y2y3',  "Inner function has eval - identifiers from catch params are initialized correctly");
            }
        })();
     }
   },
   {
        name: "Function definitions in catch's parameter",
        o4: function () {
            (function() {
                try {
                    var o19 = 10;
                    throw ['inside'];
                } catch ([o20, o21 = function() { return o19; }]) {
                    o5.o11(o21(), 10, "Function should be able to capture symbols from try's body properly");
                    o5.o11(o20, 'inside', "Function should be able to capture symbols from try's body properly");
                } 
            })();

            (function() {
                try {
                    throw [];
                } catch ([o20 = 10, o21 = function() { return o20; }]) {
                    o5.o11(o21(), 10, "Function should be able to capture symbols from catch's param");
                } 
            })();

            (function() {
                try {
                    throw [];
                } catch ([o20 = 10, o21 = function() { return o20; }]) {
                    eval("");
                    o5.o11(o21(), 10, "Function should be able to capture symbols from catch's param");
                } 
            })();

            (function() {
                try {
                    throw {};
                } catch ({o20xo20 = 10, o21yo21 = function() { return o20; }}) {
                    o5.o11(o21(), 10, "Function should be able to capture symbols from catch's param");
                } 
            })();

            (function() {
                try {
                    throw ['inside', {}];
                } catch ([o20 = 10, { o21yo21 = function() { return o20; } }]) {
                    eval("");
                    o5.o11(o21(), 'inside', "Function should be able to capture symbols from catch's param");
                } 
            })();

            (function() {
                try {
                    throw ['inside', {}];
                } catch ([o20, { o21yo21 = () => arguments[0] }]) {
                    o5.o11(o21(), 10, "Function should be able to capture the arguments symbol from the parent function");
                    o5.o11(o20, 'inside', "Function should be able to capture symbols from try's body properly");
                } 
            })(10);

            (function(o23 = 1, o24 = () => o23) {
                try {
                    throw [];
                } catch ([o20 = 10, o21 = function() { return o24; }]) {
                    o5.o11(o21()(), 1, "Function should be able to capture formals from a split scoped function");
                } 
            })();

            (function () {
                var o25 = 100;
                (function() {
                    try {
                        throw [];
                    } catch ([o20 = 10,  o21 = () => o20 + o25]) {
                        o5.o11(o21(), 110, "Function should be able to capture symbols from outer functions");
                    } 
                })();
            })();

            (function () {
                var o25 = 100;
                (function() {
                    try {
                        throw [];
                    } catch ([o20 = o25 = 10,  o21 = () => o20]) {
                        o5.o11(o21(), 10, "Function should be able to capture symbols from outer functions");
                        o5.o11(o25, 10, "Variable from the outer function is updated during the param initialization");
                    } 
                })();
            })();

            (function () {
                var o23 = 100;
                (function() {
                    var o24 = 200;
                    try {
                        throw [];
                    } catch ([o20 = () => o21, o21 = 10,  o25 = () => o23]) {
                        o19 = () => o20() + o25() + o24;
                        o5.o11(o19(), 310, "Variable from all three levels are accessible");
                    } 
                })();
            })();

            (function () {
                var o23 = 100;
                (function() {
                    var o24 = 200;
                    try {
                        throw [];
                    } catch ([o20 = () => o21, o21 = 10,  o25 = () => o23]) {
                        o19 = () => o20() + o25() + o24;
                        o5.o11(o19(), 310, "Variable from all three levels are accessible with eval in catch's body");
                        eval("");
                    } 
                })();
            })();

            (function () {
                try {
                    var o19 = 10;
                    throw [ ];
                } catch ([o20 = 1, o21 = function() { eval(""); return o19 + o20; }]) {
                    o5.o11(o21(), 11, "Function should be able to capture symbols from outer functions even with eval in the body");
                }
            })();

            (function () {
                try {
                    eval("");
                    var o19 = 10;
                    throw [ ];
                } catch ([o20 = 1, o21 = function() { return o19 + o20; }]) {
                    o5.o11(o21(), 11, "Function should be able to capture symbols from outer functions even with eval in the try block");
                }
            })();

            (function () {
                try {
                    var o19 = 10;
                    throw {o20 : 'inside', o21: []};
                } catch ({o20xo20, o21: [o21 = function(o23 = 10, o24 = () => o23) { return o24; }]}) {
                    o5.o11(o21()(), 10, "Function should be able to capture symbols from outer functions even if it has split scope");
                }
            })();

            (function () {
                var o26 = function o27(o23) {
                    try {
                        if (!o23) {
                            return o27(1);
                        }
                        var o19 = 10;
                        throw [ ];
                    } catch ([o21 = function() { return o19 + o23; }]) {
                        o5.o11(o21(), 11, "Function should be able to capture symbols from outer functions when inside a named function expression");
                    }
                };
                o26();
            })();
        }
   }
];

o28.o29(o2, { o30: o0.o31[0] != "summary" });
