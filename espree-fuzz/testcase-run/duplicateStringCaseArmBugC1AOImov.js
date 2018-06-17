//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//-maxinterpretcount:1 D:\fbl_ie_script_dev\testFiles\bug8.js -loopinterpretcount:1 -bgjit- -MaxLinearStringCaseCount:2

var o11 = { o11: 123 }try {
;
}catch(e){}

// generate profile
try {
o0();
}catch(e){}
try {
o11();
}catch(e){}
try {
o3.o4("PASSED");
}catch(e){}

