//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("CompoundStringUtilities.js", "self");

o2.o3(); // call twice so that it is jitted the second time
var o4 = o2.o3();
for(var o5 = 0; o5 < o4.length; ++o5)
    o0.o7(o5 + ": " + o4[o5]);
