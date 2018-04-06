//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

let o0 = "let x";

Object.seal(this);
try {
Object.defineProperty(this, 'x', -1);
}
catch(o6) {
    o7.o8("exception: " + o6);
}
o7.o8(o0);
o7.o8(this.o0);
o7.o8(Object.isSealed(this));

