//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
    if (this) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    if (eval('b') != 10) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    function o846(o4, o5, o7) {
        var o11 = 0;
        for(var o12 = 0; o12 < 2; ++o12) {
            o11 += o12;
            for(var o16 = 0; o16 < o5.length; ++o16) {
                o11 += o16;
                for(var o21 = 0; o21 < o5.length; ++o21) {
                    o11 += o21;
                    for(var o22 = 0; o22 < o5.length; ++o22) {
                        o11 += o22;
                        o11 += o847(o4, o5, o22);
                    }
                }
            }
            if(o0 && o12 === (2 >> 1))
                o4.o100 = 0;
            o11 += o847(o4, o5, o12);
        }

        function o847(o4, o5, o8) {
            return o4.o5[o8];
        }
        return o11;
    };
    if (o2 != 1) {
        print("FAILED")
    } else {
        print("PASSED");
    }
}
o0(undefined, 10);

function o3(o1, o2 = 10) {
    if (o2 != 10) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    if (eval('b') != 10) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    var o2 = 1;
    if (o2 != 1) {
        print("FAILED")
    } else {
        print("PASSED");
    }
}
o3();

function o4(o1 = 10, o2 = function () { return o1; }) {
    if (o2() != 10) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    if (eval('b()') != 10) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    var o1 = 1;
    if (o2() != 10) {
        print("FAILED")
    } else {
        print("PASSED");
    }
}
o4();

function o5(o1, o2 = function () { o1; } ) {
    if (eval("a") !== 1) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    if (arguments[0] !== 1) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    if (eval("arguments[0]") !== 1) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    arguments = 100;
    if (eval("a") !== 1) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    if (eval("arguments") !== 100) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    if (arguments !== 100) {
        print("FAILED")
    } else {
        print("PASSED");
    }
}
o5(1);