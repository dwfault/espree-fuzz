//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    function o1() {
        return -(this.o2 = 0.1);
    }
    return new o1().o2;
}
o3.o4(o0());
Object.defineProperty(
    Object.prototype, 'prop0', {
        get: function () {
            return "get";
        },
        set: function (o10) {
            o3.o4("set:" + o10);
        }
    }
);
o3.o4(o0());
