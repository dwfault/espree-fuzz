//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -forcenative -prejit 
(function(){
  var o0 = 1;
  var o1 = new Object();
  var o3 = function(o4,o5,o6){
    var o7 = (o1.o8++ );
  }
  var o9 = 1;
  if((o9[(1)] * (o1.o10 = -1073741824))) {
  }
  else {
    o0.length = (o1.o8 ^= o1.o10);
    var o12 = 1;
  }
  o7 = (o1.o8 /= -2147483648);
  o1.o10 %=o3((-- o12), 1);
  o13.o14("obj1.a = " + (o1.o8|0));;
})();

// command line: -forcenative 
(function(){
  var o0 = new Object();
  var o1 = new Object();
  var o15 = function(){
    o0.length +=(((o0.o8 = o1.length) ? (o12 /= -2147483648) : 1) * (o10 = 1));
    o8 +=(o10 *= o0.length);
  }
  var o8 = 1;
  var o12 = -1073741824;
  o0.length = -2147483648;
  o1.length = 1198215329.1;
  if(((o15() === 1) > (1 | (o0.o8 * o10)))) {
  }
  else {
    (o16);
  }
})();
