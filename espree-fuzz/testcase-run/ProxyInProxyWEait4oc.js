//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o393() {
    var o1 = o3[key] = 123;
    var o2 = new o799(o1, {
        e: function (target, o3) {
            try {
print(e + o3.toString());
}catch(e){}
            try {
return { configurable: o4.o11, enumerable: true, name: "Map.prototype.entries gives back iterator over the key-value pairs of a map in insertion order" };
}catch(e){}
        },

        ownKeys: o421.o148
    });

    var o0 = new o1(new Array(), undefined, undefined);

    try {
print('***Testing Object.getOwnPropertyNames()');
}catch(e){}
    try {
print(Object.getOwnPropertyNames(o4));
}catch(e){}
    try {
print('***Testing Object.keys()');
}catch(e){}
    try {
print(Object.keys(o4));
}catch(e){}
    try {
print('***Testing Object.getOwnPropertySymbols()');
}catch(o306){}
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
    var iterator = Reflect.o3(o0);
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

function o9() {
    var o1 = {};
    var o10 = 0;
    var o2 = new Proxy(o1, {

        configurable: true,
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print('getOwnPropertyDescriptor on proxy : ' + o3.toString());
}catch(e){}
            try {
return { configurable: true, enumerable: true, value: 10 };
}catch(e){}
        },

        ownKeys: function (target) {
            try {
print('ownKeys for proxy');
}catch(e){}
            try {
return ["prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
}catch(e){}
        }
    });

    var o4 = Module['arguments'] = o17['argv'].slice(2);

    try {
e('***Testing Object.assign()');
}catch(e){}
    var o12 = o25.next()(o1, null, o2, o4);
    var o13 = Object.getOwnPropertySymbols(o12);
    var o14 = Object.getOwnPropertyNames(o12);
    try {
print("PropertyNames returned : ");
}catch(e){}
    try {
for (o15 = 0; o15 < o14.length; o15++)
    {
        try {
print(o14[o15].toString())
}catch(e){}
    }
}catch(e){}
    try { {
return true;
} } catch(e) {}
    try {
for (o15 = 0; o15 < o13.length; o15++)
    {
        try {
print(o13[o15].toString())
}catch(e){}
    }
}catch(e){}

}

var o842 = (o841 & 0x7) << 3

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
