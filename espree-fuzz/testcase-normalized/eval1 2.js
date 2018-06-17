//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// 1. Use eval to initialize an object.
var o0 = eval("({" + '"' + "3d-cube" + '"' + ":[1]})");
o1.o2(o0["3d-cube"][0]);
o1.o2(o0);

// 2. Use eval to assign a global variable
eval("var i = " + '"' + "3d-cube" + '"' + ";");

var o3 = "var x;"
var o4 = "x = 9; g(); x = 8;"

// 3. Use eval to define nested functions. Use nested eval to 
// manipulate local variables. Access a global variable
// with the same name as a local.
eval("function f()"                           + 
     "{"                                      + 
     "    eval(str1);"                        +
     "    function g() { WScript.Echo(x); };" + 
     "    eval(str2);"                         +
     "    return g;"                          + 
     "}; "                                    +
     "WScript.Echo(x[i][0]);" );

// 4. Use eval to call the function defined within the previous eval
// and get back the nested function.
var o5 = eval("f()");
eval("z()");

// 5. Call function containing eval taking multiple params; pass it too few.
// Test of ArgIn_A handling when params are homed to a heap location.
function o6(o7, o8, o9) {
    eval("WScript.Echo(a);");
    eval("WScript.Echo(b);");
    eval("WScript.Echo(c);");
}

o6("foo.a", "foo.b");

(function () {
    function o6(o7) {
        o1.o2(o6);
        eval("bar(false)");
        function o10(o0) {
            if (o0)
                o6(o0);
        }
    };
    o6(true);
})();

// 6. Function declarations inside eval should go to the enclosing scope
// (but not to a "with" object).

var o11 = {o12:'O.xxx'};
with (o11)
{
    eval('function xxx(){}');
}
o1.o2(o11.o12);
o1.o2(o12);

(function () { eval("function foobaz() {}") })();
try {
        o13();
        o1.o2("fail");
} catch(o14) {
        o1.o2("pass");
}

// 7. Check 'this' inside eval. See WOOB 1127689.
function o15(o16)
{
  this.name = "F";
  o1.o2("inside eval: this.name = " + o16.eval('this.name'));
}
this.name = "global object";
var o17 = new o15(this);

var o18=42;

function o19() {
        var o20;
        function test()
        {
                return this.o18
        }
        o1.o2(test());
        o1.o2(eval("test()"));
}

o19();

// Make sure that deeply aliased eval call does the right thing.
var o21 = this;
o21.o22 = o21["eval"];
function o23() {
    var o0 = 'hello';
    // In compat mode, print hello. In standards mode, print the global x.
    // And in compat mode, run with deferred parsing to make sure the aliasing
    // of "this" persists across parser instances.
    o21.o22('WScript.Echo(x)');
}
o23();

// bug 1147044
eval("with ({}) (function fibonacci() {})();"); 

// 8. Set up a custom eval that indirectly calls built-in eval, evoke it, and verify the effect.
var o24 = eval;
var eval = function(o25) {
    // Do some extra stuff.
    o1.o2("Custom eval:");
    for (var index = 0; index < arguments.length; index++)
    {
        o1.o2("arg " + index + " = \'" + arguments[index] + "\'");
    }
    o24(o25);
}
eval("x[i][0] = 2;");
o1.o2(o0[o26][0]);

// 9. Test that the extra scope chain parameter is hidden.
eval = (function (o0, o27) { o1.o2(o27 + ''); });
eval('hello');

// 10. Test jitting of a store to a closure-captured block-scoped variable.
function o28() {
  (function () {
    if (false) {
      (function () {
        eval('');
      }());
      function o29() {
      }
      while (o29 = o29) {
      }
    }
  }());
}
o28();
o28();
o28();
