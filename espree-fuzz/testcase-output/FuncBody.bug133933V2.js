//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
  return o1658(o4, o5, o17);
}

function o30(o31, o32) {
    // no op.
    o31;o32;
}

function o33() {
  var o34 = o0();
  for( var undefined in o34 ) {
    var o36 = o34[o35];
    for( var o37 in o36 ) {
        o30(o37, o36[o37]);
    }
  }
}

o33(o458.o168 & 0xFF);
