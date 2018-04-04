//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function test() {
    var o1 = function () {
    };
    var o2 = function () {
    };
    with (o2.__proto__ = Object.seal.bind(undefined, /x/g)) {
        (function () {
            return '';
        }());
    }
    try {
        try {
            o2.caller = o1;
        } catch (o9) {
        }
        try {
            ;
        } catch (o9) {
        }
    } catch (o9) {
    }
}
test();
o10.o11("Pass");
