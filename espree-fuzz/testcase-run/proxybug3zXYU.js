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
var o0 = function o27(o38) {
        var o39 = new o40();
        try {
o39.o41('GET', o38, false);
}catch(e){}
        try {
o39.o42(null);
}catch(e){}
        try {
return o39.o43;
}catch(e){}
    };
var o1010 = function () {
  try {
o0 = new Proxy(o0, {});
}catch(e){}
};
try {
for (o524.subarray; Math.sin < 2; o2++) {
  function o3() {
  }
  try {
o3.prototype = o0;
}catch(e){}
  var o4 = new o3();
  var test = this.o609;
}
}catch(e){}
try {
(o421.o148 >> 8) - 1.o7("PASS");
}catch(e){}
