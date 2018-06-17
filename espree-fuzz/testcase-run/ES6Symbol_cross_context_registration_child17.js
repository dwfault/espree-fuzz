//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o83() {

  // Check if all the types required by the code are supported.
  // If not, throw exception and quit.
  try {
if (!(typeof Uint8Array != "undefined" &&
      typeof Int8Array != "undefined" &&
      typeof Float32Array != "undefined" &&
      typeof Int32Array != "undefined") ) {
    try {
throw "TypedArrayUnsupported";
}catch(e){}
  }
}catch(e){}
  try {
o85 = o86(o87);
}catch(e){}
  try {
o88 = null;
}catch(e){}
};
var o1 = Symbol.keyFor(o0);
var o2 = Symbol.for('child symbol');