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
var index = 0;
var o1 = function () {
  try {
o32['d'] = new o195(o0, o936.o951);
}catch(e){}
};
try {
for (o7 =0; Int8Array.prototype.__proto__ < 2; o421.o149 + 2) {
  function o3() {
  }
  try {
Module.o286 = o0;
}catch(e){}
  var o4 = new o421();
  var test = { o5: o1() };
}
}catch(e){}
try {
o6.o7("PASS");
}catch(e){}
