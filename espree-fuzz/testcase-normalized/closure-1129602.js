//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = 2;
    var o2 = function () {
        function o3() {
        }
        o1;
        {
            function o4() {
                o5.o6('pass');
            }
            function o7() {
                o4();
            }
            o7();
        }
    };
    o2();
}
o0();
