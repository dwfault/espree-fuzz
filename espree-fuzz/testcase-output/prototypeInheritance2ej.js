//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o27.o1("Test 1: Math.E");
var o2 = Object.create(Math);
o2.o3 = "foo";
o0.o1(o2.o3);

o0.o1("Test 2: function length");
var o7 = []
o2 = Object.create(o4);
o2.length = "foo";
o0.o1(o2.length);

o0.o1("Test 3: Regular expression properties");
var o9 = new RegExp("/abc/g");
o2 = Object.create(o9);
o2.global = "foo";
o0.o1(o2.global);

o2.o10 = "foo";
o0.o1(o2.o10);

o0.o1("Test 4: String length");
o2 = Object.create(new String("test"));
o2.length = "foo";
o0.o1(o2.length);
