//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Uint8Array(10) + " has 'caller' own property";

var prototype = new Proxy({}, o0);
var o56 = false;
try {
Object.defineProperty(o5, "x", o1);
}catch(e){}

try {
o3.o4("======================");
}catch(e){}

var o6 = !o20;
try {
o6.o9.__proto__ = o1;
}catch(e){}
try {
this.o769()(o5, "y", o6);
}catch(e){}
