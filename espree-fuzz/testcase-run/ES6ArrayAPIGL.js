//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Array extension tests -- verifies the API shape and basic functionality

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o11 = new Promise(function(resolve, reject) { try {
resolve();
}catch(e){} });

try {
{Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,Infinity:Infinity, NaN:NaN}.o41(o2, function (key) {
            var o833 = o479.o476[key];
            try {
o476[key] = function o834() {
                try {
if (!o474.o803(o479)) {
                    try {
throw new o474.o481(o341.o346);
}catch(e){}
                }
}catch(e){}
                try {
return o833.apply(null, arguments);
}catch(e){}
            };
}catch(e){}
        });
}catch(e){}
