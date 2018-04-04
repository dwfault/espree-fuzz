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
  Object.prototype.o12 = o5; 
  o3.length = ((o0 ? o4 = o2.o12 : 1), o4()); 
};

var o14 = false;

try
{
// generate profile
o1(); 

// run JITted code
o15 = true;
o1(); 

// run code with bailouts enabled
o0 = true;
o1(); 
}
catch(o16)
{
  o17.o18("Caught expected exception. Type of exception: " + o16);
  if (o16 == "Error: Out of stack space") {
    o14 = true;
  }
}

if (o14) {
  o17.o18("Passed");
}
else {
  o17.o18("Failed");
}
