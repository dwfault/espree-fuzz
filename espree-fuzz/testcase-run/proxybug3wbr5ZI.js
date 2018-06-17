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
var o0 = {};
var o1 = o11(Reflect);
try {
for (function o0() {
  //private
  var o1 = "undefined";

  var o2 = function o2() {
    try {
return typeof (o3) !== o1;
}catch(e){}
  };

  try {
return {
    // public
    o4: function () {
      //return isInBrowser() ? document : {};
      try {
return {};
}catch(e){}
    },

    writeln: function writeln() {
      var o5 = "", o6;
      try {
for (o6 = 0; o6 < arguments.length; o6 += 1) {
        try {
o5 = o5.concat(arguments[o6])
}catch(e){}
      }
}catch(e){}
      try {
if (!o2()) {
        try {
o7.o8(o5);
}catch(e){}
      } else {
        try {
o3.writeln(o5);
}catch(e){}
        try {
o3.writeln("<br/>");
}catch(e){}
      }
}catch(e){}
    },

    o9: function o9(o10) {
      var name;
      try {
for (name in o10) {
        try {
this.writeln(name, o10.hasOwnProperty(name) ? "" : " (inherited)", ": ", o10[name]);
}catch(e){}
      }
}catch(e){}
    }
  }
}catch(e){}
}; o2 < 2; o2++) {
  var o0 = false
  try {
o3.prototype = o0;
}catch(e){}
  var o4 = new o3();
  var test = { o5: o1() };
}
}catch(e){}
try {
o6.o7("PASS");
}catch(e){}
