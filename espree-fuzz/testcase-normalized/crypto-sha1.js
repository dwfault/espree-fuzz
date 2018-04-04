/*
 Copyright (C) 2007 Apple Inc.  All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY APPLE COMPUTER, INC. ``AS IS'' AND ANY
 EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
*/

function o0(o1) {
    o2.o3("console").o4 = o1 + "ms";
    if (o5.o6) {
        o6.o7(o1);
    }
}

var o8 = new Date();

/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var o10 = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var o11  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var o12   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function o13(o14){return o15(o16(o17(o14),o14.length * o12));}
function o19(o14){return o20(o16(o17(o14),o14.length * o12));}
function o21(o14){return o22(o16(o17(o14),o14.length * o12));}
function o23(key, o25){ return o15(o26(key, o25));}
function o27(key, o25){ return o20(o26(key, o25));}
function o28(key, o25){ return o22(o26(key, o25));}

/*
 * Perform a simple self-test to see if the VM is working
 */
function o29()
{
  return o13("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function o16(o30, o31)
{
  /* append padding */
  o30[o31 >> 5] |= 0x80 << (24 - o31 % 32);
  o30[((o31 + 64 >> 9) << 4) + 15] = o31;

  var o32 = Array(80);
  var o34 =  1732584193;
  var o35 = -271733879;
  var o36 = -1732584194;
  var o37 =  271733878;
  var o38 = -1009589776;

  for(var o39 = 0; o39 < o30.length; o39 += 16)
  {
    var o40 = o34;
    var o41 = o35;
    var o42 = o36;
    var o43 = o37;
    var o44 = o38;

    for(var o45 = 0; o45 < 80; o45++)
    {
      if(o45 < 16) o32[o45] = o30[o39 + o45];
      else o32[o45] = o46(o32[o45-3] ^ o32[o45-8] ^ o32[o45-14] ^ o32[o45-16], 1);
      var o47 = o48(o48(o46(o34, 5), o49(o45, o35, o36, o37)),
                       o48(o48(o38, o32[o45]), o50(o45)));
      o38 = o37;
      o37 = o36;
      o36 = o46(o35, 30);
      o35 = o34;
      o34 = o47;
    }

    o34 = o48(o34, o40);
    o35 = o48(o35, o41);
    o36 = o48(o36, o42);
    o37 = o48(o37, o43);
    o38 = o48(o38, o44);
  }
  return Array(o34, o35, o36, o37, o38);

}

/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
function o49(o47, o35, o36, o37)
{
  if(o47 < 20) return (o35 & o36) | ((~o35) & o37);
  if(o47 < 40) return o35 ^ o36 ^ o37;
  if(o47 < 60) return (o35 & o36) | (o35 & o37) | (o36 & o37);
  return o35 ^ o36 ^ o37;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function o50(o47)
{
  return (o47 < 20) ?  1518500249 : (o47 < 40) ?  1859775393 :
         (o47 < 60) ? -1894007588 : -899497514;
}

/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
function o26(key, o25)
{
  var o51 = o17(key);
  if(o51.length > 16) o51 = o16(o51, key.length * o12);

  var o52 = Array(16), o53 = Array(16);
  for(var o39 = 0; o39 < 16; o39++)
  {
    o52[o39] = o51[o39] ^ 0x36363636;
    o53[o39] = o51[o39] ^ 0x5C5C5C5C;
  }

  var o54 = o16(o52.concat(o17(o25)), 512 + o25.length * o12);
  return o16(o53.concat(o54), 512 + 160);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function o48(o30, o56)
{
  var o57 = (o30 & 0xFFFF) + (o56 & 0xFFFF);
  var o58 = (o30 >> 16) + (o56 >> 16) + (o57 >> 16);
  return (o58 << 16) | (o57 & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function o46(o59, o60)
{
  return (o59 << o60) | (o59 >>> (32 - o60));
}

/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function o17(o61)
{
  var o62 = Array();
  var o63 = (1 << o12) - 1;
  for(var o39 = 0; o39 < o61.length * o12; o39 += o12)
    o62[o39>>5] |= (o61.charCodeAt(o39 / o12) & o63) << (32 - o12 - o39%32);
  return o62;
}

/*
 * Convert an array of big-endian words to a string
 */
function o22(o62)
{
  var o61 = "";
  var o63 = (1 << o12) - 1;
  for(var o39 = 0; o39 < o62.length * 32; o39 += o12)
    o61 += String.fromCharCode((o62[o39>>5] >>> (32 - o12 - o39%32)) & o63);
  return o61;
}

/*
 * Convert an array of big-endian words to a hex string.
 */
function o15(o67)
{
  var o68 = o10 ? "0123456789ABCDEF" : "0123456789abcdef";
  var o61 = "";
  for(var o39 = 0; o39 < o67.length * 4; o39++)
  {
    o61 += o68.charAt((o67[o39>>2] >> ((3 - o39%4)*8+4)) & 0xF) +
           o68.charAt((o67[o39>>2] >> ((3 - o39%4)*8  )) & 0xF);
  }
  return o61;
}

/*
 * Convert an array of big-endian words to a base-64 string
 */
function o20(o67)
{
  var o70 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var o61 = "";
  for(var o39 = 0; o39 < o67.length * 4; o39 += 3)
  {
    var o71 = (((o67[o39   >> 2] >> 8 * (3 -  o39   %4)) & 0xFF) << 16)
                | (((o67[o39+1 >> 2] >> 8 * (3 - (o39+1)%4)) & 0xFF) << 8 )
                |  ((o67[o39+2 >> 2] >> 8 * (3 - (o39+2)%4)) & 0xFF);
    for(var o45 = 0; o45 < 4; o45++)
    {
      if(o39 * 8 + o45 * 6 > o67.length * 32) o61 += o11;
      else o61 += o70.charAt((o71 >> 6*(3-o45)) & 0x3F);
    }
  }
  return o61;
}


var o72 = "Two households, both alike in dignity,\n\
In fair Verona, where we lay our scene,\n\
From ancient grudge break to new mutiny,\n\
Where civil blood makes civil hands unclean.\n\
From forth the fatal loins of these two foes\n\
A pair of star-cross'd lovers take their life;\n\
Whole misadventured piteous overthrows\n\
Do with their death bury their parents' strife.\n\
The fearful passage of their death-mark'd love,\n\
And the continuance of their parents' rage,\n\
Which, but their children's end, nought could remove,\n\
Is now the two hours' traffic of our stage;\n\
The which if you with patient ears attend,\n\
What here shall miss, our toil shall strive to mend.";

for (var o39 = 0; o39 <4; o39++) {
    o72 += o72;
}

var o73 = o13(o72);

var o74 = "2524d264def74cce2498bf112bedf00e6c0b796d";
if (o73 != o74)
    throw "ERROR: bad result: expected " + o74 + " but got " + o73;


var o75 = new Date() - o8;

o76.o77("### TIME:", o75, "ms");