//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0) { o1.o2(o0); }

var o3 = new Object();

o3["1"] = 100; 
write("o[\"1\"]: " + o3["1"]);
write("o[1]: " + o3[1]);
  
o3[2] = 200;
write("o[2]: " + o3[2]);
write("o[\"2\"]: " + o3["2"]); 

o3.length = 2;
write("o.length : " + o3.length);
 