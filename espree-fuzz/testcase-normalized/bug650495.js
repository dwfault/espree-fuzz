//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//switches: -maxinterpretcount:1
var o0 = 0;
o0++;
var o1 = {};
o1.o2 = function () {
  o1.o3 = 1 - o4;
  [].push('e = ' + (o4 | 0));
};
var o4 = 2;
Object.defineProperty(o1, 'prop0', {
  set: function (o9) {
    arguments; // this disables the argout optimization
    o11.o12(o9);
  }
});
for (var o13 =0;o13<3;o13++) {
  [
    {},
    o1
  ][o0].o2();
}
