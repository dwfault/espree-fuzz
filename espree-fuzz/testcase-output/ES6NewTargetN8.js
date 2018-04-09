//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 new.target tests

o0.o1({});

var o2 = [
    {
        name: "Test new.target parsing path doesn't confuse 'new target'",
        o3: function() {
            function target() { return { name: 'something' }; }
            var o4 = new target; // implicitly 'new target()'

            o5.o6('something', o4.name, "new target() returned our new object instead of new.target");
        }
    },
    {
        name: "Test new.target in various block scopes'",
        o3: function() {
            o5.o7(function(){{new.target;}}, "new.target one level block do not throw in a function");
            o5.o7(function(){{{new.target;}}}, "new.target two level block do not throw in a function");
            o5.o7(function(){with({}) {new.target;}}, "new.target with scope body call does not throw");
            o5.o7(function() { function o8(o9) { new o9();}; function o10(){ with(new.target) {toString();}}; o8(o10); }, "new.target with scope parameter does not throw");
            o5.o7(function(){{if(true){new.target;}}}, "new.target condition block in nested block do not throw in a function");
            o5.o7(function(){try { throw Error;} catch(o11){new.target;}}, "new.target catch block do not throw in a function");
            o5.o7(function(){ var o12 = o13 = o14 = 1; try {} catch([o12,o13,o14]) { new.target;}}, "new.target in CatchParamPattern block do not throw in a function");
            o5.o7(function(){ var o9 = function() {new.target;}; o9();}, "new.target in function expression do not throw in a function");
            o5.o7(function(){ var o15 = { "foo" : function () { new.target}}; o15.o16();}, "new.target in named function expression do not throw in a function");
        }
    },
    {
        name: "Test new.target parsing path with badly-formed meta-property references",
        o3: function() {
            o5.o17(function() { return new['target']; }, o18, "Meta-property new.target is not a real property lookup", "Object doesn't support this action");
            o5.o17(function() { return eval('new.'); }, o19, "Something like 'new.' should fall out of the meta-property parser path", "Syntax error");
            o5.o17(function() { return eval('new.target2'); }, o19, "No other keywords should produce meta-properties", "Syntax error");
            o5.o17(function() { return eval('new.something'); }, o19, "No other keywords should produce meta-properties", "Syntax error");
            o5.o17(function() { return eval('new.eval'); }, o19, "No other keywords should produce meta-properties", "Syntax error");
        }
    },
    {
        name: "There is now a well-known PID for 'target' - ensure it doesn't break",
        o3: function() {
            var o20 = { target: 'something' };

            o5.o6('something', o20.target, "The name 'target' can be used as an identifier");
        }
    },
    {
        name: "new.target is not valid for assignment",
        o3: function() {
            o5.o17(function() { eval("new.target = 'something';"); }, o21, "new.target cannot be a lhs in an assignment expression - this is an early reference error", "Invalid left-hand side in assignment");
            o5.o17(function() { eval("((new.target)) = 'something';"); }, o21, "new.target cannot be a lhs in an assignment expression - this is an early reference error", "Invalid left-hand side in assignment");
        }
    },

    {
        name: "Simple base class gets new.target correctly",
        o3: function() {
            var o22 = false;

            class o23 {
                constructor() {
                    o5.o24(new.target === o23, "new.target === SimpleBaseClass");

                    o22 = true;
                }
            }

            var o25 = new o23();

            o5.o24(o22, "The constructor was called.");
        }
    },
    {
        name: "Simple derived and base class passes new.target correctly",
        o3: function() {
            var o22 = false;

            class o26 {
                constructor() {
                    o5.o24(new.target === o27, "new.target === DerivedClassForB");

                    o22 = true;
                }
            }

            class o27 extends o26 {
                constructor() {
                    o5.o24(new.target === o27, "new.target === DerivedClassForB");

                    super();
                }
            }

            var o28 = new o27();

            o5.o24(o22, "The super-chain was called.");
        }
    },
    {
        name: "Simple base class with arrow function using new.target correctly",
        o3: function() {
            var o22 = false;

            class o23 {
                constructor() {
                    var o29 = () => {
                        o5.o24(new.target === o23, "new.target === SimpleBaseClass");

                        o22 = true;
                    }

                    o29();
                }
            }

            var o25 = new o23();

            o5.o24(o22, "The constructor was called.");
        }
    },
    {
        name: "new.target behavior in arrow function inside derived class",
        o3: function() {
            let o30 = false;

            class o31 {
                constructor() {
                    let o29 = () => {
                        o5.o24(o32 === new.target, "Class constructor implicitly invoked via super call has new.target set to derived constructor (also in arrow)");
                        o30 = true;
                    };
                    o29();
                }
            }

            class o32 extends o31 {
                constructor() {
                    let o29 = () => {
                        o5.o24(o32 === new.target, "Class constructor explicitly invoked via new keyword has new.target set to that constructor (also in arrow)");
                    };
                    o29();
                    super();
                }
            }

            let o33 = new o32();
            o5.o24(o30, "We actually ran the constructor code");
        }
    },
    {
        name: "new.target behavior in a normal function",
        o3: function() {
            function o16() {
                o5.o24(undefined === new.target, "Normal function call has new.target set to undefined in the function body");

                return new.target;
            }

            o5.o24(undefined === o16(), "Normal function returning new.target returns undefined");
        }
    },
    {
        name: "new.target behavior in a normal function in a new expression",
        o3: function() {
            function o16() {
                o5.o24(o16 === new.target, "Function called as new expression has new.target set to the function in the function body");

                return new.target;
            }

            o5.o24(o16 === new o16(), "Function called-as-constructor has new.target set to that function");
        }
    },
    {
        name: "new.target behavior in an arrow in a normal function",
        o3: function() {
            function o16() {
                let o29 = () => {
                    o5.o24(undefined === new.target, "Normal function call has new.target set to undefined in the function body");

                    return new.target;
                };

                return o29();
            }

            o5.o24(undefined === o16(), "Normal function returning new.target returns undefined");
        }
    },
    {
        name: "new.target behaviour in an arrow in a normal function in a new expression",
        o3: function() {
            function o16() {
                let o29 = () => {
                    o5.o24(o16 === new.target, "Function called as new expression has new.target set to the function in the function body");

                    return new.target;
                };

                return o29();
            }

            o5.o24(o16 === new o16(), "Function called-as-constructor has new.target set to that function");
        }
    },
    {
        name: "new.target captured from class constructor via arrow",
        o3: function() {
            class o34 {
                constructor() {
                    let o29 = () => {
                        o5.o24(o35 === new.target, "Function called as new expression has new.target set to the function in the function body");

                        return new.target;
                    };

                    return o29;
                }
            }
            class o35 extends o34 {
                constructor() {
                    return super();
                }
            }

            let o29 = new o35();

            o5.o24(o35 === o29(), "Arrow capturing new.target returns correct value");
        }
    },
    {
        name: "new.target inline constructor case",
        o3: function() {
            function o16()
            {
                return new.target;
            }
            function o36()
            {
                return new o16(); //foo will be inlined here
            }
            o5.o24(o36() == o16, "Function called as new expression has new.target set to the function in the function body when the constructor is inlined");
        }
    },
    {
        name: "new.target inline  case",
        o3: function() {
            function o16()
            {
                return new.target;
            }
            function o36()
            {
                return o16(); //foo will be inlined here
            }
            o5.o24(o36() == undefined, "Normal inlined function has new.target set to undefined in the function body");
        }
    },
    {
        name: "new.target generator  case",
        o3: function() {
            function *o16()
            {
                yield new.target;
            }
            o5.o24((o16()).next().value == undefined, "Generator function has new.target set to undefined in the function body");
        }
    },
    {
        name: "new.target inside eval() in function",
        o3: function() {
            function o37() {
               var o38 = ()=>eval('new.target;');
               return o38();
            }

            o5.o6(undefined, o37(), "plain function call");
            o5.o6(undefined, eval("func()"), "function call inside eval");
            o5.o6(undefined, eval("eval('func()')"), "function call inside nested evals");
            o5.o6(undefined, (()=>o37())(), "function call inside arrow function");
            o5.o6(undefined, (()=>(()=>o37())())(), "function call inside nested arrow functions");
            o5.o6(undefined, eval("(()=>func())()"), "function call inside arrow function inside eval");
            o5.o6(undefined, (()=>eval("func()"))(), "function call inside eval inside arrow function");
            o5.o6(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval");

            o5.o6(o37, new o37(), "plain constructor call");
            o5.o6(o37, eval("new func()"), "constructor call inside eval");
            o5.o6(o37, eval("eval('new func()')"), "constructor call inside nested evals");
            o5.o6(o37, (()=>new o37())(), "constructor call inside arrow function");
            o5.o6(o37, (()=>(()=>new o37())())(), "constructor call inside nested arrow functions");
            o5.o6(o37, eval("(()=>new func())()"), "constructor call inside arrow function inside eval");
            o5.o6(o37, (()=>eval("new func()"))(), "constructor call inside eval inside arrow function");
            o5.o6(o37, eval("(()=>eval('new func()'))()"), "constructor call inside eval inside arrow function inside eval");
        }
    },
    {
        name: "new.target inside netsted eval, arrow function, and function defintion through eval",
        o3: function() {
            eval("function func() {var f = ()=>{function g() {}; return eval('new.target')}; return f(); }" );

            o5.o6(undefined, o37(), "plain function call");
            o5.o6(undefined, eval("func()"), "function call inside eval");
            o5.o6(undefined, eval("eval('func()')"), "function call inside nested evals");
            o5.o6(undefined, (()=>o37())(), "function call inside arrow function");
            o5.o6(undefined, (()=>(()=>o37())())(), "function call inside nested arrow functions");
            o5.o6(undefined, eval("(()=>func())()"), "function call inside arrow function inside eval");
            o5.o6(undefined, (()=>eval("func()"))(), "function call inside eval inside arrow function");
            o5.o6(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval");

            o5.o6(o37, new o37(), "plain constructor call");
            o5.o6(o37, eval("new func()"), "constructor call inside eval");
            o5.o6(o37, eval("eval('new func()')"), "constructor call inside nested evals");
            o5.o6(o37, (()=>new o37())(), "constructor call inside arrow function");
            o5.o6(o37, (()=>(()=>new o37())())(), "constructor call inside nested arrow functions");
            o5.o6(o37, eval("(()=>new func())()"), "constructor call inside arrow function inside eval");
            o5.o6(o37, (()=>eval("new func()"))(), "constructor call inside eval inside arrow function");
            o5.o6(o37, eval("(()=>eval('new func()'))()"), "constructor call inside eval inside arrow function inside eval");
        }
    },
    {
        name: "direct and indirect eval with new.target",
        o3: function() {
            function o39(o37, o40, o41, o42) {
                try {
                    o37();
                    throw Error("No exception thrown");
                } catch (o43) {
                    o5.o6(o40.name + ':' + o42, o43.name + ':' + o43.o44, o41);
               }
            }

            o39(()=>{ o0.o45("eval('new.target')", "samethread"); }, o19, "direct eval in global function", "Invalid use of the 'new.target' keyword");
            o39(()=>{ o0.o45("(()=>eval('new.target'))();", "samethread"); }, o19, "direct eval in lambda in global function", "Invalid use of the 'new.target' keyword");
            o39(()=>{ o0.o45("var f=()=>eval('new.target'); (function() { return f(); })();", "samethread"); }, o19, "direct eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
            o5.o7(()=>{ o0.o45("(function() { eval('new.target;') })()", "samethread"); }, "direct eval in function");
            o5.o7(()=>{ o0.o45("var f =(function() { return ()=>eval('new.target;') })(); f();", "samethread"); }, "direct eval in lambda defined in function and called by global function");

            o39(()=>{ o0.o45("(0, eval)('new.target;')", "samethread"); }, o19, "indirect eval in global function", "Invalid use of the 'new.target' keyword");
            o39(()=>{ o0.o45("(()=>(0, eval)('new.target'))();", "samethread"); }, o19, "indirect eval in lambda in global function", "Invalid use of the 'new.target' keyword");
            o39(()=>{ o0.o45("var f=()=>(0, eval)('new.target'); (function() { return f(); })();", "samethread"); }, o19, "indirect eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
            o39(()=>{ o0.o45("(function() { (0, eval)('new.target;') })()", "samethread")}, o19, "indirect eval in function", "Invalid use of the 'new.target' keyword");
            o39(()=>{ o0.o45("var f =(function() { return ()=>(0, eval)('new.target;') })(); f();", "samethread"); }, o19, "indirect eval in lambda defined in function and called by global function", "Invalid use of the 'new.target' keyword");

        }
    },
];

o46.o47(o2, { o48: o0.o49[0] != "summary" });
