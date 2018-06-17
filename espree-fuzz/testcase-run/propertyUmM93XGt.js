//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o0=o1({ writable: true, configurable: true, enumerable: true }, o3.concat(o4), '[@@isConcatSpreadable]==-0.1');

try {
for(o421.o630[0xFF26]=0;eval("WScript.Echo(yy);")<Number.NEGATIVE_INFINITY;o418++)
{
    try {
if(o1<o1)
    {
        // Example: "var y15=15"
        try {
eval({}+"=" + o1 );
}catch(e){}

        try {
if(!(o2(function (o421, o768, o70) {try {
"use strict";
}catch(e){}
    try {
if (o421.o450) {
      try {
o421.o746();
}catch(e){}
      try {
if (o70 > 0x7F) {
        try {
if (o421.o630 == 0) {
          try {
o421.o630 = 0x100;
}catch(e){}
        }
}catch(e){}
        try {
o421.o659 = 0;
}catch(e){}
        try {
if ((o70 & 0x40) == 0x40) {
          try {
o421.o155[0xFF26] |= 0x4;
}catch(e){}
        }
}catch(e){}
      }
}catch(e){}
      try {
o421.o633 = ((o70 & 0x40) == 0x0);
}catch(e){}
      try {
o421.o632 = ((o70 & 0x7) << 8) | (o421.o632 & 0xFF);
}catch(e){}
      try {
o421.o658 = (0x800 - o421.o632) << 1;
}catch(e){}
      try {
o421.o155[0xFF1E] = o70 & 0x40;
}catch(e){}
      try {
o421.o752();
}catch(e){}
    }
}catch(e){}
  })===o1))
            try {
o2.o3(this.o565[o810++] = this.o552[o851 | o847[o848++]] + o1);
}catch(o278){}
}catch(o56){}

    }
    else
    {
        // Example: "obj['o57']=57"
        try {
eval("obj['o"+o1+"']="+o1 );
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

// Here it is assumed that the enumeration of properties are accessed in the sequence they were created
// An example error message would look like:
// FAIL: obj[p1] == 23.  Expected: 47

var o4=1000;

try {
for(o5 in o0)
{
    try {
if(o0[o5]!==o4)
        try {
o2.o3("FAIL: obj["+o5+"] == " + (o0[o5]) + ".  Expected: " + o4);
}catch(e){}
}catch(e){}
    try {
o4++;
}catch(e){}
}
}catch(e){}
try {
o2.o3("done");
}catch(e){}
