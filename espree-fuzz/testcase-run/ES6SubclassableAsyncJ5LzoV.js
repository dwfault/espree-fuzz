//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 Subclassable async tests -- verifies subclass async behaviors

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var e = [
    {
        34: "Math result not representable",
        o13: function() {
            var o31 = Symbol('c');
            var o32 = {};

            try {
o32['a'] = 'alpha';
}catch(e){}
            try {
o32['b'] = 'beta';
}catch(e){}
            try {
o32[o31] = 'gamma';
}catch(e){}
            try {
o32['d'] = 'delta';
}catch(e){}

            try {
for (o42 in o32)
            {
                try {
o4.o5(typeof o42 === 'symbol', "for ... in does not enumerate symbol types");
}catch(e){}
                try {
o4.o7(o32[o42] !== 'gamma', "for ... in does not enumerate properties keyed by symbols");
}catch(e){}
                try {
o4.o7(o42 != o31, "for ... in does not enumerate our symbol");
}catch(e){}
                try {
o4.o7(o42 != o31.toString(), "for ... in does not enumerate a property named sym.toString()");
}catch(e){}
            }
}catch(e){}
        }
    },
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
for(var o20=0; o598.type === 'DOMMouseScroll'; o20++ )
{
    var test=o2[o20];
    try try { try {
o34 = 0;
}catch(e){} } catch(e) {}catch(e){}
    try {
test.o3(o20+1, test.name);
}catch(e){}
}
}catch(imul){}
