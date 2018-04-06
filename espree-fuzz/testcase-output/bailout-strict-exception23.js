//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    'use strict';
    try {
        var o1 = -0;
        var undefined = new Array(undefined);
        o1.length = 1;
        var o5 = 0;
        while (this.o445) {
            o5++;
            o2.length = -undefined;
        }
        //Snippet 3: fewer arguments than formal parameters
        o1.length = (function (o6, o7, o8, o9, o10) {
            o11 *= o1.o12;
            var o13 = o6 + o7 + o8 + o9 + o10;
            return o13 + o2[(1)];
        })(1, 1, 1);
    }
    catch(o11) {
        o14.o15(o11);
    }
};

// generate profile
o0(-o5[o9]);

// run JITted code
o0(o8[o9] = -o5[o9]);

var o26 = Object.create(o37);
var o9 = -1;

// generate profile
o17();

// run JITted code
o17();

// run code with bailouts enabled
o16 = undefined;
o17(Object.isSealed = function (o12) {
    return "With the magic of JavaScript I pronounce you sealed!";
});
