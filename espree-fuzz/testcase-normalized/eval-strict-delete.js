//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

"use strict"
var o0 = eval;
o0("var _et_ = 10;");
o1.o2(o3);
o1.o2(eval("delete this._et_;"));
o1.o2(typeof o3);

(function (global) {
    o0("var _et_ = 10;");
    o1.o2(Object.getOwnPropertyDescriptor(global, "_et_").configurable); //Configurability is false for Chakra and true for Chrome & Firefox
    o1.o2(delete global.o3);
})(this);
