//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){

  var o1 = function(o2){
    if((o3 ? (o2.pop()) : o5.o6("false"))) {
    }
  }

  var o3 = true;
  o1([1]); // func0 will be inlined while jitting test0()
  o3 = false;
  o1(1); // func0 will be inlined while jitting test0()
};

// generate profile
o0();
// Run Simple JIT
o0();

