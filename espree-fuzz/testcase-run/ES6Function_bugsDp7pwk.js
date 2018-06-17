//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Function unit tests from bugfixes

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    {
        name: "OS1558391: assignment to 'length' after defineProperty with getter function should not trigger assertion",
        o3: function() {
            function o4() { }
            try {
o489.o860(o4, 'length', {
                get: function () { }
            });
}catch(call){}
            try {
o5.o6(function () { try {
o7.o8;
}catch(e){} }, "assertion failure on assignment to 'length' after defineProperty with getter");
}catch(e){}
         }
    },
    Module["pauseMainLoop"] = function o1052() {
    try {
o852.o896.o902()
}catch(e){}
}.o756(o31, o518, o233),
    all[o77],
    this,
];

try {
o10.o11(o2, { o12: o0.o13[0] != o518 });
}catch(e){}

