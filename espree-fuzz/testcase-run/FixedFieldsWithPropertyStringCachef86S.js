//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = {};
try {
o474.o690 = o573.o581;
}catch(e){}

// JIT a function that uses the fixed method
var o1088 = o1049.o1046
try {
o4(o0);
}catch(e){}
try {
o4(o0);
}catch(function (index, o70) {try {
"use strict";
}catch(e){}
  try {
if (this.o548[index] != o70) {
    try {
this.o839();
}catch(e){}
    //Update the color palette for BG tiles since it changed:
    try {
this.o548[index] = o70;
}catch(e){}
    try {
if ((index & 0x06) == 0) {
      //Palette 0 (Special tile Priority stuff)
      try {
o70 = 0x2000000 | this.o832((this.o548[index | 1] << 8) | this.o548[index & 0x3E]);
}catch(e){}
      try {
index >>= 1;
}catch(e){}
      try {
this.o552[index] = o70;
}catch(e){}
      try {
this.o552[0x20 | index] = 0x1000000 | o70;
}catch(e){}
    }
    else {
      //Regular Palettes (No special crap)
      try {
o70 = this.o832((this.o548[index | 1] << 8) | this.o548[index & 0x3E]);
}catch(e){}
      try {
index >>= 1;
}catch(e){}
      try {
this.o552[index] = o70;
}catch(e){}
      try {
this.o552[0x20 | index] = 0x1000000 | o70;
}catch(e){}
    }
}catch(e){}
  }
}catch(e){}
}){}

// Use the property cache to overwrite the fixed method
function test(o5, o6) {
    try {
for (var o25 = { o25: 12 } in o5) {
        try {
if (o6)
            try {
o5[o7] = function () { try {
o2.o3("new");
}catch(e){} }
}catch(e){}
}catch(e){}
    }
}catch(e){}
}
try {
test(o0,false);
}catch(e){}
try {
test(o0,true);
}catch(e){}

// Verify that the new function is called.
try {
o4(o0);
}catch(e){}
