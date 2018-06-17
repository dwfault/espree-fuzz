//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("Testing invalidation due to overwrite:");
}catch(e){}

var o2 = arguments.length

function o38(o247) {
        try {
o247 = o247 | 0;
}catch(e){}
        var o308 = 0;
        try {
o508 === null || o508 === 10;
}catch(e){}
        try {
o335 = o82 + o247 | 0;
}catch(o23){}
        try {
o82 = o82 + 7 & -8;
}catch(e){}
        try { {
o360.prototype.o423 = function () {try {
"use strict";
}catch(e){}
  //Display on hanlding:
  var o335 = 0;
  try {
while (o335 < 154) {
    try {
if (o335 < 143) {
      //We're on a normal scan line:
      try {
this.o419[o335] = function (o421) {try {
"use strict";
}catch(e){}
        try {
if (o421.o490 < 80) {
          try {
o421.o777();
}catch(e){}
        }
        else try {
if (o421.o490 < 252) {
          try {
o421.o778();
}catch(e){}
        }
        else try {
if (o421.o490 < 456) {
          try {
o421.o779();
}catch(e){}
        }
        else {
          //We're on a new scan line:
          try {
o421.o490 -= 456;
}catch(e){}
          try {
if (o421.o411 != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            try {
if (o421.o411 != 2) {
              try {
if (o421.o411 == 0 && o421.o415) {
                try {
o421.o383 |= 0x2;
}catch(e){}
              }
}catch(e){}
              try {
o421.o780();
}catch(e){}
            }
}catch(e){}
            try {
if (o421.o385) {
              try {
o421.o782();
}catch(e){}
            }
}catch(e){}
            try {
if (o421.o417) {
              try {
o421.o383 |= 0x2;
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
          //Update the scanline registers and assert the LYC counter:
          try {
o421.o502 = ++o421.o155[0xFF44];
}catch(e){}
          //Perform a LYC counter assert:
          try {
if (o421.o502 == o421.o155[0xFF45]) {
            try {
o421.o155[0xFF41] |= 0x04;
}catch(e){}
            try {
if (o421.o414) {
              try {
o421.o383 |= 0x2;
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
o421.o155[0xFF41] &= 0x7B;
}catch(e){}
          }
}catch(e){}
          try {
o421.o664();
}catch(e){}
          //Reset our mode contingency variables:
          try {
o421.o411 = 0;
}catch(e){}
          try {
o421.o412 = 2;
}catch(e){}
          try {
o421.o419[o421.o502](o421);
}catch(e){}  //Scan Line and STAT Mode Control.
        }
}catch(e){}
}catch(e){}
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (o335 == 143) {
      //We're on the last visible scan line of the LCD screen:
      try {
this.o419[143] = function (o421) {try {
"use strict";
}catch(e){}
        try {
if (o421.o490 < 80) {
          try {
o421.o777();
}catch(e){}
        }
        else try {
if (o421.o490 < 252) {
          try {
o421.o778();
}catch(e){}
        }
        else try {
if (o421.o490 < 456) {
          try {
o421.o779();
}catch(e){}
        }
        else {
          //Starting V-Blank:
          //Just finished the last visible scan line:
          try {
o421.o490 -= 456;
}catch(e){}
          try {
if (o421.o411 != 3) {
            //Make sure the mode 0 handler was run at least once per scan line:
            try {
if (o421.o411 != 2) {
              try {
if (o421.o411 == 0 && o421.o415) {
                try {
o421.o383 |= 0x2;
}catch(e){}
              }
}catch(e){}
              try {
o421.o780();
}catch(e){}
            }
}catch(e){}
            try {
if (o421.o385) {
              try {
o421.o782();
}catch(e){}
            }
}catch(e){}
            try {
if (o421.o417) {
              try {
o421.o383 |= 0x2;
}catch(e){}
            }
}catch(e){}
          }
}catch(e){}
          //Update the scanline registers and assert the LYC counter:
          try {
o421.o502 = o421.o155[0xFF44] = 144;
}catch(e){}
          //Perform a LYC counter assert:
          try {
if (o421.o155[0xFF45] == 144) {
            try {
o421.o155[0xFF41] |= 0x04;
}catch(e){}
            try {
if (o421.o414) {
              try {
o421.o383 |= 0x2;
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
o421.o155[0xFF41] &= 0x7B;
}catch(e){}
          }
}catch(e){}
          //Reset our mode contingency variables:
          try {
o421.o411 = 0;
}catch(e){}
          //Update our state for v-blank:
          try {
o421.o412 = 1;
}catch(e){}
          try {
o421.o383 |= (o421.o416) ? 0x3 : 0x1;
}catch(e){}
          try {
o421.o664();
}catch(e){}
          //Attempt to blit out to our canvas:
          try {
if (o421.o535 == 0) {
            //Ensure JIT framing alignment:
            try {
if (o421.o505 < 144 || (o421.o505 == 144 && o421.o537 > -1)) {
              //Make sure our gfx are up-to-date:
              try {
o421.o791();
}catch(e){}
              //Draw the frame:
              try {
o421.o792();
}catch(e){}
            }
}catch(e){}
          }
          else {
            //LCD off takes at least 2 frames:
            try {
--o421.o535;
}catch(e){}
          }
}catch(e){}
          try {
o421.o419[144](o421);
}catch(e){}  //Scan Line and STAT Mode Control.
        }
}catch(e){}
}catch(e){}
}catch(e){}
      }
}catch(e){}
    }
    else try {
if (o335 < 153) {
      //In VBlank
      try {
this.o419[o335] = function (o421) {try {
"use strict";
}catch(e){}
        try {
if (o421.o490 >= 456) {
          //We're on a new scan line:
          try {
o421.o490 -= 456;
}catch(e){}
          try {
o421.o502 = ++o421.o155[0xFF44];
}catch(e){}
          //Perform a LYC counter assert:
          try {
if (o421.o502 == o421.o155[0xFF45]) {
            try {
o421.o155[0xFF41] |= 0x04;
}catch(e){}
            try {
if (o421.o414) {
              try {
o421.o383 |= 0x2;
}catch(e){}
              try {
o421.o664();
}catch(e){}
            }
}catch(e){}
          }
          else {
            try {
o421.o155[0xFF41] &= 0x7B;
}catch(e){}
          }
}catch(e){}
          try {
o421.o419[o421.o502](o421);
}catch(e){}  //Scan Line and STAT Mode Control.
        }
}catch(e){}
      }
}catch(e){}
    }
    else {
      //VBlank Ending (We're on the last actual scan line)
      try {
this.o419[153] = function (o421) {try {
"use strict";
}catch(e){}
        try {
if (o421.o490 >= 8) {
          try {
if (o421.o411 != 4 && o421.o155[0xFF44] == 153) {
            try {
o421.o155[0xFF44] = 0;
}catch(e){}  //LY register resets to 0 early.
            //Perform a LYC counter assert:
            try {
if (o421.o155[0xFF45] == 0) {
              try {
o421.o155[0xFF41] |= 0x04;
}catch(e){}
              try {
if (o421.o414) {
                try {
o421.o383 |= 0x2;
}catch(e){}
                try {
o421.o664();
}catch(e){}
              }
}catch(e){}
            }
            else {
              try {
o421.o155[0xFF41] &= 0x7B;
}catch(e){}
            }
}catch(e){}
            try {
o421.o411 = 4;
}catch(e){}
          }
}catch(e){}
          try {
if (o421.o490 >= 456) {
            //We reset back to the beginning:
            try {
o421.o490 -= 456;
}catch(e){}
            try {
o421.o411 = o421.o502 = 0;
}catch(e){}
            try {
o421.o419[0](o421);
}catch(e){}  //Scan Line and STAT Mode Control.
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
}catch(e){}
}catch(e){}
    try {
++o335;
}catch(e){}
  }
}catch(e){}
}
} } catch(e) {}
    };
try {
global.Int32Array = o148;
}catch(e){}
try { o474.o690(o479); } catch(e) {}

var o13 = Object.getOwnPropertyDescriptor(Array, Symbol.species)

try {
o8(o7);
}catch(e){}

try {
o8(o7);
}catch(sort){}

try {
o2.o6 = function () {
    try {
return (this.o4 - this.o5) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o8(o7);
}catch(e){}

try {
o2.add = function () {
    try {
return (this.o4 + this.o5) + " (overwritten)";
}catch(e){}
}
}catch(e){}

try {
o8(o7);
}catch(e){}

var o2 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o10: 0,
    add: function () {
        try {
return (this.o4 + this.o5) + " (original)";
}catch(e){}
    },
    o6: function () {
        try {
return (this.o4 - this.o5) + " (original)";
}catch(e){}
    }
}

var o7 = Object.create(o2);
try {
o7.o4 = 0;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

var o11 = function () {
    try {
return (this.o4 - this.o5) + " (overwritten)";
}catch(e){}
}

var o53 = 0

try {
o8(o7, false);
}catch(e){}

try {
o8(o7, false);
}catch(e){}

try {
o8(o7, true);
}catch(e){}

try {
o0.o1();
}catch(e){}


try {
o0.o1("Testing invalidation due to delete:");
}catch(e){}

var o479 = o495.o501(o502, o546, 511 /* 0777 */ | 40960, 0)

var o2 = Object.create(o13, {
    // Make sure we branch to a unique type path to avoid false sharing
    o15: { value: 0 },
    add: {
        value: function () {
            try {
return (this.o4 + this.o5) + " (from proto1)";
}catch(e){}
        },
        writable: true, configurable: true
    },
    o6: {
        value: function () {
            try {
return (this.o4 - this.o5) + " (from proto1)";
}catch(e){}
        },
        writable: true, configurable: true
    }
});

var o7 = Object.create(o2);
try {
o7.o4 = 0;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

function o16(o9) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
}

try {
o16(o7);
}catch(e){}

try {
o16(o7);
}catch(e){}

try {
delete o2.o6;
}catch(e){}

try {
o16(o7);
}catch(e){}

try {
delete o2.add;
}catch(e){}

try {
o16(o7);
}catch(e){}

try {
o0.o1();
}catch(e){}


try {
o0.o1("Testing invalidation due to shadowing:");
}catch(e){}

var o13 = {
    // Make sure we branch to a unique type path to avoid false sharing
    o17: 0,
    add: function () {
        try {
return (this.o4 + this.o5) + " (from proto2)";
}catch(e){}
    },
    o6: function () {
        try {
return (this.o4 - this.o5) + " (from proto2)";
}catch(e){}
    }
}

var o2 = Object.create(o13, {
    // Make sure we branch to a unique type path to avoid false sharing
    o18: { value: 0 },
});

var o7 = Object.create(o2);
try {
o7.o4 = 0;
}catch(e){}
try {
o7.o5 = 1;
}catch(e){}

function o19(o9) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
}

try {
o19(o7);
}catch(e){}

try {
o19(o7);
}catch(e){}

try {
o2.o6 = function () {
    try {
return (this.o4 - this.o5) + " (from proto1)";
}catch(e){}
};
}catch(e){}

try {
o19(o7);
}catch(e){}

try {
o2.add = function () {
    try {
return (this.o4 + this.o5) + " (from proto1)";
}catch(e){}
};
}catch(e){}

try {
o19(o7);
}catch(e){}

try {
o0.o1();
}catch(e){}