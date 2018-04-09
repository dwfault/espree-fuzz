//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = {};
    var o2 = {};
    o2.o3 = 2;
    o4();
    var o5 = 0;
    do {
        o5++;
        o1.o3 = o2.o3 * o2.o3;
        o2 = o1;
    } while (o2.o3 && o5 < 2)
    o6.o7("obj1.prop0 = " + (o2.o3 | 0));

    function o4() { }
};

// generate profile
o0();

// run JITted code
o0();
