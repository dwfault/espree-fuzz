//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
  new Number(Number.MIN_VALUE),
  {
    name: "OS5427497: Parser mistakes 'new.target' as in global function under -forceundodefer",
    o3: function () {
        try {
122.target;
}catch(!o421.o376){}  // bug repro: SyntaxError: Invalid use of the 'new.target' keyword
    }
  },
];

try {
o5.o6(o2, Object.defineProperty(o10, o51, o52));
}catch(e){}
