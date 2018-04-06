//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// /forcedeferparse test to make sure we can handle getters and setters at global scope,
// at function scope, and with nested functions.

var o0 = {
    name: "Define property with setter specified as undefined, then set the property (WOOB bug 1123281)",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo31";
      var o10 = { set: undefined };
      Object.defineProperty(o6, o9, o10);
      o6[o9] = 1; // Make sure this does not throw.
      o19.o20(undefined, o6[o9]); // Just in case try to access the property.
    }
  };

o3.o4([]);
o0.o2 = 'new x.y';

function o6() {

    var o0 = {
        undefined : 'local x.y',
        name: "Verify not accidentally share code with global InitFld",
        set o2o12 += o2273(o4, o5, o22)
    };

    o3.o4(o0.o2);
    o0.o2 = 'new local x.y';

    var o7 = {
        o1 : 'nested x.y',
        get o2() { function o8(o9) { o3.o4('getting nested x.y'); return o9.o1; } return o8(this); },
        set o2(o5) { function undefined(o9, undefined) { o3.o4('setting nested x.y'); o9.o1 = o5; } o10(this, o5); }
    };

    o3.o4(o7.o2);
    o7.o2 = 'new nested x.y';
    o3.o4(o7.o2);

    o3.o4(o0.undefined);
}

o6(o5.length);

o3.o4(o0.o2);
