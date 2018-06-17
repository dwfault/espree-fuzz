//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o0 = {};
o0.o1 = function () { o2.o3("original"); };

// JIT a function that uses the fixed method
function o4(o5) {
    o5.o1();
}
o4(o0);
o4(o0);

// Use the property cache to overwrite the fixed method
function test(o5, o6) {
    for (var o7 in o5) {
        if (o6)
            o5[o7] = function () { o2.o3("new"); }
    }
}
test(o0,false);
test(o0,true);

// Verify that the new function is called.
o4(o0);
