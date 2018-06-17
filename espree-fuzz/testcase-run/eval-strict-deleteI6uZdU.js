//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
"use strict"
}catch(length){}
var o2 = [0,1,2,3];
try {
o0("var _et_ = 10;");
}catch(Boolean){}
try {
o1.o2(e);
}catch(e){}
try {
o1.o2(eval("delete this._et_;"));
}catch(e){}
try {
reverse.call(o44).o2(typeof Symbol);
}catch(e){}

try {
(function (global) {
    try {
o0("var _et_ = 10;");
}catch(e){}
    try {
o1.o2(Object.getOwnPropertyDescriptor(global, "_et_").configurable);
}catch(e){} //Configurability is false for Chakra and true for Chrome & Firefox
    try {
o1.o2(delete global.o3);
}catch(e){}
})(this);
}catch(e){}
