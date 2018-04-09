//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {};
var o1 = function () {
    function o2() {
        arguments;
    }
    for (var o3 = 0; o3 < 2; o3++) {
        o2();
        function o4() {
            if (o3 < 10) {
                return;
            }
            for (; ; o5) {
            }
        }
        function o6() {
            return o4();
        }
        function o7() {
            return o6();
        }
        o7();
    }
};
o0.o8 = o1;
(function () {
})(o0.o8());

o9.o10('pass');