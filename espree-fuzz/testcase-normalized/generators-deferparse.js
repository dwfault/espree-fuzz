//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
    eval("function f1() { class c extends BaseClass { *f3(a = yield) { } } };");
    o1.o2('FAILED');
} catch (o3) {
    if (o3 instanceof o4) {
        o1.o2('PASSED');
    } else {
        o1.o2('FAILED');
    }
}