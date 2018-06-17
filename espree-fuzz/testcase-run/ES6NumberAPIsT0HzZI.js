//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Number API extensions tests -- verifies the API shape and basic functionality

try {
o0.o1(o421);
}catch(e){}

var o2 = [
    function () {
            function o70(o28) {
                var o6 = o360.prototype.o829 = function (o768) {try {
"use strict";
}catch(e){}
  var o863 = (this.o155[0x1 | o768] << 8) | this.o155[0x9FFE & o768];
  var o864 = this.o543[(o768 & 0x1FF0) >> 4];
  try {
o768 = (o768 & 0xE) << 2;
}catch(e){}
  try {
o864[o768 | 7] = ((o863 & 0x100) >> 7) | (o863 & 0x1);
}catch(e){}
  try {
o864[o768 | 6] = ((o863 & 0x200) >> 8) | ((o863 & 0x2) >> 1);
}catch(e){}
  try {
o864[o768 | 5] = ((o863 & 0x400) >> 9) | ((o863 & 0x4) >> 2);
}catch(e){}
  try {
o864[o768 | 4] = ((o863 & 0x800) >> 10) | ((o863 & 0x8) >> 3);
}catch(e){}
  try {
o864[o768 | 3] = ((o863 & 0x1000) >> 11) | ((o863 & 0x10) >> 4);
}catch(e){}
  try {
o864[o768 | 2] = ((o863 & 0x2000) >> 12) | ((o863 & 0x20) >> 5);
}catch(e){}
  try {
o864[o768 | 1] = ((o863 & 0x4000) >> 13) | ((o863 & 0x40) >> 6);
}catch(e){}
  try {
o864[o768] = ((o863 & 0x8000) >> 14) | ((o863 & 0x80) >> 7);
}catch(e){}
};

                try {
o8.o14(function () { try {
o6.__defineGetter__("a", o28);
}catch(e){} }, o29, "__defineGetter__ should throw with getter function arg: " + o28);
}catch(e){}
                try {
o8.o14(function () { try {
o6.__defineSetter__("a", o28);
}catch(e){} }, o29, "__defineSetter__ should throw with setter function arg: " + o28);
}catch(e){}
            }

            try {
o27(undefined);
}catch(e){}
            try {
o27(null);
}catch(e){}
            try {
o27(0);
}catch(e){}
            try {
o27(1234);
}catch(e){}
            try {
o27("hello");
}catch(e){}
            try {
o27({ o10: 1, o18: 2 });
}catch(e){}
            try {
o27([ 1, 2 ]);
}catch(e){}
        },
    function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = o421.o143;
}catch(e){}
  },
    {
        name: "MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are exactly +/-9007199254740991",
        o3: function () {
            try {
o4.o9(Number.MAX_SAFE_INTEGER, 9007199254740991, "Number.MAX_SAFE_INTEGER is the largest integer value representable by Number without losing precision, i.e. 9007199254740991");
}catch(e){}
            try {
o4.o9(Number.o10, -9007199254740991, "Number.MIN_SAFE_INTEGER is the loweset integer value representable by Number without losing precision, i.e. -9007199254740991");
}catch(e){}
        }
    },
    o0('Test #' + index + ' - Success handler #1 called with result = ' + o10),
    {
        name: "parseFloat parses floats in a given string -- same as the global object's parseFloat",
        o3: function () {
            // Just do a small sample of tests since we know the implementation of parseFloat is the exact same as the global parseFloat function
            try {
o4.o9(0, Number.parseFloat("0"), "Testing sample: 0");
}catch(e){}
            try {
o4.o9(-1, Number.parseFloat("-1"), "Testing sample: -1");
}catch(e){}
            try {
o4.o9(3.14159, Number.parseFloat("3.14159"), "Testing sample: 3.14159");
}catch(e){}

            try {
o4.o9(parseFloat, Number.parseFloat, "global parseFloat and Number.parseFloat are the same function object");
}catch(e){}
        }
    },
    {
        name: "isNaN behaves similar to the global object's isNaN except it does not coerce its argument to Number",
        o3: function () {
            try {
o4.o5(Number.isNaN(NaN), "Number.isNaN returns true for NaN");
}catch(e){}
            try {
o4.o5(Number.isNaN(0/0), "Number.isNaN returns true for 0/0 which is NaN");
}catch(e){}
            try {
o4.o11(Number.isNaN(123), "Number.isNaN returns false for a finite number, say 123");
}catch(e){}
            try {
o4.o11(Number.isNaN(-3.14159), "Number.isNaN returns false for a finite number, say -3.14159");
}catch(e){}
            try {
o4.o11(Number.isNaN(Infinity), "Number.isNaN returns false for +Infinity");
}catch(e){}
            try {
o4.o11(Number.isNaN(-Infinity), "Number.isNaN returns false for -Infinity");
}catch(e){}
            try {
o4.o11(Number.isNaN(undefined), "Number.isNaN returns false for undefined");
}catch(e){}
            try {
o4.o11(Number.isNaN(null), "Number.isNaN returns false for null");
}catch(e){}
            try {
o4.o11(Number.isNaN(new Number(0)), "Number.isNaN returns false for Number object");
}catch(e){}
            try {
o4.o11(Number.isNaN(new Number(NaN)), "Number.isNaN returns false for Number object whose value is NaN");
}catch(e){}
            try {
o4.o11(Number.isNaN("1234"), "Number.isNaN returns false for a string with value '1234'");
}catch(e){}
            try {
o4.o11(Number.isNaN("NaN"), "Number.isNaN returns false for a string with value 'NaN'");
}catch(e){}
            try {
o4.o11(Number.isNaN("Apple"), "Number.isNaN returns false for a string with value 'Apple'");
}catch(e){}
        }
    },
    {
        name: "isFinite behaves similar to the global object's isFinite except it does not coerce its argument to Number",
        o3: function () {
            try {
o4.o5(Number.isFinite(0), "Number.isFinite returns true for 0");
}catch(e){}
            try {
o4.o5(Number.isFinite(123), "Number.isFinite returns true for 123");
}catch(e){}
            try {
o4.o5(Number.isFinite(-3.14159), "Number.isFinite returns true for -3.14159");
}catch(e){}
            try {
o4.o5(Number.isFinite(Number.MAX_SAFE_INTEGER), "Number.isFinite returns true for Number.MAX_SAFE_INTEGER");
}catch(e){}
            try {
o4.o5(Number.isFinite(Number.o10), "Number.isFinite returns true for Number.MIN_SAFE_INTEGER");
}catch(e){}
            try {
o4.o11(Number.isFinite(Infinity), "Number.isFinite returns false for Infinity");
}catch(e){}
            try {
o4.o11(Number.isFinite(-Infinity), "Number.isFinite returns false for -Infinity");
}catch(e){}
            try {
o4.o11(Number.isFinite(NaN), "Number.isFinite returns false for NaN");
}catch(e){}
            try {
o4.o11(Number.isFinite(undefined), "Number.isFinite returns false for undefined");
}catch(e){}
            try {
o4.o11(Number.isFinite(null), "Number.isFinite returns false for null");
}catch(e){}
            try {
o4.o11(Number.isFinite(new Number(0)), "Number.isFinite returns false for Number object with finite value");
}catch(e){}
            try {
o4.o11(Number.isFinite(new Number(Infinity)), "Number.isFinite returns false for Number object with infinite value");
}catch(e){}
            try {
o4.o11(Number.isFinite("1234"), "Number.isFinite returns false for a string with value '1234'");
}catch(e){}
            try {
o4.o11(Number.isFinite("Infinity"), "Number.isFinite returns false for a string with value 'Infinity'");
}catch(e){}
            try {
o4.o11(Number.isFinite("NaN"), "Number.isFinite returns false for a string with value 'NaN'");
}catch(e){}
            try {
o4.o11(Number.isFinite("Apple"), "Number.isFinite returns false for a string with value 'Apple'");
}catch(e){}
        }
    },
    {
        name: "isInteger returns true if its argument is a number and, after coercion via ToInteger abstract operation, is the same value, false otherwise",
        o3: function () {
            try {
o4.o5(Number.o6(0), "Number.isInteger returns true for 0");
}catch(e){}
            try {
o4.o5(Number.o6(-0), "Number.isInteger returns true for -0");
}catch(e){}
            try {
o4.o5(Number.o6(1), "Number.isInteger returns true for 1");
}catch(e){}
            try {
o4.o5(Number.o6(-1), "Number.isInteger returns true for -1");
}catch(e){}
            try {
o4.o5(Number.o6(12345), "Number.isInteger returns true for 12345");
}catch(e){}
            try {
o4.o5(Number.o6(Number.MAX_SAFE_INTEGER), "Number.isInteger returns true for Number.MAX_SAFE_INTEGER");
}catch(e){}
            try {
o4.o5(Number.o6(Number.o10), "Number.isInteger returns true for Number.MIN_SAFE_INTEGER");
}catch(e){}
            try {
o4.o5(Number.o6(Number.MAX_SAFE_INTEGER - 1000), "Number.isInteger returns true for Number.MAX_SAFE_INTEGER - 1000");
}catch(e){}
            try {
o4.o5(Number.o6(Number.MAX_SAFE_INTEGER + 1000), "Number.isInteger returns true for Number.MAX_SAFE_INTEGER + 1000");
}catch(e){}
            try {
o4.o11(Number.o6(Infinity), "Number.isInteger returns false for Infinity");
}catch(e){}
            try {
o4.o11(Number.o6(-Infinity), "Number.isInteger returns false for -Infinity");
}catch(e){}
            try {
o4.o11(Number.o6(0.5), "Number.isInteger returns false for 0.5");
}catch(e){}
            try {
o4.o11(Number.o6(-0.5), "Number.isInteger returns false for -0.5");
}catch(e){}
            try {
o4.o11(Number.o6(3.14159), "Number.isInteger returns false for 3.14159");
}catch(e){}
            try {
o4.o11(Number.o6(Number.MAX_SAFE_INTEGER / 2), "Number.isInteger returns false for Number.MAX_SAFE_INTEGER / 2");
}catch(e){}
            try {
o4.o11(Number.o6(NaN), "Number.isInteger returns false for NaN");
}catch(e){}
            try {
o4.o11(Number.o6(undefined), "Number.isInteger returns false for undefined");
}catch(e){}
            try {
o4.o11(Number.o6(null), "Number.isInteger returns false for null");
}catch(e){}
            try {
o4.o11(Number.o6("12345"), "Number.isInteger returns false for a string with value '12345'");
}catch(e){}
            try {
o4.o11(Number.o6("3.14159"), "Number.isInteger returns false for a string with value '3.14159'");
}catch(e){}
            try {
o4.o11(Number.o6("NaN"), "Number.isInteger returns false for a string with value 'NaN'");
}catch(e){}
            try {
o4.o11(Number.o6(new Number(125)), "Number.isInteger returns false for a Number object with value 125");
}catch(e){}
            try {
o4.o11(Number.o6(new Number(65.536)), "Number.isInteger returns false for Number object with value 65.536");
}catch(e){}
            try {
o4.o11(Number.o6(new Number(Infinity)), "Number.isInteger returns false for Number object with value Infinity");
}catch(e){}
        }
    },
    {
        name: "isSafeInteger returns true if its argument is a number and, after coercion via ToInteger abstract operation, is the same value, false otherwise",
        o3: function () {
            try {
o4.o5(Number.isSafeInteger(0), "Number.isSafeInteger returns true for 0");
}catch(e){}
            try {
o4.o5(Number.isSafeInteger(-0), "Number.isSafeInteger returns true for -0");
}catch(e){}
            try {
o4.o5(Number.isSafeInteger(1), "Number.isSafeInteger returns true for 1");
}catch(e){}
            try {
o4.o5(Number.isSafeInteger(-1), "Number.isSafeInteger returns true for -1");
}catch(e){}
            try {
o4.o5(Number.isSafeInteger(12345), "Number.isSafeInteger returns true for 12345");
}catch(e){}
            try {
o4.o5(Number.isSafeInteger(Number.MAX_SAFE_INTEGER), "Number.isSafeInteger returns true for Number.MAX_SAFE_INTEGER");
}catch(e){}
            try {
o4.o5(Number.isSafeInteger(Number.o10), "Number.isSafeInteger returns true for Number.MIN_SAFE_INTEGER");
}catch(e){}
            try {
o4.o5(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1000), "Number.isSafeInteger returns true for Number.MAX_SAFE_INTEGER - 1000");
}catch(e){}
            try {
o4.o5(Number.isSafeInteger(Number.o10 + 1000), "Number.isSafeInteger returns true for Number.MIN_SAFE_INTEGER + 1000");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1000), "Number.isSafeInteger returns false for Number.MAX_SAFE_INTEGER + 1000");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(Number.o10 - 1000), "Number.isSafeInteger returns false for Number.MIN_SAFE_INTEGER - 1000");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(Infinity), "Number.isSafeInteger returns false for Infinity");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(-Infinity), "Number.isSafeInteger returns false for -Infinity");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(0.5), "Number.isSafeInteger returns false for 0.5");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(-0.5), "Number.isSafeInteger returns false for -0.5");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(3.14159), "Number.isSafeInteger returns false for 3.14159");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(Number.MAX_SAFE_INTEGER / 2), "Number.isSafeInteger returns false for Number.MAX_SAFE_INTEGER / 2");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(NaN), "Number.isSafeInteger returns false for NaN");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(undefined), "Number.isSafeInteger returns false for undefined");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(null), "Number.isSafeInteger returns false for null");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger("12345"), "Number.isSafeInteger returns false for a string with value '12345'");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger("3.14159"), "Number.isSafeInteger returns false for a string with value '3.14159'");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger("NaN"), "Number.isSafeInteger returns false for a string with value 'NaN'");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(new Number(125)), "Number.isSafeInteger returns false for a Number object with value 125");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(new Number(65.536)), "Number.isSafeInteger returns false for Number object with value 65.536");
}catch(e){}
            try {
o4.o11(Number.isSafeInteger(new Number(Infinity)), "Number.isSafeInteger returns false for Number object with value Infinity");
}catch(e){}
        }
    },
];

try {
o12.o13(o2, { o14: o0.o15[0] != "summary" });
}catch(e){}
