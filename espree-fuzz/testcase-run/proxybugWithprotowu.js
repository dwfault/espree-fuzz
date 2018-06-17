//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
//  -maxsimplejitruncount:1 -maxinterpretcount:1 
var this.o391[0xFF02] = function (o421, o768, o70) {try {
"use strict";
}catch(e){}
      try {
if (((o70 & 0x1) == 0x1)) {
        //Internal clock:
        try {
o421.o155[0xFF02] = (o70 & 0x7F);
}catch(e){}
        try {
o421.o494 = ((o70 & 0x2) == 0) ? 4096 : 128;
}catch(e){}  //Set the Serial IRQ counter.
        try {
o421.o495 = o421.o496 = ((o70 & 0x2) == 0) ? 512 : 16;
}catch(e){}  //Set the transfer data shift counter.
      }
      else {
        //External clock:
        try {
o421.o155[0xFF02] = o70;
}catch(e){}
        try {
o421.o495 = o421.o496 = o421.o494 = 0;
}catch(e){}  //Zero the timers, since we're emulating as if nothing is connected.
      }
}catch(e){}
    } = {};
var o1 = new Uint8ClampedArray(256);
var slice = {};
try {
for (var o5=o4.splice(3,5,"d1","d2","d3") in o1) {
    try {
o421.o548 = Array;
}catch(e){}
    try {
switch ('(') {
        case '(':
        case "if x is 1, then the result of log2(x) is +0":
            try {
o0 = new Proxy(o0, o2);
}catch(e){}
    }
}catch(e){}
}
}catch(1){}
try {
print('PASS');
}catch(e){}