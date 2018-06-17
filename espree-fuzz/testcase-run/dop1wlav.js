//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o337 = 0;

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
    try { {} } catch(e) {}
}
}catch(e){}
try {
o2.o3(o0);
}catch(e){}
try {
o2.o3(this.o0);
}catch(e){}
try {
o2.o3(Object.isSealed(this));
}catch(e){}

