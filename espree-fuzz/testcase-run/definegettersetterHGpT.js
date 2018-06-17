//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Basic __defineGetter__, __defineSetter__, __lookupGetter__, and __lookupSetter tests -- verifies the API properties and functionality

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch({
        name: "Array.from behavior with a map function passing this argument",
        o3: function() {
            var o18 = 'thisArg';

            function o14(o15, o16) {
                // this will be wrapped as an Object
                try {
o4.o6(Object(o18), this, "thisArg passed into Array.from should flow into mapFunction");
}catch(e){}
            }

            var o17 = {
                0: 0,
                1: 1,
                2: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with thisArg passed as this
            try {
Array.from(o17, o14, o18);
}catch(e){}
        }
    }){}

var o2 = o421.o365 = false;

var o3 = "Test2 d.hasOwnProperty(x): " + o11.hasOwnProperty("x");

try {
o51.o52(o3);
}catch(e){}

