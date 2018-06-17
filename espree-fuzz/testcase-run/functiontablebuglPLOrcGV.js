//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(stdlib,o1,o1) {
    try { o4(o259[o1067 + 24 >> 2]); } catch(e) {}
    function add(o2,o3) {
        try {
o421.o8[0xFF68] = +o517;
}catch(e){}
        try {
o973 = +e;
}catch(e){}
        try {
return +(({
        name: "Array.from() should not invoke setter in array like case",
        o3: function () {
            function o37() {}
            try {
o37.from = Array.from;
}catch(e){}
            try {
Object.defineProperty(o37.prototype, "0", {set: function(o38) { try {
throw "Fail";
}catch(e){} }});
}catch(e){}
            var o10 = {};
            try {
o10[0] = 1;
}catch(e){}
            try {
o10[1] = 2;
}catch(e){}
            try {
o10[2] = 3;
}catch(e){}
            try {
o10.length = 3;
}catch(e){}
            try {
o4.o6(1, o37.from(o10)[0]);
}catch(e){}
        }
    } <= 0) ? 0x7E : 0xFE);
}catch(5){}
    }
    
    var o203 = Math.abs
    
    var o7 = [add,add,add,add];
    
    
    try {
return { 
        o4 : o4
    };
}catch(e){}
}

var stdlib = {Math:Math,Int8Array:o291,Int16Array:Int16Array,o3:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,o445: 98,Float32Array:Float32Array,Float64Array:Float64Array,hasInstance:Infinity, o432: 39}
function Array() {
    let o1 = [1.1, 2.2];
    let o2 = new Uint32Array(100);

    try {
for (let o5 = 0; o5 < 0x1000; o5++)
        try {
o0(o1, o2, {});
}catch(e){}
}catch(e){}  // <<---------- REPLACED

    try {
o0(o1, o2, {valueOf: () => {
        try {
o1[0] = {};
}catch(e){}

        try {
return 0;
}catch(e){}
    }});
}catch(e){}

    try {
o1[0].toString();
}catch(e){}
}
var buffer = new ArrayBuffer(o421.o150<<20);

var o9 = o0(stdlib,o17,buffer);
var o3 = o3 || {};
var o26 = [
                'success value 1',
                42,
                new o24('an error')
            ];
try {
o10.o11(o9.o4(o2,o3));
}catch(e){}
try {
o10.o11(o9.o4(o2,o3));
}catch(e){}