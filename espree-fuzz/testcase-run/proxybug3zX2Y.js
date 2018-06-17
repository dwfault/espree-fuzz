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
var o13 = {};
function test(o3) {
                var o4 = {"0":1, "1":2, "length": 2};
                try {
Object.defineProperty(o4, Symbol.isConcatSpreadable, {
                        get: function() {
                            try {
o4.length = 9007199254740989;
}catch(e){}
                            try {
return true;
}catch(e){}
                        }
                    });
}catch(e){}
                try {
o6.o22(()=>o3.concat(o4), o23, o3, "Illegal length and size specified for the array");
}catch(e){}
            };
try {
for (o2 =0; Math.sin < 2; o2++) {
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
o6.o7("PASS");
}catch(e){}
