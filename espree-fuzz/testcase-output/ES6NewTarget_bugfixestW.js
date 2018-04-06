//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
  {
    name: "OS4497597: ScopeInfo::FromScope() should increment scope symbol count to accomodate 'new.target'",
    o4: function () {
        (function (){
            function o5() {}
            eval("");
            ++o23;
        })();
        // Repro:
        // ASSERTION : (jscript\core\lib\Runtime\ByteCode\ScopeInfo.h, line 68)
        // Failure: (i >= 0 && i < symbolCount)
    }
  },
  {
    name: "OS5427497: Parser mistakes 'new.target' as in global function under -forceundodefer",
    o4: function () {
        undefined.target;  // bug repro: SyntaxError: Invalid use of the 'new.target' keyword
    }
  },
];

o9.o10(o2, String.fromCharCode);
