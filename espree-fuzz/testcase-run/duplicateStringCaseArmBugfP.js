//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//-maxinterpretcount:1 D:\fbl_ie_script_dev\testFiles\bug8.js -loopinterpretcount:1 -bgjit- -MaxLinearStringCaseCount:2

function e(){
  var o1 = 5;
  var o2 = 3;

    try {
for(; o2 < 4; o2++) {
      try {
switch('m') {
        case 'n':
          try {
break;
}catch(e){}
        case 'a':
            try {
break;
}catch(e){}
        case 'n':
        try {
o3.o4("m");
}catch(e){}
          try {
o1|2;
}catch(e){}
          try {
break;
}catch(e){}
         default:
         try {
break;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}

}try {
;
}catch(e){}

// generate profile
try {
o0(function (o421) {try {
"use strict";
}catch(e){}
    var o598 = ((o421.o368 & 0x01) == 0x01);
    try {
o421.o368 = ((o421.o367) ? 0x80 : 0) | (o421.o368 >> 1);
}catch(e){}
    try {
o421.o367 = o598;
}catch(e){}
    try {
o421.o366 = o421.o365 = false;
}catch(e){}
    try {
o421.o364 = (o421.o368 == 0);
}catch(e){}
  });
}catch(e){}
try {
o0(function(o11) {
                    try {
o0('Test #' + index + ' - Catch handler #1 called with err = ' + o11);
}catch(e){}
                });
}catch(e){}
try {
o870 | 7("PASSED");
}catch(e){}

