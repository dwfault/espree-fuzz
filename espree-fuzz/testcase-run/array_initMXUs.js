//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o157
try {
o0([]);
}catch(e){}
try {
o0([ 0 ]);
}catch(e){}
try {
o0([ 0, 1, 2, 3, 4, 5, 6 ,7 ,8, 9]);
}catch(e){}
try {
o0([,,,0,,,o5 instanceof o6,,,2,,,3,,,4,,,5,,,6,,,7,,,8,,,9,,,]);
}catch(e){}

var o6 = "";
try {
for (var o3 = 0; o3 < 100; o479++)
{
    try {
o143 += ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,";
}catch(e){}
}
}catch(e){}
try {
o0(eval("[" + o6 + "1]"));
}catch(e){}
function o360(o361, o362) {
  //Params, etc...
  try {
this.o361 = o361;
}catch(e){}            //Canvas DOM object for drawing out the graphics to.
  try {
this.o363 = null;
}catch(e){}          // LCD Context
  try {
this.o362 = o362;
}catch(e){}          //The game's ROM.
  //CPU Registers and Flags:
  try {
this.o143 = 0x01;
}catch(e){}             //Register A (Accumulator)
  try {
this.o364 = true;
}catch(e){}               //Register F  - Result was zero
  try {
this.o365 = false;
}catch(e){}            //Register F  - Subtraction was executed
  try {
this.o366 = true;
}catch(e){}            //Register F  - Half carry or half borrow
  try {
this.o367 = true;
}catch(e){}              //Register F  - Carry or borrow
  try {
this.o144 = 0x00;
}catch(e){}            //Register B
  try {
this.o145 = 0x13;
}catch(e){}            //Register C
  try {
this.o368 = 0x00;
}catch(e){}            //Register D
  try {
this.o146 = 0xD8;
}catch(e){}            //Register E
  try {
this.o148 = 0x014D;
}catch(e){}          //Registers H and L combined
  try {
this.o150 = 0xFFFE;
}catch(e){}          //Stack Pointer
  try {
this.o149 = 0x0100;
}catch(e){}        //Program Counter
  //Some CPU Emulation State Variables:
  try {
this.o369 = 0;
}catch(e){}          //Relative CPU clocking to speed set, rounded appropriately.
  try {
this.o370 = 0;
}catch(e){}        //Relative CPU clocking to speed set base.
  try {
this.o371 = 0;
}catch(e){}        //Relative CPU clocking to speed set, the directly used value.
  try {
this.o372 = 0;
}catch(e){}      //Clocking per iteration rounding catch.
  try {
this.o373 = 0;
}catch(e){}    //CPU clocks per iteration at 1x speed.
  try {
this.o374 = 0;
}catch(e){}          //HALT clocking overrun carry over.
  try {
this.o375 = true;
}catch(e){}          //Whether we're in the GBC boot ROM.
  try {
this.o376 = false;
}catch(e){}          //Updated upon ROM loading...
  try {
this.o377 = false;
}catch(e){}        //Did we boot to the GBC boot ROM?
  try {
this.o378 = false;
}catch(e){}              //Has the CPU been suspended until the next interrupt?
  try {
this.o379 = false;
}catch(e){}        //Did we trip the DMG Halt bug?
  try {
this.o380 = 3;
}catch(e){}            //Has the emulation been paused or a frame has ended?
  try {
this.o381 = true;
}catch(e){}              //Are interrupts enabled?
  try {
this.o382 = 0;
}catch(e){}          //CPU IRQ assertion.
  try {
this.o383 = 0;
}catch(e){}        //IF Register
  try {
this.o384 = 0;
}catch(e){}          //IE Register
  try {
this.o385 = false;
}catch(e){}          //HDMA Transfer Flag - GBC only
  try {
this.o386 = 0;
}catch(e){}              //The number of clock cycles emulated.
  try {
this.o387 = 0;
}catch(e){}        //GBC double speed clocking shifter.
  try {
this.o388 = 0xFF;
}catch(e){}              //Joypad State (two four-bit states actually)
  try {
this.o389 = false;
}catch(e){}          //CPU STOP status.
  //Main RAM, MBC RAM, GBC Main RAM, VRAM, etc.
  try {
this.o390 = [];
}catch(e){}            //Array of functions mapped to read back memory
  try {
this.o391 = [];
}catch(e){}            //Array of functions mapped to write to memory
  try {
this.o392 = [];
}catch(e){}          //Array of functions mapped to read back 0xFFXX memory
  try {
this.o393 = [];
}catch(e){}          //Array of functions mapped to write to 0xFFXX memory
  try {
this.o153 = [];
}catch(e){}                //The full ROM file dumped to an array.
  try {
this.o155 = [];
}catch(e){}              //Main Core Memory
  try {
this.o157 = [];
}catch(e){}              //Switchable RAM (Used by games for more RAM) for the main memory range 0xA000 - 0xC000.
  try {
this.o394 = [];
}catch(e){}                //Extra VRAM bank for GBC.
  try {
this.o395 = [];
}catch(e){}            //GBC main RAM Banks
  try {
this.o396 = false;
}catch(e){}            //MBC1 Type (4/32, 16/8)
  try {
this.o397 = false;
}catch(e){}      //MBC RAM Access Control.
  try {
this.o398 = 0;
}catch(e){}          //MBC Currently Indexed RAM Bank
  try {
this.o399 = -0xA000;
}catch(e){}    //MBC Position Adder;
  try {
this.o400 = false;
}catch(e){}              //GameBoy Color detection.
  try {
this.o401 = 1;
}catch(e){}            //Currently Switched GameBoy Color ram bank
  try {
this.o402 = -0xD000;
}catch(e){}      //GBC RAM offset from address start.
  try {
this.o403 = -0xF000;
}catch(e){}    //GBC RAM (ECHO mirroring) offset from address start.
  try {
this.o404 = [0, 1, 2, 4, 16];
}catch(e){}      //Used to map the RAM banks to maximum size the MBC used can do.
  try {
this.o405 = 0;
}catch(e){}            //Offset of the ROM bank switching.
  try {
this.o406 = 0;
}catch(e){}          //The parsed current ROM bank selection.
  try {
this.o407 = 0;
}catch(e){}            //Cartridge Type
  try {
this.name = "";
}catch(e){}                //Name of the game
  try {
this.o408 = "";
}catch(e){}              //Game code (Suffix for older games)
  try {
this.o409 = false;
}catch(e){}          //A boolean to see if this was loaded in as a save state.
  try {
this.o410 = "";
}catch(e){}        //When loaded in as a save state, this will not be empty.
  try {
this.o411 = 0;
}catch(e){}            //Tracker for STAT triggering.
  try {
this.o412 = 0;
}catch(e){}              //The scan line mode (for lines 1-144 it's 2-3-0, for 145-154 it's 1)
  try {
this.o413 = 252;
}catch(e){}            //Mode 3 extra clocking counter (Depends on how many sprites are on the current line.).
  try {
this.o414 = false;
}catch(e){}      //Should we trigger an interrupt if LY==LYC?
  try {
this.o415 = false;
}catch(e){}        //Should we trigger an interrupt if in mode 2?
  try {
this.o416 = false;
}catch(e){}        //Should we trigger an interrupt if in mode 1?
  try {
this.o417 = false;
}catch(e){}        //Should we trigger an interrupt if in mode 0?
  try {
this.o418 = false;
}catch(e){}            //Is the emulated LCD controller on?
  try {
this.o419 = [];
}catch(e){}            //Array of functions to handle each scan line we do (onscreen + offscreen)
  try {
this.o420 = [function (o421) { 
        try {
"use strict";
}catch(e){}
    //Array of line 0 function to handle the LCD controller when it's off (Do nothing!).
  }];
}catch(e){}
  try {
this.o422 = null;
}catch(e){}            //Pointer to either LINECONTROL or DISPLAYOFFCONTROL.
  try {
this.o423();
}catch(e){}        //Compile the LCD controller functions.
  //RTC (Real Time Clock for MBC3):
  try {
this.o424 = false;
}catch(e){}
  try {
this.o425 = 0;
}catch(e){}          //RTC latched seconds.
  try {
this.o426 = 0;
}catch(e){}          //RTC latched minutes.
  try {
this.o427 = 0;
}catch(e){}            //RTC latched hours.
  try {
this.o428 = 0;
}catch(e){}            //RTC latched lower 8-bits of the day counter.
  try {
this.o429 = 0;
}catch(e){}            //RTC latched high-bit of the day counter.
  try {
this.o430 = 0;
}catch(e){}            //RTC seconds counter.
  try {
this.o431 = 0;
}catch(e){}            //RTC minutes counter.
  try {
this.o432 = 0;
}catch(e){}              //RTC hours counter.
  try {
this.o433 = 0;
}catch(e){}              //RTC days counter.
  try {
this.o434 = false;
}catch(e){}        //Did the RTC overflow and wrap the day counter?
  try {
this.o435 = false;
}catch(e){}            //Is the RTC allowed to clock up?
  //Gyro:
  try {
this.o436 = 127;
}catch(e){}
  try {
this.o437 = 127;
}catch(e){}
  try {
this.o438 = 127;
}catch(e){}
  try {
this.o439 = 127;
}catch(e){}
  //Sound variables:
  try {
this.o440 = null;
}catch(e){}            //XAudioJS handle
  try {
this.o441 = 0;
}catch(e){}            //Length of the sound buffers.
  try {
this.o442 = 0;
}catch(e){}              //Length of the sound buffer for one channel.
  try {
this.o443 = [                //Map the duty values given to ones we can work with.
    [false, false, false, false, false, false, false, true],
    [true, false, false, false, false, false, false, true],
    [true, false, false, false, false, true, true, true],
    [false, true, true, true, true, true, true, false]
  ];
}catch(e){}
  try {
this.o444 = [];
}catch(e){}            //The audio buffer we're working on.
  try {
this.o445 = 0;
}catch(e){}          //Buffer maintenance metric.
  try {
this.o446 = null;
}catch(e){}
  try {
this.o447 = null;
}catch(e){}
  try {
this.o448 = null;
}catch(e){}
  try {
this.o449();
}catch(e){}
  try {
this.o450 = false;
}catch(e){}      //As its name implies
  try {
this.o451 = null;
}catch(e){}          //Channel 3 adjusted sample buffer.
  //Vin Shit:
  try {
this.o452 = 8;
}catch(e){}    //Computed post-mixing volume.
  try {
this.o453 = 8;
}catch(e){}    //Computed post-mixing volume.
  //Channel paths enabled:
  try {
this.o454 = false;
}catch(e){}
  try {
this.o455 = false;
}catch(e){}
  try {
this.o456 = false;
}catch(e){}
  try {
this.o457 = false;
}catch(e){}
  try {
this.o458 = false;
}catch(e){}
  try {
this.o459 = false;
}catch(e){}
  try {
this.o460 = false;
}catch(e){}
  try {
this.o461 = false;
}catch(e){}
  //Channel output level caches:
  try {
this.o462 = 0;
}catch(e){}
  try {
this.o463 = 0;
}catch(e){}
  try {
this.o464 = 0;
}catch(e){}
  try {
this.o465 = 0;
}catch(e){}
  try {
this.o466 = 0;
}catch(e){}
  try {
this.o467 = 0;
}catch(e){}
  try {
this.o468 = 0;
}catch(e){}
  try {
this.o469 = 0;
}catch(e){}
  try {
this.o470 = 0;
}catch(e){}
  try {
this.o471 = 0;
}catch(e){}
  try {
this.o472 = 0;
}catch(e){}
  try {
this.o473 = 0;
}catch(e){}
  try {
this.o474 = 0;
}catch(e){}
  try {
this.o475 = 0;
}catch(e){}
  try {
this.o476 = 0;
}catch(e){}
  try {
this.o477 = 0;
}catch(e){}
  try {
this.o478 = 0;
}catch(e){}
  try {
this.o479 = 0;
}catch(e){}
  try {
this.o480 = 0;
}catch(e){}
  try {
this.o481 = 0;
}catch(e){}
  try {
this.o482 = 0;
}catch(e){}
  //Pre-multipliers to cache some calculations:
  try {
this.o483();
}catch(e){}
  try {
this.o484 = 0;
}catch(e){}        //Premultiplier for audio samples per instruction.
  //Audio generation counters:
  try {
this.o485 = 0;
}catch(e){}        //Used to sample the audio system every x CPU instructions.
  try {
this.o486 = 0;
}catch(e){}        //Used to keep alignment on audio generation.
  try {
this.o487 = 0;
}catch(e){}          //Used to keep alignment on the number of samples to output (Realign from counter alias).
  //Timing Variables
  try {
this.o488 = 0;
}catch(e){}        //Times for how many instructions to execute before ending the loop.
  try {
this.o489 = 56;
}catch(e){}          //DIV Ticks Counter (Invisible lower 8-bit)
  try {
this.o490 = 60;
}catch(e){}          //Counter for how many instructions have been executed on a scanline so far.
  try {
this.o491 = 0;
}catch(e){}        //Counter for the TIMA timer.
  try {
this.o492 = false;
}catch(e){}      //Is TIMA enabled?
  try {
this.o493 = 1024;
}catch(e){}        //Timer Max Ticks
  try {
this.o494 = 0;
}catch(e){}        //Serial IRQ Timer
  try {
this.o495 = 0;
}catch(e){}      //Serial Transfer Shift Timer
  try {
this.o496 = 0;
}catch(e){}  //Serial Transfer Shift Timer Refill
  try {
this.o497 = 0;
}catch(e){}      //Are the interrupts on queue to be enabled?
  var o498 = o138();     // The line is changed for benchmarking.
  try {
this.o499 = o498.o139();
}catch(e){}//The last time we iterated the main loop.
  try {
o498 = o138();
}catch(e){}         // The line is changed for benchmarking.
  try {
this.o500 = o498.o139();
}catch(e){}
  try {
this.o501 = 0;
}catch(e){}
  try {
this.o502 = 0;
}catch(e){}      //Actual scan line...
  try {
this.o503 = 0;
}catch(e){}    //Last rendered scan line...
  try {
this.o504 = 0;
}catch(e){}
  try {
this.o505 = 0;
}catch(e){}
  try {
this.o506 = 0;
}catch(e){}      //Post-Halt clocking.
  //ROM Cartridge Components:
  try {
this.o507 = false;
}catch(e){}          //Does the cartridge use MBC1?
  try {
this.o508 = false;
}catch(e){}          //Does the cartridge use MBC2?
  try {
this.o509 = false;
}catch(e){}          //Does the cartridge use MBC3?
  try {
this.o510 = false;
}catch(e){}          //Does the cartridge use MBC5?
  try {
this.o511 = false;
}catch(e){}          //Does the cartridge use MBC7?
  try {
this.o512 = false;
}catch(e){}          //Does the cartridge use save RAM?
  try {
this.o513 = false;
}catch(e){}        //...
  try {
this.o514 = false;
}catch(e){}        //Does the cartridge use the RUMBLE addressing (modified MBC5)?
  try {
this.o515 = false;
}catch(e){}        //Is the cartridge actually a GameBoy Camera?
  try {
this.o516 = false;
}catch(e){}        //Does the cartridge use TAMA5? (Tamagotchi Cartridge)
  try {
this.o517 = false;
}catch(e){}          //Does the cartridge use HuC3 (Hudson Soft / modified MBC3)?
  try {
this.o518 = false;
}catch(e){}          //Does the cartridge use HuC1 (Hudson Soft / modified MBC1)?
  try {
this.o519 = false;
}catch(e){}        //Does the cartridge have an RTC?
  try {
this.o520 = [          // 1 Bank = 16 KBytes = 256 Kbits
    2, 4, 8, 16, 32, 64, 128, 256, 512
  ];
}catch(e){}
  try {
this.o520[0x52] = 72;
}catch(e){}
  try {
this.o520[0x53] = 80;
}catch(e){}
  try {
this.o520[0x54] = 96;
}catch(e){}
  try {
this.o521 = 0;
}catch(e){}          //How many RAM banks were actually allocated?
  ////Graphics Variables
  try {
this.o522 = 0;
}catch(e){}          //Current VRAM bank for GBC.
  try {
this.o523 = 0;
}catch(e){}          //Register SCX (X-Scroll)
  try {
this.o524 = 0;
}catch(e){}          //Register SCY (Y-Scroll)
  try {
this.o525 = false;
}catch(e){}      //Is the windows enabled?
  try {
this.o526 = false;
}catch(e){}        //Are sprites enabled?
  try {
this.o527 = true;
}catch(e){}    //Are we doing 8x8 or 8x16 sprites?
  try {
this.o528 = true;
}catch(e){}          //Is the BG enabled?
  try {
this.o529 = true;
}catch(e){}      //Can we flag the BG for priority over sprites?
  try {
this.o530 = 0;
}catch(e){}    //The current bank of the character map the window uses.
  try {
this.o531 = 0;
}catch(e){}  //The current bank of the character map the BG uses.
  try {
this.o532 = 0x80;
}catch(e){}  //Fast mapping of the tile numbering/
  try {
this.o533 = 0;
}catch(e){}            //Current Y offset of the window.
  try {
this.o534 = 0;
}catch(e){}            //Current X offset of the window.
  try {
this.o535 = 0;
}catch(e){}            //To prevent the repeating of drawing a blank screen.
  try {
this.o536 = false;
}catch(e){}          //Throttle how many draws we can do to once per iteration.
  try {
this.o537 = -1;
}catch(e){}      //mid-scanline rendering offset.
  try {
this.o538 = 0;
}catch(e){}            //track the x-coord limit for line rendering (mid-scanline usage).
  try {
this.o539 = 0;
}catch(e){}            //The x-coord we left off at for mid-scanline rendering.
  //BG Tile Pointer Caches:
  try {
this.o540 = null;
}catch(e){}
  try {
this.o541 = null;
}catch(e){}
  try {
this.o542 = null;
}catch(e){}
  //Tile Data Cache:
  try {
this.o543 = null;
}catch(e){}
  //Palettes:
  try {
this.o544 = [0xEFFFDE, 0xADD794, 0x529273, 0x183442];
}catch(e){}      //"Classic" GameBoy palette colors.
  try {
this.o545 = null;
}catch(e){}
  try {
this.o546 = null;
}catch(e){}
  try {
this.o547 = null;
}catch(e){}
  try {
this.o548 = null;
}catch(e){}
  try {
this.o549 = null;
}catch(e){}
  try {
this.o550 = null;
}catch(e){}
  try {
this.o551 = null;
}catch(e){}
  try {
this.o552 = null;
}catch(e){}
  try {
this.o553 = null;
}catch(e){}
  try {
this.o554 = null;
}catch(e){}
  try {
this.o555 = null;
}catch(e){}
  try {
this.o556 = null;
}catch(e){}
  try {
this.o557 = this.o558;
}catch(e){}
  try {
this.o559 = this.o560;
}catch(e){}
  try {
this.o561 = false;
}catch(e){}
  try {
this.o562 = null;
}catch(e){}      //Reference to the BG rendering function.
  try {
this.o563 = null;
}catch(e){}    //Reference to the window rendering function.
  try {
this.o564 = null;
}catch(e){}    //Reference to the OAM rendering function.
  try {
this.o565 = [];
}catch(e){}        //The internal frame-buffer.
  try {
this.o566 = null;
}catch(e){}      //The secondary gfx buffer that holds the converted RGBA values.
  try {
this.o567 = null;
}catch(e){}      //imageData handle
  try {
this.o568 = 0;
}catch(e){}        //Temp variable for holding the current working framebuffer offset.
  //Variables used for scaling in JS:
  try {
this.o569 = this.o570 = 160;
}catch(e){}
  try {
this.o571 = this.o572 = 144;
}catch(e){}
  try {
this.o573 = this.o569 * this.o571 * 4;
}catch(e){}
  //Initialize the white noise cache tables ahead of time:
  try {
this.o574();
}catch(e){}
};
try {
for (var o3 = 0; o3 < 30; o3++)
{
    try {
o7 += o6;
}catch(e){}
}
}catch(e){}
try {
o0(eval("[" + o7 + "1]"));
}catch(e){}
var o8 = "";
try {
for (var o3 = 0; o3 < 10; o3++)
{
    try {
o8 += o7;
}catch(e){}
}
}catch(e){}
try {
o0(eval("[" + o8 + "1]"));
}catch(e){}

