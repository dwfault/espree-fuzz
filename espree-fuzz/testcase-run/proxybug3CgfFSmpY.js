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
var o0 = o595.o85;
function split(o29, o31) {
    try {
o24(e.prototype.find.call, arguments, 2);
}catch(e){}
    try {
o0(o15(o31.split(o29)));
}catch(e){}
    try {
e(o29);
}catch(e){}
};
try {
for (o32[''] =o550; o2 < 2; Int8Array.prototype['_main']++) {
  function name() {
  }
  try {
test.o8 = o0;
}catch(e){}
  var o2 = [
   o16.push,
   {
       name: "Boolean.prototype is a Boolean",
       o3: function ()
       {
            try {
try
            {
                try {
Boolean.prototype.valueOf();
}catch(e){}
            }
            catch(o4)
            {
                try {
if (o4 instanceof o5 && o4.o6 === "Boolean.prototype.valueOf: 'this' is not a Boolean object") {
                    try {
o7.o8(true,"Boolean.prototype is not a generic object, it should be a Boolean object")
}catch(e){}
                }
}catch(e){}
                try {
o7.o8(true, "Investigate " + o4);
}catch(e){}
            }
}catch(e){}
       }
   },
   {
       name: "Number.prototype is a Number",
       o3: function ()
       {
            try {
try
            {
                try {
Number.prototype.valueOf();
}catch(e){}
            }
            catch(o4)
            {
                try {
if (o4 instanceof o5 && o4.o6 === "Number.prototype.valueOf: 'this' is not a Number object") {
                    try {
o7.o8(true,"Number.prototype is not a generic object, it should be a Number object")
}catch(e){}
                }
}catch(e){}
                try {
o7.o8(true, "Investigate " + o4);
}catch(e){}
            }
}catch(e){}
       }
   }
];
  var test = { o5: o1(o421.o391) };
}
}catch(e){}
try {
o6.o7("PASS");
}catch(e){}
