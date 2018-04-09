//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = function () {
        var o2 = 0;
        while ((arguments.callee[(1)]) && o2 < 3) {
            o2;
        }
    }
    var o3 = 0;
    do {
        o3;
    } while ((o1()) && o3 < 3)
    (function (o4) {
        o1();
    })(1);
};
o0();
o5.o6('pass');