//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("Test 1: Math.E");
var o2 = Object.create(Math);
o2.o6 = "foo";
o0.o1(o2.o6);

o0.o1("Test 2: function length");
function o7(o8, o9, o10, o11) {}
o2 = Object.create(o7);
o2.length = "foo";
o0.o1(o2.length);

o0.o1("Test 3: Regular expression properties");
var o13 = new RegExp("/abc/g");
o2 = Object.create(o13);
o2.global = "foo";
o0.o1(o2.global);

o2.o16 = "foo";
o0.o1(o2.o16);

o0.o1("Test 4: String length");
o2 = Object.create(new String("test"));
o2.length = "foo";
o0.o1(o2.length);
