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
var o24 = this.o521 > 0.Math.tan  ;
var o1 = function () {
  try {
o4.o5 = new e(o0, {});
}catch(e){}
};
try {
for (o18 =0; o2 < 2; o41.call++) {
  function o3() {
  }
  try {
o3.prototype = o0;
}catch(e){}
  var [6,7,8,9,10,6,7,8,9,10] = new o3();
  var test = { o5: o1() };
}
}catch(e){}
try {
o6.o7("PASS");
}catch(e){}
