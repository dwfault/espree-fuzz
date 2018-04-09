//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Tests for ERRDeclOutOfBlock "Const and let must be declared inside of block"
var o0 = 1;

(function () {
    try { eval(
        "if (a) \
            let b = 5;" // error
    );} catch (o1) { o2.o3(o1); }
    try { eval(
        "if (a) \
            const b = 5;" // error
    );} catch (o1) { o2.o3(o1); }
})();

(function () {
    try { eval(
    "if (a) { \
        let c = 3; /* no error */ \
        const x = 42; /* no error */ \
    }"
    );} catch (o1) { o2.o3(o1); }
})();

(function () {
    try { eval(
    "while (a) \
         let d = 5;" // error
    );} catch (o1) { o2.o3(o1); }
    try { eval(
    "while (a) \
         let d = 5;" // error
    );} catch (o1) { o2.o3(o1); }
})();

(function () {
    try { eval(
    "while (a) { \
        let e = 10; /* no error */ \
        const y = 10; /* no error */ \
        break; \
    }"
    );} catch (o1) { o2.o3(o1); }
})();

(function () {
    try { eval(
    "if (a) \
        while (a) \
            if (a) { \
                let x = 3; /* no error */ \
                const z = x; /* no error */ \
                while (a) \
                    let f = 5; /* error */ \
            }"
    );} catch (o1) { o2.o3(o1); }
})();

function test() {
    if (o0)
        for (let o4 in [1]) {    /* no error */
            break;
        };

    for (var o5 in [1])
        for (let o4 in [1]) {    /* no error */
            break;
        };

    do
        for (let o4 in [1]) {    /* no error */
            break;
        }
    while (!o0);

    if (o0)
        for (let o4 = 0; o4 < 1; o4++) {    /* no error */
            break;
        };

    for (var o5 in [1])
        for (let o4 = 0; o4 < 1; o4++) {    /* no error */
            break;
        };

    do
        for (let o4 = 0; o4 < 1; o4++) {    /* no error */
            break;
        }
    while (!o0);

    o2.o3('success');
};
test();

