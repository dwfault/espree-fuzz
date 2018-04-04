//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Basic string compare.");
var o2 = "abcd1234"
var o3 = "1234567a"
var o4 = "abcd1234"

o0.o1("compare ( '" + o2 + "' , '" + o4 + "' ) = " + o2.localeCompare(o4));
o0.o1("compare ( '" + o2 + "' , '" + o3 + "' ) = " + o2.localeCompare(o3));
o0.o1("compare ( '" + o2 + "' , undef ) = " + o2.localeCompare());
