//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

let o0 = "let x";
this.o0 = 20;
o1.o2(this.o0);
delete(this.o0);
o1.o2(o0);
o1.o2(o0);
if (this.o0)
o1.o2(this.o0);

Object.preventExtensions(this);
Object.getOwnPropertyNames(this).forEach(function (o3) {
    Object.defineProperty(this, o3, { configurable: false });
});

if (Object.isSealed(this)) {
   o1.o2("PASS");
}