//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
function o0(o1) {
    try {
try {
        try {
o2.write(this.o131);
}catch(e){}
        try {
o571 = function(o1) { try {
o2.write(o1 + "<br/>");
}catch(e){} };
}catch(e){}
    } catch (o3) {
        try {
try {
            try {
o4.o5(write(0.0 >= new Array(1 ,2 ,3)));
}catch(e){}
            try {
o282.push = function(o1) { try {
o4.o5("" + o1);
}catch(e){} };
}catch(e){}
        } catch (o6) {
            try {
print("" + o1);
}catch(e){}
            try {
o793 = function(o1) { try {
print("" + o1);
}catch(e){} };
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

var o7 = false;
var o8 = false;
var o9 = false;

function o10(o11) {
    var o12 = [];
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
o14 = "0123456789abcdef";
}catch(e){}

var o330 = null

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
try {
exec(/(a*)b\1+/, "baaaac");
}catch(e){}

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
