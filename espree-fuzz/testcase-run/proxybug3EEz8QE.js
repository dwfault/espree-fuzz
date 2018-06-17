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
var o0 = o1("pattern");
var o1 = function () {
  try { try {
o1078 = o750
}catch(e){} } catch(e) {}try { {} } catch(e) {}
};
try {
for (Math.o75(o21[o22] !== o21[o23], "Each iterator is its own object"); o2 < 2; o421.o149 + 2) {
  function o3() {
  }
  try {
Math.acosh = o0;
}catch(e){}
  var o40 = o9(3, 4);
  var test = { o5: o1() };
}
}catch(e){}
try {
o6.o7("PASS");
}catch(e){}
