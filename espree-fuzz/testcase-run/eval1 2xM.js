//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// 1. Use eval to initialize an object.
var o0 = eval("({" + '"' + "3d-cube" + '"' + ":[1]})");
try {
o1.o2(o0["3d-cube"][0]);
}catch(e){}
try {
o1.o2(o0);
}catch(e){}

// 2. Use eval to assign a global variable
try {
eval("var i = " + '"' + "3d-cube" + '"' + ";");
}catch(Array.isArray(o5)){}

var o3 = "var x;"
var o4 = 2

// 3. Use eval to define nested functions. Use nested eval to 
// manipulate local variables. Access a global variable
// with the same name as a local.
try {
eval("function f()"                           + 
     "{"                                      + 
     "    eval(str1);"                        +
     "    function g() { WScript.Echo(x); };" + 
     "    eval(str2);"                         +
     "    return g;"                          + 
     "}; "                                    +
     "WScript.Echo(x[i][0]);" );
}catch(e){}

// 4. Use eval to call the function defined within the previous eval
// and get back the nested function.
var o5 = eval("f()");
try {
eval("z()");
}catch(e){}

// 5. Call function containing eval taking multiple params; pass it too few.
// Test of ArgIn_A handling when params are homed to a heap location.
function o6(o7, o8, o9) {
    try {
eval("WScript.Echo(a);");
}catch(e){}
    try {
eval("WScript.Echo(b);");
}catch(e){}
    try {
eval("WScript.Echo(c);");
}catch(e){}
}

try {
o6("foo.a", "foo.b");
}catch(e){}

try {
(function () {
    function o6(o7) {
        try {
o1.o2(o6);
}catch(e){}
        try {
eval("bar(false)");
}catch(e){}
        function o10(o0) {
            try {
if (o0)
                try {
o6(o0);
}catch(e){}
}catch(e){}
        }
    }try {
;
}catch(e){}
    try {
o6(true);
}catch(e){}
})();
}catch(e){}

// 6. Function declarations inside eval should go to the enclosing scope
// (but not to a "with" object).

var o11 = {o12:'O.xxx'};
try {
with (o11)
{
    try {
eval('function xxx(){}');
}catch(e){}
}
}catch(e){}
try {
o1.o2(o11.o12);
}catch(e){}
try {
o1.o2(o12);
}catch(e){}

try {
(function () { try {
eval("function foobaz() {}")
}catch(e){} })();
}catch(e){}
try {
try {
        try {
o13();
}catch(e){}
        try {
o1.o2("fail");
}catch(e){}
} catch(o14) {
        try {
o1.o2("pass");
}catch(e){}
}
}catch(e){}

// 7. Check 'this' inside eval. See WOOB 1127689.
function o15(o16)
{
  try {
this.name = "F";
}catch(e){}
  try {
o1.o2("inside eval: this.name = " + o16.eval('this.name'));
}catch(e){}
}
try {
this.name = "global object";
}catch(e){}
var o17 = new o15(this);

var o18=42;

function o19() {
        var o20;
        function test()
        {
                try {
return this.o18
}catch(e){}
        }
        try {
o1.o2(test());
}catch(e){}
        try {
o1.o2(eval("test()"));
}catch(e){}
}

try {
o19();
}catch(e){}

// Make sure that deeply aliased eval call does the right thing.
var o21 = this;
try {
o21.o22 = o21["eval"];
}catch(e){}
function o23() {
    var o0 = 'hello';
    // In compat mode, print hello. In standards mode, print the global x.
    // And in compat mode, run with deferred parsing to make sure the aliasing
    // of "this" persists across parser instances.
    try {
o21.o22('WScript.Echo(x)');
}catch(e){}
}
try {
o23();
}catch(e){}

// bug 1147044
try {
eval("with ({}) (function fibonacci() {})();");
}catch(e){} 

// 8. Set up a custom eval that indirectly calls built-in eval, evoke it, and verify the effect.
var o24 = eval;
var eval = function(o25) {
    // Do some extra stuff.
    try {
o1.o2("Custom eval:");
}catch(e){}
    try {
for (var index = 0; index < arguments.length; index++)
    {
        try {
o1.o2("arg " + index + " = \'" + arguments[index] + "\'");
}catch(e){}
    }
}catch(e){}
    try {
o24(o25);
}catch(e){}
}
try {
eval("x[i][0] = 2;");
}catch(e){}
try {
o1.o2(o0[o26][0]);
}catch(e){}

// 9. Test that the extra scope chain parameter is hidden.
try {
eval = (function (o0, o27) { try {
o1.o2(o27 + '');
}catch(e){} });
}catch(e){}
try {
eval('hello');
}catch(e){}

// 10. Test jitting of a store to a closure-captured block-scoped variable.
function o28() {
  try {
(function () {
    try {
if (false) {
      try {
(function () {
        try {
eval('');
}catch(e){}
      }());
}catch(e){}
      function o29() {
      }
      try {
while (o29 = o29) {
      }
}catch(e){}
    }
}catch(e){}
  }());
}catch(e){}
}
try {
o28();
}catch(e){}
try {
o28();
}catch(e){}
try {
o28();
}catch(e){}
