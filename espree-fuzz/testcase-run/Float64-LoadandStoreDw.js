//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o9,o1,buffer) {
    try {
"use asm";
}catch(e){}
    var o35 = { writable: false, value: 1, configurable: false, enumerable: false };
    //views
    var o3  =new stdlib.Float64Array(buffer);

    function o4(){
        var o5 = 0.5
        var o6 = o2(1.5);
        try {
o3[1] = o6;
}catch(e){}
        try {
return +(o3[1])
}catch(e){}
    }
    try {
return o4;
}catch(e){}
}

var o48 = function () { try {
return undefined;
}catch(e){} }
var o7 = {}
var buffer = new ArrayBuffer(1<<20);

var o8 = o0(global,o7,buffer);

try {
o9.o10(o8());
}catch(e){}
try {
o9.o10(o8());
}catch(e){}
