//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0=new Array(1,2,3,4,5,6);
o1.o2(o0);
var o3 = Array.apply(this, o0);
o1.o2(o3);