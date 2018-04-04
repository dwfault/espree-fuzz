//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Bug : 480890
//Flags:  -bgjit- -loopinterpretcount:1 -off:aggressiveinttypespec  -maxlinearintcasecount:1
  var o0 = {}; 
  var o1 = 1;

  var o2 = 0;
  do {
    o2++;
    
    switch(o1) {
      case 1: 
        break;
      case (o3() ? 1 : (o1)): 
        break;
      case 4:  
      case -3: 
      case 2:       
    }
    o1 == 1;
  } while(o2 < 2)
  
  o4.o5("PASSED");
