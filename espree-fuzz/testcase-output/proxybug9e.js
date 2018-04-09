//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o1 = o0.concat();
if (o1[0] !== undefined || o1.length !== 1) {
    print("failed");
} else {
    print("passed");
}
