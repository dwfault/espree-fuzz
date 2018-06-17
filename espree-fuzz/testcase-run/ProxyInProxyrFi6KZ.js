//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o0() {
    var o1 = 'float ' + o23 + ',' + o64;
    var o2 = new Proxy(o62, o488(buffer[o107 + o82]));

    var o4 = new Proxy(o421, o582 > 0xFF);

    try {
print('***Testing Object.getOwnPropertyNames()');
}catch(e){}
    try {
print((o19 >> 8) & 0xf(o4));
}catch(subarray)try { this.o452 = o142[index++]; } catch(e) {}
    try {
print('***Testing Object.keys()');
}catch(e){}
    try {
print(Object.keys(o4));
}catch(e){}
    try {
print('***Testing Object.getOwnPropertySymbols()');
}catch(e){}
    try {
print(Object.getOwnPropertySymbols(o4).length);
}catch(e){}

    try {
print('***Testing Object.freeze()');
}catch(e){}
    try {
try{
        try {
Object.freeze(o4);
}catch(e){}
        try {
print('Object.freeze should fail because underlying OwnPropertyKeys should fail since target becomes non-extensible');
}catch(e){}
    } catch (o5) {
        try {
if (!(o5 instanceof o6)) {
            try {
o7('incorrect instanceof Error' + o5);
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

// Verifies that we don't call GetPropertyDescriptor of target for Object.keys unnecessarily if we throw TypeERROR before
function o8() {
    var o1 = {};
    try {
Object.defineProperty(o1, "a", { value: 5, configurable: false });
}catch(e){}
    var o2 = new Proxy(o1, {
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print('getOwnPropertyDescriptor on proxy : ' + o3.toString());
}catch(e){}
            try {
return Object.getOwnPropertyDescriptor(target, o3);
}catch(e){}
        },

        ownKeys: function (target) {
            try {
print('ownKeys for proxy');
}catch(e){}
            try {
return ["a", "prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
}catch(e){}
        }
    });


    var o4 = new Proxy(o2, {
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print('getOwnPropertyDescriptor on proxy2 : ' + o3.toString());
}catch(e){}
            try {
return Object.getOwnPropertyDescriptor(target, o3);
}catch(e){}
        },

        ownKeys: function (target) {
            try {
print('ownKeys for proxy2');
}catch(e){}
            try {
return ["prop2", "prop3", Symbol("prop4"), Symbol("prop5")];
}catch(e){}
        }
    });

    try {
print('***Testing Object.keys()');
}catch(e){}
    try {
try{
        try {
print(Object.keys(o4));
}catch(e){}
        try {
print('Should throw TypeError because ownKeys doesnt return non-configurable key.');
}catch(e){}
    } catch (o5) {
        try {
if (!(o5 instanceof o6)) {
            try {
print('incorrect instanceof Error');
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

var index = 0

var o1137 = true

try {
o0();
}catch(e){}
try {
o8();
}catch(e){}
try {
o9();
}catch(e){}
try {
o16();
}catch(e){}
