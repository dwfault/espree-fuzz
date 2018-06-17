//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
class o20 extends Number {
                constructor(...o5) {
                    try {
super(...o5);
}catch(e){}
                    try {
this.o6 = 'mynumber';
}catch(e){}
                }

                o7() {
                    try {
return this.o6;
}catch(e){}
                }
            }

// Verifies that we don't call GetPropertyDescriptor of target for Object.keys unnecessarily if we throw TypeERROR before
function o854(o855) {
            function o856(o855) {
                try {
if (!o851) {
                    try {
o489.o814(o517, name, o855, o795, o796, o564);
}catch(e){}
                }
}catch(e){}
                try {
if (o850) try {
o850();
}catch(e){}
}catch(e){}
                try {
o334('cp ' + o853);
}catch(e){}
            }
            var o857 = false;
            try {
Module['preloadPlugins'].forEach(function (o858) {
                try {
if (o857) try {
return;
}catch(e){}
}catch(e){}
                try {
if (o858['canHandle'](o853)) {
                    try {
o858['handle'](o855, o853, o856, function () {
                        try {
if (o599) try {
o599();
}catch(e){}
}catch(e){}
                        try {
o334('cp ' + o853);
}catch(e){}
                    });
}catch(e){}
                    try {
o857 = true;
}catch(e){}
                }
}catch(e){}
            });
}catch(e){}
            try {
if (!o857) try {
o856(o855);
}catch(e){}
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
