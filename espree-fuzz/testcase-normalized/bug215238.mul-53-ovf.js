//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
  var o1 = {};
  var o2 = {};
  var o3 = function(){
    o4 -=((-733600173 * o2.o5) & (-731419186 * (-733600173 * o2.o5)));
  };
  var o6 = function(o7){
    o8 = o3.call(o2 );
  };
  o1.o10 = o6;
  var o4 = 1;
  o2.o5 = -38;
  o11 = o1.o10.call(o1 , 1);
  o12.o13('l = ' + (o4|0));
};

// generate profile
o0();
// Run Simple JIT
o0();
o0();

// run JITted code
o14 = true;
o0();
