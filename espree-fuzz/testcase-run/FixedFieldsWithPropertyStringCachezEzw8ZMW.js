//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Run with jc -maxinterpretcount:1

// Create a path type with fixed method 'o.inspect'.
var o81 = true;
try {
o2(
                function () { // enabled: throw
                    function test(value) {
                        var o12 = { __proto__: value };

                        try {
o13.o14(Object.prototype, Object.getPrototypeOf(o12));
}catch(e){}
                        try {
o13.o16(o12.hasOwnProperty("__proto__"));
}catch(e){}
                    }

                    try {
[undefined, 0, 123, Infinity, true, false, "string value"].forEach(function (value) {
                        try {
test(value);
}catch(e){}
                    });
}catch(e){}
                });
}catch(e){}

// JIT a function that uses the fixed method
var o582 = o421.o148 + o421.o150
try {
o4(o0);
}catch(o421){}
try {
o4(o0);
}catch(e){}

// Use the property cache to overwrite the fixed method
function test(o14, o6) {
    try {
for (var o656 = o605.o606(o635.o643(o517), o654) in o5) {
        try {
if (o6)
            try {
o5[o7] = function () { try {
o2.o3("new");
}catch(e){} }
}catch(e){}
}catch(e){}
    }
}catch(e){}
}
try {
test(o0,false);
}catch(e){}
try {
test(o0,true);
}catch(e){}

// Verify that the new function is called.
try {
o4(o0);
}catch(e){}
