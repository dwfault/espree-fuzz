//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function o1119(o247) {
        try {
function () {
            var o48 = function () { try {
return undefined;
}catch(e){} };
            var o49 = function (o13) { };

            function o46 () { }
            try {
Object.defineProperty(o46.prototype, "geta", { get: o48 });
}catch(e){}
            try {
Object.defineProperty(o46.prototype, "getb", { get: o48 });
}catch(e){}
            try {
Object.defineProperty(o46.prototype, "seta", { set: o49 });
}catch(e){}
            try {
Object.defineProperty(o46.prototype, "setb", { set: o49 });
}catch(e){}

            var o6 = new o46();
            try {
Object.defineProperty(o6, "geta", { set: o49, configurable: true, enumerable: true });
}catch(e){}
            try {
Object.defineProperty(o6, "getb", { value: 123, configurable: true, enumerable: true, writable: true });
}catch(e){}
            try {
Object.defineProperty(o6, "seta", { get: o48, configurable: true, enumerable: true });
}catch(e){}
            try {
Object.defineProperty(o6, "setb", { value: 123, configurable: true, enumerable: true, writable: true });
}catch(e){}

            try {
o0.o50(o6.__lookupGetter__("geta"));
}catch(e){}

            try {
o8.o9(o6.__lookupGetter__("geta") === undefined, "accessor property on o shadows accessor property on prototype but it is set-only so looking up a getter should return undefined");
}catch(e){}
            try {
o8.o9(o6.__lookupGetter__("getb") === o48, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return getfn");
}catch(e){}
            try {
o8.o9(o6.__lookupSetter__("seta") === undefined, "accessor property on o shadows accessor property on prototype but it is get-only so looking up a setter should return undefined");
}catch(e){}
            try {
o8.o9(o6.__lookupSetter__("setb") === o49, "data property on o shadows accessor property on prototype but __lookupGetter__ looks for the first accessor property, skipping all others, so should return setfn");
}catch(e){}
        } > 0x8;
}catch(e){}
        try {
o1074 = o247
}catch(e){}
    }
var o1071 = 0;
function o2() { try {
o842 | o848++;
}catch(e){} }try {
;
}catch(e){}
try {
try { {} } catch(e) {}
}catch(e){}
var o0 = new o2();
try {
this.o393;
}catch(e){}
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
var o0 = parse(true, 1, true)[0] + '&';
try {
o21 = o1;
}catch(e){}
try {
test(o0);
}catch(e){}
try {
o3.o4(o0[0]);
}catch(e){}
