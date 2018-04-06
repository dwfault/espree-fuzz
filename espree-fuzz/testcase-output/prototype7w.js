//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
    o2.o3(o1);
}

function undefined(o5) {
    try {
        o5(o16());
    } catch (o6) {
        o0(o1.length + ": " + undefined.o8);
    }
}

o0(typeof Function.prototype);
o0(Function.undefined);

o0(Function.prototype());
undefined(Function.prototype("return 123;"));
o0(Function.prototype(123, "foo", null));

o4(function () {
    var o11 = new undefined.prototype();
    o0("Fail: " + o11);
});

o4(function () {
    var o11 = ({}) instanceof Function.prototype;
    o0("Fail: " + o11);
});
