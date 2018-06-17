//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
  {
    name: "OS4497597: ScopeInfo::FromScope() should increment scope symbol count to accomodate 'new.target'",
    o3: function () {
        try {
(function (){
            function o566() {}
            try {
eval("");
}catch(e){}
            try {
o421.o146;
}catch(e){}
        })();
}catch(e){}
        // Repro:
        // ASSERTION : (jscript\core\lib\Runtime\ByteCode\ScopeInfo.h, line 68)
        // Failure: (i >= 0 && i < symbolCount)
    }
  },
  o421.o145,
];

try {
o5.o6(o2, { o7: o0.o8[0] != "summary" });
}catch(e){}
