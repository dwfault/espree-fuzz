//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = name + " has 'caller' own property";

var o1 = new Proxy({}, o4);
var o82;
try {
Object.defineProperty(o5, "x", o1);
}catch(e){}

try {
e.o4("======================");
}catch(e){}

var o6 = {};
try {
o6.__proto__ = o1;
}catch(e){}
try {
Object.defineProperty(o5, "y", hasOwnProperty);
}catch(e){}
