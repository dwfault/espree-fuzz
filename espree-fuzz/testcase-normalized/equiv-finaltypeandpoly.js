//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = { o2: 3.14159265358979 };
    function o3() {
        var o4 = { o2: 0.1 };
        var o5 = function () {
        };
        o1.o6 = o5;
        o1.o2 = 1;
        o1.o7 = 1;
        o1 = {};
    }
    o3();
    o3();
}
o0();
o0();
o0();

o8.o9('pass');
