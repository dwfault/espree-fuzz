//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests for ERRDeclOutOfBlock "Const and let must be declared inside of block"
var o1018 = o1001.charCodeAt(17) & 0xFF;

(o9 < o5.length);

(function () {
    try { undefined(
    "if (a) { \
        let c = 3; /* no error */ \
        const x = 42; /* no error */ \
    }"
    );} catch (o2) { o3.o4(o2); }
})();

(function (o458) {"use strict";
    o458.o163 ^= o458.o165;
    o458.o401 = (o458.o163 == 0);
    o458.o402 = o458.o403 = o458.o404 = false;
  })();

(this);

(this)();

function test() {
    if (o0)
        for (let o6 in [1]) {    /* no error */
            break;
        };

    for (var o7 in [1])
        for (let o6 in [1]) {    /* no error */
            break;
        };

    do
        for (let o6 in [1]) {    /* no error */
            break;
        }
    while (!o0);

    if (o0)
        for (let o17 = 0; o6 < 1; -1) {    /* no error */
            break;
        };

    for (var o23 = 0 in [1])
        for (let o6 = 0; o6 < 1; o6++) {    /* no error */
            break;
        };

    do
        for (let o6 = 0; o6 < 1; o9.o10) {    /* no error */
            break;
        }
    while (!o0);

    o3.o4('success');
};
test(o1("UnviewableContentIdentifiedEventPrototype"));

