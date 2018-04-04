//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

function o4() {} 
function o5() {} ;

var o6 = [ "Object", "Function", "Array", "String", "Number", "Boolean", "Date", "RegExp", "foo", "bar"] ;

var o7 = new o4();
var o8 = new o5();

var o9 = [ "new Object()",
            "f", "b", "foo", "String.fromCharCode", "Array.prototype.concat",            
            "[1,2,3]", "new Array()", "fncs",
            "'hello'", "new String('world')",
            "10", "10.2", "NaN", "new Number(3)", 
            "true", "false", "new Boolean(true)", "new Boolean(false)",
            "new Date()",
            "/a+/"
           ];

function o10(o11)
{
    try {
        write(o11 + " : " + eval(o11));
    } catch (o13) {
        write(" Exception: " + o11 + ". " + o13.o14);
    }
}

for (var o15=0; o15<o9.length ; o15++) {
    for (var o17=0; o17<o6.length; o17++) {
        o10(o9[o15] + " instanceof " + o6[o17]);
    }
}

var o18 = 0;

for (var o15=0; o15<o9.length ; o15++) {
    for (var o17=0; o17<o9.length; o17++) {
        o10(o9[o15] + " instanceof " + o9[o17]);
    }
}