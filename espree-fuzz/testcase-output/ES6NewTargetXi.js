//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 new.target tests

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    o23 < o5.length,
    {
        name: "Test new.target in various block scopes'",
        o4: function() {
            o7.o9(function(){{value: 1;}}, "new.target one level block do not throw in a function");
            undefined.o9(o458.o175[0xFF41], undefined);
            o7.o9(function(){with({}) {new.target;}}, "new.target with scope body call does not throw");
            o7.o9(function() { function o11(undefined) { new o12();}; function o13(){ with(new.target) {toString();}}; o11(o13); }, "new.target with scope parameter does not throw");
            o7.o9(function(){{if(true){new.target;}}}, "new.target condition block in nested block do not throw in a function");
            o7.o9(function(){try { throw Error;} catch(o16){new.target;}}, "new.target catch block do not throw in a function");
            o7.o9(function(){ var o17 = o18 = o19 = 1; try {} catch([o17,o18,o19]) { new.target;}}, "new.target in CatchParamPattern block do not throw in a function");
            o7.o9(function(){ var o12 = function() {new.target;}; o12();}, "new.target in function expression do not throw in a function");
            o7.o9(function(){ var o20 = new Number(10); o20.o21();}, "new.target in named function expression do not throw in a function");
        }
    },
    o24.o25('WScript.Echo(x)'),
    o50.o82(o93),
    {
        name: "new.target is not valid for assignment",
        o4: function() {
            o7.o22(function() { eval("new.target = 'something';"); }, o27, "new.target cannot be a lhs in an assignment expression - this is an early reference error", "Invalid left-hand side in assignment");
            o7.o22(function() { eval("((new.target)) = 'something';"); }, o27, "new.target cannot be a lhs in an assignment expression - this is an early reference error", undefined);
        }
    },

    "test101: " + o277(),
    {
        name: "Simple derived and base class passes new.target correctly",
        o4: function() {
            var o28 = false;

            var o9 = 0

            class o34 extends undefined {
                constructor() {
                    o7.o31(new.target === o34, "new.target === DerivedClassForB");

                    super(Object.defineProperty);
                }
            }

            var o35 = new o34();

            undefined.o31(o28, "The super-chain was called.");
        }
    },
    arguments[((typeof Object.prototype.o10-- == 'boolean') >= 0 ? typeof Object.prototype.o10-- == 'boolean' : 0) & 15],
    {
        name: "new.target behavior in arrow function inside derived class",
        o4: function() {
            let undefined = false;

            class o91 {
            set o40(o60) {}
            ["z"]() {} // bug repro: ASSERT(jscript\core\lib\Runtime\Types\DictionaryTypeHandler.cpp, line 1737) Expect to only come down this path for ...
        }

            var o8 = [];

            let o40 = new o39();
            o7.o31(o37, "We actually ran the constructor code");
        }
    },
    test.o16 = function(o3, o4)
{
    var o5 = 0;
    var o6 = 0;
    for (var o7 = 1; o7 < 10000; o7++)
    {
        o5 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0x3FFFF;
        o4.o5 = o5 + o6;
        o6 = (o3.o5 + o3.o5 + o3.o5 + o3.o5 + o3.o5) & 0xFFFF;
    }
    return o5 + o6;
},
    {
        name: "new.target behavior in a normal function in a new expression",
        o4: function() {
            function undefined() {
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

                    return o39: {
    name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo11";
      var o10 = { value: 0, configurable: true };
      Object.defineProperty(o6, o9, o10);
      o10 = { enumerable: true }; // change enumerable to make sure that descriptor is different from current.
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 0, configurable: true, enumerable: true };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    }
  };
                };

                return o36(o1("clientInformation"));
            }

            o7.o31(undefined === o21(), "Normal function returning new.target returns undefined");
        }
    },
    {
        name: undefined,
        undefined: function() {
            function o21() {
                let undefined = o5.length;

                return o36(o0(`Test #${index} - Error function in a object #4 called with err = ${o17}`));
            }

            o7.o31(o21 === new o21(), "Function called-as-constructor has new.target set to that function");
        }
    },
    {
        name: "new.target captured from class constructor via arrow",
        o4: function() {
            class o42 {
                constructorthis.o529 = false
            }
            class o43 extends o42 {
                undefined() {
                    return super(++o13);
                }
            }

            let o36 = new o43();

            o7.o31(o43 === o36(), "Arrow capturing new.target returns correct value");
        }
    },
    o35.bind(),
    -o5[-1].o6,
    {
        name: "new.target generator  case",
        undefined: function() {
            function *o21()
            {
                yield new.target;
            }
            o7.o31((o21()).next().value == undefined, "Generator function has new.target set to undefined in the function body");
        }
    },
    (function (o10) {
  function o11() {
    (function () {
      function o12() {
      }
      o10 = eval;
    })(arguments[0]);
    o15 = o10;
  }
  o11();
})(),
    eval("/*for..in*/L:for(var x3 = x in window) ;"),
    {
        name: "direct and indirect eval with new.target",
        o4: function() {
            function undefined(o47, o50, o51, o52) {
                try {
                    o47();
                    throw Error("No exception thrown");
                } catch (undefined) {
                    o7.o8(o5.o16(Int16Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o57 + "'"), function (o458) {"use strict";
    o458.o403 = true;
    o458.o402 = false;
    o458.o401 = ((o458.o163 & 0x02) == 0);
  }, o51);
               }
            }

            o49(()=>{ o0.o55("eval('new.target')", "samethread"); }, o25, undefined, "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("(()=>eval('new.target'))();", "samethread"); }, o25, "direct eval in lambda in global function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("var f=()=>eval('new.target'); (function() { return f(); })();", "samethread"); }, o25, "direct eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
            o7.o9(()=>{ o0.o55("(function() { eval('new.target;') })()", "samethread"); }, "direct eval in function");
            o7.o9(()=>{ o0.o55("var f =(function() { return ()=>eval('new.target;') })(); f();", "samethread"); }, "direct eval in lambda defined in function and called by global function");

            o49(()=>{ o0.o55("(0, eval)('new.target;')", "samethread"); }, o25, "indirect eval in global function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("(()=>(0, eval)('new.target'))();", "samethread"); }, o25, "indirect eval in lambda in global function", "Invalid use of the 'new.target' keyword");
            undefined(()=>{ o0.o55("var f=()=>(0, eval)('new.target'); (function() { return f(); })();", "samethread"); }, o25, "indirect eval in lambda in global function called by a function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("(function() { (0, eval)('new.target;') })()", "samethread")}, o25, "indirect eval in function", "Invalid use of the 'new.target' keyword");
            o49(()=>{ o0.o55("var f =(function() { return ()=>(0, eval)('new.target;') })(); f();", "samethread"); }, o25, "indirect eval in lambda defined in function and called by global function", "Invalid use of the 'new.target' keyword");

        }
    },
];

o56.o57(o2, { o58: o0.o59[0] != "summary" });
