//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = [1, 0, 0, 0, 1, 1, 1, 1, 0, 0];
    var o2;
    for (var o3 = 0; o3 < 10; o3++) {
        switch (o1[o3]) {
            case 1:
                break;
            case 2:
                {
                    if (o2) {
                        function o4() {
                            o2;
                        }
                    }
                }
        }
    }
}

o0();

o5.o6('pass');