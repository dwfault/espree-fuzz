//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1) {
  if (!(o1 == 0)) {
    return o1.toFixed();
  }
}
o3.o4 = function (o1) {
  print(o6(o1.toString()));
};
function o6(o1) {
  return o1.replace(/[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/g, function () {
    return o0(parseFloat());
  });
}
o3.o4(0);
o3.o4(0);