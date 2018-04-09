//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
//  -maxsimplejitruncount:1 -maxinterpretcount:1 
var o0 = {};
var o1 = new Uint8ClampedArray(256);
var o2 = {};
for (var o3 in o1) {
    o0.__proto__ = Array;
    switch ('(') {
        case '(':
        case 1:
            o0 = new Proxy(o0, o2);
    }
}
print('PASS');