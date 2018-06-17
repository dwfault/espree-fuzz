//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try { try {
o421.o670 = (o929 == 0x8) ? 7 : 15;
}catch(e){} } catch(e) {}try { {
o8[4294967294/2] = 2;
} } catch(e) {}

var o2 = [
  {
    name: "OS4497597: ScopeInfo::FromScope() should increment scope symbol count to accomodate 'new.target'",
    o3: function () {
        try {
(function (){
            function o4() {}
            try {
eval("");
}catch(e){}
            try {
() =>new.target;
}catch(e){}
        })();
}catch(e){}
        // Repro:
        // ASSERTION : (jscript\core\lib\Runtime\ByteCode\ScopeInfo.h, line 68)
        // Failure: (i >= 0 && i < symbolCount)
    }
  },
  {
    name: "OS5427497: Parser mistakes 'new.target' as in global function under -forceundodefer",
    o3: function () {
        try {
new.target;
}catch(e){}  // bug repro: SyntaxError: Invalid use of the 'new.target' keyword
    }
  },
];

try {
o5.o6(o2, { o7: o0.o8[0] != "summary" });
}catch(e){}
