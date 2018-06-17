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
function o95(o49, o50, o73, o96) {
                try {
o4.o11(o70, o50, "%TypedArrayPrototype%.find callback called on elements in order");
}catch(e){}
                try {
o4.o11(o49, o50, "%TypedArrayPrototype%.find callback called with correct values");
}catch(e){}
                try {
o4.o11(Object(o52), o96, "%TypedArrayPrototype%.find callback function should receive the correct this arg");
}catch(e){}
                try {
o4.o11(o63, o73, "%TypedArrayPrototype%.find callback called with the correct array arg");
}catch(e){}
            };
var o143 = o11(Reflect);
try {
for (o1("textDecorationBlink"); o2 < 2; o189.o119) {
  var o0 = false
  try {
o3.prototype = o0;
}catch(e){}
  var o4 = new o3();
  var test = { o5: o1() };
}
}catch(o4){}
try {
o6.o7("PASS");
}catch(o4){}
