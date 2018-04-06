//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = Array(o4.o5);
    var o3 = 1;
    function o4() {
        var o5 = 0;
        var o6 = Error(o5[0]);
        try {
            throw o6;
        } catch (o8) { }
        while (true) {
            function o9() {
                o10(o5.length);
            }
            o3 = o1;
            function o10() {
                o1[undefined] = undefined;
            }
            o10(o1);
            break;
        }
    }
    o4(o8 = 8);
    o11.o12(typeof o1[0]);
};
o0(function (o394) {
  //Generate a float32 typed array buffer:
  try {
    return new Float32Array(o394);
  }
  catch (o83) {
    return [];
  }
});
