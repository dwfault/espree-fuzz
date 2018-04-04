//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 new.target tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    {
        name: "Test new.target parsing path doesn't confuse 'new target'",
        o4: function() {
            function target() { return { name: 'something' }; }
            var o6 = new target; // implicitly 'new target()'

            o7.o8('something', o6.name, "new target() returned our new object instead of new.target");
        }
    },
    {
        name: "Test new.target in various block scopes'",
        o4: function() {
            o7.o9(function(){{new.target;}}, "new.target one level block do not throw in a function");
            o7.o9(function(){{{new.target;}}}, "new.target two level block do not throw in a function");
            o7.o9(function(){with({}) {new.target;}}, "new.target with scope body call does not throw");
            o7.o9(function() { function o11(o12) { new o12();}; function o13(){ with(new.target) {toString();}}; o11(o13); }, "new.target with scope parameter does not throw");
            o7.o9(function(){{if(true){new.target;}}}, "new.target condition block in nested block do not throw in a function");
            o7.o9(function(){try { throw Error;} catch(o16){new.target;}}, "new.target catch block do not throw in a function");
            o7.o9(function(){ var o17 = o18 = o19 = 1; try {} catch([o17,o18,o19]) { new.target;}}, "new.target in CatchParamPattern block do not throw in a function");
            o7.o9(function(){ var o12 = function() {new.target;}; o12();}, "new.target in function expression do not throw in a function");
            o7.o9(function(){ var o20 = { "foo" : function () { new.target}}; o20.o21();}, "new.target in named function expression do not throw in a function");
        }
    },
    {
        name: "Test new.target parsing path with badly-formed meta-property references",
        o4: function() {
            o7.o22(function() { return new['target']; }, o23, "Meta-property new.target is not a real property lookup", "Object doesn't support this action");
            o7.o22(function() { return eval('new.'); }, o25, "Something like 'new.' should fall out of the meta-property parser path", "Syntax error");
            o7.o22(function() { return eval('new.target2'); }, o25, "No other keywords should produce meta-properties", "Syntax error");
            o7.o22(function() { return eval('new.something'); }, o25, "No other keywords should produce meta-properties", "Syntax error");
            o7.o22(function() { return eval('new.eval'); }, o25, "No other keywords should produce meta-properties", "Syntax error");
        }
    },
    {
        name: "There is now a well-known PID for 'target' - ensure it doesn't break",
        o4: function() {
            var o26 = { target: 'something' };

            o7.o8('something', o26.target, "The name 'target' can be used as an identifier");
        }
    },
    {
        name: "new.target is not valid for assignment",
        o4: function() {
            o7.o22(function() { eval("new.target = 'something';"); }, o27, "new.target cannot be a lhs in an assignment expression - this is an early reference error", "Invalid left-hand side in assignment");
            o7.o22(function() { eval("((new.target)) = 'something';"); }, o27, "new.target cannot be a lhs in an assignment expression - this is an early reference error", "Invalid left-hand side in assignment");
        }
    },

    {
        name: "Simple base class gets new.target correctly",
        o4: function() {
            var o28 = false;

            class o29 {
                constructor() {
                    o7.o31(new.target === o29, "new.target === SimpleBaseClass");

                    o28 = true;
                }
            }

            var o32 = new o29();

            o7.o31(o28, "The constructor was called.");
        }
    },
    {
        name: "Simple derived and base class passes new.target correctly",
        o4: function() {
            var o28 = false;

            class o33 {
                constructor() {
                    o7.o31(new.target === o34, "new.target === DerivedClassForB");

                    o28 = true;
                }
            }

            class o34 extends o33 {
                constructor() {
                    o7.o31(new.target === o34, "new.target === DerivedClassForB");

                    super();
                }
            }

            var o35 = new o34();

            o7.o31(o28, "The super-chain was called.");
        }
    },
    {
        name: "Simple base class with arrow function using new.target correctly",
        o4: function() {
            var o28 = false;

            class o29 {
                constructor() {
                    var o36 = () => {
                        o7.o31(new.target === o29, "new.target === SimpleBaseClass");

                        o28 = true;
                    }

                    o36();
                }
            }

            var o32 = new o29();

            o7.o31(o28, "The constructor was called.");
        }
    },
    {
        name: "new.target behavior in arrow function inside derived class",
        o4: function() {
            let o37 = false;

            class o38 {
                constructor() {
                    let o36 = () => {
                        o7.o31(o39 === new.target, "Class constructor implicitly invoked via super call has new.target set to derived constructor (also in arrow)");
                        o37 = true;
                    };
                    o36();
                }
            }

            class o39 extends o38 {
                constructor() {
                    let o36 = () => {
                        o7.o31(o39 === new.target, "Class constructor explicitly invoked via new keyword has new.target set to that constructor (also in arrow)");
                    };
                    o36();
                    super();
                }
            }

            let o40 = new o39();
            o7.o31(o37, "We actually ran the constructor code");
        }
    },
    {
        name: "new.target behavior in a normal function",
        o4: function() {
            function o21() {
                o7.o31(undefined === new.target, "Normal function call has new.target set to undefined in the function body");

                return new.target;
            }

            o7.o31(undefined === o21(), "Normal function returning new.target returns undefined");
        }
    },
    {
        name: "new.target behavior in a normal function in a new expression",
        o4: function() {
            function o21() {
                o7.o31(o21 === new.target, "Function called as new expression has new.target set to the function in the function body");

                return new.target;
            }

            o7.o31(o21 === new o21(), "Function called-as-constructor has new.target set to that function");
        }
    },
    {
        name: "new.target behavior in an arrow in a normal function",
        o4: function() {
            function o21() {
                let o36 = () => {
                    o7.o31(undefined === new.target, "Normal function call has new.target set to undefined in the function body");

                    return new.target;
                };

                return o36();
            }

            o7.o31(undefined === o21(), "Normal function returning new.target returns undefined");
        }
    },
    {
        name: "new.target behaviour in an arrow in a normal function in a new expression",
        o4: function() {
            function o21() {
                let o36 = () => {
                    o7.o31(o21 === new.target, "Function called as new expression has new.target set to the function in the function body");

                    return new.target;
                };

                return o36();
            }

            o7.o31(o21 === new o21(), "Function called-as-constructor has new.target set to that function");
        }
    },
    {
        name: "new.target captured from class constructor via arrow",
        o4: function() {
            class o42 {
                constructor() {
                    let o36 = () => {
                        o7.o31(o43 === new.target, "Function called as new expression has new.target set to the function in the function body");

                        return new.target;
                    };

                    return o36;
                }
            }
            class o43 extends o42 {
                constructor() {
                    return super();
                }
            }

            let o36 = new o43();

            o7.o31(o43 === o36(), "Arrow capturing new.target returns correct value");
        }
    },
    {
        name: "new.target inline constructor case",
        o4: function() {
            function o21()
            {
                return new.target;
            }
            function o44()
            {
                return new o21(); //foo will be inlined here
            }
            o7.o31(o44() == o21, "Function called as new expression has new.target set to the function in the function body when the constructor is inlined");
        }
    },
    {
        name: "new.target inline  case",
        o4: function() {
            function o21()
            {
                return new.target;
            }
            function o44()
            {
                return o21(); //foo will be inlined here
            }
            o7.o31(o44() == undefined, "Normal inlined function has new.target set to undefined in the function body");
        }
    },
    {
        name: "new.target generator  case",
        o4: function() {
            function *o21()
            {
                yield new.target;
            }
            o7.o31((o21()).next().value == undefined, "Generator function has new.target set to undefined in the function body");
        }
    },
    {
        name: "new.target inside eval() in function",
        o4: function() {
            function o47() {
               var o48 = ()=>eval('new.target;');
               return o48();
            }

            o7.o8(undefined, o47(), "plain function call");
            o7.o8(undefined, eval("func()"), "function call inside eval");
            o7.o8(undefined, eval("eval('func()')"), "function call inside nested evals");
            o7.o8(undefined, (()=>o47())(), "function call inside arrow function");
            o7.o8(undefined, (()=>(()=>o47())())(), "function call inside nested arrow functions");
            o7.o8(undefined, eval("(()=>func())()"), "function call inside arrow function inside eval");
            o7.o8(undefined, (()=>eval("func()"))(), "function call inside eval inside arrow function");
            o7.o8(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval");

            o7.o8(o47, new o47(), "plain constructor call");
            o7.o8(o47, eval("new func()"), "constructor call inside eval");
            o7.o8(o47, eval("eval('new func()')"), "constructor call inside nested evals");
            o7.o8(o47, (()=>new o47())(), "constructor call inside arrow function");
            o7.o8(o47, (()=>(()=>new o47())())(), "constructor call inside nested arrow functions");
            o7.o8(o47, eval("(()=>new func())()"), "constructor call inside arrow function inside eval");
            o7.o8(o47, (()=>eval("new func()"))(), "constructor call inside eval inside arrow function");
            o7.o8(o47, eval("(()=>eval('new func()'))()"), "constructor call inside eval inside arrow function inside eval");
        }
    },
    {
        name: "new.target inside netsted eval, arrow function, and function defintion through eval",
        o4: function() {
            eval("function func() {var f = ()=>{function g() {}; return eval('new.target')}; return f(); }" );

            o7.o8(undefined, o47(), "plain function call");
            o7.o8(undefined, eval("func()"), "function call inside eval");
            o7.o8(undefined, eval("eval('func()')"), "function call inside nested evals");
            o7.o8(undefined, (()=>o47())(), "function call inside arrow function");
            o7.o8(undefined, (()=>(()=>o47())())(), "function call inside nested arrow functions");
            o7.o8(undefined, eval("(()=>func())()"), "function call inside arrow function inside eval");
            o7.o8(undefined, (()=>eval("func()"))(), "function call inside eval inside arrow function");
            o7.o8(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval");

            o7.o8(o47, new o47(), "plain constructor call");
            o7.o8(o47, eval("new func()"), "constructor call inside eval");
            o7.o8(o47, eval("eval('new func()')"), "constructor call inside nested evals");
            o7.o8(o47, (()=>new o47())(), "constructor call inside arrow function");
            o7.o8(o47, (()=>(()=>new o47())())(), "constructor call inside nested arrow functions");
            o7.o8(o47, eval("(()=>new func())()"), "constructor call inside arrow function inside eval");
            o7.o8(o47, (()=>eval("new func()"))(), "constructor call inside eval inside arrow function");
            o7.o8(o47, eval("(()=>eval('new func()'))()"), "constructor call inside eval inside arrow function inside eval");
        }
    },
    {
        name: "direct and indirect eval with new.target",
        o4: function() {
            function o49(o47, o50, o51, o52) {
                try {
                    o47();
                    throw Error("No exception thrown");
                } catch (o53) {
                    o7.o8(o50.name + ':' + o52, o53.name + ':' + o53.o54, o51);
               }
            }

            o49(()=>{ o0.o55("eval('new.target')", "samethread"); }, o25, "direct eval in global function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("(()=>eval('new.target'))();", "samethread"); }, o25, "direct eval in lambda in global function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("var f=()=>eval('new.target'); (function() { return f(); })();", "samethread"); }, o25, "direct eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
            o7.o9(()=>{ o0.o55("(function() { eval('new.target;') })()", "samethread"); }, "direct eval in function");
            o7.o9(()=>{ o0.o55("var f =(function() { return ()=>eval('new.target;') })(); f();", "samethread"); }, "direct eval in lambda defined in function and called by global function");

            o49(()=>{ o0.o55("(0, eval)('new.target;')", "samethread"); }, o25, "indirect eval in global function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("(()=>(0, eval)('new.target'))();", "samethread"); }, o25, "indirect eval in lambda in global function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("var f=()=>(0, eval)('new.target'); (function() { return f(); })();", "samethread"); }, o25, "indirect eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("(function() { (0, eval)('new.target;') })()", "samethread")}, o25, "indirect eval in function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("var f =(function() { return ()=>(0, eval)('new.target;') })(); f();", "samethread"); }, o25, "indirect eval in lambda defined in function and called by global function", "Invalid use of the 'new.target' keyword");

        }
    },
];

o56.o57(o2, { o58: o0.o59[0] != "summary" });
