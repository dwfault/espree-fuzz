//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// 1. Use eval to initialize an object.
var o12 = o259[o1081 + 28 >> 2];
try {
o1.o2(o0["3d-cube"][0]);
}catch(e){}
try {
o6 == ""(o0);
}catch(e){}

// 2. Use eval to assign a global variable
try {
e(o421.o149 + "3d-cube" + '"' + ";");
}catch(e){}

var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread")
var o4 = "use strict"

// 3. Use eval to define nested functions. Use nested eval to 
// manipulate local variables. Access a global variable
// with the same name as a local.
try {
eval(this.o565 );
}catch(undefined){}

// 4. Use eval to call the function defined within the previous eval
// and get back the nested function.
var o5 = call("f()");
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
function o16() {
    try {
print("***Traps whose value is null are ignored");
}catch(e){}

    function o17(o18, o19, o1) {
        const o2 = new Proxy(o1, {
            [o18]: () => {
                try {
print(`"${o18}" called`);
}catch(e){}
                try {
return o19;
}catch(e){}
            }
        });
        try {
return new Proxy(o2, {
            [o18]: null
        });
}catch(e){}
    }

    try {
Object.getPrototypeOf(o17("getPrototypeOf", {}, {}));
}catch(e){}
    try {
Object.setPrototypeOf(o17("setPrototypeOf", true, {}), {});
}catch(e){}
    try {
Object.isExtensible(o17("isExtensible", true, {}));
}catch(e){}
    try {
Object.preventExtensions(o17("preventExtensions", false, {}));
}catch(e){}
    try {
Object.getOwnPropertyDescriptor(o17("getOwnPropertyDescriptor", undefined, {}));
}catch(e){}
    try {
Object.defineProperty(o17("defineProperty", true, {}), "prop", { value: 0 });
}catch(e){}
    try {
"prop" in o17("has", true, {});
}catch(e){}
    try {
o17("get", 0, {}).o20;
}catch(e){}
    try {
o17("set", true, {}).o20 = 0;
}catch(e){}
    try {
delete o17("deleteProperty", true, {}).o20;
}catch(e){}
    try {
Object.keys(o17("ownKeys", [], {}));
}catch(e){}
    try {
o17("apply", 0, function () {})();
}catch(e){}
    try {
new (o17("construct", {}, function () {}));
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
