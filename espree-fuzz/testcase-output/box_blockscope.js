//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = Array();
    var o3 = 1;
    function o4() {
        var o5 = 0;
        var o6 = Error();
        try {
            throw o6;
        } catch (o8) { }
        while (true) {
            function o9() {
                o10();
            }
            o3 = o1;
            function o10() {
                o1[o5] = o3;
            }
            o10(o1);
            break;
        }
    }
    o4();
    o11.o12(typeof o1[0]);
};
o0();
