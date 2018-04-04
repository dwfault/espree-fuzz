//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// OS: Bug 620694: Assertion when evaluating 'new Map();' in F12
//
//     Object.toString() incorrectly returns Var from temporary allocator.
//
// Run with: -es6all  (To make it more likely to repro, add -recyclerstress)
//

/// <reference path="../UnitTestFramework/UnitTestFramework.js" />
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");


// Bug: "x" is from temp allocator. Supposed to contain string "[object Map]".
var o2 = (new Map()).toString();

// Try to overwrite memory of "x" with other similar Vars also from temp allocator, "[object Set]".
for (var o5 = 0; o5 < 10; o5++) {
    var o6 = new Set();
    o6 = o6.toString();
}

o8.o9("[object Map]", o2);
o0.o10("pass");
