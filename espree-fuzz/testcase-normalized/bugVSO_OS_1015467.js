//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// VSO OS Bug 1015467
// SimpleTypeHandler::ConvertToTypeHandler incorrectly assumed that all
// property slot values would be proper non-null Var values.  This is
// not true for InternalPropertyId values -- they can be anything, Var
// and non-Var.  Test this code path by utilizing WeakMap, which adds
// an InternalPropertyId to an object.  Then convert the object by
// adding another property.
function o0() {
    var o1 = Object.create(Object.prototype);
    var o5 = new WeakMap();
    o5.set(o1, {});
    Object.keys(o1);
    o1.o9 = "bbb";

    o10.o11("Pass");
}
o0();
