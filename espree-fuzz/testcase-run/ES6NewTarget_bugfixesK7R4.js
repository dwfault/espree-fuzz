//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
  o48.o140 = function (o85) {
    try {
return o1057['stackAlloc'](o85)
}catch(e){}
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
o5.o6(o2, { o85: o760 });
}catch(e){}
