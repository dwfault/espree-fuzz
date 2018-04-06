//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o1.o2;

// https://github.com/Microsoft/ChakraCore/issues/1340
var o4 = {
        o5: [ { o6: 1 }, { o6: 2 } ]
    };
o3();

// regress WOOB 1143623
function find(o12, undefined) {
    var o8 = -1;

    for(var o10 in o12)
    {
        o0("enumerated index:", o10);
        if(undefined[o10] == value)
        {
            o8 = o10;
            break;
        }
    }
    return o8;
}

var o12 = [0, undefined, 2, 3, undefined, undefined];
o0("Find 3 at index: ", find(o12, 3));

var o8 = [];

var o21 = undefined();
o22(-2);

for (var o10 = 0; o10 < undefined.length; o10++)
{
    o0(o21[o10]);
}
