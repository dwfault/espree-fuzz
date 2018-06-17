//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("Testing final type constructor with SimpleDictionaryTypeHandler:");
}catch(e){}

var o2 = function(o3) {
    try {
o0.o1(o3.o4(this.o383 |= 0x2));
}catch(e){}
}

var o598 = ((o421.o148 & 0x0100) == 0x0100)

function o136() {
    // Let's create the first (singleton) instance of LargeObject...
    var o137 = new o5(function() { try {
return "function on the first object";
}catch(e){} });
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
return "function on the second object";
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