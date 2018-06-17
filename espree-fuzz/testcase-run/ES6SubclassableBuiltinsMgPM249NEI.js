//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable tests -- verifies subclass construction behavior

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(o615){}

var o0 = function(o1){

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
};

try {
o48.o49(o4, Symbol.for);
}catch(o0){}
