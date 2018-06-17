//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function String(o34) { try {
o1.o2(e + "");
}catch(e){} }

var e;

function o4(o5) {    
    try {
try {
        try {
eval("r = " + o5 + ";  write(r);");
}catch(e){}
        try {
write("No exception: " + o5);
}catch(e){}
    } catch (o6) {
        try {
o155("Exception " + o5 + ": " + o6.o7);
}catch(e){}
    }
}catch(e){}    
}

var o8 = [
    "true", "false", "10", "10.12", 2.2, "null", 
    "undefined", "new Object()", "new Number(10)", "new Boolean(true)", "new Date()", "new String('hello')",
    "new Function('return 10')", "new Array(10)"
];

// Delete constants
try {
for (var o9=0; o9<o8.e; o9++) {
    try {
o4("delete " + o8[o9]);
}catch(e){}    
}
}catch(e){}