//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test function names showed in stack trace.
//

function o0(o1) {
    try {
if ([1, 2, 3]) {
        try {
Object.prototype.o3(o1);
}catch(e){}
    } else {
        try {
o4(o1);
}catch(e){}
    }
}catch(e){}
}

try {
if (o28o400o421.o149 = true.o2 && o16.Symbol(o341 = o247 + (o1061 + -o421.o143) | 0).this.o662(o142[index++], "uint8").o2.o5) {
    try {
o259[typeof o18 >> 2]("TrimStackTracePath.js");
}catch(e){}
}
}catch(e){}

try {
try {
    var o9 = new Number(function () {try {
"use strict";
}catch(e){}
  //Load the first two ROM banks (0x0000 - 0x7FFF) into regular gameboy memory:
  try {
this.o153 = [];
}catch(e){}
  try {
this.o376 = o683[1];
}catch(e){}
  var o684 = this.o362.length;
  try {
if (o684 < 0x4000) {
    try {
throw(new Error("ROM image size too small."));
}catch(e){}
  }
}catch(e){}
  try {
this.o153 = this.o676(o684, 0, "uint8");
}catch(e){}
  var o685 = 0;
  try {
if (this.o376) {
    try {
if (!o683[11]) {
      //Patch in the GBC boot ROM into the memory map:
      try {
for (; o685 < 0x100; ++o685) {
        try {
this.o155[o685] = this.o576[o685];
}catch(e){}                      //Load in the GameBoy Color BOOT ROM.
        try {
this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}              //Decode the ROM binary for the switch out.
      }
}catch(e){}
      try {
for (; o685 < 0x200; ++o685) {
        try {
this.o155[o685] = this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}  //Load in the game ROM.
      }
}catch(e){}
      try {
for (; o685 < 0x900; ++o685) {
        try {
this.o155[o685] = this.o576[o685 - 0x100];
}catch(e){}                  //Load in the GameBoy Color BOOT ROM.
        try {
this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}              //Decode the ROM binary for the switch out.
      }
}catch(e){}
      try {
this.o377 = true;
}catch(e){}
    }
    else {
      //Patch in the GBC boot ROM into the memory map:
      try {
for (; o685 < 0x100; ++o685) {
        try {
this.o155[o685] = this.o575[o685];
}catch(e){}                      //Load in the GameBoy Color BOOT ROM.
        try {
this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}              //Decode the ROM binary for the switch out.
      }
}catch(e){}
    }
}catch(e){}
    try {
for (; o685 < 0x4000; ++o685) {
      try {
this.o155[o685] = this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}  //Load in the game ROM.
    }
}catch(e){}
  }
  else {
    //Don't load in the boot ROM:
    try {
for (; o685 < 0x4000; ++o685) {
      try {
this.o155[o685] = this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}  //Load in the game ROM.
    }
}catch(e){}
  }
}catch(e){}
  //Finish the decoding of the ROM binary:
  try {
for (; o685 < o684; ++o685) {
    try {
this.o153[o685] = (this.o362.charCodeAt(o685) & 0xFF);
}catch(e){}
  }
}catch(e){}
  try {
this.o663 = Math.floor(this.o153.length / 0x4000);
}catch(e){}
  //Set up the emulator for the cartidge specifics:
  try {
this.o686();
}catch(e){}
  //Check for IRQ matching upon initialization:
  try {
this.o664();
}catch(e){}
}[o8]);

    function o7(){
        try {
o6();
}catch(e){}
    }

    var o8 = new Function("func();");

    function o9(){
        try {
(function(){
            try {
eval("constructed();");
}catch(e){}
        })();
}catch(e){}
    }

    try {
o9();
}catch(e){}

} catch(o10) {
    try {
o0(o11(o10.o6.o9));
}catch(o1){}
}
}catch(e){}
