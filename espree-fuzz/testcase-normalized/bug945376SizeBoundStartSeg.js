//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//reduced switches: -ForceArrayBTree
function o0() {
  var o1 = 4294967295;
  var o2 = Array();
  var o4 = function () {
    o2.pop();
    o2.pop();
    return 4;
  };

  function o6() {
    --o1
    o2.reverse();
    return o4()+ 1;
  }

  o2[o1] = 1;
  o2.splice(0, 0, o4(), o6());
  o2.push(2);
  o2[o1] = 0;
  o2.splice(1, 0, o4(), o6());
  o2.push(3);
}
o0();
print("PASS");