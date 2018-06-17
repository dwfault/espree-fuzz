//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o0() {
    var o1 = {
        name: "Restricted properties of class with 'caller' static method",
        o20: function () {
            var o3 = class o23 {
                static caller() { try {
return 42;
}catch(e){} }
            };

            try {
o7.o11(o3.hasOwnProperty('caller'), "Class does has own property 'caller'")
}catch(e){}
            try {
o7.o14(o3.hasOwnProperty('arguments'), "Class does not report that it has own property 'arguments'")
}catch(e){}

            try {
o7.o9('{"writable":true,"enumerable":false,"configurable":true}', JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'caller')), "Class does not have 'caller' own property")
}catch(e){}
            try {
o7.o9(undefined, JSON.stringify(Object.getOwnPropertyDescriptor(o3, 'arguments')), "Class does not have 'arguments' own property");
}catch(e){}
            try {
o7.o9('["caller","length","name","prototype"]', JSON.stringify(Object.getOwnPropertyNames(o3).sort()), "Class does not have 'caller' and 'arguments' own properties");
}catch(e){}

            try {
o7.o9(42, o3.caller(), "Accessing the 'caller' property is not restricted");
}catch(e){}
            try {
o7.o16(function() { try {
o3.arguments;
}catch(e){} }, o17, "Class throws on access to 'arguments' property", "'arguments', 'callee' and 'caller' are restricted function properties and cannot be accessed in this context");
}catch(e){}
        }
    };
    var o845 = this.o568 + this.o538;

    var o4 = o1092 = o1123 >>> 3;

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
    var o1 = this;
    try {
try { o1("BLEND_DST_RGB"); } catch(e) {}
}catch(e){}
    var o2 = o1.o2("### SCORE: " + (100 * o0 / o10));


    var o4 = new Proxy(o2, {
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print('getOwnPropertyDescriptor on proxy2 : ' + o3.toString());
}catch(e){}
            try {
return Object.e(target, o3);
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

var o52 = { value: 2, writable: false }

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
