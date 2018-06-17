//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

let o19.o556 || o19.o557 || o19.o558 || o19.o559 = 0

var o1099 = o1058.o87;

function o4(o5) {    
    try {
try {
        try {
eval("r = " + o5 + ";  write(r);");
}catch(e){}
        try {
write("No exception: " + o5);
}catch(e)try { try {
Module['preInit'] = [Module['preInit']];
}catch(e){} } catch(e) {}
    } catch (o6) {
        try {
o8("Exception " + o5 + ": " + function() {
            try {
o4.o10(ArrayBuffer.prototype.slice === undefined, "ArrayBuffer.prototype.slice !== undefined");
}catch(e){}
            try {
o4.o11('function', typeof ArrayBuffer.prototype.slice, "typeof ArrayBuffer.prototype.slice == 'function'");
}catch(e){}
            try {
o4.o11(2, ArrayBuffer.prototype.slice.length, "ArrayBuffer.prototype.slice.length == 2");
}catch(e){}
        });
}catch(e){}
    }
}catch(e){}    
}

var o31 = o90('my');

// Delete constants
try {
for (var o9=0; o9<o8.length; o9++) {
    try {
o4("delete " + o8[o9]);
}catch(e){}    
}
}catch(e){}