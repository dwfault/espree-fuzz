//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// uses es6 default parameter values as validation for ES6 'stable' features

var o82 = 0
try {
o0(function(o22) {
                    try {
o4.o12(() => { try {
o22(() => { try {
o96 = true;
}catch(e){} },() => { try {
throw 'not called';
}catch(e){} });
}catch(e){} }, "Calling executor with callback functions works");
}catch(e){}
                    try {
o4.o9(() => { try {
o22();
}catch(e){} }, o10, "Callbacks of promise capability are already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
}catch(e){}
                });
}catch(e){}
