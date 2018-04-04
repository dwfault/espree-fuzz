//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test(o1, o2, o1) {
    var o3 = function () {
        eval('');
    };

    var o5 = true;
    if (o1 !== 3) {
        o6.o7("Failed: a !== 3, a: " + o1);
        o5 = false;
    }
    if (o2 !== 2) {
        o6.o7("Failed: b !== 2, b: " + o2);
        o5 = false;
    }
    return o5;
}

if (test(1, 2, 3)) {
    o6.o7("Pass");
}
