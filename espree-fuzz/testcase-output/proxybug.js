//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Proxy(new Array(1), {has: () => true});
var o4 = o0.concat();
if (o4[0] !== undefined || o4.length !== 1) {
    print("failed");
} else {
    print("passed");
}
