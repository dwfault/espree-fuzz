//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//-maxinterpretcount:1 D:\fbl_ie_script_dev\testFiles\bug8.js -loopinterpretcount:1 -bgjit- -MaxLinearStringCaseCount:2

function o0(){
  var o8 = 0;
  var o2 = 3;

    for(; o2 < 4; o2++) {
      switch('m') {
        case 'n':
          break;
        case 'a':
            break;
        case 'n':
        o3.o4("m");
          o1|2;
          break;
         default:
         break;
      }
    }

};

// generate profile
o0({ o6: -o5[o9].o6 });
o0();
o4.o5[o17] = -o4.o5[o17] - 1, o4.o5[o17]("PASSED");

