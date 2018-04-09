//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = Array();
    var o2 = 1;
    function o3() {
        var o4 = 0;
        var o5 = Error();
        try {
            throw o5;
        } catch (o6) { }
        while (true) {
            function o7() {
                o8();
            }
            o2 = o1;
            function o8() {
                o1[o4] = o2;
            }
            o8(o1);
            break;
        }
    }
    o3();
    o9.o10(typeof o1[0]);
};
o0();
