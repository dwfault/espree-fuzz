//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0 + ""); }

var o3;

o3 = Date.UTC("1974"); write(o3);
o3 = Date.UTC(1974); write(o3);
o3 = Date.UTC(1974, 9); write(o3);
o3 = Date.UTC(1974, 9, 24); write(o3);
o3 = Date.UTC(1974, 9, 24, 0); write(o3);
o3 = Date.UTC(1974, 9, 24, 0, 20); write(o3);
o3 = Date.UTC(1974, 9, 24, 0, 20, 30); write(o3);
o3 = Date.UTC(1974, 9, 24, 0, 20, 30, 40); write(o3);
o3 = Date.UTC(1974, 9, 24, 0, 20, 30, 40, 50); write(o3);
o3 = Date.UTC(1, 9, 24, 0, 20, 30, 40); write(o3);
o3 = Date.UTC(74, 9, 24, 0, 20, 30, 40, 50); write(o3);
o3 = Date.UTC("hello"); write(o3);
o3 = Date.UTC(); write(o3);
