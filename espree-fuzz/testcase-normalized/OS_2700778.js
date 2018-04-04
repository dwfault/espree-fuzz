//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {};
var o1 = {};
var o2 = function () {
};
var o3 = function () {
  (function (o4, ...o5) {
    o4 = ~-1457942942;
    eval('');
  })();
};
o0.o7 = o3;
o1.o8 = o0.o7;
o9 = Object(o1);
do {
  var o11 = [o9];
  o11[0].o8();
  var o12 = [o9];
  var o13 = o12[0];
  o13.o8();
  o2(o0.o7());
} while (o0.o7());
o14.o15("PASS");