//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
var o1 = 0;

function o2(){
  var o3 = function(){
    o4 = o5;
  }
  var o5 = 309820929.1;
  (((o0 ? (o5 = { valueOf: function() { o1++; return 3; } }, 1) : 1) ? +o5 : 1) );
};

// generate profile
o2();

// run JITted code
o2();

// run code with bailouts enabled
o0 = true;
o2();

if (o1 == 1)
{
    o7.o8("Passed");
}
else
{
    o7.o8("FAILED");
}