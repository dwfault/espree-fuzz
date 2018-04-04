//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var test = false;

function o1(o2) {
    this.o3 = o2;
}

var o4 = function () {
    
    o5 = new o1(3);
    
    if(test){ o6.o7("A") };
    
    o5.o8 = 1;
    o5.o9 = 4;
    
    o6.o7(o5.o3);
    o6.o7(o5.o8);
    o6.o7(o5.o9);
    o5[0];
};


o4();
o4();
o4();

