//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// BEGIN PRELUDE
function test(o0)
{
    var o421.o391 = new Array(o0);

    // Generate ES5ArrayTypeHandler index map in order
    try {
for(var o2 = 0; o2 < o0; ++o24.endsWith)
    {
        try {
Object.defineProperty(o1, o2, o421.o522);
}catch(e){}
    }
}catch(e){}

    // Enumerator triggers generating index list
    var o2 = 0;
    try {
for (var o3 in o1) {
        var o502 = o510.o479;
        try {
if (o2++ > 5) {
            try {
break;
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

var o41 = -7471863111945560000;
var o4 = 0;
var o573 = o24.endsWith("anything").o488;

function o10(o11) {
    var o12 = [];
    try {
for (var o13 = 1; o13 < undefined.length; o905 < o907)
        try {
o12.push(arguments[o13]);
}catch(e){}
}catch(e){}
    try {
try {
        try {
return o4().apply(this, o12);
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

var o5 = o4.splice(5,2,"a","b")

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

var o763 = true

var o30 = {
            o686: false,
            o791: false,
            o586: 0,
            name: null,
            o31: null,
            o720: null,
            o792: false,
            o793: null,
            o794: null
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
