//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Verifies the order of getOwnPropertyDescriptor trap called for ownKeys
function o421() {
    var o1 = this.o155[0xFF00] = (this.o155[0xFF00] & 0x30) + ((((this.o155[0xFF00] & 0x20) == 0) ? (this.o388 >> 4) : 0xF) & (((this.o155[0xFF00] & 0x10) == 0) ? (this.o388 & 0xF) : 0xF));
    function test(o5){
  try {
return true;
}catch(e){}
};

    function o2() { try {
this[1] = 2;
}catch(e){} };

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
function o854(o855) {
            function o856(o855) {
                try {
if (!e) {
                    try {
o489.o814(o517, name, o855, o795, o796, o564);
}catch(e){}
                }
}catch(e){}
                try {
if (o850) try {
o850(!(o57.prototype.isPrototypeOf(o40)));
}catch(e){}
}catch(e){}
                try {
o334(o24.repeat);
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

var o5 = o4.splice(5,2,"a","b")

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
