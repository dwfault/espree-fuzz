//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = o768 | 1;
try {
o4.o8.isArray(o10);
}catch(e){}

// JIT a function that uses the fixed method
var o7 = [add,add,o702,add]
try {
o4(o0);
}catch(e){}
try {
o4(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
function o593() {
  try {
if (o947()) {
    try {
if (o948()) {
      try {
o944();
}catch(e){}
    }
    else {
      try {
o113("GameBoy core has already been paused.", 1);
}catch(e){}
    }
}catch(e){}
  }
  else {
    try {
o113("GameBoy core cannot be paused while it has not been initialized.", 1);
}catch(e){}
  }
}catch(e){}
}
try {
test(o0,false);
}catch(e){}
try {
test(o0,true);
}catch(e){}

// Verify that the new function is called.
try {
o4(o0);
}catch(e){}
