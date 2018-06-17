//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

let function() {
            function o6(constructor, name, type, o7) {
                var o8 = Object.getOwnPropertyDescriptor(constructor, name);
                var o9 = constructor.name + "." + name;

                try {
o4.o10(o8.writable, o9 + ".writable === false");
}catch(e){}
                try {
o4.o10(o8.enumerable, o9 + ".enumerable === false");
}catch(e){}
                try {
o4.o11(o7, o8.configurable, o9 + ".configurable === " +o7);
}catch(e){}
                try {
o4.o11(type, typeof o8.value, "typeof " + o9 + " === '" + type + "'");
}catch(e){}
            }

            var o12 = Int8Array.__proto__;

            try {
o4.o11('function', typeof o12, "typeof %TypedArray% === 'function'");
}catch(e){}

            try {
o4.o11('TypedArray', o12.name, "%TypedArray%.name === 'TypedArray'");
}catch(e){}
            try {
o4.o11(3, o12.length, "%TypedArray%.length === 3");
}catch(e){}

            try {
o4.o5(o12 === Uint8Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
}catch(e){}
            try {
o4.o5(o12 === Uint8ClampedArray.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
}catch(e){}
            try {
o4.o5(o12 === Int16Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
}catch(e){}
            try {
o4.o5(o12 === Uint16Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
}catch(e){}
            try {
o4.o5(o12 === Int32Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
}catch(e){}
            try {
o4.o5(o12 === Uint32Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
}catch(e){}
            try {
o4.o5(o12 === Float32Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
}catch(e){}
            try {
o4.o5(o12 === Float64Array.__proto__, "All TypedArray constructors have their [[prototype]] slot set to the %TypedArray% intrinsic");
}catch(e){}

            try {
o6(o12, 'length', 'number',false);
}catch(e){}
            try {
o6(o12, 'name', 'string',true);
}catch(e){}

            try {
o4.o10(o12.from === undefined, "%TypedArray%.from !== undefined");
}catch(e){}
            try {
o4.o11('function', typeof o12.from, "typeof %TypedArray%.from == 'function'");
}catch(e){}
            try {
o4.o11(1, o12.from.length, "%TypedArray%.from.length == 1");
}catch(e){}

            var o8 = Object.getOwnPropertyDescriptor(o12, 'from');

            try {
o4.o5(o8.writable, "%TypedArray%.from.writable === true");
}catch(e){}
            try {
o4.o10(o8.enumerable, "%TypedArray%.from.enumerable === false");
}catch(e){}
            try {
o4.o5(o8.configurable, "%TypedArray%.from.configurable === true");
}catch(e){}

            try {
o4.o10(o12.of === undefined, "%TypedArray%.of !== undefined");
}catch(e){}
            try {
o4.o11('function', typeof o12.of, "typeof %TypedArray%.of == 'function'");
}catch(e){}
            try {
o4.o11(0, o12.of.length, "%TypedArray%.of.length == 0");
}catch(e){}

            var o8 = Object.getOwnPropertyDescriptor(o12, 'of');

            try {
o4.o5(o8.writable, "%TypedArray%.of.writable === true");
}catch(e){}
            try {
o4.o10(o8.enumerable, "%TypedArray%.of.enumerable === false");
}catch(e){}
            try {
o4.o5(o8.configurable, "%TypedArray%.of.configurable === true");
}catch(e){}

        } = 0;

try {
Object.seal(this);
}catch(e){}
try {
try {
try {
Object.defineProperty(this, o1, {value:'20', configurable: true });
}catch(e){}
}
catch(o1) {
    try {
o2.o785("exception: " + o1);
}catch(e){}
}
}catch(o4){}
try {
o2.o3(o0);
}catch(e){}
try {
o19.o1020.o3(this.o15);
}catch(e){}
try {
o2.o3(Object.isSealed(this));
}catch(e){}

