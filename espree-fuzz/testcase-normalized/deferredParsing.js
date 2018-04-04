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
    var o3 = function (o4) { o1(o4); };
    function o0() { o3("medium"); }
    (function () { o0(); }).call();
}).call();

(function ()
{
    o1((function ()
    {
        var o3 = function () { return "hard"; };
        function o0() { return o3(); }
        return { o5: function () { return o0(); } };
    }).call().o5());
}).apply(this);

var o7 = { o8: "OK" };
with (o7)
{
  (function o9()
  {
    o1("outer function: " + o8);
    (function o10()
    {
      o1("inner function: " + o8);
    })();
  })();
}

var o11 = 'global';
try {
    var o12 = function() { o1(o11) };
    throw 'catch';
}
catch(o11) {
    var o13 = function() { o1(o11) };
    try {
        throw 'catch2';
    }
    catch(o11) {
        var o14 = function() { o1(o11) };
    }
}
o12();
o13();
o14();

var o4 = '' +
    'x = { get func() { return 1; } };' +
    'x = { get "func"() { return 1; } };' +
    'x = { get 57() { return 1;} };' +
    'x = { get 1e5() { return 1;} };' +
    'x = { get func() { return 1;} };';

(function() {
    // The getters will only be declared in IE9 mode, since
    // in compat mode the nested eval will pick up the local (empty) string.
    var o4 = '';
    (0,eval)('eval(str)');
})();

(function (o16) {
    return function() {
        o1(o16);
    };
})('hi there')();

(function()
{
    // Test named function expression with deferred child where the func name is not visible.
    new function o7(o7)
    {
        function o17()
        {
        }
        eval("\r\n    writeLine(x)")
    }
})();

var o18 = new Function('writeLine("puppies!");');
o18();

// Test function with duplicate parameters
function o20(o21,o22,o23,o21) {return o21}
o24.o25(o20(0));

// Helpers

function o1(o4)
{
    o24.o25("" + o4);
}
