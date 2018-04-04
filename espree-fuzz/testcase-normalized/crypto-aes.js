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

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/*
 * AES Cipher function: encrypt 'input' with Rijndael algorithm
 *
 *   takes   byte-array 'input' (16 bytes)
 *           2D byte-array key schedule 'w' (Nr+1 x Nb bytes)
 *
 *   applies Nr rounds (10/12/14) using key schedule w for 'add round key' stage
 *
 *   returns byte-array encrypted value (16 bytes)
 */
function o10(input, o12) {    // main Cipher function [§5.1]
  var o13 = 4;               // block size (in words): no of columns in state (fixed at 4 for AES)
  var o14 = o12.length/o13 - 1; // no of rounds: 10/12/14 for 128/192/256-bit keys

  var o16 = [[],[],[],[]];  // initialise 4xNb byte-array 'state' with input [§3.4]
  for (var o17=0; o17<4*o13; o17++) o16[o17%4][Math.floor(o17/4)] = input[o17];

  o16 = o20(o16, o12, 0, o13);

  for (var o21=1; o21<o14; o21++) {
    o16 = o22(o16, o13);
    o16 = o23(o16, o13);
    o16 = o24(o16, o13);
    o16 = o20(o16, o12, o21, o13);
  }

  o16 = o22(o16, o13);
  o16 = o23(o16, o13);
  o16 = o20(o16, o12, o14, o13);

  var o25 = new Array(4*o13);  // convert state to 1-d array before returning [§3.4]
  for (var o17=0; o17<4*o13; o17++) o25[o17] = o16[o17%4][Math.floor(o17/4)];
  return o25;
}


function o22(o27, o13) {    // apply SBox to state S [§5.1.1]
  for (var o28=0; o28<4; o28++) {
    for (var o29=0; o29<o13; o29++) o27[o28][o29] = o30[o27[o28][o29]];
  }
  return o27;
}


function o23(o27, o13) {    // shift row r of state S left by r bytes [§5.1.2]
  var o31 = new Array(4);
  for (var o28=1; o28<4; o28++) {
    for (var o29=0; o29<4; o29++) o31[o29] = o27[o28][(o29+o28)%o13];  // shift into temp copy
    for (var o29=0; o29<4; o29++) o27[o28][o29] = o31[o29];         // and copy back
  }          // note that this will work for Nb=4,5,6, but not 7,8 (always 4 for AES):
  return o27;  // see fp.gladman.plus.com/cryptography_technology/rijndael/aes.spec.311.pdf 
}


function o24(o27, o13) {   // combine bytes of each col of state S [§5.1.3]
  for (var o29=0; o29<4; o29++) {
    var o32 = new Array(4);  // 'a' is a copy of the current column from 's'
    var o33 = new Array(4);  // 'b' is a•{02} in GF(2^8)
    for (var o17=0; o17<4; o17++) {
      o32[o17] = o27[o17][o29];
      o33[o17] = o27[o17][o29]&0x80 ? o27[o17][o29]<<1 ^ 0x011b : o27[o17][o29]<<1;
    }
    // a[n] ^ b[n] is a•{03} in GF(2^8)
    o27[0][o29] = o33[0] ^ o32[1] ^ o33[1] ^ o32[2] ^ o32[3]; // 2*a0 + 3*a1 + a2 + a3
    o27[1][o29] = o32[0] ^ o33[1] ^ o32[2] ^ o33[2] ^ o32[3]; // a0 * 2*a1 + 3*a2 + a3
    o27[2][o29] = o32[0] ^ o32[1] ^ o33[2] ^ o32[3] ^ o33[3]; // a0 + a1 + 2*a2 + 3*a3
    o27[3][o29] = o32[0] ^ o33[0] ^ o32[1] ^ o32[2] ^ o33[3]; // 3*a0 + a1 + a2 + 2*a3
  }
  return o27;
}


function o20(o16, o12, o34, o13) {  // xor Round Key into state S [§5.1.4]
  for (var o28=0; o28<4; o28++) {
    for (var o29=0; o29<o13; o29++) o16[o28][o29] ^= o12[o34*4+o29][o28];
  }
  return o16;
}


