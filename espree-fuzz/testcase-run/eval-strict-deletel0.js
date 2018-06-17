//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
test
}catch(e){}
var o18 = 0;
try {
e("var _et_ = 10;");
}catch(e){}
try {
o1.o2(o3);
}catch(e){}
try {
o1.o2(eval("delete this._et_;"));
}catch(e){}
try {
this.o2(typeof o3);
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
