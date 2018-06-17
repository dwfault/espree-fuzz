//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { try {
o1.o2(o0 + "");
}catch(e)try { try {
o202[(((o234) + (o239 * 4)) >> 2)] = 0;
}catch(e){} } catch(e) {} }

var o3;

function o4(o5) {    
    try {
try {
        try {
eval("r = " + o5 + ";  write(r);");
}catch(o1){}
        try {
write("No exception: " + o5);
}catch(e){}
    } catch (o6) {
        try {
write("Exception " + o5 + ": " + o6.o7);
}catch(e)try { {
o421.o364 = ((o421.o368 & 0x80) == 0);
} } catch(e) {}
    }
}catch(e){}    
}

var o8 = [
    "true", "false", "10", "10.12", '"hello"', "null", 
    "undefined", "new Object()", "new Number(10)", "new Boolean(true)", "new Date()", "new String('hello')",
    "new Function('return 10')", "new Array(10)"
];

// Delete constants
try {
for (var o9=0; o9<o8.length; o9++) {
    try {
o4("delete " + o8[o9]);
}catch(e){}    
}
}catch(e){}