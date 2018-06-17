//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

let o332 = 0;

try {
Object.seal(this);
}catch(e){}
try {
try {
try {
Object.defineProperty(this, 'x', {value:'20', configurable: true });
}catch(e){}
}
catch(o1) {
    try {
o2.o3(1 + o1);
}catch(e){}
}
}catch(e){}
try {
Math.imul(o0);
}catch(Object){}
try {
o19.o1020.o3(this.o0);
}catch(e){}
try {
o2.o3(Object.isSealed(this));
}catch(e){}

