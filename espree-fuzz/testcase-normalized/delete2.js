//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4;

var o5;
var o6 = new Array(10);
var o8 = { o9 : 1, o10 : 2 };

// Delete a uninitialized global variable
o4 = delete o5;  
write("delete uninitialized variable globalX: " + o4);
write("globalX : " + o5);

var o11 = 10;

o4 = delete o11;
write("delete explicitVar       : " + o4);
write("value  explicitVar       : " + o11);

o12 = 20;
o4 = delete o12;
write("delete implicitVar       : " + o4);
try {
    write("value  implicitVar       : " + o12);
} catch (o13) {
    write("value  implicitVar       : Exception");
}

eval("var explicitVarInEval = 30;")
o4 = delete o15;
write("delete explicitVarInEval : " + o4);
try {
    write("value explicitVarInEval : " + o15);
} catch (o13) {
    write("value  explicitVarInEval : Exception");
}

eval("implicitVarInEval = 40;")
o4 = delete o16;
write("delete implicitVarInEval : " + o4);
try {
    write("value implicitVarInEval : " + o16);
} catch (o13) {
    write("value  implicitVarInEval : Exception");
}

Array.prototype[2] = 100;
o6[1] = 200;

write("a[1] = " + o6[1]);
o4 = delete o6[1];
write("delete a[1] : " + o4);
write("a[1] = " + o6[1]);

write("a[2] = " + o6[2]);
o4 = delete o6[2];
write("delete a[2] : " + o4);
write("a[2] = " + o6[2]);

write("o.x = " + o8.o9);
o4 = delete o8.o9;
write("delete o.x : " + o4);
write("o.x = " + o8.o9);

o4 = delete o8.o9;
write("delete o.x (again): " + o4);

write("o.z = " + o8.o18);
o4 = delete o8.o18;
write("delete o.z (non existing property): " + o4);
write("o.z = " + o8.o18);
