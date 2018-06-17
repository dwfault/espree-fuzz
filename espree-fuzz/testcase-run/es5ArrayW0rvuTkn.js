//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var promise = new Promise(
                function(resolve,reject) {
                    try {
reject('error1');
}catch(e){}
                }
            );
try {
function () {try {
"use strict";
}catch(e){}
  //Update the clocking for the LCD emulation:
  try {
this.o490 += this.o386 >> this.o387;
}catch(e){}  //LCD Timing
  try {
this.o422[this.o502](this);
}catch(e){}          //Scan Line and STAT Mode Control
  //Single-speed relative timing for A/V emulation:
  var o773 = this.o386 >> this.o387;  //CPU clocking can be updated from the LCD handling.
  try {
this.o485 += o773;
}catch(e){}                //Audio Timing
  try {
this.o488 += o773;
}catch(e){}              //Emulator Timing
  //CPU Timers:
  try {
this.o489 += this.o386;
}catch(e){}                //DIV Timing
  try {
if (this.o492) {                    //TIMA Timing
    try {
this.o491 += this.o386;
}catch(e){}
    try {
while (this.o491 >= this.o493) {
      try {
this.o491 -= this.o493;
}catch(e){}
      try {
if (++this.o155[0xFF05] == 0x100) {
        try {
this.o155[0xFF05] = this.o155[0xFF06];
}catch(e){}
        try {
this.o383 |= 0x4;
}catch(e){}
        try {
this.o664();
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
  try {
if (this.o494 > 0) {                    //Serial Timing
    //IRQ Counter:
    try {
this.o494 -= this.o386;
}catch(e){}
    try {
if (this.o494 <= 0) {
      try {
this.o383 |= 0x8;
}catch(e){}
      try {
this.o664();
}catch(e){}
    }
}catch(e){}
    //Bit Shit Counter:
    try {
this.o495 -= this.o386;
}catch(e){}
    try {
if (this.o495 <= 0) {
      try {
this.o495 = this.o496;
}catch(e){}
      try {
this.o155[0xFF01] = ((this.o155[0xFF01] << 1) & 0xFE) | 0x01;
}catch(e){}  //We could shift in actual link data here if we were to implement such!!!
    }
}catch(e){}
  }
}catch(e){}
};
}catch(o19){}
try {
getFloat32(o168);
}catch(e)try { {
if (this.o508) {
    try {
this.o521 = 1 / 16;
}catch(e){}
  }
  else try {
if (this.o507 || this.o514 || this.o509 || this.o517) {
    try {
this.o521 = 4;
}catch(e){}
  }
  else try {
if (this.o510) {
    try {
this.o521 = 16;
}catch(e){}
  }
  else try {
if (this.o512) {
    try {
this.o521 = 1;
}catch(e){}
  }
}catch(e){}
}catch(e){}
}catch(e){}
} } catch(e) {}

try {
Object.defineProperty(o0, '1', o21.length);
}catch(e){}

try {
Object.defineProperty(o0, '11', 10720 >> 2);
}catch(e){}

try {
o2.o3(o31, 50);
}catch(e){}

/////////////////

var o1 = 0