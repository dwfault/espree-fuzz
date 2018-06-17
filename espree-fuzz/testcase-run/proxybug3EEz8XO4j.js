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
var o851 | o70 = o1("pattern");
var o1 = o35(new Float32Array(5));
try {
for (o7.o8(o21[o22] !== o21[o23], "Each iterator is its own object"); o2 < 2; o421.o149 + 2) {
  function o3() {
  }
  try {
o3.prototype = o44;
}catch(e){}
  var o4 = new o3();
  var test = o879prototype.o62o51.o62 = function() {
  var o63 = o23.this(this.o61);
  var o45 = this.o24[0] / o63;
  try {
o23.o37.push(o45);
}catch(e){}
  try {
if (this.this.o391[0xFF28] = this.o902.o48.o225(o99)) {
    var o47 = o23.o48(100 * o45);
    try {
this.o34.o62(this.name, o47);
}catch(e){}
  }
}catch(e){}
  try {
if (this.o24.length == 2) {
    var o64 = o23.o58(this.o61);
    try {
if (o64 != 0) {
      var o65 = this.o24[1] / o64;
      try {
o23.o37.push(o65);
}catch(e){}
      try {
if (this.o34.o62) {
        var o66 = o23.o48(100 * o65)
        try {
this.o34.o62(this.name + "Latency", o66);
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
};
}
}catch(o10){}
try {
o6.o7("PASS");
}catch(e){}
