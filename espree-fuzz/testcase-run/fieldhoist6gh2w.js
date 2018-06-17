//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -force:fieldhoist -prejit
try {
(o1("addedNodes"))({
      name: "8.12.9.8: re-define property: descriptor is not empty, generic and is different from current",
      o25: function () {
        var o10 = o0.o4();
        var o51 = "foo11";
        var o52 = { value: 0, configurable: true };
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
