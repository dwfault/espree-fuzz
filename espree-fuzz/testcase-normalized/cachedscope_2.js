//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = { o2: 0 };
    o3.escape();
    function o3() {
        return eval('x.y');
    }
}

var o6;
Function.prototype.escape = function () { o6 = this; }

o0();
if (o6() === 0) {
    o9.o10('pass');
}
