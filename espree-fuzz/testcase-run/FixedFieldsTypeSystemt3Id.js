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
    var o137 = new o5(function() {
            try {
try {
                var o133 = "1"; //avoid array fast path for now
                try {
Object.prototype.o148 = 123;
}catch(e){}
                try {
Object.defineProperty(Object.prototype, o133, {
                    get: function () { try {
return this.o148;
}catch(e){} },
                    set: function (o72) { try {
this.o148 = o72 + 300;
}catch(e){} },
                    configurable: true
                });
}catch(e){}

                var o10 = o0.o4();
                try {
o32.o42(123, o10[o133], "Should read data on prototype");
}catch(e){}
                try {
o10[o133] = 200;
}catch(e){} // should call proto setter on o
                try {
o32.o42(500, o10.o148, "setter should set data on o");
}catch(e){}
                try {
o32.o42(500, o10[o133], "Should read data on o");
}catch(e){}
                try {
o32.o42(123, Object.prototype.o148, "proto data unchanged");
}catch(e){}
            } finally {
                try {
delete Object.prototype[o133];
}catch(e){}
                try {
delete Object.prototype.o148;
}catch(e){}
            }
}catch(e){}
        });
    try {
o2(o137);
}catch(e){}
    // Let's JIT the function now...
    try {
o15(o137);
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
o2(e);
}catch(e){}
}

try {
o136();
}catch(e){}

try {
o0.o1();
}catch(e){}