//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
try { {} } catch(e) {}try { o4[Symbol.isConcatSpreadable] = NaN; } catch(e) {}
}catch(getter){}

var o1064 = 0

var o51 = "1"

function o136() {
    // Let's create the first (singleton) instance of LargeObject...
    var o137 = new o5(function() { try {
return "function on the first object";
}catch(o360){} });
    try {
o2(o137);
}catch(e){}
    // Let's JIT the function now...
    try {
o2(o137);
}catch(e){}

    // Now let's create the second one, which should first clear the singleton instance (if any), 
    // by which we should stop reporting any existing fixed fields as such.  Then each remaining
    // fixed field (if any) should get cleared and invalidated as individual properties are added 
    // in constructor.
    var o138 = new o5(function() { try {
return o2;
}catch(e){} });

    // Now let's make sure we still call the right functions...
    try {
o2(o137);
}catch(e){}
    try {
o2(o138);
}catch(e){}
}

try {
o136();
}catch(e){}

try {
o0.o1();
}catch(e){}