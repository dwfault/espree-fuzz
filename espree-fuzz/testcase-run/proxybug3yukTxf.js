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
var o24 = Object.keys(o584.entries).forEach  ;
var o82 = 0;
try {
for (o35 =0; o2 < 2; o1127++) {
  function o3() {
  }
  try {
o8 = o0;
}catch(e){}
  var o4 = o421.o148 > o4.o5(o40 === o8.get.call(o110), "Calling getter directly returns expected buffer");
  var test = o0.o788 < 0xFEA0();
}
}catch(e){}
try {
o6.o7("PASS");
}catch(e){}
