//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Math API extensions tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

// WARNING!!  As a convenience in this test suite assert.areEqual is
// overridden so that -0 does not equal +0.  The tests here all make
// the distinction between negative and positive zero.
o2.o3 = (function () {
    var o3 = o2.o3;

    return function (o4, o5, o6) {
        if (o4 === 0 && o5 === 0) {
            var o7 = function o7(o8) { return o8 === 0 && (1 / o8) === -Infinity; };

            if (o7(o4) !== o7(o5)) {
                if (o7(o4)) o4 = "-0";
                if (o7(o5)) o5 = "-0";

                throw "assert.areEqualSignedZero failed: expected: " + o4 + " actual: " + o5 + (o6 !== undefined ? ": " + o6 : "");
            }
        }
        return o3(o4, o5, o6);
    };
})();

var o11 = function (o4, o12, o8, o6) {
    o2.o3(o4, o12(o8), o6);
};

var o13 = function (o4, o12, o8, o14, o6) {
    o2.o3(o4, o12(o8, o14), o6);
};

var o15 = function (o4, o12, o8, o14, o16, o6) {
    o2.o3(o4, o12(o8, o14, o16), o6);
};

var o17 = function (o4, o12, o8, o14, o16, o18, o6) {
    o2.o3(o4, o12(o8, o14, o16, o18), o6);
};

var o19 = function (o4, o12, o8, o14, o16, o18, o20, o21, o22, o6) {
    o2.o3(o4, o12(o8, o14, o16, o18, o20, o21, o22), o6);
};

var o23 = function (o4, o12, o8, o6) {
    o2.o24(o4, o12(o8), o6);
};

var o25 = function (o4, o12, o8, o14, o6) {
    o2.o24(o4, o12(o8, o14), o6);
};

var o26 = function (o4, o12, o8, o14, o16, o6) {
    o2.o24(o4, o12(o8, o14, o16), o6);
};

