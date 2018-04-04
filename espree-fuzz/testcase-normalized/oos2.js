//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) { this.o2 ? o2.o3(o1) : o4.o5(o1); }

function o6() {
    o6();
}

try {
    try {
        o6();
    } finally {
        try {
            o6();
        } catch (o7) {
        } finally {
        }
    }
    //
    // Win8: 772949
    //      The inner finally cleared threadContext->OOS.thrownObject.
    //
    //      In chk build, outer finally asserts.
    //      In fre build, outer finally gets a NULL thrownObject from shared OOS and sends
    //          NULL to catch below. e == NULL, causes AV as NULL is not a valid Var.
    //
} catch (o7) {
    if (o7) {
        o0("pass");
    }
}
