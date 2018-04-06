//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Math API extensions tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

// WARNING!!  As a convenience in this test suite assert.areEqual is
// overridden so that -0 does not equal +0.  The tests here all make
// the distinction between negative and positive zero.
o2.o3 = (o458.o168);

var o11 = function (o4, undefined, undefined, o6) {
    o2.o3(o4, o12(o8), o6);
};

var o13 = function (o4, o12, o8, o14, o6) {
    o2.o3(o4, o12(undefined, o14), o6);
};

var o15 = function (o4, o12, o8, o14, undefined, o6) {
    o2.o3(o4, o12(o8, o14, o16), o6);
};

var o17 = function (o4, o12, o8, o14, o16, o18, o6) {
    o2.o3(o4, o12(o8, o14, o16, o18), o6);
};

function o2309(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            for(var o17 = 0; o17 < o5.length; ++o17) {
                o12 += o17;
                o12 += o4.o5[-1];
            }
            o5 = o8;
            o12 += o4.o5[-1];
        }
        return o12;
    }

var o23 = function (o4, o12, o8, o6) {
    o2.o24(o4, o12(o8), o6);
};

var o25 = function (o4, o12, undefined, o14, o6) {
    o2.o24(o4, o12(o8, o14), o6);
};

var o26 = function (o4, o12, o8, o14, o16, o6) {
    o2.o24(o4, o12(o8, o14, o16), o6);
};