function o35(key) {  // generate Key Schedule (byte-array Nr+1 x Nb) from Key [§5.2]
  var o13 = 4;            // block size (in words): no of columns in state (fixed at 4 for AES)
  var o37 = key.length/4  // key length (in words): 4/6/8 for 128/192/256-bit keys
  var o14 = o37 + 6;       // no of rounds: 10/12/14 for 128/192/256-bit keys

  var o12 = new Array(o13*(o14+1));
  var o38 = new Array(4);

  for (var o17=0; o17<o37; o17++) {
    var o28 = [key[4*o17], key[4*o17+1], key[4*o17+2], key[4*o17+3]];
    o12[o17] = o28;
  }

  for (var o17=o37; o17<(o13*(o14+1)); o17++) {
    o12[o17] = new Array(4);
    for (var o31=0; o31<4; o31++) o38[o31] = o12[o17-1][o31];
    if (o17 % o37 == 0) {
      o38 = o39(o40(o38));
      for (var o31=0; o31<4; o31++) o38[o31] ^= o41[o17/o37][o31];
    } else if (o37 > 6 && o17%o37 == 4) {
      o38 = o39(o38);
    }
    for (var o31=0; o31<4; o31++) o12[o17][o31] = o12[o17-o37][o31] ^ o38[o31];
  }

  return o12;
}

function o39(o12) {    // apply SBox to 4-byte word w
  for (var o17=0; o17<4; o17++) o12[o17] = o30[o12[o17]];
  return o12;
}

function o40(o12) {    // rotate 4-byte word w left by one byte
  o12[4] = o12[0];
  for (var o17=0; o17<4; o17++) o12[o17] = o12[o17+1];
  return o12;
}


// Sbox is pre-computed multiplicative inverse in GF(2^8) used in SubBytes and KeyExpansion [§5.1.1]
var o30 =  [0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
             0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
             0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
             0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
             0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
             0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
             0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
             0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
             0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
             0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
             0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
             0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
             0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
             0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
             0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
             0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16];

// Rcon is Round Constant used for the Key Expansion [1st col is 2^(r-1) in GF(2^8)] [§5.2]
var o41 = [ [0x00, 0x00, 0x00, 0x00],
             [0x01, 0x00, 0x00, 0x00],
             [0x02, 0x00, 0x00, 0x00],
             [0x04, 0x00, 0x00, 0x00],
             [0x08, 0x00, 0x00, 0x00],
             [0x10, 0x00, 0x00, 0x00],
             [0x20, 0x00, 0x00, 0x00],
             [0x40, 0x00, 0x00, 0x00],
             [0x80, 0x00, 0x00, 0x00],
             [0x1b, 0x00, 0x00, 0x00],
             [0x36, 0x00, 0x00, 0x00] ]; 


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/* 
 * Use AES to encrypt 'plaintext' with 'password' using 'nBits' key, in 'Counter' mode of operation
 *                           - see http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf
 *   for each block
 *   - outputblock = cipher(counter, key)
 *   - cipherblock = plaintext xor outputblock
 */
function o42(o43, o44, o45) {
  if (!(o45==128 || o45==192 || o45==256)) return '';  // standard allows 128/192/256 bit keys

  // for this example script, generate the key by applying Cipher to 1st 16/24/32 chars of password; 
  // for real-world applications, a more secure approach would be to hash the password e.g. with SHA-1
  var o46 = o45/8;  // no bytes in key
  var o47 = new Array(o46);
  for (var o17=0; o17<o46; o17++) o47[o17] = o44.charCodeAt(o17) & 0xff;
  var key = o10(o47, o35(o47));
  key = key.concat(key.slice(0, o46-16));  // key is now 16/24/32 bytes long

  // initialise counter block (NIST SP800-38A §B.2): millisecond time-stamp for nonce in 1st 8 bytes,
  // block counter in 2nd 8 bytes
  var o51 = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
  var o52 = new Array(o51);  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
  var o53 = (new Date()).o54();  // milliseconds since 1-Jan-1970

  // encode nonce in two stages to cater for JavaScript 32-bit limit on bitwise ops
  for (var o17=0; o17<4; o17++) o52[o17] = (o53 >>> o17*8) & 0xff;
  for (var o17=0; o17<4; o17++) o52[o17+4] = (o53/0x100000000 >>> o17*8) & 0xff; 

  // generate key schedule - an expansion of the key into distinct Key Rounds for each round
  var o55 = o35(key);

  var o56 = Math.ceil(o43.length/o51);
  var o58 = new Array(o56);  // ciphertext as array of strings
  
  for (var o33=0; o33<o56; o33++) {
    // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
    // again done in two stages for 32-bit ops
    for (var o29=0; o29<4; o29++) o52[15-o29] = (o33 >>> o29*8) & 0xff;
    for (var o29=0; o29<4; o29++) o52[15-o29-4] = (o33/0x100000000 >>> o29*8)

    var o59 = o10(o52, o55);  // -- encrypt counter block --
    
    // calculate length of final block:
    var o60 = o33<o56-1 ? o51 : (o43.length-1)%o51+1;

    var o61 = '';
    for (var o17=0; o17<o60; o17++) {  // -- xor plaintext with ciphered counter byte-by-byte --
      var o62 = o43.charCodeAt(o33*o51+o17);
      var o63 = o62 ^ o59[o17];
      o61 += String.fromCharCode(o63);
    }
    // ct is now ciphertext for this block

    o58[o33] = o66(o61);  // escape troublesome characters in ciphertext
  }

  // convert the nonce to a string to go on the front of the ciphertext
  var o67 = '';
  for (var o17=0; o17<8; o17++) o67 += String.fromCharCode(o52[o17]);
  o67 = o66(o67);

  // use '-' to separate blocks, use Array.join to concatenate arrays of strings for efficiency
  return o67 + '-' + o58.join('-');
}


