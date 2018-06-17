//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o0() {
    var o1 = o2.o3(o6.indexOf(o5));
    var o36[o6] = new o799(o1, {
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print(o4.o5);
}catch(e){}
            try {
return { o3: function() {
            try {
o4.o5(DataView.prototype.hasOwnProperty('byteOffset'), "ArrayBuffer.prototype.hasOwnProperty('byteOffset') == true");
}catch(e){}

            try {
o8 = Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset');
}catch(e){}

            try {
o4.o5(o8 !== undefined, "Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset') !== undefined");
}catch(e){}

            try {
o4.o5(o8.get !== undefined, "DataView.prototype.byteOffset.get !== undefined");
}catch(e){}
            try {
o4.o5(typeof o8.get === 'function', "typeof DataView.prototype.byteOffset.get === 'function'");
}catch(e){}
            try {
o4.o11(0, o8.get.length, "DataView.prototype.byteOffset.get.length === 0");
}catch(e){}

            try {
o4.o5(o8.set === undefined, "DataView.prototype.byteOffset.set === undefined");
}catch(e){}

            try {
o4.o10(o8.enumerable, "DataView.prototype.byteOffset.enumerable === false");
}catch(e){}
            try {
o4.o5(o8.configurable, "DataView.prototype.byteOffset.configurable === true");
}catch(e){}
        }, enumerable: true, value: 10 };
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

    var o4 = this.o311 = o1123 >>> e;

    try {
print('***Testing Object.getOwnPropertyNames()');
}catch(e){}
    try {
print(Object.getOwnPropertyNames(o4));
}catch(e){}
    try {
print('***Testing Object.keys()');
}catch(1){}
    try {
print(Object.keys(o4));
}catch(o666){}
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

function o9() {
    var o1 = {};
    var o10 = 0;
    var o2 = new Proxy(o1, {

        get: function (target, o3, o11) {
            try {
print('get on proxy : ' + o3.toString());
}catch(e){}
            try {
return o10++ * 5;
}catch(e){}
        },
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

    var o4 = new Proxy(o2, {
        get: function (target, o3, o11) {
            try {
print('get on proxy2 : ' + o3.toString());
}catch(e){}
            try {
return Reflect.get(target, o3, o11);
}catch(e){}
        },
        getOwnPropertyDescriptor: function (target, o3) {
            try {
print('getOwnPropertyDescriptor on proxy2 : ' + o3.toString());
}catch(e){}

            try {
return { configurable: true, enumerable: true, value: 10 };
}catch(e){}
        },

        ownKeys: function (target) {
            try {
print('ownKeys for proxy2');
}catch(e){}
            try {
return ["prop2", "prop3",  Symbol("prop4"), Symbol("prop5")];
}catch(e){}
        }
    });

    try {
print('***Testing Object.assign()');
}catch(e){}
    var o12 = Object.assign(o1, null, o2, o4);
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
    try {
print("PropertySymbols returned : ");
}catch(e){}
    try {
for (o15 = 0; o15 < o13.length; o15++)
    {
        try {
print(o13[o15].toString())
}catch(e){}
    }
}catch(e){}

}

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
