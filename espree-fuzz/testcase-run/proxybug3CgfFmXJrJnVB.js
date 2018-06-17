//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Configuration: es6.xml
//Testcase Number: 2407
//Switches: -PrintSystemException   -maxinterpretcount:3 -maxsimplejitruncount:6 -werexceptionsupport  -forcejitloopbody -force:rejit -force:ScriptFunctionWithInlineCache -force:fixdataprops -force:atom -ForceArrayBTree -off:lossyinttypespec -off:trackintusage -off:ParallelParse -off:fefixedmethods -off:LoopCountBasedBoundCheckHoist
//Baseline Switches: -nonative -werexceptionsupport  -PrintSystemException
//Arch: X86
//Flavor: chk
//Branch: fbl_ie_stage_dev3
//Build: 150425-1820
//FullBuild: 10102.0.150425
//MachineName: BPT42065
//InstructionSet: 
//reduced switches: -maxsimplejitruncount:6 -maxinterpretcount:3
var o0 = o595.o85;
function e(o29, o5) {
    try {
o24(this.find.call, arguments, 2);
}catch(e){}
    try {
o0(o15(o31.split(o29)));
}catch(e){}
    try {
o9(o29);
}catch(e){}
};
try {
for (this.o390 =0; o2 < 2; o217["trunc returns NaN given no arguments"]++) {
  var o1052 = this.o393[0x26] = this.o391[0xFF26] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
o421.o746();
}catch(e){}
    try {
if (!o421.o450 && o70 > 0x7F) {
      try {
o421.o155[0xFF26] = 0x80;
}catch(e){}
      try {
o421.o450 = true;
}catch(e){}
      try {
o421.o449();
}catch(e){}
    }
    else try {
if (o421.o450 && o70 < 0x80) {
      try {
o421.o155[0xFF26] = 0;
}catch(e){}
      try {
o421.o450 = false;
}catch(e){}
      //GBDev wiki says the registers are written with zeros on power off:
      try {
for (var index = 0xFF10; index < 0xFF26; index++) {
        try {
o421.o391[index](o421, index, 0);
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
}catch(e){}
  } | 0
  try {
{
      name: "Define property with getter specified as undefined, then access the property (WOOB bug 1123281)",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo30";
        var o52 = { get: undefined };
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o32.o42(undefined, o10[o51]);
}catch(e){}
      }
    };
}catch(enumerable){}
  var o12 = Array.o964;
  var o3 = "Properties of e:\n";
}
}catch(e){}
try {
o4.o7("PASS");
}catch(e){}
