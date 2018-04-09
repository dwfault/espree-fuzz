//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0 + ""); }

var o3;

function o4(o5) {    
    try {
        eval("r = " + o5 + ";  write(r);");
        write("No exception: " + o5);
    } catch (o6) {
        write("Exception " + o5 + ": " + o6.o7);
    }    
}

var o8 = [
    "true", "false", "10", "10.12", '"hello"', "null", 
    "undefined", "new Object()", "new Number(10)", "new Boolean(true)", "new Date()", "new String('hello')",
    "new Function('return 10')", "new Array(10)"
];

// Delete constants
for (var o9=0; o9<o8.length; o9++) {
    o4("delete " + o8[o9]);    
}