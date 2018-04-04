//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test field hoisting cases that should strip bailouts in the loop header.

// Field load hoisted from within the inner do-while should have bailout removed.
function o0() {
    var o1 = 1;
    var o2 = 0;
    while ((1) && o2 < 3) {
        o2++;
        var o3 = 1;
        for (var o4 = 0; o1.length < (1.1) && o4 < 3; o1.length++ + o4++) {
        }
        var o4 = 0;
        do {
            o4++;
            o6 = o7[(1) % 256];
        } while (((o3.length++)) && o4 < 3)
    }
}

// Field load hoisted from within the inner do-while should have BailOutExpectingObject,
// which should not clobber implicit call bit set by the load of (undefined) ui8.
function o8() {
    var o1 = 1;
    var o2 = 0;
    while ((1) && o2 < 3) {
        o2++;
        var o3 = {};
        for (var o4 = 0; o1.length < (1.1) && o4 < 3; o1.length++ + o4++) {
        }
        var o4 = 0;
        do {
            o4++;
            o6 = o9[(1) % 256];
            o3.o10;
        } while (((o3.length++)) && o4 < 3)
    }
}

try {
    o0();
}
catch(o11) {
    o12.o13(o11.o14);
}

try {
    o8();
}
catch(o15) {
    o12.o13(o15.o14);
}

(function(){
  var o16 = new Object();
  var o1 = new Object();
  (function(){
    var o2 = 0;
    do {
      o2++;
      o18 = ((o1.o19 * (o1.o20 -= -2147483648)) - (o16.o19++ ));
    } while((1.1) && o2 < 3)
  })();
})();
