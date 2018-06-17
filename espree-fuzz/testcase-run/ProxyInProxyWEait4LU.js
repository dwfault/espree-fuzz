//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o393() {
    var o1 = o6.lastIndexOf("", -2);
    var o2 = new o799(o1, {
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print(o7.o9);
}catch(e){}
            try {
return { configurable: o4.e, enumerable: getPrototypeOf, name: "Map.prototype.entries gives back iterator over the key-value pairs of a map in insertion order" };
}catch(e){}
        },

        ownKeys: function (target) {
            try {
o1('ownKeys for proxy');
}catch(e){}
            try {
return ["prop0", "prop1", Symbol("prop2"), Symbol("prop5")];
}catch(e){}
        }
    });

    var o18 = (function() { try {
return arguments;
}catch(e){} })(o3, o4, o9);

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

var o788 = 0xFE00

function o16() {
    try {
print("***Traps whose value is null are ignored");
}catch(e){}

    function o17(o18, o19, o1) {
        const o2 = new Proxy(o1, {
            [o18]: () => {
                try {
print(`"${o18}" called`);
}catch(e){}
                try {
return o19;
}catch(e){}
            }
        });
        try {
return new Proxy(o2, {
            [o18]: null
        });
}catch(e){}
    }

    try {
Object.getPrototypeOf(o17("getPrototypeOf", {}, {}));
}catch(e){}
    try {
Object.setPrototypeOf(o17("setPrototypeOf", true, {}), {});
}catch(e){}
    try {
Object.isExtensible(o17("isExtensible", true, {}));
}catch(e){}
    try {
Object.preventExtensions(o17("preventExtensions", false, {}));
}catch(e){}
    try {
Object.getOwnPropertyDescriptor(o17("getOwnPropertyDescriptor", undefined, {}));
}catch(e){}
    try {
Object.defineProperty(o17("defineProperty", true, {}), "prop", { value: 0 });
}catch(e){}
    try {
"prop" in o17("has", true, {});
}catch(e){}
    try {
o17("get", 0, {}).o20;
}catch(e){}
    try {
o17("set", true, {}).o20 = 0;
}catch(e){}
    try {
delete o17("deleteProperty", true, {}).o20;
}catch(e){}
    try {
Object.keys(o17("ownKeys", [], {}));
}catch(e){}
    try {
o17("apply", 0, function () {})();
}catch(e){}
    try {
new (o17("construct", {}, function () {}));
}catch(e){}
}

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
