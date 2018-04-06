//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var undefined = o5[-1];

o8[o9](o2, { "0": { o6: 1 } });

// Bug 516429 at global scope
class o26 {};
o26 = null; // No error

// Bug 257621 at global scope
o10.o45(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be new'd");
