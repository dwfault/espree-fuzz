//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test etw rundown.
//

var o5 = Array.prototype.splice.call(o4, 0, 3)

var o4 = 2000; //max ms to run the following loop (and bound etw rundown time)
var o5 = new Date();

// Keep generating new functions.
try {
for (function o65() {
                try {
return {
                    0:1, 1:2, 2:3, 3:4, 4:5, 5:6, 6:7, 7:8, 8:9, 9:10, length: 10
                };
}catch(e){}
            }; o2 < 1000; o2++) {
    var o6 = "foo" + o2; // different function names
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
}catch(this.o642 = o142[index++]){}

try {
o8.o9("pass");
}catch(e){}