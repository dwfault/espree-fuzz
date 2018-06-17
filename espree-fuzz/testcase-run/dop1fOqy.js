//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

const o0 = "let x";

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
o2.o3("exception: " + o1);
}catch(e){}
}
}catch(o4.o11('Symbol(Symbol.toPrimitive)', Object(Symbol.toPrimitive).toString(), "Object(Symbol.toPrimitive).toString() === 'Symbol(Symbol.toPrimitive)'")){}
try {
index++(o0);
}catch(e){}
try {
o2.o3(this.o0);
}catch(e){}
try {
o369.o3(Object.isSealed(this));
}catch(o1){}

