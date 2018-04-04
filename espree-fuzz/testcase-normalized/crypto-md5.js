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
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
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
function o13(o14){ return o15(o16(o17(o14), o14.length * o12));}
function o19(o14){ return o20(o16(o17(o14), o14.length * o12));}
function o21(o14){ return o22(o16(o17(o14), o14.length * o12));}
function o23(key, o25) { return o15(o26(key, o25)); }
function o27(key, o25) { return o20(o26(key, o25)); }
function o28(key, o25) { return o22(o26(key, o25)); }

/*
 * Perform a simple self-test to see if the VM is working
 */
function o29()
{
  return o13("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

/*
 * Calculate the MD5 of an array of little-endian words, and a bit length
 */
function o16(o30, o31)
{
  /* append padding */
  o30[o31 >> 5] |= 0x80 << ((o31) % 32);
  o30[(((o31 + 64) >>> 9) << 4) + 14] = o31;

  var o32 =  1732584193;
  var o33 = -271733879;
  var o34 = -1732584194;
  var o35 =  271733878;

  for(var o36 = 0; o36 < o30.length; o36 += 16)
  {
    var o37 = o32;
    var o38 = o33;
    var o39 = o34;
    var o40 = o35;

    o32 = o41(o32, o33, o34, o35, o30[o36+ 0], 7 , -680876936);
    o35 = o41(o35, o32, o33, o34, o30[o36+ 1], 12, -389564586);
    o34 = o41(o34, o35, o32, o33, o30[o36+ 2], 17,  606105819);
    o33 = o41(o33, o34, o35, o32, o30[o36+ 3], 22, -1044525330);
    o32 = o41(o32, o33, o34, o35, o30[o36+ 4], 7 , -176418897);
    o35 = o41(o35, o32, o33, o34, o30[o36+ 5], 12,  1200080426);
    o34 = o41(o34, o35, o32, o33, o30[o36+ 6], 17, -1473231341);
    o33 = o41(o33, o34, o35, o32, o30[o36+ 7], 22, -45705983);
    o32 = o41(o32, o33, o34, o35, o30[o36+ 8], 7 ,  1770035416);
    o35 = o41(o35, o32, o33, o34, o30[o36+ 9], 12, -1958414417);
    o34 = o41(o34, o35, o32, o33, o30[o36+10], 17, -42063);
    o33 = o41(o33, o34, o35, o32, o30[o36+11], 22, -1990404162);
    o32 = o41(o32, o33, o34, o35, o30[o36+12], 7 ,  1804603682);
    o35 = o41(o35, o32, o33, o34, o30[o36+13], 12, -40341101);
    o34 = o41(o34, o35, o32, o33, o30[o36+14], 17, -1502002290);
    o33 = o41(o33, o34, o35, o32, o30[o36+15], 22,  1236535329);

    o32 = o42(o32, o33, o34, o35, o30[o36+ 1], 5 , -165796510);
    o35 = o42(o35, o32, o33, o34, o30[o36+ 6], 9 , -1069501632);
    o34 = o42(o34, o35, o32, o33, o30[o36+11], 14,  643717713);
    o33 = o42(o33, o34, o35, o32, o30[o36+ 0], 20, -373897302);
    o32 = o42(o32, o33, o34, o35, o30[o36+ 5], 5 , -701558691);
    o35 = o42(o35, o32, o33, o34, o30[o36+10], 9 ,  38016083);
    o34 = o42(o34, o35, o32, o33, o30[o36+15], 14, -660478335);
    o33 = o42(o33, o34, o35, o32, o30[o36+ 4], 20, -405537848);
    o32 = o42(o32, o33, o34, o35, o30[o36+ 9], 5 ,  568446438);
    o35 = o42(o35, o32, o33, o34, o30[o36+14], 9 , -1019803690);
    o34 = o42(o34, o35, o32, o33, o30[o36+ 3], 14, -187363961);
    o33 = o42(o33, o34, o35, o32, o30[o36+ 8], 20,  1163531501);
    o32 = o42(o32, o33, o34, o35, o30[o36+13], 5 , -1444681467);
    o35 = o42(o35, o32, o33, o34, o30[o36+ 2], 9 , -51403784);
    o34 = o42(o34, o35, o32, o33, o30[o36+ 7], 14,  1735328473);
    o33 = o42(o33, o34, o35, o32, o30[o36+12], 20, -1926607734);

    o32 = o43(o32, o33, o34, o35, o30[o36+ 5], 4 , -378558);
    o35 = o43(o35, o32, o33, o34, o30[o36+ 8], 11, -2022574463);
    o34 = o43(o34, o35, o32, o33, o30[o36+11], 16,  1839030562);
    o33 = o43(o33, o34, o35, o32, o30[o36+14], 23, -35309556);
    o32 = o43(o32, o33, o34, o35, o30[o36+ 1], 4 , -1530992060);
    o35 = o43(o35, o32, o33, o34, o30[o36+ 4], 11,  1272893353);
    o34 = o43(o34, o35, o32, o33, o30[o36+ 7], 16, -155497632);
    o33 = o43(o33, o34, o35, o32, o30[o36+10], 23, -1094730640);
    o32 = o43(o32, o33, o34, o35, o30[o36+13], 4 ,  681279174);
    o35 = o43(o35, o32, o33, o34, o30[o36+ 0], 11, -358537222);
    o34 = o43(o34, o35, o32, o33, o30[o36+ 3], 16, -722521979);
    o33 = o43(o33, o34, o35, o32, o30[o36+ 6], 23,  76029189);
    o32 = o43(o32, o33, o34, o35, o30[o36+ 9], 4 , -640364487);
    o35 = o43(o35, o32, o33, o34, o30[o36+12], 11, -421815835);
    o34 = o43(o34, o35, o32, o33, o30[o36+15], 16,  530742520);
    o33 = o43(o33, o34, o35, o32, o30[o36+ 2], 23, -995338651);

    o32 = o44(o32, o33, o34, o35, o30[o36+ 0], 6 , -198630844);
    o35 = o44(o35, o32, o33, o34, o30[o36+ 7], 10,  1126891415);
    o34 = o44(o34, o35, o32, o33, o30[o36+14], 15, -1416354905);
    o33 = o44(o33, o34, o35, o32, o30[o36+ 5], 21, -57434055);
    o32 = o44(o32, o33, o34, o35, o30[o36+12], 6 ,  1700485571);
    o35 = o44(o35, o32, o33, o34, o30[o36+ 3], 10, -1894986606);
    o34 = o44(o34, o35, o32, o33, o30[o36+10], 15, -1051523);
    o33 = o44(o33, o34, o35, o32, o30[o36+ 1], 21, -2054922799);
    o32 = o44(o32, o33, o34, o35, o30[o36+ 8], 6 ,  1873313359);
    o35 = o44(o35, o32, o33, o34, o30[o36+15], 10, -30611744);
    o34 = o44(o34, o35, o32, o33, o30[o36+ 6], 15, -1560198380);
    o33 = o44(o33, o34, o35, o32, o30[o36+13], 21,  1309151649);
    o32 = o44(o32, o33, o34, o35, o30[o36+ 4], 6 , -145523070);
    o35 = o44(o35, o32, o33, o34, o30[o36+11], 10, -1120210379);
    o34 = o44(o34, o35, o32, o33, o30[o36+ 2], 15,  718787259);
    o33 = o44(o33, o34, o35, o32, o30[o36+ 9], 21, -343485551);

    o32 = o45(o32, o37);
    o33 = o45(o33, o38);
    o34 = o45(o34, o39);
    o35 = o45(o35, o40);
  }
  return Array(o32, o33, o34, o35);

}

/*
 * These functions implement the four basic operations the algorithm uses.
 */
function o47(o48, o32, o33, o30, o14, o49)
{
  return o45(o50(o45(o45(o32, o48), o45(o30, o49)), o14),o33);
}
function o41(o32, o33, o34, o35, o30, o14, o49)
{
  return o47((o33 & o34) | ((~o33) & o35), o32, o33, o30, o14, o49);
}
function o42(o32, o33, o34, o35, o30, o14, o49)
{
  return o47((o33 & o35) | (o34 & (~o35)), o32, o33, o30, o14, o49);
}
function o43(o32, o33, o34, o35, o30, o14, o49)
{
  return o47(o33 ^ o34 ^ o35, o32, o33, o30, o14, o49);
}
function o44(o32, o33, o34, o35, o30, o14, o49)
{
  return o47(o34 ^ (o33 | (~o35)), o32, o33, o30, o14, o49);
}

/*
 * Calculate the HMAC-MD5, of a key and some data
 */
function o26(key, o25)
{
  var o51 = o17(key);
  if(o51.length > 16) o51 = o16(o51, key.length * o12);

  var o52 = Array(16), o53 = Array(16);
  for(var o36 = 0; o36 < 16; o36++)
  {
    o52[o36] = o51[o36] ^ 0x36363636;
    o53[o36] = o51[o36] ^ 0x5C5C5C5C;
  }

  var o54 = o16(o52.concat(o17(o25)), 512 + o25.length * o12);
  return o16(o53.concat(o54), 512 + 128);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function o45(o30, o56)
{
  var o57 = (o30 & 0xFFFF) + (o56 & 0xFFFF);
  var o58 = (o30 >> 16) + (o56 >> 16) + (o57 >> 16);
  return (o58 << 16) | (o57 & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function o50(o59, o60)
{
  return (o59 << o60) | (o59 >>> (32 - o60));
}

/*
 * Convert a string to an array of little-endian words
 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
 */
function o17(o61)
{
  var o62 = Array();
  var o63 = (1 << o12) - 1;
  for(var o36 = 0; o36 < o61.length * o12; o36 += o12)
    o62[o36>>5] |= (o61.charCodeAt(o36 / o12) & o63) << (o36%32);
  return o62;
}

/*
 * Convert an array of little-endian words to a string
 */
function o22(o62)
{
  var o61 = "";
  var o63 = (1 << o12) - 1;
  for(var o36 = 0; o36 < o62.length * 32; o36 += o12)
    o61 += String.fromCharCode((o62[o36>>5] >>> (o36 % 32)) & o63);
  return o61;
}

/*
 * Convert an array of little-endian words to a hex string.
 */
function o15(o67)
{
  var o68 = o10 ? "0123456789ABCDEF" : "0123456789abcdef";
  var o61 = "";
  for(var o36 = 0; o36 < o67.length * 4; o36++)
  {
    o61 += o68.charAt((o67[o36>>2] >> ((o36%4)*8+4)) & 0xF) +
           o68.charAt((o67[o36>>2] >> ((o36%4)*8  )) & 0xF);
  }
  return o61;
}

/*
 * Convert an array of little-endian words to a base-64 string
 */
function o20(o67)
{
  var o70 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var o61 = "";
  for(var o36 = 0; o36 < o67.length * 4; o36 += 3)
  {
    var o71 = (((o67[o36   >> 2] >> 8 * ( o36   %4)) & 0xFF) << 16)
                | (((o67[o36+1 >> 2] >> 8 * ((o36+1)%4)) & 0xFF) << 8 )
                |  ((o67[o36+2 >> 2] >> 8 * ((o36+2)%4)) & 0xFF);
    for(var o72 = 0; o72 < 4; o72++)
    {
      if(o36 * 8 + o72 * 6 > o67.length * 32) o61 += o11;
      else o61 += o70.charAt((o71 >> 6*(3-o72)) & 0x3F);
    }
  }
  return o61;
}

var o73 = "Rebellious subjects, enemies to peace,\n\
Profaners of this neighbour-stained steel,--\n\
Will they not hear? What, ho! you men, you beasts,\n\
That quench the fire of your pernicious rage\n\
With purple fountains issuing from your veins,\n\
On pain of torture, from those bloody hands\n\
Throw your mistemper'd weapons to the ground,\n\
And hear the sentence of your moved prince.\n\
Three civil brawls, bred of an airy word,\n\
By thee, old Capulet, and Montague,\n\
Have thrice disturb'd the quiet of our streets,\n\
And made Verona's ancient citizens\n\
Cast by their grave beseeming ornaments,\n\
To wield old partisans, in hands as old,\n\
Canker'd with peace, to part your canker'd hate:\n\
If ever you disturb our streets again,\n\
Your lives shall pay the forfeit of the peace.\n\
For this time, all the rest depart away:\n\
You Capulet; shall go along with me:\n\
And, Montague, come you this afternoon,\n\
To know our further pleasure in this case,\n\
To old Free-town, our common judgment-place.\n\
Once more, on pain of death, all men depart."

for (var o36 = 0; o36 <4; o36++) {
    o73 += o73;
}

var o74 = o13(o73);

var o75 = "a831e91e0f70eddcb70dc61c6f82f6cd";

if (o74 != o75)
    throw "ERROR: bad result: expected " + o75 + " but got " + o74;

var o76 = new Date() - o8;
    
o77.o78("### TIME:", o76, "ms");