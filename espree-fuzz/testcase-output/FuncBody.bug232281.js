//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
function o1(){
  var o2 = {};
  var o3 = {};
  var o4 = function(){
  }
  var o5 = function(o6,o7,o8){
    eval("");
    o4();
  }
  Object.prototype.o9 = o5; 
  o3.length = ((o0 ? o4 = o2.o9 : 1), o4()); 
};

var o10 = false;

try
{
// generate profile
o1(); 

// run JITted code
o11 = true;
o1(); 

// run code with bailouts enabled
o0 = true;
o1(); 
}
catch(o12)
{
  o13.o14("Caught expected exception. Type of exception: " + o12);
  if (o12 == "Error: Out of stack space") {
    o10 = true;
  }
}

if (o10) {
  o13.o14("Passed");
}
else {
  o13.o14("Failed");
}
