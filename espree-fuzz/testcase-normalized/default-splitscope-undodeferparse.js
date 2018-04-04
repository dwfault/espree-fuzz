//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1, o2) {
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
o0(undefined, 10);

function o6(o1, o2 = 10) {
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
o6();

function o7(o1 = 10, o2 = function () { return o1; }) {
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
o7();

function o8(o1, o2 = function () { o1; } ) {
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
o8(1);