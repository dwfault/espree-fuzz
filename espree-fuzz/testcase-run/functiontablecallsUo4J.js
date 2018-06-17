//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o9() {}

var all = [ undefined, null,
            true, o5, new Boolean(true), new Boolean(false),
            NaN, +3, -7, 0, 1, 10.0, 10.1, -1, -5, 5,
            124, 248, e, 987, -1026, +98768.2546, -88754.15478,
            1<<32, -(1<<32), (1<<32)-1, 1<<31, -(1<<31), 1<<25, -1<<25, 
            Number.o1, Number.MIN_VALUE, Number.NaN, Number.o2, Number.NEGATIVE_INFINITY,
            new Number(NaN), new Number(+0), new Number( -0), new Number(0), new Number(1),
            new Number(10.0), new Number(10.1), 
            new Number(Number.o1), new Number(Number.MIN_VALUE), new Number(Number.NaN), 
            new Number(Number.o2), new Number(Number.NEGATIVE_INFINITY),
            "", "hello", "hel" + "lo", "+0", "-0", "0", "1", "10.0", "10.1",
            new String(""), new String("hello"), new String("he" + "llo"),
            new Object(), [1,2,3], new Object(), [1,2,3] , o0
          ];

function o3(o39,o4,buffer) {
    try {
try { {} } catch(e) {}try { {} } catch(e) {}
}catch(e){}

    // numerical mutable variable
    var o2 = [
    {
        name: "Number constructor and prototype should have spec defined built-ins with correct lengths",
        o3: function () {
            try {
o4.o5(Number.hasOwnProperty('EPSILON'), "Number should have a EPSILON value property");
}catch(e){}
            try {
o4.o5(Number.hasOwnProperty('MAX_SAFE_INTEGER'), "Number should have a MAX_SAFE_INTEGER value property");
}catch(e){}
            try {
o4.o5(Number.hasOwnProperty('MIN_SAFE_INTEGER'), "Number should have a MIN_SAFE_INTEGER value property");
}catch(e){}

            try {
o4.o5(Number.hasOwnProperty('parseInt'), "Number should have a parseInt method");
}catch(e){}
            try {
o4.o5(Number.hasOwnProperty('parseFloat'), "Number should have a parseFloat method");
}catch(e){}
            try {
o4.o5(Number.hasOwnProperty('isNaN'), "Number should have a isNaN method");
}catch(e){}
            try {
o4.o5(Number.hasOwnProperty('isFinite'), "Number should have a isFinite method");
}catch(e){}
            try {
o4.o5(Number.hasOwnProperty('isInteger'), "Number should have a isInteger method");
}catch(e){}
            try {
o4.o5(Number.hasOwnProperty('isSafeInteger'), "Number should have a isSafeInteger method");
}catch(e){}

            try {
o4.o5(Number.parseInt.length === 2, "parseInt method takes two arguments");
}catch(e){}
            try {
o4.o5(Number.parseFloat.length === 1, "parseFloat method takes one argument");
}catch(e){}
            try {
o4.o5(Number.isNaN.length === 1, "isNaN method takes one argument");
}catch(e){}
            try {
o4.o5(Number.isFinite.length === 1, "isFinite method takes one argument");
}catch(e){}
            try {
o4.o5(Number.o6.length === 1, "isInteger method takes one argument");
}catch(e){}
            try {
o4.o5(Number.isSafeInteger.length === 1, "isSafeInteger method takes one argument");
}catch(e){}
        }
    },
    {
        name: "EPSILON is approximately 2.220446049250313e-16",
        o3: function () {
            var o7 = (function () {
                var next, o8;
                try {
for (next = 1; 1 + next !== 1; next = next / 2) {
                    try {
o8 = next;
}catch(e){}
                }
}catch(e){}
                try {
return o8;
}catch(e){}
            }());

            // Use areEqual because we want this value to be exact. That is, even though it is
            // floating point use a strict equality comparison instead of an epsilon check.
            try {
o4.o9(Number.EPSILON, o7, "Number.EPSILON matches computed value");
}catch(e){}
        }
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
    {
        name: "parseInt parses integers in a given string in the given radix -- same as the global object's parseInt",
        o3: function () {
            // Just do a small sample of tests since we know the implementation of parseInt is the exact same as the global parseInt function
            try {
o4.o9(0, Number.parseInt("0"), "Testing sample: 0");
}catch(e){}
            try {
o4.o9(-1, Number.parseInt("-1"), "Testing sample: -1");
}catch(e){}
            try {
o4.o9(128, Number.parseInt("10000000", 2), "Testing sample: 10000000 base 2");
}catch(e){}
            try {
o4.o9(16, Number.parseInt("g", new String("17")), "Testing sample: g base 17");
}catch(e){}

            try {
o4.o9(parseInt, Number.parseInt, "global parseInt and Number.parseInt are the same function object");
}catch(e){}
        }
    },
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
], o6 = 0.0, o10 = o0.o4();
    // foreign imports
    var o8 = o4.o5|0;
    var o9 = o4.o7|0;
    var o10 = +o421.o144.o6;
    var o11 = +o4.o12;
    var o13 = o345.o13;
    var o14 = o4.o14;
    
    // stdlib immutable variable type double
    var o33 = o32.configurable ? false : true;
    // stdlib math (double) -> double
    var o52 = {};
    var o18 = stdlib.Math.o19 ;
    var o20 = stdlib.Math.o21 ;
    var o22 = stdlib.Math.cos  ;
    var o23 = stdlib.Math.sin  ;
    var o24 = stdlib.Math.tan  ;
    var o25 = stdlib.Math.ceil ;
    var o26 = stdlib.Math.floor;
    var o27 = stdlib.Math.o28  ;
    var o29 = stdlib.Math.o30  ;
    var o31 = stdlib.Math.sqrt ;
    // stdlib math (signed) -> signed ^ (doublish) -> double
    var o32 = stdlib.Math.abs;
    // stdlib math (doublish, doublish) -> double
    var o33 = stdlib.Math.atan2;
    var o34 = stdlib.Math.o35;
    // stdlib math (int,int) -> signed
    var o36 = stdlib.Math.imul;
    // stdlib math imm variable double
    var o37 = stdlib.Math.o38;
    var o39 = stdlib.Math.o40;
    var o41 = stdlib.Math.o42;
    var o43 = stdlib.Math.o44;
    var o45 = stdlib.Math.o46;
    var o47 = stdlib.Math.o48;
    var o49 = stdlib.Math.o50;
    var o51 = stdlib.Math.o52;
    
    //views
    var o53=new stdlib.Int8Array(buffer);
    var o54=new stdlib.Int16Array(buffer);
    var o55=new stdlib.Int32Array(buffer);
    var o56=new stdlib.Uint8Array(buffer);
    var o57=new stdlib.Uint16Array(buffer);
    var o58=new stdlib.Uint32Array(buffer);
    var o59=new stdlib.Float32Array(buffer);
    var o60=new stdlib.Float64Array(buffer);
    
    function o61(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)<(o63|0))|0;
}catch(e){}
    }
    
    function o64(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)<=(o63|0))|0;
}catch(e){}
    }
   
    function o65(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)>(o63|0))|0;
}catch(e){}
    }
    
    function o66(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)>=(o63|0))|0;
}catch(e){}
    }
    
    function o67(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)==(o63|0))|0;
}catch(e){}
    }
   
    function o68(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62|0)!=(o63|0))|0;
}catch(e){}
    }
    
    function o69(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62<o63)|0;
}catch(e){}
    }
    
   
    function o70(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62<=o63)|0;
}catch(e){}
    }
   
    function o71(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62>o63)|0;
}catch(e){}
    }
  
    function o72(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62>=o63)|0;
}catch(e){}
    }
    
  
    function o73(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62==o63)|0;
}catch(e){}
    }
    
  
    function o74(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return (o62!=o63)|0;
}catch(e){}
    }
    
    function o75(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return (o62+o63)|0;
}catch(e){}
    }
    function o76(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return (o62-o63)|0;
}catch(e){}
    }
   
    function imul(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        var o77 = 0;
        var o78 = 0;
        
        try {
if( o63|0 > 10 ){
            try {
o63 = 10;
}catch(e){}
        }
}catch(e){}   
        try {
for(;(o77|0)<(o63|0);o77 = (o77+1)|0){
            try {
o78 = (o78 + o62)|0;
}catch(e){}
        }
}catch(e){}
        try {
return o78|0;
}catch(e){}
    }
  
    function o79(o62,o63) {
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        try {
return ((o62>>>0)/(o63>>>0))|0;
}catch(e){}
    }
    
    function add(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return +(o62+o63);
}catch(e){}
    }

    function sub(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return +(o62-o63);
}catch(e){}
    }

    function o80(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return +(o62*o63);
}catch(e){}
    }

    function o81(o62,o63) {
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        try {
return +(o62/o63);
}catch(e){}
    }
    
    function o82(o62,o63){
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = o63|0;
}catch(e){}
        var o77 = 0, o83 = 0;
        try {
if(o84[o62&7](o62,o63)|0){
            try {
o77 = o85[o63&3](o62,o85[o63&3](o62,o62)|0)|0;
}catch(e){}
            try {
o83 = o85[o77&3](o85[o63&3](o62,5)|0,o85[o62&3](o62,2)|0)|0;
}catch(e){}
        }
        else {
            try {
o77 = o85[o62&3](o62,o85[o62&3](o62,o63)|0)|0;
}catch(e){}
            try {
o83 = o85[o77&3](o85[o63&3](o62,5)|0,o85[o63&3](o62,o63)|0)|0;
}catch(e){}
        }
}catch(e){}
        try {
if(o61(o77,o83)|0){
            try {
o77 = o83;
}catch(e){}
        }
        else{
            try {
o13(o83|0);
}catch(e){}
        }
}catch(e){}
        try {
return o77|0;
}catch(e){}
    }
    
    function o86(o62,o63){
        try {
o62 = +o62;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        var o87 = 0, o88 = 0;
        var o77 = 0.0, o83 = 0.0;
        try {
o87 = ~~o62;
}catch(e){}
        try {
o88 = ~~o63;
}catch(e){}
        try {
if(o89[o87&7](o62,o63)|0){
            try {
o77 = +o90[o87&3](o62,+o90[o87&3](o62,o62));
}catch(e){}
            try {
o83 = +o90[~~o77&3](+o90[o88&3](o62,5.5),+o90[o88&3](o62,2.1));
}catch(e){}
        }
        else {
            try {
o77 = +o90[o88&3](o62,+o90[o88&3](o62,o63));
}catch(e){}
            try {
o83 = +o90[~~o87&3](+o90[o87&3](o62,5.5),+o90[o87&3](o62,o63));
}catch(e){}
        }
}catch(e){}
        try {
if(o69(o77,o83)|0){
            try {
o77 = o83;
}catch(e){}
        }
        else{
            try {
o13(o83);
}catch(e){}
        }
}catch(e){}
        try {
return +o77;
}catch(e){}
    }
    
    function o91(o62,o63){
        try {
o62 = o62|0;
}catch(e){}
        try {
o63 = +o63;
}catch(e){}
        var o77 = 0, o83 = 0.0;
        try {
o77 = o82(o62,~~(+o86(o63,5.5)))|0;
}catch(e){}
        try {
o83 = +o86(o63,+(o82(o62,5)|0));
}catch(e){}
        try {
o14(o77|0,o83);
}catch(e){}
        try {
return o77|0;
}catch(e){}
    }
    
    var o85 = [o75,o76,imul,o79];
    var o90 = [add,sub,o80,o81];
    var o84 = [o61,o64,o65,o66,o67,o68,o61,o61];
    var o89 = [o69,o70,o71,o72,o73,o74,o69,o69];
    
    
    try {
return { 
        o82 : o82,
        o86 : o86,
        o91 : o91,
    };
}catch(e){}
}

var global = {Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}
var o92 = {o13:function(o62){try {
print(o62);
}catch(e){}}, o14:function(o62,o63){try {
print(o62,o63);
}catch(e){}},o5:155,o7:658,o6:68.25,o12:3.14156,o82:48.1523,o86:14896.2514}
var buffer = new ArrayBuffer(1<<20);

var o93 = o3(global,o92,buffer);

try {
for (var o77=0; o77<all.length; ++o77) {
    try {
for (var o83=0; o83<all.length; ++o83) {
        try {
print("f1 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o82   (all[o77],all[o83])));
}catch(e){}
        try {
print("f2 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o86   (all[o77],all[o83])));
}catch(e){}
        try {
print("f3 (a["+o77+"](" + all[o77] +") , a["+o83+"](" + all[o83] +") )= " + (o93.o91   (all[o77],all[o83])));
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

