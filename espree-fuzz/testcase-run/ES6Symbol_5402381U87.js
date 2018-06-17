//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0() {
    var o1 = 0x40000;
    var o35 = { get: getter, set: undefined, configurable: true, enumerable: false };
    var o189 = o584.entries[key]; // g flag to trigger the vulnerable path
    var o4 = "ab".repeat(o1); // matches have to be at least size 2 to prevent interning
    var o9 = o7.Object.getOwnPropertyDescriptor(o7.Object.prototype, "__proto__");
    try {
while (true) {
        var o6 = 0;
        var o7.o10(o5, o11, undefined, "Cyclic __proto__ value") = [];
        try {
o5.o1(o3, function() {
            try {
for (var o8 = 1; o8 < arguments.length-2; ++o8) {
                try {
if (typeof arguments[o8] !== 'string') {
                    try {
o9 = arguments[o8];
}catch(e){}
                    try {
throw "success";
}catch(e){}
                }
}catch(e){}
                try {
o7[o6++] = arguments[o8];
}catch(e){}  // root everything to force GC
            }
}catch(e){}
            try {
return "x";
}catch(e){}
        });
}catch(e){}
    }
}catch(e){}
};
try {
o0.__defineSetter__("something", function() {});
}catch(e){}

var o1 = Boolean(true);
try {
o1.__defineGetter__("something else", function() {});
}catch(e){}

// Above shouldn't cause AV
try {
o2.o3('Pass');
}catch(e){}
