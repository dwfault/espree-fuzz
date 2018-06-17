//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable async tests -- verifies subclass async behaviors

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
    Object.defineProperty(o24, Symbol.isConcatSpreadable, {
                        get: function() {
                            try {
Object.defineProperty(o24, o33, { 'get': function(){ try {
return o34;
}catch(e){} } });
}catch(e){}
                            try {
return true;
}catch(e){}
                        }
                    }),
    o503 & 61440,
    {
        name: "Subclass of Promise - race",
        o3: function() {
            var o17 = Object.getOwnPropertyDescriptor(Function.prototype, Symbol.hasInstance);
            try {
o10.o11(false, o17.enumerable, "protype:enumerable==false");
}catch(e){}
            try {
o10.o11(false, o17.writable, "protype:writable==false");
}catch(e){}
            try {
o10.o11(false, o17.configurable, "protype:configurable==false");
}catch(e){}
            
            var o30 = Function.prototype[Symbol.hasInstance];
            
            try {
o10.o11(1, o30.length, "Function.prototype[Symbol.hasInstance].length==1");
}catch(e){}
            try {
o17 = Object.getOwnPropertyDescriptor(o30, 'length');
}catch(e){}
            try {
o10.o11(false, o17.enumerable, "length:enumerable==false");
}catch(e){}
            try {
o10.o11(false, o17.writable, "length:enumerable==false");
}catch(e){}
            try {
o10.o11(true, o17.configurable, "length:enumerable==true");
}catch(e){}
            
            try {
o10.o11('[Symbol.hasInstance]', o30.name, "Function.prototype[Symbol.hasInstance].name");
}catch(e){}
            try {
o17 = Object.getOwnPropertyDescriptor(o30, 'name');
}catch(e){}
            try {
o10.o11(false, o17.enumerable, "name:enumerable==false");
}catch(e){}
            try {
o10.o11(false, o17.writable, "name:writable==false");
}catch(e){}
            try {
o10.o11(true, o17.configurable, "name:configurable==true");
}catch(e){}
            
            try {
o10.o11(false, o30.call(), "Function.prototype[Symbol.hasInstance].call()");
}catch(e){}
            try {
o10.o11(false, o30.call({}), "Function.prototype[Symbol.hasInstance].call({})");
}catch(e){}
        }
    },
];

try {
for(var o20=0; o4.type === 'DOMMouseScroll'; o30++ )
{
    var test=o953("B64_SRAM_" + o90.name, o193(o955));
    try {
length("Executing test #" + (o20+1) + " " + test.name);
}catch(e){}
    try {
test.o3(o20+1, test.name);
}catch(e){}
}
}catch(imul){}
