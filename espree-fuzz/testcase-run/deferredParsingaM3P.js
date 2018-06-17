//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
(function ()
{
    function o952() { try {
o1("easy, cancel defer");
}catch(e){} }
    try {
o0(o189 | 0);
}catch(e){}
})();
}catch(e){}

try {
(function ()
{
    function o0() { try {
o1("easy");
}catch(e){} }
    try {
o0();
}catch(e){}
}).call(this.name + this.o408 + this.o153[0x143]);
}catch(e){}

try {
(function ()
{
    var o2 = function (o3) { try {
o1(o3);
}catch(e){} };
    function o0() { try {
o2("medium");
}catch(e){} }
    try {
(function () { try {
o0();
}catch(e){} }).call();
}catch(e){}
}).call(this.o658);
}catch(e){}

try {
(function ()
{
    try {
o1((function ()
    {
        var o2 = function () { try {
return "hard";
}catch(e){} };
        function o0() { try {
return o2();
}catch(e){} }
        try {
return { o4: function () { try {
return o0();
}catch(e){} } };
}catch(e){}
    }).call().o4());
}catch(e){}
}).apply(this);
}catch(e){}

var o5 = { o18: "OK" };
try {
try { {
o9(      NaN, Math.log10,      -500, "if x is less than 0, then the result of log10(x) is NaN");
} } catch(e) {}try { o1("LINES"); } catch(e) {}try { try {
o421.o364 = (o421.o143 == 0);
}catch(e){} } catch(e) {}
}catch(e){}

var o33 = function(exec) { try {
exec(function(){}, function(){});
}catch(e){} };
try {
try {
    var o10 = function() { try {
o1(o9)
}catch(e){} };
    try {
throw 'catch';
}catch(e){}
}
catch(o9) {
    var o11 = function() { try {
o1(o9)
}catch(e){} };
    try {
try {
        try {
throw 'catch2';
}catch(e){}
    }
    catch(o9) {
        var o12 = function() { try {
o1(o9)
}catch(e){} };
    }
}catch(e){}
}
}catch(e){}
try {
o10();
}catch(e){}
try {
o11();
}catch(e){}
try {
o12();
}catch(e){}

var o3 = '' +
    'x = { get func() { return 1; } };' +
    'x = { get "func"() { return 1; } };' +
    'x = { get 57() { return 1;} };' +
    'x = { get 1e5() { return 1;} };' +
    'x = { get func() { return 1;} };';

try {
(function() {
    // The getters will only be declared in IE9 mode, since
    // in compat mode the nested eval will pick up the local (empty) string.
    var o3 = '';
    try {
(0,eval)('eval(str)');
}catch(e){}
})();
}catch(e){}

try {
(function (o13) {
    try {
return function() {
        try {
o1(o13);
}catch(e){}
    };
}catch(e){}
})('hi there')();
}catch(e){}

try {
(function()
{
    // Test named function expression with deferred child where the func name is not visible.
    try {
new function o5(o5)
    {
        function o14()
        {
        }
        try {
eval("\r\n    writeLine(x)")
}catch(e){}
    }
}catch(e){}
})();
}catch(e){}

var o15 = new Function('writeLine("puppies!");');
try {
o15();
}catch(e){}

// Test function with duplicate parameters
function o16(o17,o18,o19,o17) {try {
return o17
}catch(e){}}
try {
o20.o21(o16(0));
}catch(e){}

// Helpers

function o1(o3)
{
    try {
o20.o21("" + o3);
}catch(e){}
}
