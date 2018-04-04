//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(){
  var o1 = {};
  var o2 = function(){
    function o3 (o4) {
      this.o5 = o4;
    }
    o6 = new o3( );
  };
  
  o1.o7 =  o2;
  o6 = 1;
  var o8 = 2;
  for(;;) {
    if (o8 == 3) break;
    o8++;
    o1.o7(o6 );
    
    o6 ;
  }
};

o0();
o0();

o9.o10("PASSED");
