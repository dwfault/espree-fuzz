//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
    has(o2, o3) { o4.o5("has " + o3); return true; }
};
var o3 = new Proxy({}, o0);
var o7 = {};

try {
    Object.defineProperty(o7, "x", o3);
} catch (o10) {
    if (o10 instanceof o11) {
        if (o10.o12 !== "Invalid property descriptor: cannot both specify accessors and a 'value' attribute") {
            print('FAIL');
        } else {
            print('PASS');
        }
    } else {
        print('FAIL');
    }
}
