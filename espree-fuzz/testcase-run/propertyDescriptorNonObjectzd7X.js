//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = function(o22) {
                    try {
o4.o18(() => { try {
o22(undefined, () => {});
}catch(e){} }, "Calling executor with only a reject callback function works but Promise.resolve will throw");
}catch(e){}
                    try {
o4.o9(() => { try {
o22();
}catch(e){} }, o10, "Reject handler of promise capability is already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
}catch(e){}
                };

try {
o8.o9(o2, o421.o149);
}catch(e){}
