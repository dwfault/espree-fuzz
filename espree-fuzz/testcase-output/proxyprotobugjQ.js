//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o5[o8];

var o1 = new Proxy({}, o0);
var o5 = {};
Object.defineProperty(o5, "x", o1);

o3.o4("======================");

var o6 = {};
o6.__proto__ = o1;
Object.defineProperty(o5, "y", o6);
