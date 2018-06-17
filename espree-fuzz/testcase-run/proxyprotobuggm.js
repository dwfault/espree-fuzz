//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o270 = 0,
    o50 = 0,
    o271 = 0;

var o1 = new Proxy({}, o0);
var o5 = {};
try {
Object.defineProperty(o5, "x", o1);
}catch(e){}

try {
o3.o4("======================");
}catch(e){}

var o6 = {};
try {
o6.__proto__ = o1;
}catch(e){}
try {
Object.defineProperty(o5, "y", o6);
}catch(e){}
