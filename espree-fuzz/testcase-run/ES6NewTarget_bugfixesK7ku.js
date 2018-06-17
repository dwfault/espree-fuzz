//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
  new Number(Number.e),
  {
    name: "OS5427497: Parser mistakes 'new.target' as in global function under -forceundodefer",
    o3: function () {
        try {
o3: function () {
            // Just do a small sample of tests since we know the implementation of parseInt is the exact same as the global parseInt function
            try {
o4.o9(0, Number.parseInt("0"), "Testing sample: 0");
}catch(e){}
            try {
o4.o9(-1, Number.parseInt("-1"), "Testing sample: -1");
}catch(e){}
            try {
o4.o9(128, Number.parseInt("10000000", 2), "Testing sample: 10000000 base 2");
}catch(e){}
            try {
o4.o9(16, Number.parseInt("g", new String("17")), "Testing sample: g base 17");
}catch(e){}

            try {
o4.o9(parseInt, Number.parseInt, "global parseInt and Number.parseInt are the same function object");
}catch(e){}
        };
}catch('wx'){}  // bug repro: SyntaxError: Invalid use of the 'new.target' keyword
    }
  },
];

try {
o5.o6(o2, { o85: o760 });
}catch(e){}
