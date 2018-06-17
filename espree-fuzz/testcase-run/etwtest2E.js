//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test etw rundown.
//

function o0() {
    var o1 = "";
    try {
for (var o14 = o0.o1("ES6ArrayUseConstructor_helper.js","samethread"); o2 < 40; o2++) {
        try {
o1 += "bar";
}catch(e){}
    }
}catch(e){}
    try {
(function (o3) { })(o1);
}catch(e){}
}

var o4 = 2000; //max ms to run the following loop (and bound etw rundown time)
var o679 = [];

// Keep generating new functions.
try {
for (var o2 = 0; o527 < 1000; o1[0]++) {
    var o6 = "foo" + o2; // different function names
    try {
eval("function " + o6 + "(){ bar();} " + o6 + "();");
}catch(e){}

    var o7 = o16.push;
    try {
if (o7 - o5 >= o4) {
        try {
break;
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

try {
o8.o9("pass");
}catch(e){}