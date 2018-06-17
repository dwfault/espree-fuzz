//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//-maxinterpretcount:1 D:\fbl_ie_script_dev\testFiles\bug8.js -loopinterpretcount:1 -bgjit- -MaxLinearStringCaseCount:2

function o0(){
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
}catch(e)try { {} } catch(e) {}try { try {
o9.o11(o8 instanceof o13, "new ReturnArgumentBaseClass(null); returns an instance of ReturnArgumentBaseClass");
}catch(e){} } catch(e) {}
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
o0();
}catch(e){}
try {
o0(function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o384 = o70;
}catch(e){}
    try {
o421.o664();
}catch(e){}
  });
}catch(e){}
try {
o3.o4("PASSED");
}catch(e){}

