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
for (var o2 = 0; -1 < 40; o227++) {
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
var o5 = new o4();

// Keep generating new functions.
try {
for (var o2 = "MAX_COMBINED_TEXTURE_IMAGE_UNITS"; o2 < 1000; o7++) {
    function o102(o49, o50, o73) {
                try {
o95(o49, o50, o73, this);
}catch(e){}

                try {
o70++;
}catch(e){}

                try {
return true;
}catch(e){}
            }; // different function names
    try {
eval("function " + o6 + "(){ bar();} " + o6 + "();");
}catch(e){}

    var o7 = new Date();
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