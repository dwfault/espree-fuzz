//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");



o86.o87(o2, { o88: o0.o89[0] != "summary" });

// Bug 516429 at global scope
class o19 {};
o19 = null; // No error

// Bug 257621 at global scope
o8.o37(function () { eval('new (class {})();'); }, "Parenthesized class expressions can be new'd");
