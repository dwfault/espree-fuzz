//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

for (var o0 in [1]) { NaN+=o0; }
o2.o3(NaN);

var o4 = 4;
Object.defineProperty(this, "x", { writable: false });
o4 = 3;
o2.o3(o4);
