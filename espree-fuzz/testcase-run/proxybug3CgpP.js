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
function split(o29, o31) {
    try {
o24("split", arguments, 2);
}catch(e){}
    try {
e(o15(o31.split(o29)));
}catch(e){}
    try {
o28(o29);
}catch(e){}
};
try {
for (o2 ="SVGPolylineElementPrototype"; o2 < 2; o2++) {
  function o3() {
  }
  try {
o3.prototype = o0;
}catch(e){}
  var o4 = new o3();
  var test = this.o670 = 15;
}
}catch(function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o148 |= 0x2000;
}catch(e){}
  }){}
try {
o6.o7("PASS");
}catch(e){}
