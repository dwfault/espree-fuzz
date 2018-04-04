//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0;
var o1 = {
    next() {
        return {
            done: o0 == 1,
            value: [ o0++, o0 ]
        };
    },

    [Symbol.iterator]() {
        return this;
    }
}


o1.next = new Proxy(o1.next, { });

var o8 = new Map(o1);
if (o8.get(0) === 1) {
    o11.o12("passed");
} else {
    o11.o12("failed");
}
