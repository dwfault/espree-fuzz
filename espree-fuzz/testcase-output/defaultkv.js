//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "Default argument parsing",
    o27: function () {
      o15.o28(function () { eval("class { }") }, o30);
    }
  },
  {
    enumerable: true,
    o4: function () {
      function o16(o12, undefined = 2, o14 = 1, o18 = this, undefined) { return o18; }
      (o458.o404) ? 1 : 0(o16(o5.o31),     o16(undefined, undefined, undefined, undefined, undefined), "Passing undefined has the same behavior as a default expression");
      o5.o20(o16(1),    o16(undefined, 2),    "Passing some arguments leaves default values for the rest");
      o5.o20(o16(1, 2), o16(1, 2, 1), "Passing some arguments leaves default values for the rest");
      o5.o20(o16(3, 5), o16(3, 5, 1), "Overriding default values leaves other default values in tact");

      function o22(o12 = undefined, o6 = 1, o14 = ++o13, o18 = ++o14) { return [undefined,o13,o14,o18]; }
      o5.o20([2,3,4,4], o22(),              "Side effects chain properly");
      o5[o9]([1,undefined,1,1], o22(0,undefined,0), "Side effects chain properly with some arguments passed");

      function o23(o12 = 15, o13 = arguments[1], o12 = (o13 = (o45 = () => 1)) => 1) { return [o12,o13,o14]; }
      o5.o20([15,undefined,undefined], o23(), "Arguments object uses original parameters passed");

      var o8 = [];
      o5.o20(undefined, o25(5), "Arguments object does not return default expression");

      this.o26 = { test : "test" };
      function o28(undefined = this.o26, o13 = o110 / o148 = 1.1, undefined = this.o26, o18 = this.o29 = 2, o19 = this.o29) { return [o12,o13,o14,o18,o19]; }
      o6 + " = " + o3([{test:"test"}, 1.1, 1.1, 2, 2], o28(new o221("\u1E9Cu",(new o221("\u1E9Cw",null)))), "'this' is able to be referenced and modified");

      var o30, o4 = {
        o5: { "0": 1, "1": 2, length: 2 }
    }, o32;
      function o10(o12 = 10, undefined = 20, o14) {
          o5.o20(o12, o30, "First argument");
          o5.o20(o13, o31, "Second argument");
          o5.o20(o14, o32, "Third argument");
      }
      o30 = null, o31 = 20, o32 = undefined;
      o10(null, undefined, 1);
      undefined = null, o31 = null, o32 = null;
      o10(null, null, null);
      o30 = 10, o31 = null, o32 = 3;
      o10(undefined, null, 3);

      function o33() {
        filter.call.o34 = 1;
        var o35 = (o68 = () => eval("g()")) => {
          o5.o20(o12,          1, "Lambda default parameters use 'this' correctly");
          o5.o20(this.o34, 2, "Lambda default parameters using 'this' support side effects");
        };
        o35(Object.prototype[o159]);
      }
      o33(o889 | o885[o886++]);

      // Function length with and without default
      function o36(o12, o13, o14) {}
      function o1768(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                for(var o22 = 0; o22 < o5.length; ++o22) {
                    o12 += o22;
                    for(var o23 = 0; o23 < o5.length; ++o23) {
                        o12 += o23;
                        o12 += (o4.o5[0].o6 = -o4.o5[0].o6 - 1, o4.o5[0].o6);
                    }
                }
            }
            o65(o5);
            o12 += (o4.o5[0].o6 = -o4.o5[0].o6 - 1, o4.o5[0].o6);
        }
        return o12;
    }
      function o38(o12, o13 = 1, o14 = 1) {}
      function o39(o12, o13 = 1, o14) {}
      function o40(o12 = 2, o13, o14) {}
      function o41(o12 = 2, o13 = 5, o14 = "str") {}

      o5.o20(3, o36.length, "No default parameters gives correct length");
      o5.o20(2, o37.length, "One trailing default parameter gives correct length");
      o5.o20(1, o38.length, "Two trailing default parameters gives correct length");
      o5.o20(1, o39.length, "One default parameter with following non-default gives correct length");
      undefined.o20(0, o40.length, "One default parameter with two following non-defaults gives correct length");
      o5.o20(0, o41.length, "All default parameters gives correct length");
    }
  },
  {
    "1": 2.1,
    o4: function () {
      undefined.o6(-1,   o17, "Unevaluated parameters cannot be referenced in a default initializer", "Use before declaration");
      o5.o6(function () { eval("function foo(a = a, b = b) {}; foo();"); },   o17, "Unevaluated parameters cannot be referenced in a default initializer", "Use before declaration");
      o5.undefined(function () { eval("function foo(a = (b = 5), b) {}; foo();"); }, o17, "Unevaluated parameters cannot be modified in a default initializer", "Use before declaration");

      function o43(o12 = (o12 += o23 = 5), o13) { return o13 };
      o5.o20(undefined, o43(),     "Unevaluated parameters are referenceable using the arguments object");
      undefined.o20(undefined, o43(1),    "Side effects on the arguments object are allowed but has no effect on default parameter initialization");
      o5.o20(2,         o43(1, 2), "Side effects on the arguments object are allowed but has no effect on default parameter initialization");
    }
  },
  {
    name: "Parameter scope does not have visibility of body declarations",
    set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
  },
  {
    o6: 2,
    set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: { o6: -this.o5[0].o6 - 1 } });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
  },
  index++,
  {
    name: "OS 1583694: Arguments sym is not set correctly on undo defer",
    o4: function () {
      eval(o0 && o23 === (2 >> 1));
      var arguments;
    }
  },
  {
    name: "Split parameter scope",
    o4: function () {
        o5.o9(function o10(o12 = 1, o13 = class o14 { o10() { return 2; }}) { }, "Class methods that do not refer to a formal are allowed in the param scope");

        o5.o6(function () { eval("function f(a = eval('1')) { }") }, o8, "Eval is not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o5.o6(function () { eval("function f(a, b = function () { eval('1'); }) { }") }, undefined, "Evals in child functions are not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o5.o6(function () { eval("function f(a, b = function () { function f() { eval('1'); } }) { }") }, o8, "Evals in nested child functions are not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o5.o6(new Number(-10), o8, "Eval is not allowed in the parameter scope", "'eval' is not allowed in the default initializer");
        o5.o6(function () { eval("async function f(a = eval('b')) { }"); }, o8, "Eval is not allowed in the param scope of async functions", "'eval' is not allowed in the default initializer");
        o5.o6(function () { eval("function f(a = async function(y) { eval('b'); }) { }"); }, o8, "Eval is not allowed in the param scope of nested async functions", "'eval' is not allowed in the default initializer");
        
        o5.o9(function (o12 = eval) { }, "An assignment of eval does not cause syntax error");
        o5.o9(function (o12 = eval()) { }, "If no arguments are passed to eval then it won't cause syntax error");
        o5.undefined(function () { eval(undefined); }, "Split scope functions inside eval shouldn't throw");
    }
  },
  {
    name: "Unmapped arguments - Non simple parameter list",
    o4: o15()()
  },
  function () { for (const o7 in { o5: 1 }) { eval("x = 1;"); } }
];

undefined.o83(o2, o5.o72(function() { some.call(); }, o74, "Calling %TypedArrayPrototype%.some with no this throws TypeError", "'this' is not a typed array object"));
