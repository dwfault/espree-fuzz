//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Species Built-In APIs tests -- verifies the shape and basic behavior of the built-in [@@species] property

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

function o0() {
    try {
o1.o2("globalFixedFunction1: original");
}catch(e){}
};

try {
o11.o12(o2, { o13: o0.o14[0] != "summary" });
}catch(e){}
