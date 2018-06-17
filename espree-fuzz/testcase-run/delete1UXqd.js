//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var buffer = new ArrayBuffer(1<<20)

var o3;

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
write("Exception " + o5 + ": " + o6.o7);
}catch(e){}
    }
}catch(e){}    
}

var o8 = this.o546;

// Delete constants
try {
for (var o9=0; o9<o8.length; o9++) {
    try {
o4("delete " + o8[o9]);
}catch(e){}    
}
}catch(e){}