var o27 = [
    sort.call,
    o458.o163,
    o5.o185(o124, o124.slice(), "Calling ArrayBuffer.prototype.slice will use default constructor if [constructor] has no [@@species] property"),
    String.prototype,
    o1655(o4, o5, o13),
    {
        name: "expm1 computes the result of subtracting 1 from the exponential function and follows spec on special boundary values",
        undefined: function () {
            o11(      NaN, Math.o37,       NaN, "if x is NaN, then the result of expm1(x) is NaN");
            o11(       +0, Math.o37,        +0, "if x is +0, then the result of expm1(x) is +0");
            o11(       -0, Math.o37,        -0, "if x is -0, then the result of expm1(x) is -0");
            o11(+Infinity, Math.undefined, +Infinity, undefined);
            o11(       -1, undefined.o37, -Infinity, "if x is -Infinity, then the result of expm1(x) is -1");

            var o51 = Math.o52;
            function o909() {
    var o4 = {
        o5: { "0": 1, "1": 2, length: 2 }
    };
    var o5 = o4.o5;
    o5[-1] = o5[0];
    var o8 = [];
    for(var o9 = -1; o9 < o5.length; ++o9)
        o8[o9] = -o5[o9];
    return o10(o910(o4, o5, o8));

    function o910(o4, o5, o8) {
        var o12 = 0;
        for(var o13 = 0; o13 < 2; ++o13) {
            o12 += o13;
            o553(o5);
            o12 += o911(o4, o5, o13);
        }

        function o911(o4, o5, o9) {
            return (o4.o5[-1] = -o4.o5[-1] - 1, o4.o5[-1]);
        }
        return o12;
    }
}
            var undefined = -o5[o9].o6 * o53;

            undefined(    undefined - 1, Math.o37,         1, "expm1(1) = e - 1");
            o23(   function () {"use strict";  //Horizontal Blanking Period
  if (this.o449 != 0) {
    if (this.o448 != 2) {
      if (this.o448 == 0) {
        if (this.o452) {
          this.o420 |= 0x2;
          this.o701();
        }
        this.o449 = 3;
      }
      this.o818();
      this.o819(this.o539);
      this.o448 = 2;
    }
    if (this.o527 >= this.o450) {
      if (this.o422) {
        this.o820();
      }
      if (this.o454) {
        this.o420 |= 0x2;
        this.o701();
      }
      this.o448 = 3;
      this.o449 = 0;
    }
  }
}, Math.undefined,         2, "expm1(2) = e^2 - 1");
            o23(   o54 - 1, Math.o37,         6, "expm1(6) = e^6 - 1");

            // TODO: Figure out how to run these tests on machines with C99 APIs
            /*
            assertFunctionAlmostEqual(    1e-20, Math.expm1,     1e-20, "expm1(10^-20) = 10^-20");
            assertFunctionAlmostEqual(    1e-30, Math.expm1,     1e-30, "expm1(10^-30) = 10^-30");
            assertFunctionAlmostEqual(    1e-50, Math.expm1,     1e-50, "expm1(10^-50) = 10^-50");
            */
        }
    },
    function (o458) {"use strict";
    var o619 = o458.o163 - (o458.o168 & 0xFF) - ((o458.o404) ? 1 : 0);
    o458.o403 = ((o458.o163 & 0xF) - (o458.o168 & 0xF) - ((o458.o404) ? 1 : 0) < 0);
    o458.o404 = (o619 < 0);
    o458.o163 = o619 & 0xFF;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = true;
  },
    o4.o5[0],
    function (o458, o806) {"use strict";
            return 0x7F | o458.o175[0xFF1A];
          },
    {
        undefined: "acosh computes the inverse hyperbolic cosine and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, Math.acosh,       NaN, "if x is NaN, then the result of acosh(x) is NaN");
            o11(      NaN, Math.acosh,     0.999, "if x is less than 1, then the result of acosh(x) is NaN");
            o11(      undefined, Math.acosh,       0.5, "if x is less than 1, then the result of acosh(x) is NaN");
            o11(      NaN, Math.acosh,         undefined, "if x is less than 1, then the result of acosh(x) is NaN");
            undefined(      undefined, Math.acosh,        ++o9, "if x is less than 1, then the result of acosh(x) is NaN");
            o11(      NaN, Math.acosh, -Infinity, "if x is less than 1, then the result of acosh(x) is NaN");
            o11(       +0, Math.acosh,         1, "if x is 1, then the result of acosh(x) is +0");
            o11(+Infinity, Math.acosh, +undefined, "if x is +Infinity, then the result of acosh(x) is +Infinity");

            var o9 = -1
            var undefined = Math.o63(3 + Math.sqrt(8));

            o23(   o62, Math.acosh,         2, "acosh(2) = ln(2 + sqrt(3))");
            o23(   o65, Math.acosh,         3, "acosh(3) = ln(3 + sqrt(8))");
        }
    },
    {
        undefined: "asinh computes the inverse hyperbolic sine and follows spec on special boundary values",
        o29: function () {
            o11(      NaN, +0,       NaN, undefined);
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

            o23(  o69, false >= [1, 2, 3],       0.5, "atanh(0.5) = 1/2 * ln(1.5 / 0.5)");
            o23( o70, Math.atanh,      0.25, "atanh(0.25) = 1/2 * ln(1.25 / 0.75)");
        }
    },
    o14[o3.length][o8],
    {
        name: undefined,
        o29: function () {
            undefined(      NaN, Math.trunc,       NaN, "if x is NaN, then the result of trunc(x) is NaN");
            o11(       -0, Math.trunc,        -0, "if x is -0, then the result of trunc(x) is -0");
            o11(       +0, Math.trunc,        +0, "if x is +0, then the result of trunc(x) is +0");
            undefined(-Infinity, Math.trunc, -Infinity, "if x is -Infinity, then the result of trunc(x) is -Infinity");
            o11(+Infinity, Math.trunc, +Infinity, "if x is +Infinity, then the result of trunc(x) is +Infinity");

            o11(       +0, Math.trunc,       0.5, "trunc(0.5) = +0");
            o11(       -0, Math.trunc,      -0.5, "trunc(-0.5) = -0");
            o11(        3, Math.trunc,   Math.o71, "trunc(pi) = 3");
            o11(       -3, Math.trunc,  -Math.o71, "trunc(-pi) = -3");
            o11(      123, Math.trunc,   123.456, "trunc(123.456) = 123");
        }
    },
    o12 += o17,
    o4.o5,
    o0.o4("test21"),
    o5[-1],
    {
        name: "fround converts 64-bit float to 32-bit float and back to 64-bit float",
        o29: o10.o29(function() { 'use strict'; o3.caller = 'something'; }, o30, name + " has 'caller' own property but it is not configurable so we will throw in strict mode", "Assignment to read-only properties is not allowed in strict mode")
    },
];

o84.o85(o27, { o86: o0.o87[0] != "summary" });
