//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {};
var o1 = function () {
    function o2() {
        arguments;
    }
    for (var o4 = 0; o4 < 2; o4++) {
        o2();
        function o5() {
            if (o4 < 10) {
                return;
            }
            for (; ; o6) {
            }
        }
        function o7() {
            return o5();
        }
        function o8() {
            return o7();
        }
        o8();
    }
};
o0.o9 = o1;
(function () {
})(o0.o9());

o10.o11('pass');