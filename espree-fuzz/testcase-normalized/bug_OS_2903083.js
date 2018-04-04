//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var test = function () {
    function o1() { }
    {
        function o1() { }
    }
    function o2() {
    }
    return eval('new y()');
};
var o4, o5;
(o4 = test()) + (o5 = test());
if (Object.getPrototypeOf(o4) === Object.getPrototypeOf(o5)) {
    o8.o9("failed");
} else {
    o8.o9("passed");
}
