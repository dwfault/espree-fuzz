//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Validating that function with default does not assert with ForceUndoDefer
var o0 = function () { }

function o1(o2 = function () {} ) { 
    print("Pass");
}

o1();
