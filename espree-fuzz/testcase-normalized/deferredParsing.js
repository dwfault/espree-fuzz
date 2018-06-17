//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

(function ()
{
    function o0() { o1("easy, cancel defer"); }
    o0();
})();

(function ()
{
    function o0() { o1("easy"); }
    o0();
}).call();

(function ()
{
    var o2 = function (o3) { o1(o3); };
    function o0() { o2("medium"); }
    (function () { o0(); }).call();
}).call();

(function ()
{
    o1((function ()
    {
        var o2 = function () { return "hard"; };
        function o0() { return o2(); }
        return { o4: function () { return o0(); } };
    }).call().o4());
}).apply(this);

var o5 = { o6: "OK" };
with (o5)
{
  (function o7()
  {
    o1("outer function: " + o6);
    (function o8()
    {
      o1("inner function: " + o6);
    })();
  })();
}

var o9 = 'global';
try {
    var o10 = function() { o1(o9) };
    throw 'catch';
}
catch(o9) {
    var o11 = function() { o1(o9) };
    try {
        throw 'catch2';
    }
    catch(o9) {
        var o12 = function() { o1(o9) };
    }
}
o10();
o11();
o12();

var o3 = '' +
    'x = { get func() { return 1; } };' +
    'x = { get "func"() { return 1; } };' +
    'x = { get 57() { return 1;} };' +
    'x = { get 1e5() { return 1;} };' +
    'x = { get func() { return 1;} };';

(function() {
    // The getters will only be declared in IE9 mode, since
    // in compat mode the nested eval will pick up the local (empty) string.
    var o3 = '';
    (0,eval)('eval(str)');
})();

(function (o13) {
    return function() {
        o1(o13);
    };
})('hi there')();

(function()
{
    // Test named function expression with deferred child where the func name is not visible.
    new function o5(o5)
    {
        function o14()
        {
        }
        eval("\r\n    writeLine(x)")
    }
})();

var o15 = new Function('writeLine("puppies!");');
o15();

// Test function with duplicate parameters
function o16(o17,o18,o19,o17) {return o17}
o20.o21(o16(0));

// Helpers

function o1(o3)
{
    o20.o21("" + o3);
}
