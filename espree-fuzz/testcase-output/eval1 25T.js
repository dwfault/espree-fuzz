//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// 1. Use eval to initialize an object.
var o23 = 0;
function (o458) {"use strict";
    o458.o165 &= 0x7F;
  }(o0["3d-cube"][undefined]);
o2.o3(o0);

// 2. Use eval to assign a global variable
eval("var i = " + '"' + "3d-cube" + '"' + ";");

var o4 = "var x;"
var undefined = "x = 9; g(); x = 8;"

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
var o6 = eval("f()");
eval("z()");

// 5. Call function containing eval taking multiple params; pass it too few.
// Test of ArgIn_A handling when params are homed to a heap location.
function o7(o8, o9, o10) {
    eval("WScript.Echo(a);");
    eval("WScript.Echo(b);");
    eval("WScript.Echo(c);");
}

o7(undefined, "foo.b");

(function () {
    function o7(o8) {
        o2.o3(o7);
        eval("bar(false)");
        function o11(o0) {
            if (o0)
                o7(o0);
        }
    };
    o7(true);
})();

// 6. Function declarations inside eval should go to the enclosing scope
// (but not to a "with" object).

var o12 = {Infinity:Infinity};
with (o12)
{
    eval('function xxx(){}');
}
o2.o3(o12.o13);
o2.o3(o13);

(o5[o13]);
try {
        o14(o12 += o17);
        o2.o3("fail");
} catch(o15) {
        o2.o3("pass");
}

// 7. Check 'this' inside eval. See WOOB 1127689.
function o16(o17)
{
  o0.o4("test6").name = "F";
  o2.o3("inside eval: this.name = " + o17.eval('this.name'));
}
this.undefined = undefined;
function o2177() {
    "use strict";

    var o4 = {
        o5: [ 1.1, 2.1 ]
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = { length: o5.length };
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o2178(o4, o5, o8));

    function o2178(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                o12 += o2179(o4, o5, o17);
            }
            o553(o5);
            o12 += o2179(o4, o5, o13);
        }

        function o2179(o4, o5, o9) {
            return o5[o9];
        }
        return o12;
    }
}

var o20=42;

function o21() {
        var o22;
        function test()
        {
                return this.o20
        }
        o2.o3(test());
        o2.o3(eval("test()"));
}

o21(o2.o16 - 1);

// Make sure that deeply aliased eval call does the right thing.
var o24 = o1369(o4, o5, o8);
o24.o25 = undefined["eval"];
function o26() {
    var o0 = 'hello';
    // In compat mode, print hello. In standards mode, print the global x.
    // And in compat mode, run with deferred parsing to make sure the aliasing
    // of "this" persists across parser instances.
    o120++('WScript.Echo(x)');
}
o26(o13 < o5.length);

// bug 1147044
eval("with ({}) (function fibonacci() {})();"); 

// 8. Set up a custom eval that indirectly calls built-in eval, evoke it, and verify the effect.
var o27 = eval;
var eval = o3[name]
eval("x[i][0] = 2;");
o2.o3(o0[o32][0]);

// 9. Test that the extra scope chain parameter is hidden.
undefined = (function (o0, o33) { o2.o3(o33 + ''); });
eval('hello');

// 10. Test jitting of a store to a closure-captured block-scoped variable.
function o34() {
  (function (o2()));
}
o34();
o34();
o34(o13 < o5.length);
