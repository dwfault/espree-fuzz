//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new ArrayBuffer(33554432);
var o2 = (function(stdlib, o4, o5) { 'use asm';
  var o6 = new stdlib.Uint8Array(o5);
  function o8()
  {
    var o9 = 0;
    (o6[33554431]) = o9;
    return 0;
  }
  return o8; })(this, {}, o0)

o2();
o2();

var o0 = new ArrayBuffer(65536);
var o2 = (function(stdlib, o4, o5) { 'use asm';
  var o6 = new stdlib.Uint8Array(o5);
  function o8(o10, o11)
  {
    o10 = +o10;
    o11 = o11|0;
    var o9 = 0;
    o9 = 524288;
    (o6[o9 >> 0]) = o9;
    return ;
  }
  return o8; })(this, {}, o0)

o2();
o2();

o12.o13("Passed");