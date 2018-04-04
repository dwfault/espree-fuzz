//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Everything inside the loop except for the assignment to 'a' should get hoisted
function o0() {
    var o1;
    for(var o2 = 0; o2 < 1; ++o2)
        o1 = (0x40000000 | 0) % 3;
    return o1;
}
o3.o4("test0: " + o0());

// The '-f' bails out, and the Neg is hoisted outside the loop. The multiplication is not type-specialized, so 'f' is converted
// to var and that conversion is also hoisted outside the loop. The conversion to var happens after the bailout, so the value of
// the var sym for 'f' is not valid at the time of bailout. So, bailout should use the int sym for 'f' to restore its value.
function o5() {
    var o6 = 1;
    var o7 = (1 !== 0);
    o7 = o7 & 21037030;
    var o8;
    for(var o9 = 0; o6 < (o8 = (((-o7) ? (o7 * o10[(1) % 256]) : 1))) && o9 < 3; o6++ + o9++) {
    }
    return o8;
}
o3.o4("test1: " + o5());

// In 'o.p &= 1', 'o' is converted to var. 'o' was const-propped with '0' though, so an LdC_A_I4 is created and hoisted to the
// outer loop's landing pad. LdC_A_I4 should be considered a type-spec conversion here, so while making the var version of the
// sym live, it should also preserve the int version of the sym as live.
function o11() {
    for(var o2 = 0; o2 < 1; ++o2) {
        var o12 = 0;
        for(var o13 = 0; o13 < 1; ++o13)
            o12.o14 &= 1;
    }
}
o3.o4("test2: " + o11());

// When hoisting an invariant with a new dst, value type of the old dst should be copied over to the new dst.
function o15() {
  var o16 = function () {
    return '6' + '\xb5!%$' + 'caller';
  };
  var o17 = function () {
     return '6' + '\xb5!%$' + 'caller';
  };
  
  var o18 = Array();
  o16();
  for (var o20 = 0; o20 < 8; o20++) {
    o3.o4(o17());
  }
  o3.o4('subset_of_ary = ' + o18.slice());
}
o15();