/* 
 * Use AES to decrypt 'ciphertext' with 'password' using 'nBits' key, in Counter mode of operation
 *
 *   for each block
 *   - outputblock = cipher(counter, key)
 *   - cipherblock = plaintext xor outputblock
 */
function o69(o58, o44, o45) {
  if (!(o45==128 || o45==192 || o45==256)) return '';  // standard allows 128/192/256 bit keys

  var o46 = o45/8;  // no bytes in key
  var o47 = new Array(o46);
  for (var o17=0; o17<o46; o17++) o47[o17] = o44.charCodeAt(o17) & 0xff;
  var o70 = o35(o47);
  var key = o10(o47, o70);
  key = key.concat(key.slice(0, o46-16));  // key is now 16/24/32 bytes long

  var o55 = o35(key);

  o58 = o58.split('-');  // split ciphertext into array of block-length strings 

  // recover nonce from 1st element of ciphertext
  var o51 = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
  var o52 = new Array(o51);
  var o67 = o72(o58[0]);
  for (var o17=0; o17<8; o17++) o52[o17] = o67.charCodeAt(o17);

  var o43 = new Array(o58.length-1);

  for (var o33=1; o33<o58.length; o33++) {
    // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
    for (var o29=0; o29<4; o29++) o52[15-o29] = ((o33-1) >>> o29*8) & 0xff;
    for (var o29=0; o29<4; o29++) o52[15-o29-4] = ((o33/0x100000000-1) >>> o29*8) & 0xff;

    var o59 = o10(o52, o55);  // encrypt counter block

    o58[o33] = o72(o58[o33]);

    var o73 = '';
    for (var o17=0; o17<o58[o33].length; o17++) {
      // -- xor plaintext with ciphered counter byte-by-byte --
      var o74 = o58[o33].charCodeAt(o17);
      var o62 = o74 ^ o59[o17];
      o73 += String.fromCharCode(o62);
    }
    // pt is now plaintext for this block

    o43[o33-1] = o73;  // b-1 'cos no initial nonce block in plaintext
  }

  return o43.join('');
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

function o66(o75) {  // escape control chars which might cause problems handling ciphertext
  return o75.replace(/[\n\0\n\t\n\v\n\f\n\r\n\xa0'"!-]/g, function(o29) { return '!' + o29.charCodeAt(0) + '!'; });
}  // \n\xa0 to cater for bug in Firefox; include '-' to leave it free for use as a block marker

function o72(o75) {  // unescape potentially problematic control characters
  return o75.replace(/!\n\d\n\d?\n\d?!/g, function(o29) { return String.fromCharCode(o29.slice(1,-1)); });
}
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/*
 * if escCtrlChars()/unescCtrlChars() still gives problems, use encodeBase64()/decodeBase64() instead
 */
var o77 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function o78(o75) {  // http://tools.ietf.org/html/rfc4648
   var o79, o80, o81, o82, o83, o84, o85, o86, o17=0, o87='';
   
   o75 = o88(o75);  // encode multi-byte chars into UTF-8 for byte-array

   do {  // pack three octets into four hexets
      o79 = o75.charCodeAt(o17++);
      o80 = o75.charCodeAt(o17++);
      o81 = o75.charCodeAt(o17++);
      
      o86 = o79<<16 | o80<<8 | o81;
      
      o82 = o86>>18 & 0x3f;
      o83 = o86>>12 & 0x3f;
      o84 = o86>>6 & 0x3f;
      o85 = o86 & 0x3f;
      
      // end of string? index to '=' in b64
      if (isNaN(o81)) o85 = 64;
      if (isNaN(o80)) o84 = 64;
      
      // use hexets to index into b64, and append result to encoded string
      o87 += o77.charAt(o82) + o77.charAt(o83) + o77.charAt(o84) + o77.charAt(o85);
   } while (o17 < o75.length);
   
   return o87;
}

function o91(o75) {
   var o79, o80, o81, o82, o83, o84, o85, o86, o17=0, o87='';

   do {  // unpack four hexets into three octets using index points in b64
      o82 = o77.indexOf(o75.charAt(o17++));
      o83 = o77.indexOf(o75.charAt(o17++));
      o84 = o77.indexOf(o75.charAt(o17++));
      o85 = o77.indexOf(o75.charAt(o17++));
      
      o86 = o82<<18 | o83<<12 | o84<<6 | o85;
      
      o79 = o86>>16 & 0xff;
      o80 = o86>>8 & 0xff;
      o81 = o86 & 0xff;
      
      if (o84 == 64)      o87 += String.fromCharCode(o79);
      else if (o85 == 64) o87 += String.fromCharCode(o79, o80);
      else               o87 += String.fromCharCode(o79, o80, o81);
   } while (o17 < o75.length);

   return o93(o87);  // decode UTF-8 byte-array back to Unicode
}

function o88(o75) {  // encode multi-byte string into utf-8 multiple single-byte characters 
  o75 = o75.replace(
      /[\u0080-\u07ff]/g,  // U+0080 - U+07FF = 2-byte chars
      function(o29) { 
        var o94 = o29.charCodeAt(0);
        return String.fromCharCode(0xc0 | o94>>6, 0x80 | o94&0x3f); }
    );
  o75 = o75.replace(
      /[\u0800-\uffff]/g,  // U+0800 - U+FFFF = 3-byte chars
      function(o29) { 
        var o94 = o29.charCodeAt(0); 
        return String.fromCharCode(0xe0 | o94>>12, 0x80 | o94>>6&0x3F, 0x80 | o94&0x3f); }
    );
  return o75;
}

function o93(o75) {  // decode utf-8 encoded string back into multi-byte characters
  o75 = o75.replace(
      /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
      function(o29) { 
        var o94 = (o29.charCodeAt(0)&0x1f)<<6 | o29.charCodeAt(1)&0x3f;
        return String.fromCharCode(o94); }
    );
  o75 = o75.replace(
      /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
      function(o29) { 
        var o94 = (o29.charCodeAt(0)&0x0f)<<12 | (o29.charCodeAt(1)&0x3f<<6) | o29.charCodeAt(2)&0x3f; 
        return String.fromCharCode(o94); }
    );
  return o75;
}


function o95(o33) {  // convert byte array to hex string for displaying test vectors
  var o27 = '';
  for (var o17=0; o17<o33.length; o17++) o27 += o33[o17].toString(16) + ' ';
  return o27;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */


var o97 = "ROMEO: But, soft! what light through yonder window breaks?\n\
It is the east, and Juliet is the sun.\n\
Arise, fair sun, and kill the envious moon,\n\
Who is already sick and pale with grief,\n\
That thou her maid art far more fair than she:\n\
Be not her maid, since she is envious;\n\
Her vestal livery is but sick and green\n\
And none but fools do wear it; cast it off.\n\
It is my lady, O, it is my love!\n\
O, that she knew she were!\n\
She speaks yet she says nothing: what of that?\n\
Her eye discourses; I will answer it.\n\
I am too bold, 'tis not to me she speaks:\n\
Two of the fairest stars in all the heaven,\n\
Having some business, do entreat her eyes\n\
To twinkle in their spheres till they return.\n\
What if her eyes were there, they in her head?\n\
The brightness of her cheek would shame those stars,\n\
As daylight doth a lamp; her eyes in heaven\n\
Would through the airy region stream so bright\n\
That birds would sing and think it were not night.\n\
See, how she leans her cheek upon her hand!\n\
O, that I were a glove upon that hand,\n\
That I might touch that cheek!\n\
JULIET: Ay me!\n\
ROMEO: She speaks:\n\
O, speak again, bright angel! for thou art\n\
As glorious to this night, being o'er my head\n\
As is a winged messenger of heaven\n\
Unto the white-upturned wondering eyes\n\
Of mortals that fall back to gaze on him\n\
When he bestrides the lazy-pacing clouds\n\
And sails upon the bosom of the air.";

var o44 = "O Romeo, Romeo! wherefore art thou Romeo?";

var o98 = o42(o97, o44, 256);
var o99 = o69(o98, o44, 256);

var o100 = new Date() - o8;

o101.o102("### TIME:", o100, "ms");