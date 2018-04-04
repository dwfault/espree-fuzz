//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1 + ""); }

var o4;

o4 = Date.UTC("1974"); write(o4);
o4 = Date.UTC(1974); write(o4);
o4 = Date.UTC(1974, 9); write(o4);
o4 = Date.UTC(1974, 9, 24); write(o4);
o4 = Date.UTC(1974, 9, 24, 0); write(o4);
o4 = Date.UTC(1974, 9, 24, 0, 20); write(o4);
o4 = Date.UTC(1974, 9, 24, 0, 20, 30); write(o4);
o4 = Date.UTC(1974, 9, 24, 0, 20, 30, 40); write(o4);
o4 = Date.UTC(1974, 9, 24, 0, 20, 30, 40, 50); write(o4);
o4 = Date.UTC(1, 9, 24, 0, 20, 30, 40); write(o4);
o4 = Date.UTC(74, 9, 24, 0, 20, 30, 40, 50); write(o4);
o4 = Date.UTC("hello"); write(o4);
o4 = Date.UTC(); write(o4);
