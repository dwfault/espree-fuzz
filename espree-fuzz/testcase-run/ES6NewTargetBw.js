//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 new.target tests

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    o190 >> 8,
    {
        name: "Test new.target in various block scopes'",
        o3: function() {
            try {
o5.o7(function(){{try {
new.target;
}catch(e){}}}, "new.target one level block do not throw in a function");
}catch(e){}
            try {
o5.o7(function(){{{try {
new.target;
}catch(e){}}}}, "new.target two level block do not throw in a function");
}catch(e){}
            try {
o5.o7(function(){try {
with({}) {try {
new.target;
}catch(e){}}
}catch(e){}}, "new.target with scope body call does not throw");
}catch(e){}
            try {
o5.o7(function() { function o8(o9) { try {
new o9();
}catch(e){}}try {
;
}catch(e){} function o10(){ try {
with(new.target) {try {
toString();
}catch(e){}}
}catch(e){}}try {
;
}catch(e){} try {
o8(o10);
}catch(e){} }, "new.target with scope parameter does not throw");
}catch(e){}
            try {
o5.o7(function(){{try {
if(true){try {
new.target;
}catch(e){}}
}catch(e){}}}, "new.target condition block in nested block do not throw in a function");
}catch(e){}
            try {
o5.o7(function(){try {
try { try {
throw Error;
}catch(e){}} catch(o11){try {
new.target;
}catch(e){}}
}catch(e){}}, "new.target catch block do not throw in a function");
}catch(e){}
            try {
o5.o7(function(){ var o12 = o13 = o14 = 1; try {
try {} catch([o12,o13,o14]) { try {
new.target;
}catch(e){}}
}catch(e){}}, "new.target in CatchParamPattern block do not throw in a function");
}catch(e){}
            try {
o5.o7(function(){ var o9 = function() {try {
new.target;
}catch(e){}}; try {
o9();
}catch(e){}}, "new.target in function expression do not throw in a function");
}catch(e){}
            try {
o5.o7(function(){ var o15 = { "foo" : function () { try {
new.target
}catch(e){}}}; try {
o15.o16();
}catch(e){}}, "new.target in named function expression do not throw in a function");
}catch(e){}
        }
    },
    {
        name: "Test new.target parsing path with badly-formed meta-property references",
        o3: function() {
            try {
o5.o17(function() { try {
return new['target'];
}catch(e){} }, o18, "Meta-property new.target is not a real property lookup", "Object doesn't support this action");
}catch(e){}
            try {
o5.o17(function() { try {
return eval('new.');
}catch(e){} }, o19, "Something like 'new.' should fall out of the meta-property parser path", "Syntax error");
}catch(e){}
            try {
o5.o17(function() { try {
return eval('new.target2');
}catch(e){} }, o19, "No other keywords should produce meta-properties", "Syntax error");
}catch(e){}
            try {
o5.o17(function() { try {
return eval('new.something');
}catch(e){} }, o19, "No other keywords should produce meta-properties", "Syntax error");
}catch(e){}
            try {
o5.o17(function() { try {
return eval('new.eval');
}catch(e){} }, o19, "No other keywords should produce meta-properties", "Syntax error");
}catch(e){}
        }
    },
    {
        name: "There is now a well-known PID for 'target' - ensure it doesn't break",
        o3: function() {
            var o20 = { target: 'something' };

            try {
o5.o6('something', o20.target, "The name 'target' can be used as an identifier");
}catch(e){}
        }
    },
    {
        name: "new.target is not valid for assignment",
        o3: function() {
            try {
o5.o17(function() { try {
eval("new.target = 'something';");
}catch(e){} }, o21, "new.target cannot be a lhs in an assignment expression - this is an early reference error", "Invalid left-hand side in assignment");
}catch(e){}
            try {
o5.o17(function() { try {
eval("((new.target)) = 'something';");
}catch(e){} }, o21, "new.target cannot be a lhs in an assignment expression - this is an early reference error", "Invalid left-hand side in assignment");
}catch(e){}
        }
    },

    {
        name: "Simple base class gets new.target correctly",
        o3: function() {
            var o22 = false;

            class o23 {
                constructor() {
                    try {
o5.o24(new.target === o23, "new.target === SimpleBaseClass");
}catch(e){}

                    try {
o22 = true;
}catch(e){}
                }
            }

            var o25 = new o23();

            try {
o5.o24(o22, "The constructor was called.");
}catch(e){}
        }
    },
    {
        name: "Simple derived and base class passes new.target correctly",
        o3: function() {
            var o22 = false;

            class o26 {
                constructor() {
                    try {
o5.o24(new.target === o27, "new.target === DerivedClassForB");
}catch(e){}

                    try {
o22 = true;
}catch(e){}
                }
            }

            class o27 extends o26 {
                constructor() {
                    try {
o5.o24(new.target === o27, "new.target === DerivedClassForB");
}catch(e){}

                    try {
super();
}catch(e){}
                }
            }

            var o28 = new o27();

            try {
o5.o24(o22, "The super-chain was called.");
}catch(e){}
        }
    },
    {
        name: "Simple base class with arrow function using new.target correctly",
        o3: function() {
            var o22 = false;

            class o23 {
                constructor() {
                    var o29 = () => {
                        try {
o5.o24(new.target === o23, "new.target === SimpleBaseClass");
}catch(e){}

                        try {
o22 = true;
}catch(e){}
                    }

                    try {
o29();
}catch(e){}
                }
            }

            var o25 = new o23();

            try {
o5.o24(o22, "The constructor was called.");
}catch(e){}
        }
    },
    {
        name: "new.target behavior in arrow function inside derived class",
        o3: function() {
            let o30 = false;

            class o31 {
                constructor() {
                    let o29 = () => {
                        try {
o5.o24(o32 === new.target, "Class constructor implicitly invoked via super call has new.target set to derived constructor (also in arrow)");
}catch(e){}
                        try {
o30 = true;
}catch(e){}
                    };
                    try {
o29();
}catch(e){}
                }
            }

            class o32 extends o31 {
                constructor() {
                    let o29 = () => {
                        try {
o5.o24(o32 === new.target, "Class constructor explicitly invoked via new keyword has new.target set to that constructor (also in arrow)");
}catch(e){}
                    };
                    try {
o29();
}catch(e){}
                    try {
super();
}catch(e){}
                }
            }

            let o33 = new o32();
            try {
o5.o24(o30, "We actually ran the constructor code");
}catch(e){}
        }
    },
    {
        name: "new.target behavior in a normal function",
        o3: function() {
            function o16() {
                try {
o5.o24(undefined === new.target, "Normal function call has new.target set to undefined in the function body");
}catch(e){}

                try {
return new.target;
}catch(e){}
            }

            try {
o5.o24(undefined === o16(), "Normal function returning new.target returns undefined");
}catch(e){}
        }
    },
    {
        name: "new.target behavior in a normal function in a new expression",
        o3: function() {
            function o16() {
                try {
o5.o24(o16 === new.target, "Function called as new expression has new.target set to the function in the function body");
}catch(e){}

                try {
return new.target;
}catch(e){}
            }

            try {
o5.o24(o16 === new o16(), "Function called-as-constructor has new.target set to that function");
}catch(e){}
        }
    },
    {
        name: "new.target behavior in an arrow in a normal function",
        o3: function() {
            function o16() {
                let o29 = () => {
                    try {
o5.o24(undefined === new.target, "Normal function call has new.target set to undefined in the function body");
}catch(e){}

                    try {
return new.target;
}catch(e){}
                };

                try {
return o29();
}catch(e){}
            }

            try {
o5.o24(undefined === o16(), "Normal function returning new.target returns undefined");
}catch(e){}
        }
    },
    {
        name: "new.target behaviour in an arrow in a normal function in a new expression",
        o3: function() {
            function o16() {
                let o29 = () => {
                    try {
o5.o24(o16 === new.target, "Function called as new expression has new.target set to the function in the function body");
}catch(e){}

                    try {
return new.target;
}catch(e){}
                };

                try {
return o29();
}catch(e){}
            }

            try {
o5.o24(o16 === new o16(), "Function called-as-constructor has new.target set to that function");
}catch(e){}
        }
    },
    {
        name: "new.target captured from class constructor via arrow",
        o3: function() {
            class o34 {
                constructor() {
                    let o29 = () => {
                        try {
o5.o24(o35 === new.target, "Function called as new expression has new.target set to the function in the function body");
}catch(e){}

                        try {
return new.target;
}catch(e){}
                    };

                    try {
return o29;
}catch(e){}
                }
            }
            class o35 extends o34 {
                constructor() {
                    try {
return super();
}catch(e){}
                }
            }

            let o29 = new o35();

            try {
o5.o24(o35 === o29(), "Arrow capturing new.target returns correct value");
}catch(e){}
        }
    },
    {
        name: "new.target inline constructor case",
        o3: function() {
            function o16()
            {
                try {
return new.target;
}catch(e){}
            }
            function o36()
            {
                try {
return new o16();
}catch(e){} //foo will be inlined here
            }
            try {
o5.o24(o36() == o16, "Function called as new expression has new.target set to the function in the function body when the constructor is inlined");
}catch(e){}
        }
    },
    {
        name: "new.target inline  case",
        o3: function() {
            function o16()
            {
                try {
return new.target;
}catch(e){}
            }
            function o36()
            {
                try {
return o16();
}catch(e){} //foo will be inlined here
            }
            try {
o5.o24(o36() == undefined, "Normal inlined function has new.target set to undefined in the function body");
}catch(e){}
        }
    },
    {
        name: "new.target generator  case",
        o3: function() {
            function *o16()
            {
                try {
yield new.target;
}catch(e){}
            }
            try {
o5.o24((o16()).next().value == undefined, "Generator function has new.target set to undefined in the function body");
}catch(e){}
        }
    },
    {
        name: "new.target inside eval() in function",
        o3: function() {
            function o37() {
               var o38 = ()=>eval('new.target;');
               try {
return o38();
}catch(e){}
            }

            try {
o5.o6(undefined, o37(), "plain function call");
}catch(e){}
            try {
o5.o6(undefined, eval("func()"), "function call inside eval");
}catch(e){}
            try {
o5.o6(undefined, eval("eval('func()')"), "function call inside nested evals");
}catch(e){}
            try {
o5.o6(undefined, (()=>o37())(), "function call inside arrow function");
}catch(e){}
            try {
o5.o6(undefined, (()=>(()=>o37())())(), "function call inside nested arrow functions");
}catch(e){}
            try {
o5.o6(undefined, eval("(()=>func())()"), "function call inside arrow function inside eval");
}catch(e){}
            try {
o5.o6(undefined, (()=>eval("func()"))(), "function call inside eval inside arrow function");
}catch(e){}
            try {
o5.o6(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval");
}catch(e){}

            try {
o5.o6(o37, new o37(), "plain constructor call");
}catch(e){}
            try {
o5.o6(o37, eval("new func()"), "constructor call inside eval");
}catch(e){}
            try {
o5.o6(o37, eval("eval('new func()')"), "constructor call inside nested evals");
}catch(e){}
            try {
o5.o6(o37, (()=>new o37())(), "constructor call inside arrow function");
}catch(e){}
            try {
o5.o6(o37, (()=>(()=>new o37())())(), "constructor call inside nested arrow functions");
}catch(e){}
            try {
o5.o6(o37, eval("(()=>new func())()"), "constructor call inside arrow function inside eval");
}catch(e){}
            try {
o5.o6(o37, (()=>eval("new func()"))(), "constructor call inside eval inside arrow function");
}catch(e){}
            try {
o5.o6(o37, eval("(()=>eval('new func()'))()"), "constructor call inside eval inside arrow function inside eval");
}catch(e){}
        }
    },
    {
        name: "new.target inside netsted eval, arrow function, and function defintion through eval",
        o3: function() {
            try {
eval("function func() {var f = ()=>{function g() {}; return eval('new.target')}; return f(); }" );
}catch(e){}

            try {
o5.o6(undefined, o37(), "plain function call");
}catch(e){}
            try {
o5.o6(undefined, eval("func()"), "function call inside eval");
}catch(e){}
            try {
o5.o6(undefined, eval("eval('func()')"), "function call inside nested evals");
}catch(e){}
            try {
o5.o6(undefined, (()=>o37())(), "function call inside arrow function");
}catch(e){}
            try {
o5.o6(undefined, (()=>(()=>o37())())(), "function call inside nested arrow functions");
}catch(e){}
            try {
o5.o6(undefined, eval("(()=>func())()"), "function call inside arrow function inside eval");
}catch(e){}
            try {
o5.o6(undefined, (()=>eval("func()"))(), "function call inside eval inside arrow function");
}catch(e){}
            try {
o5.o6(undefined, eval("(()=>eval('func()'))()"), "function call inside eval inside arrow function inside eval");
}catch(e){}

            try {
o5.o6(o37, new o37(), "plain constructor call");
}catch(e){}
            try {
o5.o6(o37, eval("new func()"), "constructor call inside eval");
}catch(e){}
            try {
o5.o6(o37, eval("eval('new func()')"), "constructor call inside nested evals");
}catch(e){}
            try {
o5.o6(o37, (()=>new o37())(), "constructor call inside arrow function");
}catch(e){}
            try {
o5.o6(o37, (()=>(()=>new o37())())(), "constructor call inside nested arrow functions");
}catch(e){}
            try {
o5.o6(o37, eval("(()=>new func())()"), "constructor call inside arrow function inside eval");
}catch(e){}
            try {
o5.o6(o37, (()=>eval("new func()"))(), "constructor call inside eval inside arrow function");
}catch(e){}
            try {
o5.o6(o37, eval("(()=>eval('new func()'))()"), "constructor call inside eval inside arrow function inside eval");
}catch(e){}
        }
    },
    {
        name: "direct and indirect eval with new.target",
        o3: function() {
            function o39(o37, o40, o41, o42) {
                try {
try {
                    try {
o37();
}catch(e){}
                    try {
throw Error("No exception thrown");
}catch(e){}
                } catch (o43) {
                    try {
o5.o6(o40.name + ':' + o42, o43.name + ':' + o43.o44, o41);
}catch(e){}
               }
}catch(e){}
            }

            try {
o39(()=>{ try {
o0.o45("eval('new.target')", "samethread");
}catch(e){} }, o19, "direct eval in global function", "Invalid use of the 'new.target' keyword");
}catch(e){}
            try {
o39(()=>{ try {
o0.o45("(()=>eval('new.target'))();", "samethread");
}catch(e){} }, o19, "direct eval in lambda in global function", "Invalid use of the 'new.target' keyword");
}catch(e){}
            try {
o39(()=>{ try {
o0.o45("var f=()=>eval('new.target'); (function() { return f(); })();", "samethread");
}catch(e){} }, o19, "direct eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
}catch(e){}
            try {
o5.o7(()=>{ try {
o0.o45("(function() { eval('new.target;') })()", "samethread");
}catch(e){} }, "direct eval in function");
}catch(e){}
            try {
o5.o7(()=>{ try {
o0.o45("var f =(function() { return ()=>eval('new.target;') })(); f();", "samethread");
}catch(e){} }, "direct eval in lambda defined in function and called by global function");
}catch(e){}

            try {
o39(()=>{ try {
o0.o45("(0, eval)('new.target;')", "samethread");
}catch(e){} }, o19, "indirect eval in global function", "Invalid use of the 'new.target' keyword");
}catch(e){}
            try {
o39(()=>{ try {
o0.o45("(()=>(0, eval)('new.target'))();", "samethread");
}catch(e){} }, o19, "indirect eval in lambda in global function", "Invalid use of the 'new.target' keyword");
}catch(e){}
            try {
o39(()=>{ try {
o0.o45("var f=()=>(0, eval)('new.target'); (function() { return f(); })();", "samethread");
}catch(e){} }, o19, "indirect eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
}catch(e){}
            try {
o39(()=>{ try {
o0.o45("(function() { (0, eval)('new.target;') })()", "samethread")
}catch(e){}}, o19, "indirect eval in function", "Invalid use of the 'new.target' keyword");
}catch(e){}
            try {
o39(()=>{ try {
o0.o45("var f =(function() { return ()=>(0, eval)('new.target;') })(); f();", "samethread");
}catch(e){} }, o19, "indirect eval in lambda defined in function and called by global function", "Invalid use of the 'new.target' keyword");
}catch(e){}

        }
    },
];

try {
o46.o47(o2, this.o512);
}catch(e){}
