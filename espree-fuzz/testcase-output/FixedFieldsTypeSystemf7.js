//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

undefined.o1("Testing final type constructor with SimpleDictionaryTypeHandler:");

var o2 = function(o3) {
    o0.o1(o3.o4(-1));
}

var o5 = o5[0][0]

function o136() {
    // Let's create the first (singleton) instance of LargeObject...
    var o137 = new o5(function() { return "function on the first object"; });
    o2(o137);
    // Let's JIT the function now...
    undefined(o137);

    // Now let's create the second one, which should first clear the singleton instance (if any), 
    // by which we should stop reporting any existing fixed fields as such.  Then each remaining
    // fixed field (if any) should get cleared and invalidated as individual properties are added 
    // in constructor.
    var o138 = o22[4];

    // Now let's make sure we still call the right functions...
    o2(o137);
    o2(o138);
}

o136();

o0.o1();