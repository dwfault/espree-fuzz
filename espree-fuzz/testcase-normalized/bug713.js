//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
var o1 = 0;

function o2(){
  var o3 = {};
  var o4 = {};
  var o5 = function(){
    var o6 = 0;
    while(o6 < 3) {
        o6++;
      while(o7 < (1)) {
        break ;
      }
      var o7 = 1;
      (o0 ? (o7 = { valueOf: function () { o1 += 1; return 3; } }, 1) : 1);
    }
  }
  var o9 = function(){
  }
  o3.o10 = o9;
  var o11 = new Int16Array(256);
  var o13 = new Uint8Array(256);
  var o7 = 1;
  var o15 = 1;
  var o16 = 1;
  var o17 = 1;
  //Snippet 1: basic inlining test
  o3.o18 = (function(o19,o20,o21) {
    o4.o18 = o5();

    return o3.o10();
  })((o15 *= (o0 ? (o7 = { valueOf: function() { o1 += 10; return 3; } }, o13[((o4.length, 2, 2.7970894295654E+18)) & 255]) : o13[((o4.length, 2, 2.7970894295654E+18)) & 255])),(o16 >>>= o11[((o0 ? (o7 = { valueOf: function() { o1 += 100; return 3; } }, (! 2)) : (! 2))) & 255]),((~ 0) ^ o7));
  
};

// generate profile
o2();

// run JITted code
o2();

// run code with bailouts enabled
o0 = true;
o2();


if (o1 == 102)
{
    o23.o24("Passed");
}
else
{
    o23.o24("FAILED");
}
