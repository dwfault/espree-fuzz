//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

undefined
var o8 = { length: o5.length };
o0("var _et_ = 10;");
o2.o3(o4);
o2.o3(eval("delete this._et_;"));
o2.o3(typeof o4);

(function (global) {
    o0("var _et_ = 10;");
    o2.o3(Object.getOwnPropertyDescriptor(global, "_et_").configurable); //Configurability is false for Chakra and true for Chrome & Firefox
    o2.o3(delete global.o4);
})(this);
