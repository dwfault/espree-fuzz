//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------



var o3;
o3 = 0; // dead store
o3 = 1;
o1.o2(o3);

o3 = 0;  // no deadstore
o0();
o3 = 1;
o1.o2(o3);

o3 = 0;  // no deadstore
var o4 = this;
var o5 = o4.o3;
o4.o3 = -1;
o3 = 1;  // no deadstore
o1.o2(o3);
