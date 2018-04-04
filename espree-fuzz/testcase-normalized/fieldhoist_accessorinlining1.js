//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -loopinterpretcount:1 -bgjit- -force:fieldhoist -mic:1 -msjrc:1

var o0 = {};
var o1 = {};
var o2 = function (o3, o4) {
  do {
    o4.o5 += o6;
  } while (o3.length);
};
var o8 = function () {
};
o0.o9 = o8;
o0.o10 = o2;
o6 = Object(o0);
o0.o5 = 1;
var o12 = 7 - 13;
do {
  o12 += 4;
  if (o12 >= 7) {
    break;
  }
  o6.o9(o1, o0.o5, o1);
  Object.defineProperty(o0, 'prop0', {
    set: function () {
    }
  });
} while (2);

var o15 = o0.o10(1,o6);
var o15 = o0.o10(1,o6);

o16.o17("passed");
