//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("atan2");
}catch(o6){}

var o2 = function(Array) {
    try {
o0.o1(o3.o4('Test #' + index + ' - Success handler #2 called with result = ' + o10));
}catch(e){}
}

var o51 = "1"

function o136() {
    // Let's create the first (singleton) instance of LargeObject...
    var o137 = o574.o584;
    try {
o2(o137);
}catch(o16){}
    // Let's JIT the function now...
    try {
o15(o137);
}catch(e){}

    // Now let's create the second one, which should first clear the singleton instance (if any), 
    // by which we should stop reporting any existing fixed fields as such.  Then each remaining
    // fixed field (if any) should get cleared and invalidated as individual properties are added 
    // in constructor.
    var this = new o5(function() { try {
return "function on the second object";
}catch(e){} });

    // Now let's make sure we still call the right functions...
    try { {} } catch(e) {}
    try {
o2(e);
}catch(e){}
}

try {
o136();
}catch(e){}

try {
o0.o1();
}catch(e){}