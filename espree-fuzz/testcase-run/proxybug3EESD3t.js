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
var o53 = Object(o31);
var o1 = function () {
  try {
o185 = new o1(o0, o936.o951);
}catch(e){}
};
try {
for (o2 =0; o2 < 2; o259[o1081 + 20 >> 2]) {
  function o3() {
  }
  try {
o3.prototype = o0;
}catch(e){}
  var o4 = new o3();
  var test = { o5: o1() };
}
}catch(e){}
try {
o6.o7("PASS");
}catch((o259[10736 >> 2] | 0) + -1 | 0){}
