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
var o24 = o1("MouseWheelEvent")  ;
var o1 = new Promise(function() {});
try {
for (this.o565[o810 + 4] =o226; o2 < 2; o2++) {
  var o855 = o576.o4.o6(1234, o35[4294967292], "Array.prototype.fill called on an object with length > 2^32 and a fill range starting before 2^32 but ending after 2^32 does not fill elements outside the request range")(o474.o561)
  try {
o9 = o0;
}catch(e){}
  var o4 = new o3();
  var o5 = [
        "Number.prototype", "Boolean.prototype", "String.prototype", "Object.prototype", "Array.prototype", "Function.prototype",
    ];
}
}catch(e){}
try {
o6.o7("PASS");
}catch(e){}
