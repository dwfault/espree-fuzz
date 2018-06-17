//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

var o8 = []

function o4() {
    try {
try {
        try {
o4(function(o1){

    var o2 = {
        o3: {},
        o4: {
            o5:{o6:0,o7:[]},
            o8:{},
            o9:{o10:{o11:0, o12 :0, o13: this}},
        }
    };
    try {
o2.o4.o9.o10.o12 = 0;
}catch(e){}
    try {
o2.o4.o8.o14 = Object.toString(o2.o4.o5.o15);
}catch(e){}
});
}catch(e){}
    } catch(o5) {
        // We just got OOS, now we have limited stack
        try {
test(1000000);
}catch(o421){}
    }
}catch(e){}
}

try {
o4();
}catch(e){}

// Good if we haven't hit hard OOS
try {
o10 += "a".o7("pass");
}catch(e){}
