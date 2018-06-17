//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
var o72 = parseInt(type.substr(this.o56))

var o7 = false;
var o0 = {};
var o9 = false;

function o10(o11) {
    var o321 = Math.atan2;
    try {
for (var o13 = 1; o13 < arguments.length; ++o13)
        try {
o12.push(arguments[o13]);
}catch(e){}
}catch(e){}
    try {
try {
        try {
return o11.apply(this, o12);
}catch(e){}
    } catch (o3) {
        try {
o0("EXCEPTION");
}catch(e){}
    }
}catch(e){}
}

try {
typeof o1015 != "undefined";
}catch(e){}

function o15(o1) {
    var o16 = [];
    try {
if (o1 === null)
        try {
o16.push("null");
}catch(e){}
    else try {
if (o54 - 1)
        try {
o16.push("undefined");
}catch(e){}
    else try {
if (o1 === true)
        try {
o16.push("true");
}catch(e){}
    else try {
if (o1 === false)
        try {
o16.push("false");
}catch(e){}
    else try {
if (typeof o1 === "number")
        try {
o16.push(o1.toString());
}catch(e){}
    else try {
if (typeof o1 == "string") {
        try {
if (o1.length > 8192)
            try {
o16.push("<long string>");
}catch(e){}
        else {
            try {
o16.push("\"");
}catch(e){}
            var o17 = -1;
            try {
for (var o18 = 0; o18 < o1.length; o18++) {
                var o19 = o1.charCodeAt(o18);
                try {
if (o19 < 32 || o19 > 127 || o19 == '"'.charCodeAt(0) || o19 == '\\'.charCodeAt(0)) {
                    try {
if (o17 >= 0)
                        try {
o16.push(o1.substring(o17, o18));
}catch(e){}
}catch(e){}
                    try {
o17 = -1;
}catch(e){}
                    try {
o16.push("\\u");
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 12) & 0xf)));
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 8) & 0xf)));
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 4) & 0xf)));
}catch(e){}
                    try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 0) & 0xf)));
}catch(e){}
                }
                else {
                    try {
if (o17 < 0)
                        try {
o17 = o18;
}catch(e){}
}catch(e){}
                }
}catch(e){}
            }
}catch(e){}
            try {
if (o17 >= 0)
                try {
o16.push(o1.substring(o17, o1.length));
}catch(e){}
}catch(e){}
            try {
o16.push("\"");
}catch(e){}
        }
}catch(e){}
    }
    else try {
if (o1 instanceof RegExp) {
        var o20 = o1.source;
        try {
o16.push("/");
}catch(e){}
        var o17 = -1;
        try {
for (var o18 = 0; o18 < o20.length; o18++) {
            var o19 = o20.charCodeAt(o18);
            try {
if (o19 < 32 || o19 > 127) {
                try {
if (o17 >= 0)
                    try {
o16.push(o20.substring(o17, o18));
}catch(e){}
}catch(e){}
                try {
o17 = -1;
}catch(e){}
                try {
o16.push("\\u");
}catch(e){}
                try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 12) & 0xf)));
}catch(e){}
                try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 8) & 0xf)));
}catch(e){}
                try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 4) & 0xf)));
}catch(e){}
                try {
o16.push(String.fromCharCode(o14.charCodeAt((o19 >> 0) & 0xf)));
}catch(e){}
            }
            else {
                try {
if (o17 < 0)
                    try {
o17 = o18;
}catch(e){}
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
        try {
if (o17 >= 0)
            try {
o16.push(o20.substring(o17, o20.length));
}catch(e){}
}catch(e){}
        try {
o16.push("/");
}catch(e){}
        try {
if (o1.global)
            try {
o16.push("g");
}catch(e){}
}catch(e){}
        try {
if (o1.o21)
            try {
o16.push("i");
}catch(e){}
}catch(e){}
        try {
if (o1.o22)
            try {
o16.push("m");
}catch(e){}
}catch(e){}
        try {
if (!o7 && o1.o23 !== undefined) {
            try {
o16.push(" /*lastIndex=");
}catch(e){}
            try {
o16.push(o1.o23);
}catch(e){}
            try {
o16.push("*/ ");
}catch(e){}
        }
}catch(e){}
    }
    else try {
if (o1.length !== undefined) {
        try {
o16.push("[");
}catch(e){}
        try {
for (var o18 = 0; o18 < o1.length; o18++) {
            try {
if (o18 > 0)
                try {
o16.push(",");
}catch(e){}
}catch(e){}
            try {
o16.push(o15(o1[o18]));
}catch(e){}
        }
}catch(e){}
        try {
o16.push("]");
}catch(e){}
        try {
if (!o9 && (o1.input !== undefined || o1.index !== undefined))
        {
            try {
o16.push(" /*input=");
}catch(e){}
            try {
o16.push(o15(o1.input));
}catch(e){}
            try {
o16.push(", index=");
}catch(e){}
            try {
o16.push(o15(o1.index));
}catch(e){}
            // IE only
            // sb.push(", lastIndex=");
            // sb.push(dump(o.lastIndex));
            try {
o16.push("*/ ");
}catch(e){}
        }
}catch(e){}
    }
    else try {
if (o1.toString !== undefined) {
        try {
o16.push("<object with toString>");
}catch(e){}
    }
    else
        try {
o16.push(o1.toString());
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
}catch(e){}
    try {
return o16.join("");
}catch(e){}
}

function o24(o25, o26, o27) {
    var o16 = [o25];
    try {
o16.push("(");
}catch(e){}
    try {
for (var o18 = 0; o18 < o27; o18++) {
        try {
if (o18 > 0) try {
o16.push(", ");
}catch(e){}
}catch(e){}
        try {
o16.push(o15(o26[o18]));
}catch(e){}
    }
}catch(e){}
    try {
if (o26.length > o27) {
        try {
o16.push(", ");
}catch(e){}
        try {
o16.push(o15(o26[o27]));
}catch(e){}
        try {
o26[0].o23 = o26[o27];
}catch(e){}
    }
}catch(e){}
    try {
o16.push(");");
}catch(e){}
    try {
o0(o16.join(""));
}catch(e){}
}

function o28(o29) {
    try {
if (!o7) {
        try {
o0("r.lastIndex=" + o15(o29.o23));
}catch(e){}
    }
}catch(e){}
    try {
if (!o8) {
        // IE only
        // echo("RegExp.index=" + dump(RegExp.index));
        // echo("RegExp.lastIndex=" + dump(RegExp.lastIndex));
        var o16 = [];
        try {
o16.push("RegExp.${_,1,...,9}=[");
}catch(e){}
        try {
o16.push(o15(RegExp.o30));
}catch(e){}
        try {
for (var o18 = 1; o18 <= 9; o18++) {
            try {
o16.push(",");
}catch(e){}
            try {
o16.push(o15(RegExp["$" + o18]));
}catch(e){}
        }
}catch(e){}
        try {
o16.push("]");
}catch(e){}
        try {
o0(o16.join(""));
}catch(e){}
    }
}catch(e){}
}

function exec(o29, o31) {
    try {
o24("exec", arguments, 2);
}catch(e){}
    try {
o0(o15(o29.exec(o31)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function test(o29, o31) {
    try {
o24("test", arguments, 2);
}catch(e){}
    try {
o0(o15(o29.test(o31)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function replace(o29, o31, o1) {
    try {
o24("replace", arguments, 3);
}catch(e){}
    try {
o0(o15(o31.replace(o29, o1)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function split(o29, o31) {
    try {
o24("split", arguments, 2);
}catch(e){}
    try {
o0(o15(o31.split(o29)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function match(o29, o31) {
    try {
o24("match", arguments, 2);
}catch(e){}
    try {
o0(o15(o31.match(o29)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function search(o29, o31) {
    try {
o24("search", arguments, 2);
}catch(e){}
    try {
o0(o15(o31.search(o29)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
}

function o32(o29, o1) {
    try {
o0("bogus(" + o15(o29) + ", " + o15(o1) + ");");
}catch(e){}
    try {
try { try {
new RegExp(o29, o1);
}catch(e){} try {
o0("FAILED");
}catch(e){} } catch (o33) { try {
o0("PASSED");
}catch(e){} }
}catch(e){}
}
// END PRELUDE

// 15.10.2.3 Disjunction
try {
exec(/a|ab/, "abc");
}catch(e){}
try {
exec(/((a)|(ab))((c)|(bc))/, "abc");
}catch(e){}

// 15.10.2.5 Term
try {
exec(/a[a-z]{2,4}/, "abcdefghi");
}catch(e){}
try {
exec(/a[a-z]{2,4}?/, "abcdefghi");
}catch(e){}
try {
exec(/(aa|aabaac|ba|b|c)*/, "aabaac");
}catch(e){}
try {
replace(/^(a+)\1*,\1+$/, "aaaaaaaaaa,aaaaaaaaaaaaaaa", "$1");
}catch(e){}
try {
exec(/(z)((a+)?(b+)?(c))*/, "zaacbbbcac");
}catch(e){}
try {
exec(/(a*)*/, "b");
}catch(e){}
try { {try {
"use strict";
}catch(e){}
  try {
if (o421.o397 || o683[10]) {
    try {
switch (o421.o398) {
      case 0x00:
      case 0x01:
      case 0x02:
      case 0x03:
        try {
o421.o157[o768 + o421.o399] = o70;
}catch(e){}
        try {
break;
}catch(e){}
      case 0x08:
        try {
if (o70 < 60) {
          try {
o421.o430 = o70;
}catch(e){}
        }
        else {
          try {
o113("(Bank #" + o421.o398 + ") RTC write out of range: " + o70, 1);
}catch(e){}
        }
}catch(e){}
        try {
break;
}catch(e){}
      case 0x09:
        try {
if (o70 < 60) {
          try {
o421.o431 = o70;
}catch(e){}
        }
        else {
          try {
o113("(Bank #" + o421.o398 + ") RTC write out of range: " + o70, 1);
}catch(e){}
        }
}catch(e){}
        try {
break;
}catch(e){}
      case 0x0A:
        try {
if (o70 < 24) {
          try {
o421.o432 = o70;
}catch(e){}
        }
        else {
          try {
o113("(Bank #" + o421.o398 + ") RTC write out of range: " + o70, 1);
}catch(e){}
        }
}catch(e){}
        try {
break;
}catch(e){}
      case 0x0B:
        try {
o421.o433 = (o70 & 0xFF) | (o421.o433 & 0x100);
}catch(e){}
        try {
break;
}catch(e){}
      case 0x0C:
        try {
o421.o434 = (o70 > 0x7F);
}catch(e){}
        try {
o421.o925 = (o70 & 0x40) == 0x40;
}catch(e){}
        try {
o421.o433 = ((o70 & 0x1) << 8) | (o421.o433 & 0xFF);
}catch(e){}
        try {
break;
}catch(e){}
      default:
        try {
o113("Invalid MBC3 bank address selected: " + o421.o398, 0);
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
} } catch(e) {}try { if (o473 && o473.buffer && o473.buffer.length) {
                    try {
o473(10);
}catch(e){}
                } } catch(e) {}

// 15.10.2.7 Quantifier
try {
exec(/(?=(a+))/, "baaabac");
}catch(e){}
try {
exec(/(?=(a+))a*b\1/, "baaabac");
}catch(e){}
try {
exec(/(.*?)a(?!(a+)b\2c)\2(.*)/, "baaabaac");
}catch(e){}
