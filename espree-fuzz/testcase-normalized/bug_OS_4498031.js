//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//Switches: -MaxinterpretCount:1 -MaxSimpleJITRunCount:1 
//MachineName: BPT48305
//Build: 150906-1800
//Branch:  th2_edge_stage_dev3
//Binary: \\bptserver1\DailyBuild\th2_edge_stage_dev3\10532.0.150906-1800\X86chk
//Arch: X86

function o0(){
class NaN {
    static o2(o3) {  }
    o4(){  }
}
with({o2:  '' }){};
};

o0();
o0();
o0();
o0();
print("pass");