var o27 = [
    {
        name: "Math object should have spec defined built-ins with correct lengths",
        o29: function () {
            o2.o30(Math.hasOwnProperty('log10'), "Math should have a log10 method");
            o2.o30(Math.hasOwnProperty('log2'), "Math should have a log2 method");
            o2.o30(Math.hasOwnProperty('log1p'), "Math should have a log1p method");
            o2.o30(Math.hasOwnProperty('expm1'), "Math should have a expm1 method");
            o2.o30(Math.hasOwnProperty('cosh'), "Math should have a cosh method");
            o2.o30(Math.hasOwnProperty('sinh'), "Math should have a sinh method");
            o2.o30(Math.hasOwnProperty('tanh'), "Math should have a tanh method");
            o2.o30(Math.hasOwnProperty('acosh'), "Math should have a acosh method");
            o2.o30(Math.hasOwnProperty('asinh'), "Math should have a asinh method");
            o2.o30(Math.hasOwnProperty('atanh'), "Math should have a atanh method");
            o2.o30(Math.hasOwnProperty('hypot'), "Math should have a hypot method");
            o2.o30(Math.hasOwnProperty('trunc'), "Math should have a trunc method");
            o2.o30(Math.hasOwnProperty('sign'), "Math should have a sign method");
            o2.o30(Math.hasOwnProperty('cbrt'), "Math should have a cbrt method");
            o2.o30(Math.hasOwnProperty('imul'), "Math should have a imul method");
            o2.o30(Math.hasOwnProperty('clz32'), "Math should have a clz32 method");

            o2.o30(Math.log10.length === 1, "log10 method takes one argument");
            o2.o30(Math.log2.length === 1, "log2 method takes one argument");
            o2.o30(Math.log1p.length === 1, "log1p method takes one argument");
            o2.o30(Math.o37.length === 1, "expm1 method takes one argument");
            o2.o30(Math.cosh.length === 1, "cosh method takes one argument");
            o2.o30(Math.sinh.length === 1, "sinh method takes one argument");
            o2.o30(Math.tanh.length === 1, "tanh method takes one argument");
            o2.o30(Math.acosh.length === 1, "acosh method takes one argument");
            o2.o30(Math.asinh.length === 1, "asinh method takes one argument");
            o2.o30(Math.atanh.length === 1, "atanh method takes one argument");
            o2.o30(Math.hypot.length === 2, "hypot method takes three arguments but the third is optional and spec says the length must be 2");
            o2.o30(Math.trunc.length === 1, "trunc method takes one argument");
            o2.o30(Math.sign.length === 1, "sign method takes one argument");
            o2.o30(Math.cbrt.length === 1, "cbrt method takes one argument");
            o2.o30(Math.imul.length === 2, "imul method takes two arguments");
            o2.o30(Math.clz32.length === 1, "clz32 method takes one argument");
        }
    },
    {
        name: "Math APIs all return NaN if called with no arguments or passed undefined for arguments",
        o29: function () {
            o2.o3(NaN, Math.log10(), "log10 returns NaN given no arguments");
            o2.o3(NaN, Math.log2(), "log2 returns NaN given no arguments");
            o2.o3(NaN, Math.log1p(), "log1p returns NaN given no arguments");
            o2.o3(NaN, Math.o37(), "expm1 returns NaN given no arguments");
            o2.o3(NaN, Math.cosh(), "cosh returns NaN given no arguments");
            o2.o3(NaN, Math.sinh(), "sinh returns NaN given no arguments");
            o2.o3(NaN, Math.tanh(), "tanh returns NaN given no arguments");
            o2.o3(NaN, Math.acosh(), "acosh returns NaN given no arguments");
            o2.o3(NaN, Math.asinh(), "asinh returns NaN given no arguments");
            o2.o3(NaN, Math.atanh(), "atanh returns NaN given no arguments");
            o2.o3( +0, Math.hypot(), "hypot returns +0 given no arguments");
            o2.o3(123, Math.hypot(123), "hypot returns abs(123) given only one argument");
            o2.o3(123, Math.hypot(-123), "hypot returns abs(-123) given only one argument");
            o2.o3(NaN, Math.trunc(), "trunc returns NaN given no arguments");
            o2.o3(NaN, Math.sign(), "sign returns NaN given no arguments");
            o2.o3(NaN, Math.cbrt(), "cbrt returns NaN given no arguments");
            // imul actually returns +0 since it converts its arguments via ToUint32 which converts undefined to 0
            o2.o3( +0, Math.imul(), "imul returns +0 given no arguments");
            o2.o3( +0, Math.imul(123), "imul returns +0 given too few arguments");

            o2.o3(NaN, Math.log10(undefined), "log10 returns NaN when passed undefined");
            o2.o3(NaN, Math.log2(undefined), "log2 returns NaN when passed undefined");
            o2.o3(NaN, Math.log1p(undefined), "log1p returns NaN when passed undefined");
            o2.o3(NaN, Math.o37(undefined), "expm1 returns NaN when passed undefined");
            o2.o3(NaN, Math.cosh(undefined), "cosh returns NaN when passed undefined");
            o2.o3(NaN, Math.sinh(undefined), "sinh returns NaN when passed undefined");
            o2.o3(NaN, Math.tanh(undefined), "tanh returns NaN when passed undefined");
            o2.o3(NaN, Math.acosh(undefined), "acosh returns NaN when passed undefined");
            o2.o3(NaN, Math.asinh(undefined), "asinh returns NaN when passed undefined");
            o2.o3(NaN, Math.atanh(undefined), "atanh returns NaN when passed undefined");
            /*
            assert.areEqual(NaN, Math.hypot(undefined, undefined), "hypot returns NaN when passed undefined");
            assert.areEqual(NaN, Math.hypot(undefined, undefined, undefined), "hypot returns NaN when passed undefined");
            */
            o2.o3(NaN, Math.trunc(undefined), "trunc returns NaN when passed undefined");
            o2.o3(NaN, Math.sign(undefined), "sign returns NaN when passed undefined");
            o2.o3(NaN, Math.cbrt(undefined), "cbrt returns NaN when passed undefined");
            o2.o3( +0, Math.imul(undefined), "imul returns +0 when passed undefined");
            o2.o3( +0, Math.imul(undefined, undefined), "imul returns +0 when passed undefined");
        }
    },
    {
        name: "log10 computes the base 10 logarithm and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.log10,       NaN, "if x is NaN, then the result of log10(x) is NaN");
            o11(      NaN, Math.log10,        -1, "if x is less than 0, then the result of log10(x) is NaN");
            o11(      NaN, Math.log10,      -500, "if x is less than 0, then the result of log10(x) is NaN");
            o11(      NaN, Math.log10, -Infinity, "if x is less than 0, then the result of log10(x) is NaN");
            o11(-Infinity, Math.log10,        +0, "if x is +0, then the result of log10(x) is -Infinity");
            o11(-Infinity, Math.log10,        -0, "if x is -0, then the result of log10(x) is -Infinity");
            o11(       +0, Math.log10,         1, "if x is 1, then the result of log10(x) is +0");
            o11(+Infinity, Math.log10, +Infinity, "if x is +Infinity, then the result of log10(x) is +Infinity");

            o23(        1, Math.log10,        10, "log10(10) = 1");
            o23(        2, Math.log10,       100, "log10(100) = 2");
            o23(        6, Math.log10,   1000000, "log10(100) = 6");
        }
    },
    {
        name: "log2 computes the base 2 logarithm and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.log2,       NaN, "if x is NaN, then the result of log2(x) is NaN");
            o11(      NaN, Math.log2,        -1, "if x is less than 0, then the result of log2(x) is NaN");
            o11(      NaN, Math.log2,      -500, "if x is less than 0, then the result of log2(x) is NaN");
            o11(      NaN, Math.log2, -Infinity, "if x is less than 0, then the result of log2(x) is NaN");
            o11(-Infinity, Math.log2,        +0, "if x is +0, then the result of log2(x) is -Infinity");
            o11(-Infinity, Math.log2,        -0, "if x is -0, then the result of log2(x) is -Infinity");
            o11(       +0, Math.log2,         1, "if x is 1, then the result of log2(x) is +0");
            o11(+Infinity, Math.log2, +Infinity, "if x is +Infinity, then the result of log2(x) is +Infinity");

            o23(        1, Math.log2,         2, "log2(2) = 1");
            o23(        2, Math.log2,         4, "log2(4) = 2");
            o23(        6, Math.log2,        64, "log2(64) = 6");
        }
    },
    {
        name: "log1p computes the natural logarithm of 1 + x and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.log1p,       NaN, "if x is NaN, then the result of log1p(x) is NaN");
            o11(      NaN, Math.log1p,        -2, "if x is less than -1, then the result of log1p(x) is NaN");
            o11(      NaN, Math.log1p,      -500, "if x is less than -1, then the result of log1p(x) is NaN");
            o11(      NaN, Math.log1p, -Infinity, "if x is less than -1, then the result of log1p(x) is NaN");
            o11(-Infinity, Math.log1p,        -1, "if x is -1, then the result of log1p(x) is -Infinity");
            o11(       +0, Math.log1p,        +0, "if x is +0, then the result of log1p(x) is +0");
            o11(       -0, Math.log1p,        -0, "if x is -0, then the result of log1p(x) is -0");
            o11(+Infinity, Math.log1p, +Infinity, "if x is +Infinity, then the result of log1p(x) is +Infinity");

            var o51 = Math.o52;
            var o53 = o51 * o51;
            var o54 = o53 * o53 * o53;

            o23(        1, Math.log1p,     o51 - 1, "log1p(e - 1) = 1");
            o23(        2, Math.log1p,    o53 - 1, "log1p(e^2 - 1) = 2");
            o23(        6, Math.log1p,    o54 - 1, "log1p(e^6 - 1) = 6");

            // TODO: Figure out how to run these tests on machines with C99 APIs
            /*
            assertFunctionAlmostEqual(    1e-20, Math.log1p,     1e-20, "log1p(10^-20) = 10^-20");
            assertFunctionAlmostEqual(    1e-30, Math.log1p,     1e-30, "log1p(10^-30) = 10^-30");
            assertFunctionAlmostEqual(    1e-50, Math.log1p,     1e-50, "log1p(10^-50) = 10^-50");
            */
        }
    },
    {
        name: "expm1 computes the result of subtracting 1 from the exponential function and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.o37,       NaN, "if x is NaN, then the result of expm1(x) is NaN");
            o11(       +0, Math.o37,        +0, "if x is +0, then the result of expm1(x) is +0");
            o11(       -0, Math.o37,        -0, "if x is -0, then the result of expm1(x) is -0");
            o11(+Infinity, Math.o37, +Infinity, "if x is +Infinity, then the result of expm1(x) is +Infinity");
            o11(       -1, Math.o37, -Infinity, "if x is -Infinity, then the result of expm1(x) is -1");

            var o51 = Math.o52;
            var o53 = o51 * o51;
            var o54 = o53 * o53 * o53;

            o23(    o51 - 1, Math.o37,         1, "expm1(1) = e - 1");
            o23(   o53 - 1, Math.o37,         2, "expm1(2) = e^2 - 1");
            o23(   o54 - 1, Math.o37,         6, "expm1(6) = e^6 - 1");

            // TODO: Figure out how to run these tests on machines with C99 APIs
            /*
            assertFunctionAlmostEqual(    1e-20, Math.expm1,     1e-20, "expm1(10^-20) = 10^-20");
            assertFunctionAlmostEqual(    1e-30, Math.expm1,     1e-30, "expm1(10^-30) = 10^-30");
            assertFunctionAlmostEqual(    1e-50, Math.expm1,     1e-50, "expm1(10^-50) = 10^-50");
            */
        }
    },
    {
        name: "cosh computes the hyperbolic cosine and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.cosh,       NaN, "if x is NaN, then the result of cosh(x) is NaN");
            o11(        1, Math.cosh,        +0, "if x is +0, then the result of cosh(x) is 1");
            o11(        1, Math.cosh,        -0, "if x is -0, then the result of cosh(x) is 1");
            o11(+Infinity, Math.cosh, +Infinity, "if x is +Infinity, then the result of cosh(x) is +Infinity");
            o11(+Infinity, Math.cosh, -Infinity, "if x is -Infinity, then the result of cosh(x) is +Infinity");

            var o51 = Math.o52;
            var o53 = o51 * o51;
            var o55 = 1 / o53;

            var o56 = (o51 + 1/o51) / 2;
            var o57 = (o53 + o55) / 2;

            o23(    o56, Math.cosh,         1, "cosh(1) = (e + e^-1) / 2");
            o23(    o57, Math.cosh,         2, "cosh(2) = (e^2 + e^-2) / 2");
        }
    },
    {
        name: "sinh computes the hyperbolic sine and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.sinh,       NaN, "if x is NaN, then the result of sinh(x) is NaN");
            o11(       +0, Math.sinh,        +0, "if x is +0, then the result of sinh(x) is +0");
            o11(       -0, Math.sinh,        -0, "if x is -0, then the result of sinh(x) is -0");
            o11(+Infinity, Math.sinh, +Infinity, "if x is +Infinity, then the result of sinh(x) is +Infinity");
            o11(-Infinity, Math.sinh, -Infinity, "if x is -Infinity, then the result of sinh(x) is -Infinity");

            var o51 = Math.o52;
            var o53 = o51 * o51;
            var o55 = 1 / o53;

            var o58 = (o51 - 1/o51) / 2;
            var o59 = (o53 - o55) / 2;

            o23(    o58, Math.sinh,         1, "sinh(1) = (e - e^-1) / 2");
            o23(    o59, Math.sinh,         2, "sinh(2) = (e^2 - e^-2) / 2");
        }
    },
    {
        name: "tanh computes the hyperbolic tangent and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.tanh,       NaN, "if x is NaN, then the result of tanh(x) is NaN");
            o11(       +0, Math.tanh,        +0, "if x is +0, then the result of tanh(x) is +0");
            o11(       -0, Math.tanh,        -0, "if x is -0, then the result of tanh(x) is -0");
            o11(        1, Math.tanh, +Infinity, "if x is +Infinity, then the result of tanh(x) is 1");
            o11(       -1, Math.tanh, -Infinity, "if x is -Infinity, then the result of tanh(x) is -1");

            var o60 = Math.sinh(1) / Math.cosh(1);
            var o61 = Math.sinh(2) / Math.cosh(2);

            o23(    o60, Math.tanh,         1, "tanh(1) = sinh(1) / cosh(1)");
            o23(    o61, Math.tanh,         2, "tanh(2) = sinh(2) / cosh(2)");
        }
    },
    {
        name: "acosh computes the inverse hyperbolic cosine and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.acosh,       NaN, "if x is NaN, then the result of acosh(x) is NaN");
            o11(      NaN, Math.acosh,     0.999, "if x is less than 1, then the result of acosh(x) is NaN");
            o11(      NaN, Math.acosh,       0.5, "if x is less than 1, then the result of acosh(x) is NaN");
            o11(      NaN, Math.acosh,         0, "if x is less than 1, then the result of acosh(x) is NaN");
            o11(      NaN, Math.acosh,        -1, "if x is less than 1, then the result of acosh(x) is NaN");
            o11(      NaN, Math.acosh, -Infinity, "if x is less than 1, then the result of acosh(x) is NaN");
            o11(       +0, Math.acosh,         1, "if x is 1, then the result of acosh(x) is +0");
            o11(+Infinity, Math.acosh, +Infinity, "if x is +Infinity, then the result of acosh(x) is +Infinity");

            var o62 = Math.o63(2 + Math.sqrt(3));
            var o65 = Math.o63(3 + Math.sqrt(8));

            o23(   o62, Math.acosh,         2, "acosh(2) = ln(2 + sqrt(3))");
            o23(   o65, Math.acosh,         3, "acosh(3) = ln(3 + sqrt(8))");
        }
    },
    {
        name: "asinh computes the inverse hyperbolic sine and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.asinh,       NaN, "if x is NaN, then the result of asinh(x) is NaN");
            o11(       +0, Math.asinh,        +0, "if x is +0, then the result of asinh(x) is +0");
            o11(       -0, Math.asinh,        -0, "if x is -0, then the result of asinh(x) is -0");
            o11(+Infinity, Math.asinh, +Infinity, "if x is +Infinity, then the result of asinh(x) is +Infinity");
            o11(-Infinity, Math.asinh, -Infinity, "if x is -Infinity, then the result of asinh(x) is -Infinity");

            var o66 = Math.o63(1 + Math.o67);
            var o68 = Math.o63(2 + Math.sqrt(5));

            o23(   o66, Math.asinh,         1, "asinh(1) = ln(1 + sqrt(2))");
            o23(   o68, Math.asinh,         2, "asinh(2) = ln(2 + sqrt(5))");
        }
    },
    {
        name: "atanh computes the inverse hyperbolic tangent and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.atanh,       NaN, "if x is NaN, then the result of atanh(x) is NaN");
            o11(      NaN, Math.atanh,    -1.001, "if x is less than -1, then the result of atanh(x) is NaN");
            o11(      NaN, Math.atanh,        -2, "if x is less than -1, then the result of atanh(x) is NaN");
            o11(      NaN, Math.atanh, -Infinity, "if x is less than -1, then the result of atanh(x) is NaN");
            o11(      NaN, Math.atanh,     1.001, "if x is greater than 1, then the result of atanh(x) is NaN");
            o11(      NaN, Math.atanh,         2, "if x is greater than 1, then the result of atanh(x) is NaN");
            o11(      NaN, Math.atanh, +Infinity, "if x is greater than 1, then the result of atanh(x) is NaN");
            o11(-Infinity, Math.atanh,        -1, "if x is -1, then the result of atanh(x) is -Infinity");
            o11(+Infinity, Math.atanh,         1, "if x is 1, then the result of atanh(x) is +Infinity");
            o11(       +0, Math.atanh,        +0, "if x is +0, then the result of atanh(x) is +0");
            o11(       -0, Math.atanh,        -0, "if x is -0, then the result of atanh(x) is -0");

            var o69 = Math.o63(3) / 2;
            var o70 = Math.o63(5/3) / 2;

            o23(  o69, Math.atanh,       0.5, "atanh(0.5) = 1/2 * ln(1.5 / 0.5)");
            o23( o70, Math.atanh,      0.25, "atanh(0.25) = 1/2 * ln(1.25 / 0.75)");
        }
    },
    {
        name: "hypot computes the square root of the sum of the squares of the arguments and follows spec on special boundary values",
        o29: function () {
            o13(+Infinity, Math.hypot, +Infinity,         0, "if any argument is +Infinity, then the result of hypot(x,y) is +Infinity");
            o13(+Infinity, Math.hypot,         0, +Infinity, "if any argument is +Infinity, then the result of hypot(x,y) is +Infinity");
            o13(+Infinity, Math.hypot, -Infinity,         0, "if any argument is -Infinity, then the result of hypot(x,y) is +Infinity");
            o13(+Infinity, Math.hypot,         0, -Infinity, "if any argument is -Infinity, then the result of hypot(x,y) is +Infinity");
            o13(+Infinity, Math.hypot, +Infinity,       NaN, "if any argument is +Infinity, then the result of hypot(x,y) is +Infinity, even if another argument is NaN");
            o13(+Infinity, Math.hypot,       NaN, +Infinity, "if any argument is +Infinity, then the result of hypot(x,y) is +Infinity, even if another argument is NaN");
            o13(+Infinity, Math.hypot, -Infinity,       NaN, "if any argument is -Infinity, then the result of hypot(x,y) is +Infinity, even if another argument is NaN");
            o13(+Infinity, Math.hypot,       NaN, -Infinity, "if any argument is -Infinity, then the result of hypot(x,y) is +Infinity, even if another argument is NaN");
            o13(      NaN, Math.hypot,       NaN,         0, "if no argument is +/- Infinity, and any argument is NaN, then the result of hypot(x,y) is NaN");
            o13(      NaN, Math.hypot,         0,       NaN, "if no argument is +/- Infinity, and any argument is NaN, then the result of hypot(x,y) is NaN");
            o13(       +0, Math.hypot,         0,         0, "if all arguments are either +0 or -0, then the result of hypot(x,y) is +0");
            o13(       +0, Math.hypot,        -0,        -0, "if all arguments are either +0 or -0, then the result of hypot(x,y) is +0");

            o13( 1.4142135623730951e308, Math.hypot,  1e308,  1e308, "hypot(1e308, 1e308) = 1.414e308 and shouldn't cause NaN from premature overflow");
            o13(1.4142135623730951e-308, Math.hypot, 1e-308, 1e-308, "hypot(1e-308, 1e-308) = 1.414e-308 and shouldn't cause NaN from premature underflow");

            o25(         5, Math.hypot,         3,         4, "hypot(3,4) = 5");

            o15(+Infinity, Math.hypot, +Infinity,         0,         0, "if any argument is +Infinity, then the result of hypot(x,y,z) is +Infinity");
            o15(+Infinity, Math.hypot,         0, +Infinity,         0, "if any argument is +Infinity, then the result of hypot(x,y,z) is +Infinity");
            o15(+Infinity, Math.hypot,         0,         0, +Infinity, "if any argument is +Infinity, then the result of hypot(x,y,z) is +Infinity");
            o15(+Infinity, Math.hypot, -Infinity,         0,         0, "if any argument is -Infinity, then the result of hypot(x,y,z) is +Infinity");
            o15(+Infinity, Math.hypot,         0, -Infinity,         0, "if any argument is -Infinity, then the result of hypot(x,y,z) is +Infinity");
            o15(+Infinity, Math.hypot,         0,         0, -Infinity, "if any argument is -Infinity, then the result of hypot(x,y,z) is +Infinity");
            o15(+Infinity, Math.hypot, +Infinity,       NaN,       NaN, "if any argument is +Infinity, then the result of hypot(x,y,z) is +Infinity, even if another argument is NaN");
            o15(+Infinity, Math.hypot,       NaN, +Infinity,       NaN, "if any argument is +Infinity, then the result of hypot(x,y,z) is +Infinity, even if another argument is NaN");
            o15(+Infinity, Math.hypot,       NaN,       NaN, +Infinity, "if any argument is +Infinity, then the result of hypot(x,y,z) is +Infinity, even if another argument is NaN");
            o15(+Infinity, Math.hypot, -Infinity,       NaN,       NaN, "if any argument is -Infinity, then the result of hypot(x,y,z) is +Infinity, even if another argument is NaN");
            o15(+Infinity, Math.hypot,       NaN, -Infinity,       NaN, "if any argument is -Infinity, then the result of hypot(x,y,z) is +Infinity, even if another argument is NaN");
            o15(+Infinity, Math.hypot,       NaN,       NaN, -Infinity, "if any argument is -Infinity, then the result of hypot(x,y,z) is +Infinity, even if another argument is NaN");
            o15(      NaN, Math.hypot,       NaN,         0,         0, "if no argument is +/- Infinity, and any argument is NaN, then the result of hypot(x,y,z) is NaN");
            o15(      NaN, Math.hypot,         0,       NaN,         0, "if no argument is +/- Infinity, and any argument is NaN, then the result of hypot(x,y,z) is NaN");
            o15(      NaN, Math.hypot,         0,         0,       NaN, "if no argument is +/- Infinity, and any argument is NaN, then the result of hypot(x,y,z) is NaN");
            o15(       +0, Math.hypot,         0,         0,         0, "if all arguments are either +0 or -0, then the result of hypot(x,y,z) is +0");
            o15(       +0, Math.hypot,        -0,        -0,        -0, "if all arguments are either +0 or -0, then the result of hypot(x,y,z) is +0");

            o15(1.7320508075688772e+308, Math.hypot,  1e308,  1e308,  1e308, "hypot(1e308, 1e308, 1e308) = 1.732e308 and shouldn't cause NaN from premature overflow");
            o15(1.7320508075688772e-308, Math.hypot, 1e-308, 1e-308, 1e-308, "hypot(1e-308, 1e-308, 1e-308) = 1.732e-308 and shouldn't cause NaN from premature underflow");
            o15(1.4142135623730951e-308, Math.hypot,      0, 1e-308, 1e-308, "hypot(0, 1e-308, 1e-308) = 1.414e-308 and shouldn't cause NaN from premature underflow (testing NonZeroMin codepath)");
            o15(1.4142135623730951e-308, Math.hypot, 1e-308,      0, 1e-308, "hypot(1e-308, 0, 1e-308) = 1.414e-308 and shouldn't cause NaN from premature underflow (testing NonZeroMin codepath)");
            o15(1.4142135623730951e-308, Math.hypot, 1e-308, 1e-308,      0, "hypot(1e-308, 1e-308, 0) = 1.414e-308 and shouldn't cause NaN from premature underflow (testing NonZeroMin codepath)");
            o15(                 1e-308, Math.hypot, 1e-308,      0,      0, "hypot(1e-308, 0, 0) = 1.414e-308 and shouldn't cause NaN from premature underflow (testing NonZeroMin codepath)");
            o15(                 1e-308, Math.hypot,      0, 1e-308,      0, "hypot(0, 1e-308, 0) = 1.414e-308 and shouldn't cause NaN from premature underflow (testing NonZeroMin codepath)");
            o15(                 1e-308, Math.hypot,      0,      0, 1e-308, "hypot(0, 0, 1e-308) = 1.414e-308 and shouldn't cause NaN from premature underflow (testing NonZeroMin codepath)");

            o26(                       7, Math.hypot,      2,      3,      6, "hypot(2,3,6) = 7");

            o17(  1.7776388834631178e308, Math.hypot,  1e308,  1e308,  1e308,   4e307, "hypot(1e308, 1e308, 1e308, 4e307) = 1.777e308 and shouldn't cause NaN from premature overflow");
            o17(                  2e-308, Math.hypot, 1e-308, 1e-308, 1e-308,  1e-308, "hypot(1e-308, 1e-308, 1e-308, 1e-308) = 2e-308 and shouldn't cause NaN from premature underflow");
            o17(  1.732050807568877e-308, Math.hypot,      0, 1e-308, 1e-308,  1e-308, "hypot(0, 1e-308, 1e-308, 1e-308) = 1.732e-308 and shouldn't cause NaN from premature underflow ");
            o17( 1.4142135623730951e-308, Math.hypot, 1e-308,      0, 1e-308,       0, "hypot(1e-308, 0, 1e-308, 0) = 1.414e-308 and shouldn't cause NaN from premature underflow ");
            o17( 1.4142135623730951e-308, Math.hypot, 1e-308, 1e-308,      0,       0, "hypot(1e-308, 1e-308, 0, 0) = 1.414e-308 and shouldn't cause NaN from premature underflow ");
            o17(                  1e-308, Math.hypot, 1e-308,      0,      0,       0, "hypot(1e-308, 0, 0) = 1.414e-308 and shouldn't cause NaN from premature underflow");
            o17(  1.414213562373095e-308, Math.hypot,      0, 1e-308,      0,  1e-308, "hypot(0, 1e-308, 0, 1e-308) = 1.414e-308 and shouldn't cause NaN from premature underflow");
            o17( 1.4142135623730951e+308, Math.hypot,  1e308,      0,      0,   1e308, "hypot(1e308, 0, 0, 1e308) = 1.414e+308 and shouldn't cause NaN from premature overflow");
            o17(                      +0, Math.hypot,     -0,     -0,     -0,      -0, "hypot(-0, -0, -0, -0) = 0  All zeros positive or negative result in zero");
            o17(                      +0, Math.hypot,      0,     -0,      0,      -0, "hypot(0, -0, 0, -0) = 0 All zeros positive or negative result in zero");
            o17(                     NaN, Math.hypot,      0,    NaN, 1e-308,       0, "hypot(0, NaN, 0, 1e-308) = NaN");
            o17(                Infinity, Math.hypot, 1e+308,    NaN, 1e-308,Infinity, "hypot(1e+308, NaN, 1e-308, Infinity) = Infinity, If any argument is infinity result is infinity");
            o17( 1.0000014999988748e-305, Math.hypot, 1e-308, 1e-308, 1e-308,  1e-305, "hypot(1e-308, 1e-308, 1e-308, 1e-305) = 1e-305, and shouldn't cause NaN from premature overflow ");
            o17( 1.4142135623730951e+308, Math.hypot, 1e-308, 1e+308, 1e-308, 1e+308, "hypot(1e+308, 1e+308, 1e-308, 1e+308) = 1.414e+308   , and shouldn't cause NaN from premature overflow");

            o17(      13.950268814614288, Math.hypot,    3.2,   -4.8,    9.7,     8.2, "hypot(3.2, -4.8, 9.7,  8.2) = 13.9502");
            o17(                      25, Math.hypot,      2,      3,      6,      24, "hypot(2, 3, 6, 24) = 25");
            o17(                      25, Math.hypot,     24,      2,      3,       6, "hypot(24, 2, 3, 6) = 25");
            o17(                      25, Math.hypot,      2,     24,      3,       6, "hypot(2, 24, 3, 6) = 25");
            o17(                      25, Math.hypot,      6,      3,     24,       2, "hypot(6, 3, 24, 2) = 25");

            o19( 2.6457513110645905e+307, Math.hypot, 1e+307, 1e+307, 1e+307,  1e+307,  1e+307,  1e+307,  1e+307, "hypot(1e+307, ...) = 2.545e+307 and shouldn't cause NaN from premature overflow");
            o19( 2.6457513110645904e-308, Math.hypot, 1e-308, 1e-308, 1e-308,  1e-308,  1e-308,  1e-308,  1e-308, "hypot(1e-308, ...) = 2.645e-308, and shouldn't cause NaN from premature underflow");
        }
    },
    {
        name: "trunc computes the integral part of the argument by removing any fractional digits and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.trunc,       NaN, "if x is NaN, then the result of trunc(x) is NaN");
            o11(       -0, Math.trunc,        -0, "if x is -0, then the result of trunc(x) is -0");
            o11(       +0, Math.trunc,        +0, "if x is +0, then the result of trunc(x) is +0");
            o11(-Infinity, Math.trunc, -Infinity, "if x is -Infinity, then the result of trunc(x) is -Infinity");
            o11(+Infinity, Math.trunc, +Infinity, "if x is +Infinity, then the result of trunc(x) is +Infinity");

            o11(       +0, Math.trunc,       0.5, "trunc(0.5) = +0");
            o11(       -0, Math.trunc,      -0.5, "trunc(-0.5) = -0");
            o11(        3, Math.trunc,   Math.o71, "trunc(pi) = 3");
            o11(       -3, Math.trunc,  -Math.o71, "trunc(-pi) = -3");
            o11(      123, Math.trunc,   123.456, "trunc(123.456) = 123");
        }
    },
    {
        name: "sign computes sign of the argument indicating whether it is positive, negative, or zero and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.sign,       NaN, "if x is NaN, then the result of sign(x) is NaN");
            o11(       -0, Math.sign,        -0, "if x is -0, then the result of sign(x) is -0");
            o11(       +0, Math.sign,        +0, "if x is +0, then the result of sign(x) is +0");
            o11(       -1, Math.sign,    -0.001, "if x is negative and not -0, then the result of sign(x) is -1");
            o11(       -1, Math.sign,        -1, "if x is negative and not -0, then the result of sign(x) is -1");
            o11(       -1, Math.sign,      -200, "if x is negative and not -0, then the result of sign(x) is -1");
            o11(       -1, Math.sign, -Infinity, "if x is negative and not -0, then the result of sign(x) is -1");
            o11(        1, Math.sign,     0.001, "if x is positive and not +0, then the result of sign(x) is 1");
            o11(        1, Math.sign,         1, "if x is positive and not +0, then the result of sign(x) is 1");
            o11(        1, Math.sign,       200, "if x is positive and not +0, then the result of sign(x) is 1");
            o11(        1, Math.sign,  Infinity, "if x is positive and not +0, then the result of sign(x) is 1");
        }
    },
    {
        name: "cbrt computes the cube root and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.cbrt,       NaN, "if x is NaN, then the result of cbrt(x) is NaN");
            o11(       +0, Math.cbrt,        +0, "if x is +0, then the result of cbrt(x) is +0");
            o11(       -0, Math.cbrt,        -0, "if x is -0, then the result of cbrt(x) is -0");
            o11(+Infinity, Math.cbrt, +Infinity, "if x is +Infinity, then the result of cbrt(x) is +Infinity");
            o11(-Infinity, Math.cbrt, -Infinity, "if x is -Infinity, then the result of cbrt(x) is -Infinity");

            o23(        1, Math.cbrt,         1, "cbrt(1) = 1");
            o23(       -1, Math.cbrt,        -1, "cbrt(-1) = -1");
            o23(        2, Math.cbrt,         8, "cbrt(8) = 2");
            o23(       -2, Math.cbrt,        -8, "cbrt(-8) = -2");
            o23(        5, Math.cbrt,       125, "cbrt(125) = 5");
            o23(       -5, Math.cbrt,      -125, "cbrt(-125) = -5");
        }
    },
    {
        name: "imul computes the multiplication of two unsigned 32 bit integers modulo 2^32",
        o29: function () {
            function o72(o4, o12, o8, o6) {
                o13(o4, o12, o8,       NaN, o6 + " for all y (y === NaN)");
                o13(o4, o12, o8, +Infinity, o6 + " for all y (y === +Infinity)");
                o13(o4, o12, o8, -Infinity, o6 + " for all y (y === -Infinity)");
                o13(o4, o12, o8,        +0, o6 + " for all y (y === +0)");
                o13(o4, o12, o8,        -0, o6 + " for all y (y === -0)");
                o13(o4, o12, o8,        +0.5, o6 + " for all y (y === +0.5)");
                o13(o4, o12, o8,        -0.5, o6 + " for all y (y === -0.5)");
                o13(o4, o12, o8,        +1, o6 + " for all y (y === +1)");
                o13(o4, o12, o8,        -1, o6 + " for all y (y === -1)");
                o13(o4, o12, o8,        +1.5, o6 + " for all y (y === +1.5)");
                o13(o4, o12, o8,        -1.5, o6 + " for all y (y === -1.5)");
                o13(o4, o12, o8,        +50, o6 + " for all y (y === +50)");
                o13(o4, o12, o8,        -50, o6 + " for all y (y === -50)");
                o13(o4, o12, o8,  +12345.67, o6 + " for all y (y === +12345.67)");
                o13(o4, o12, o8,  -12345.67, o6 + " for all y (y === -12345.67)");
            }

            o72(       +0, Math.imul,       NaN, "if x is NaN, then the result of imul(x,y) is +0");
            o72(       +0, Math.imul,        +0, "if x is +0, then the result of imul(x,y) is +0");
            o72(       +0, Math.imul,        -0, "if x is -0, then the result of imul(x,y) is +0");
            o72(       +0, Math.imul, +Infinity, "if x is +Infinity, then the result of imul(x,y) is +0");
            o72(       +0, Math.imul, -Infinity, "if x is -Infinity, then the result of imul(x,y) is +0");

            o13(          0, Math.imul,     0,     0, "imul(0,0) is 0");
            o13(          0, Math.imul,     0,     1, "imul(0,0) is 0");
            o13(          0, Math.imul,     1,     0, "imul(0,0) is 0");
            o13(          1, Math.imul,     1,     1, "imul(0,0) is 0");
            o13(          6, Math.imul,     2,     3, "imul(0,0) is 0");
            o13(         -8, Math.imul,     4,    -2, "imul(0,0) is 0");
            o13(       1024, Math.imul,    32,    32, "imul(0,0) is 0");
            o13(          0, Math.imul, 65536, 65536, "imul(2^16,2^16) is 0 because imul is modulo 2^32");
            o13(-2147483648, Math.imul, 32768, 65536, "imul(2^15,2^16) is -2^31 because imul is modulo 2^32 and subtracts 2^31 if the value would be greater than or equal to 2^31");
            o13(-2147418112, Math.imul, 32769, 65536, "imul(2^15 + 1,2^16) is -2^31 + 65536 because imul is modulo 2^32 and subtracts 2^31 if the value would be greater than or equal to 2^31");
        }
    },
    {
        name: "clz returns the number of leading zero bits of the unsigned 32 bit integer representation of the this argument",
        o29: function () {
            o11(32, Math.clz32, 0x00000000, "32 leading zero bits in the uint32 value 0x00000000");
            o11(31, Math.clz32, 0x00000001, "31 leading zero bits in the uint32 value 0x00000001");
            o11(30, Math.clz32, 0x00000002, "30 leading zero bits in the uint32 value 0x00000002");
            o11(29, Math.clz32, 0x00000004, "29 leading zero bits in the uint32 value 0x00000004");
            o11(28, Math.clz32, 0x00000008, "28 leading zero bits in the uint32 value 0x00000008");
            o11(27, Math.clz32, 0x00000010, "27 leading zero bits in the uint32 value 0x00000010");
            o11(26, Math.clz32, 0x00000020, "26 leading zero bits in the uint32 value 0x00000020");
            o11(25, Math.clz32, 0x00000040, "25 leading zero bits in the uint32 value 0x00000040");
            o11(24, Math.clz32, 0x00000080, "24 leading zero bits in the uint32 value 0x00000080");
            o11(23, Math.clz32, 0x00000100, "23 leading zero bits in the uint32 value 0x00000100");
            o11(22, Math.clz32, 0x00000200, "22 leading zero bits in the uint32 value 0x00000200");
            o11(21, Math.clz32, 0x00000400, "21 leading zero bits in the uint32 value 0x00000400");
            o11(20, Math.clz32, 0x00000800, "20 leading zero bits in the uint32 value 0x00000800");
            o11(19, Math.clz32, 0x00001000, "19 leading zero bits in the uint32 value 0x00001000");
            o11(18, Math.clz32, 0x00002000, "18 leading zero bits in the uint32 value 0x00002000");
            o11(17, Math.clz32, 0x00004000, "17 leading zero bits in the uint32 value 0x00004000");
            o11(16, Math.clz32, 0x00008000, "16 leading zero bits in the uint32 value 0x00008000");
            o11(15, Math.clz32, 0x00010000, "15 leading zero bits in the uint32 value 0x00010000");
            o11(14, Math.clz32, 0x00020000, "14 leading zero bits in the uint32 value 0x00020000");
            o11(13, Math.clz32, 0x00040000, "13 leading zero bits in the uint32 value 0x00040000");
            o11(12, Math.clz32, 0x00080000, "12 leading zero bits in the uint32 value 0x00080000");
            o11(11, Math.clz32, 0x00100000, "11 leading zero bits in the uint32 value 0x00100000");
            o11(10, Math.clz32, 0x00200000, "10 leading zero bits in the uint32 value 0x00200000");
            o11( 9, Math.clz32, 0x00400000, "9 leading zero bits in the uint32 value 0x00400000");
            o11( 8, Math.clz32, 0x00800000, "8 leading zero bits in the uint32 value 0x00800000");
            o11( 7, Math.clz32, 0x01000000, "7 leading zero bits in the uint32 value 0x01000000");
            o11( 6, Math.clz32, 0x02000000, "6 leading zero bits in the uint32 value 0x02000000");
            o11( 5, Math.clz32, 0x04000000, "5 leading zero bits in the uint32 value 0x04000000");
            o11( 4, Math.clz32, 0x08000000, "4 leading zero bits in the uint32 value 0x08000000");
            o11( 3, Math.clz32, 0x10000000, "3 leading zero bits in the uint32 value 0x10000000");
            o11( 2, Math.clz32, 0x20000000, "2 leading zero bits in the uint32 value 0x20000000");
            o11( 1, Math.clz32, 0x40000000, "1 leading zero bit in the uint32 value 0x40000000");
            o11( 0, Math.clz32, 0x80000000, "0 leading zero bits in the uint32 value 0x80000000");

            // quick random sampling to ensure values with more than one "one" bits still produce the correct result
            o11(28, Math.clz32, 0x0000000A, "28 leading zero bits in the uint32 value 0x0000000A, same as 0x00000008");
            o11(17, Math.clz32, 0x00007ABC, "17 leading zero bits in the uint32 value 0x00007ABC, same as 0x00004000");
            o11( 3, Math.clz32, 0x10380FE1, "3 leading zero bits in the uint32 value 0x10380FE1, same as 0x10000000");

            // The argument is converted to a uint32 via the ToUint32 algorithm, so all objects work
            o11(32, Math.clz32,    undefined, "Undefined converts to +0 therefore 32 leading zero bits");
            o11(32, Math.clz32,      "hello", "Non-number string converts to +0 therefore 32 leading zero bits");
            o11( 2, Math.clz32, "0x20000000", "Number string converts to that number therefore however many leading zero bits");
            var o73 = { valueOf: function () { return 0x00800000; } };
            o11( 8, Math.clz32, o73, "Object with valueOf method converts to result of that method therefore however many leading zero bits");
        }
    },
    {
        name: "fround converts 64-bit float to 32-bit float and back to 64-bit float",
        o29: function () {
            o11(      NaN, Math.fround,       NaN, "if x is NaN, then the result of fround(x) is NaN");
            o11(+Infinity, Math.fround, +Infinity, "if x is +Infinity, then the result of fround(x) is +Infinity");
            o11(-Infinity, Math.fround, -Infinity, "if x is -Infinity, then the result of fround(x) is -Infinity");
            o11(       +0, Math.fround,        +0, "if x is +0, then the result of fround(x) is +0");
            o11(       -0, Math.fround,        -0, "if x is -0, then the result of fround(x) is -0");
            o11(       +1, Math.fround,        +1, "if x is +1, then the result of fround(x) is +1");
            o11(       -1, Math.fround,        -1, "if x is -1, then the result of fround(x) is -1");
            o11(       +2, Math.fround,        +2, "if x is +2, then the result of fround(x) is +2");
            o11(       -2, Math.fround,        -2, "if x is -2, then the result of fround(x) is -2");
            o11(       +5, Math.fround,        +5, "if x is +5, then the result of fround(x) is +5");
            o11(       -5, Math.fround,        -5, "if x is -5, then the result of fround(x) is -5");
            o11(     +100, Math.fround,      +100, "if x is +100, then the result of fround(x) is +100");
            o11(     -100, Math.fround,      -100, "if x is -100, then the result of fround(x) is -100");
            o11(     +0.5, Math.fround,      +0.5, "if x is +0.5, then the result of fround(x) is +0.5");
            o11(     -0.5, Math.fround,      -0.5, "if x is -0.5, then the result of fround(x) is -0.5");

            let o76 = [
                // numbers between zero and one
                [0.5995356650091708     , 0.5995356440544128    ],
                [0.4388806028291583     , 0.43888059258461      ],
                [0.05652953824028373    , 0.056529536843299866  ],
                [0.8834999229293317     , 0.8834999203681946    ],
                [0.19564732676371932    , 0.19564732909202576   ],
                [0.04695801460184157    , 0.046958014369010925  ],
                [0.995549641083926      , 0.9955496191978455    ],
                [0.5965264535043389     , 0.5965264439582825    ],
                [0.3384522853884846     , 0.3384522795677185    ],
                [0.4793784348294139     , 0.47937843203544617   ],

                // large integers
                [968719029287650        , 968719001976832       ],
                [612872438100595        , 612872438677504       ],
                [986007985043197        , 986007990173696       ],
                [229849530517651        , 229849536921600       ],
                [1069224778058320       , 1069224793473024      ],
                [404824585745150        , 404824591958016       ],
                [980853506006873        , 980853492547584       ],
                [156784970534624        , 156784962568192       ],
                [416562781028203        , 416562771132416       ],
                [724128106542317        , 724128130662400       ],

                // arbitrary numbers
                [6785.904748927644      , 6785.90478515625      ],
                [5.585741676777502      , 5.5857415199279785    ],
                [0.1787555584523126     , 0.17875555157661438   ],
                [45167.42179931141      , 45167.421875          ],
                [53.97847279046722      , 53.97847366333008     ],
                [708731082.0651336      , 708731072             ],
                [786033.2273395439      , 786033.25             ],
                [134428002986767.81     , 134428005236736       ],
                [10598756866706         , 10598756646912        ],
                [2316.058639210134      , 2316.05859375         ],
            ];
            for (let o77=0; o77 < o76.length; o77++) {
                    o11( o76[o77][1], Math.fround,  o76[o77][0], "if x is "+o76[o77][0]+", then the result of fround(x) is "+o76[o77][1]);
            }

            // Test against type specialization bugs
            //  -bgjit- -maxinterpretcount:1 -maxsimplejitruncount:2
            function o78() {
              o79.o80 = Math.fround(1);
              return o79.o80;
            }
            let o81={};
            let o79 = Object.create(o81);

            o78();
            o78();
            o78(); // ok till this point
            o2.o3(  1, o78(), "Math.fround() expects both input and output type specialized to float64") ;
        }
    },
];

o84.o85(o27, { o86: o0.o87[0] != "summary" });
