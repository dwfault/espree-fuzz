//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = o492.o491.o360.prototype.o824 = function (o807) {try {
"use strict";
}catch(e){}
  try {
if (this.o525) {                  //Is the window enabled?
    var o841 = o807 - this.o533;    //The line of the BG we're at.
    try {
if (o841 >= 0) {
      var o852 = (this.o534 > 0) ? (this.o534 + this.o539) : this.o539;
      var o810 = this.o568 + o852;
      var o845 = this.o568 + this.o538;
      try {
if (o810 < o845) {
        var o842 = (o841 & 0x7) << 3;
        var o680 = (this.o530 | ((o841 & 0xF8) << 2)) + (this.o539 >> 3);
        var o846 = this.o540[o680];
        try {
if (o846 < this.o532) {
          try {
o846 |= 0x100;
}catch(e){}
        }
}catch(e){}
        var o850 = this.o541[o680];
        var o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
        var o851 = (o850 & 0x7) << 2;
        var o848 = (o852 - this.o534) & 0x7;
        try {
o852 = Math.o279(8, o848 + o845 - o810);
}catch(e){}
        try {
while (o848 < o852) {
          try {
this.o565[o810++] = this.o552[o851 | o847[o842 | o848++]];
}catch(e){}
        }
}catch(e){}
        try {
o852 = o680 + ((o845 - o810) >> 3);
}catch(e){}
        try {
while (o680 < o852) {
          try {
o846 = this.o540[++o680];
}catch(e){}
          try {
if (o846 < this.o532) {
            try {
o846 |= 0x100;
}catch(e){}
          }
}catch(e){}
          try {
o850 = this.o541[o680];
}catch(e){}
          try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
          try {
o851 = (o850 & 0x7) << 2;
}catch(e){}
          try {
o848 = o842;
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848++]];
}catch(e){}
          try {
this.o565[o810++] = this.o552[o851 | o847[o848]];
}catch(e){}
        }
}catch(e){}
        try {
if (o810 < o845) {
          try {
o846 = this.o540[++o680];
}catch(e){}
          try {
if (o846 < this.o532) {
            try {
o846 |= 0x100;
}catch(e){}
          }
}catch(e){}
          try {
o850 = this.o541[o680];
}catch(e){}
          try {
o847 = this.o543[((o850 & 0x08) << 8) | ((o850 & 0x60) << 4) | o846];
}catch(e){}
          try {
o851 = (o850 & 0x7) << 2;
}catch(e){}
          try {
switch (o845 - o810) {
            case 7:
              try {
this.o565[o810 + 6] = this.o552[o851 | o847[o842 | 6]];
}catch(e){}
            case 6:
              try {
this.o565[o810 + 5] = this.o552[o851 | o847[o842 | 5]];
}catch(e){}
            case 5:
              try {
this.o565[o810 + 4] = this.o552[o851 | o847[o842 | 4]];
}catch(e){}
            case 4:
              try {
this.o565[o810 + 3] = this.o552[o851 | o847[o842 | 3]];
}catch(e){}
            case 3:
              try {
this.o565[o810 + 2] = this.o552[o851 | o847[o842 | 2]];
}catch(e){}
            case 2:
              try {
this.o565[o810 + 1] = this.o552[o851 | o847[o842 | 1]];
}catch(e){}
            case 1:
              try {
this.o565[o810] = this.o552[o851 | o847[o842]];
}catch(e){}
          }
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}(o492);
try {
o0[2] = o13;
}catch(e){}
try { {} } catch(e) {}try try { {
this.o391[index] = this.o897;
} } catch(e) {} catch(e) {}

try {
Object.defineProperty(o0, '1', {
    get: function () { try {
return this.o1 + 1;
}catch(e){} },
    set: function (o0) { try {
this.o1 = o0 / 2;
}catch(e){} }
});
}catch(e){}

try {
Object.defineProperty(o0, '11', {
    get: function () { try {
return this.o1;
}catch(e){} }
});
}catch(e){}

try {
o2.o3(o4, 50);
}catch(e){}

/////////////////

function o4()
{
    try {
o5(`Array.isArray(x): ${Array.isArray(o0)}`, true);
}catch(e){} //true

    try {
o5(`x.foo: ${o0.o1}`, true);
}catch(e){} //3

    try {
o5(`x[1]: ${o0[1]}`, true);
}catch(e){} //4
    try {
o5(`x[11]: ${o0[11]}`, true);
}catch(e){} //3

    ////
    try {
o0[1] = 12;
}catch(e){}
    ////

    try {
o5(`x[1]: ${o0[1]}`, true);
}catch(e){} //7
    try {
o5(`x[11]: ${o0[11]}`, true);
}catch(e){} //6
}