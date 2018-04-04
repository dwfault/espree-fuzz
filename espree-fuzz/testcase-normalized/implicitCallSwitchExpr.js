//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
*******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
*   Test for Bug 232738
*   Exprgen:CAS: JIT is causing a bad code gen with Switches: -maxinterpretcount:1 -bgjit- -loopinterpretcount:1
*
*/

var o0 = false;
function o1(){
  var o2 = 1;
  if(o0)
   {
    o2 = { valueOf: function() { o4.o5('g value1Of'); return 3; } }
   }

  var o6 = 1;

  do {
    switch(o2) {
      case 1:
       o7 = 1;
      case 2:
        o7 = 2;
      case 3:
    o7 = 3;
      case 4:
    o7 = 4;
     default:
    o7 = -1;
    }
  } while(o6 < 1)
  return o7;
};

o4.o5(o1());
o0 = true;
o4.o5(o1());
