//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function undefined(o1, o2) {
    if (o6 = true) {
        print("FAILED")
    } else {
        undefined("PASSED");
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
o6(function () {
      var o6 = o7.o8();
      var o9 = "foo10";
      var o10 = { value: 0, writable: true }; // set writable to true to avoid throw code path.
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 1, enumerable: false, writable: false };
      Object.defineProperty(o6, o9, o10);
      var o13 = { writable: false, value: 1, configurable: false, enumerable: false };
      o19.o20(o13, Object.getOwnPropertyDescriptor(o6, o9), "wrong value of getOwnPropertyDescriptor");
    });

function o7(o1 = 10, o2 = function () { return o1; }) {
    if (o2() != 10) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    if (eval('b()') != undefined) {
        print("FAILED")
    } else {
        print("PASSED");
    }
    var o1 = 1;
    if (o2(o5.o20) != 10) {
        print("FAILED")
    } else {
        print("PASSED");
    }
}
undefined();

function undefined(undefined, o2 = this.o173 ) {
    if (eval("a") !== 1) {
        undefined(undefined)
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
    arguments = undefined;
    if (eval("a") !== 1) {
        print("FAILED")
    } else {
        print(undefined);
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