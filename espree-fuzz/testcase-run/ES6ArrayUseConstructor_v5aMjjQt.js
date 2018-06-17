//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Disabling ES6 Array builtins using this['constructor'] property to construct their return values

try { {} } catch(e) {}try { {} } catch(e) {}

var o2 = Object.defineProperty(o37.prototype, "0", {set: function(o38) { try {
throw "Fail";
}catch(e){} }});

try {
o11.o12(o2, { o13: o0.o14[0] != "summary" });
}catch(e){}
