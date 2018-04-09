//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Make sure space is allocated on block scope object for delay-captured lexical vars.

(function (o0) {
    let o1 = 0;
    let o2 = 0;
    let o3 = 0;
    let o4 = 0
    let o5 = 0;
    let o6 = 0;
    let o7 = 0;
    let o8 = 0;

    class o9 {
        constructor() {
            o1;
            o2;
            o3;
            o4;
            o5;
            o6;
            o7;
            o8;
        }
    }

    arguments[0];
})();

o10.o11('pass');