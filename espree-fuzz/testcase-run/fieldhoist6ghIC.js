//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -force:fieldhoist -prejit
try {
(function(){
  var o0 = 0;
  try {
o1:
  try {
o2:
  try {
do {
    try {
o1++;
}catch(e){}
    try {
o3 <<= ((o4 = (1 ? 1 : o5.o6)) + 1);
}catch(e){}
    var o7 = 0;
    try {
do {
      try {
o7++;
}catch(e){}
      try {
() => { try {
o22();
}catch(e){} };
}catch(e){}
    } while ((1) && o421 < 3)
}catch(e){}
  } while (o421.o390[o421.o148](o421, o421.o148) & 0x7F)
}catch(e){}
}catch(e){}
}catch(e){}
})({
      name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
      o25: function () {
        var o10 = o0.o4(Number.isSafeInteger);
        var o51 = "foo11";
        var o826 = 1024 * 1024;
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        try {
o52 = { enumerable: true };
}catch(e){} // change enumerable to make sure that descriptor is different from current.
        try {
Object.defineProperty(o10, o51, o52);
}catch(e){}
        var o35 = { writable: false, value: 0, configurable: true, enumerable: true };
        try {
o32.o42(o35, Object.getOwnPropertyDescriptor(o10, o51), "wrong value of getOwnPropertyDescriptor");
}catch(e){}
      }
    });
}catch(String){}
