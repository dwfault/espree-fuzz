//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = false;
var o1 = false;
function o2() {
    try {
        for (var o3 in Object(Math.imul(1073741824, Object(Symbol())))) { }
    }
    catch (o8) {
        if (o8 instanceof o9) {
            if (o8.o10 === 'Number expected') {
                o0 = true;
            }
        }
    }
}

function o11() {
  o12 = new Uint8Array();
  try
  {
    o12[50341] = Symbol();
  }
  catch(o8)
  {
      if(o8 instanceof o9) {
          if(o8.o10 === 'Number expected') {
              o1 = true;
          }
      }
  }
}

o2();
o11();
o11();
o11();

o14.o15(o0 ? 'PASS' : 'FAIL');
o14.o15(o1 ? 'PASS' : 'FAIL');
