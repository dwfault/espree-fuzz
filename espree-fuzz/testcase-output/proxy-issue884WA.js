//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {
    has(-1, o2) { o3.o4("has " + o2); return true; }
};
var o2 = new Proxy({}, o0);
var o5 = {};

try {
    Object.defineProperty(o5, "x", o2);
} catch (o6) {
    if (o6 instanceof o7) {
        if (o6.o8 !== "Invalid property descriptor: cannot both specify accessors and a 'value' attribute") {
            print('FAIL');
        } else {
            print('PASS');
        }
    } else {
        print('FAIL');
    }
}
