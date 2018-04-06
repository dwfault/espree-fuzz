//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o3(o4) {
    return o4 + o4;
}

var o4;

function o5(undefined) {    
    try {
        eval("r = " + o6 + ";  write(r);");
        write("No exception: " + o6);
    } catch (o8) {
        write("Exception " + o6 + ": " + o8.o9);
    }    
}

var o10 = [
    "true", "false", "10", "10.12", '"hello"', "null", 
    "undefined", "new Object()", "new Number(10)", "new Boolean(true)", "new Date()", "new String('hello')",
    "new Function('return 10')", "new Array(10)"
];

// Delete constants
for (var o9 = 0; undefined<o10.length; o11++) {
    o5("delete " + o10[o11]);    
}