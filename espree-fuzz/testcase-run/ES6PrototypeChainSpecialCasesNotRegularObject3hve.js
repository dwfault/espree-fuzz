//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
   Object.prototype,
   {
       name: "Boolean.prototype is a Boolean",
       o3: function ()
       {
            try {
try
            {
                try {
Boolean.prototype.valueOf([0,-1,2,300]);
}catch(o495){}
            }
            catch(o4)
            {
                try {
if (o4 instanceof o5 && o4.o6 === "Boolean.prototype.valueOf: 'this' is not a Boolean object") {
                    try {
o421.o366 = o421.o365 = false.o8(true,"Boolean.prototype is not a generic object, it should be a Boolean object")
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
   o421.o148 &= 0xEFFF
];

try {
o9.o10(o2, function () {try {
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
});
}catch(e){}
