//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//-maxinterpretcount:1 D:\fbl_ie_script_dev\testFiles\bug8.js -loopinterpretcount:1 -bgjit- -MaxLinearStringCaseCount:2

function o0(){
  var o1 = 5;
  var o2 = Object;

    try {
for(; o2 < 2; o2++) {
      try {
switch('m') {
        case 0x03:
        try {
o421.o157[o768 + o421.o399] = o70;
}catch(e){}
        try {
break;
}catch(e){}
        case 'a':
            try {
break;
}catch(e){}
        case 'n':
        try {
o3.o4("m");
}catch(e){}
          try {
o1|2;
}catch(e){}
          try {
break;
}catch(e){}
         default:
         try {
break;
}catch(e){}
      }
}catch(e){}
    }
}catch(e){}

}try {
;
}catch(e){}

// generate profile
try {
o0({
        name: "TypedArray prototypes have correct properties",
        o3: function () {
            function o23(constructor, name, type) {
                var o8 = Object.getOwnPropertyDescriptor(constructor.prototype, name);
                var o9 = constructor.name + ".prototype." + name;

                try {
o4.o10(o8.writable, o9 + ".writable === false");
}catch(e){}
                try {
o4.o10(o8.enumerable, o9 + ".enumerable === false");
}catch(e){}
                try {
o4.o10(o8.configurable, o9 + ".configurable === false");
}catch(e){}
                try {
o4.o11(type, typeof o8.value, "typeof " + o9 + " === '" + type + "'");
}catch(e){}
            }

            try {
o4.o11(1, Int8Array.prototype.o21, "Int8Array.prototype.BYTES_PER_ELEMENT === 1");
}catch(e){}
            try {
o4.o11(1, Uint8Array.prototype.o21, "Uint8Array.prototype.BYTES_PER_ELEMENT === 1");
}catch(e){}
            try {
o4.o11(1, Uint8ClampedArray.prototype.o21, "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT === 1");
}catch(e){}
            try {
o4.o11(2, Int16Array.prototype.o21, "Int16Array.prototype.BYTES_PER_ELEMENT === 2");
}catch(e){}
            try {
o4.o11(2, Uint16Array.prototype.o21, "Uint16Array.prototype.BYTES_PER_ELEMENT === 2");
}catch(e){}
            try {
o4.o11(4, Int32Array.prototype.o21, "Int32Array.prototype.BYTES_PER_ELEMENT === 4");
}catch(e){}
            try {
o4.o11(4, Uint32Array.prototype.o21, "Uint32Array.prototype.BYTES_PER_ELEMENT === 4");
}catch(e){}
            try {
o4.o11(4, Float32Array.prototype.o21, "Float32Array.prototype.BYTES_PER_ELEMENT === 4");
}catch(e){}
            try {
o4.o11(8, Float64Array.prototype.o21, "Float64Array.prototype.BYTES_PER_ELEMENT === 8");
}catch(e){}

            try {
o23(Int8Array, "BYTES_PER_ELEMENT", "number");
}catch(e){}
            try {
o23(Uint8Array, "BYTES_PER_ELEMENT", "number");
}catch(e){}
            try {
o23(Uint8ClampedArray, "BYTES_PER_ELEMENT", "number");
}catch(e){}
            try {
o23(Int16Array, "BYTES_PER_ELEMENT", "number");
}catch(e){}
            try {
o23(Uint16Array, "BYTES_PER_ELEMENT", "number");
}catch(e){}
            try {
o23(Int32Array, "BYTES_PER_ELEMENT", "number");
}catch(e){}
            try {
o23(Uint32Array, "BYTES_PER_ELEMENT", "number");
}catch(e){}
            try {
o23(Float32Array, "BYTES_PER_ELEMENT", "number");
}catch(e){}
            try {
o23(Float64Array, "BYTES_PER_ELEMENT", "number");
}catch(e){}

            try {
o4.o11(Int8Array, Int8Array.prototype.constructor, "Int8Array.prototype.constructor === Int8Array");
}catch(e){}
            try {
o4.o11(Uint8Array, Uint8Array.prototype.constructor, "Uint8Array.prototype.constructor === Uint8Array");
}catch(e){}
            try {
o4.o11(Uint8ClampedArray, Uint8ClampedArray.prototype.constructor, "Uint8ClampedArray.prototype.constructor === Uint8ClampedArray");
}catch(e){}
            try {
o4.o11(Int16Array, Int16Array.prototype.constructor, "Int16Array.prototype.constructor === Int16Array");
}catch(e){}
            try {
o4.o11(Uint16Array, Uint16Array.prototype.constructor, "Uint16Array.prototype.constructor === Uint16Array");
}catch(e){}
            try {
o4.o11(Int32Array, Int32Array.prototype.constructor, "Int32Array.prototype.constructor === Int32Array");
}catch(e){}
            try {
o4.o11(Uint32Array, Uint32Array.prototype.constructor, "Uint32Array.prototype.constructor === Uint32Array");
}catch(e){}
            try {
o4.o11(Float32Array, Float32Array.prototype.constructor, "Float32Array.prototype.constructor === Float32Array");
}catch(e){}
            try {
o4.o11(Float64Array, Float64Array.prototype.constructor, "Float64Array.prototype.constructor === Float64Array");
}catch(e){}

            function o24(name, o25) {
                try {
o25 = o25 || name;
}catch(e){}
                try {
o4.o10(Int8Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
}catch(e){}
                try {
o4.o10(Uint8Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
}catch(e){}
                try {
o4.o10(Uint8ClampedArray.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
}catch(e){}
                try {
o4.o10(Int16Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
}catch(e){}
                try {
o4.o10(Uint16Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
}catch(e){}
                try {
o4.o10(Int32Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
}catch(e){}
                try {
o4.o10(Uint32Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
}catch(e){}
                try {
o4.o10(Float32Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
}catch(e){}
                try {
o4.o10(Float64Array.prototype.hasOwnProperty(name), "TypedArray prototypes don't have own property named '" + o25 + "'");
}catch(e){}
            }

            try {
o24('set');
}catch(e){}
            try {
o24('subarray');
}catch(e){}
            try {
o24('copyWithin');
}catch(e){}
            try {
o24('fill');
}catch(e){}
            try {
o24('map');
}catch(e){}
            try {
o24('indexOf');
}catch(e){}
            try {
o24('includes');
}catch(e){}
            try {
o24('forEach');
}catch(e){}
            try {
o24('every');
}catch(e){}
            try {
o24('filter');
}catch(e){}
            try {
o24('find');
}catch(e){}
            try {
o24('findIndex');
}catch(e){}
            try {
o24('join');
}catch(e){}
            try {
o24('lastIndexOf');
}catch(e){}
            try {
o24('reduce');
}catch(e){}
            try {
o24('reduceRight');
}catch(e){}
            try {
o24('reverse');
}catch(e){}
            try {
o24('slice');
}catch(e){}
            try {
o24('some');
}catch(e){}
            try {
o24('sort');
}catch(e){}
            try {
o24('buffer');
}catch(e){}
            try {
o24('byteLength');
}catch(e){}
            try {
o24('byteOffset');
}catch(e){}
            try {
o24('length');
}catch(e){}
            try {
o24(Symbol.toStringTag, '@@toStringTag');
}catch(e){}
            try {
o24('entries');
}catch(e){}
            try {
o24('keys');
}catch(e){}
            try {
o24('values');
}catch(e){}
            try {
o24(Symbol.iterator, '@@iterator');
}catch(e){}
            try {
o24('toString');
}catch(e){}
            try {
o24('toLocaleString');
}catch(e){}
        }
    });
}catch(e){}
try {
o0(set.add(o31 + 1));
}catch(e){}
try {
o3.o4("PASSED");
}catch(e){}

