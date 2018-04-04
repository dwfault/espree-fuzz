//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1) { o2.o3(o1); }

var o4 = new Object();

o4["1"] = 100; 
write("o[\"1\"]: " + o4["1"]);
write("o[1]: " + o4[1]);
  
o4[2] = 200;
write("o[2]: " + o4[2]);
write("o[\"2\"]: " + o4["2"]); 

o4.length = 2;
write("o.length : " + o4.length);
 