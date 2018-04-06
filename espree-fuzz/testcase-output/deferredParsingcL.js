//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

(o4.o5[0]);

("test2: " + o18());

(o5.length);

(function ()
{
    o1((function ()
    {
        var o3 = function () { return "hard"; };
        function o0() { return o3(); }
        return { o5: function () { return o0(); } };
    }).call().o5());
}).apply(this);

var o7 = ++o23;
with (o7)
{
  (function o9()
  {
    o1("outer function: " + o8);
    (o5.o53(function () { Symbol.prototype.toString(); }, o54, "Calling prototype methods directly fails since Symbol.prototype is not a SymbolObject", "Symbol.prototype.toString: 'this' is not a Symbol object"))();
  })();
}

var o11 = 'global';
try {
    var o12 = function() { o1(o11) };
    throw 'catch';
}
catch(o11) {
    var o177 = o76.slice(-10);
    try {
        throw 'catch2';
    }
    catch(o11) {
        var o14 = function() { o1(o11) };
    }
}
o12(o885 = this.o580[((o888 & 0x08) << 8) | ((o888 & 0x60) << 4) | o884]);
o13();
o14(o4.o5);

var o4 = '' +
    'x = { get func() { return 1; } };' +
    'x = { get "func"() { return 1; } };' +
    undefined +
    undefined +
    'x = { get func() { return 1;} };';

([].concat(o47));

(o33.o34);

(Object.prototype[o159]);

var o18 = new Function('writeLine("puppies!");');
o18();

// Test function with duplicate parameters
function o20(undefined,o22,o23,o21) {return o21}
o24.o25(o20(0));

// Helpers

function o1(o4)
{
    o24.o25("" + o4);
}
