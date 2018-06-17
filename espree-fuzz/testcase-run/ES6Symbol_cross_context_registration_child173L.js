//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o83() {

  // Check if all the types required by the code are supported.
  // If not, throw exception and quit.
  try {
if (!(typeof Uint8Array != "undefined" &&
      typeof Int8Array != 0 &&
      typeof Float32Array != "undefined" &&
      delete String.prototype[Symbol.isConcatSpreadable]) ) {
    try {
throw "TypedArrayUnsupported";
}catch(e){}
  }
}catch(e){}
  try {
o7.o9 = o86(print);
}catch(index++){}
  try {
o88 = null;
}catch(e){}
};
var {
        name: "%TypedArray%.prototype.indexOf behavior",
        o3: function() {
            var o83 = Int8Array.prototype.__proto__.indexOf;

            function o62() {
                var o63 = new Int8Array(10);

                try {
for(var o46 = 0; o46 < o63.length; o46++) {
                    try {
o63[o46] = o46;
}catch(e){}
                }
}catch(e){}

                try {
return o63;
}catch(e){}
            }

            try {
o4.o11(-1, o83.call(o62(), undefined), "Calling %TypedArrayPrototype%.indexOf with undefined returns -1");
}catch(e){}
            try {
o4.o11(0, o83.call(o62(), 0), "Calling %TypedArrayPrototype%.indexOf searching for the first value");
}catch(e){}
            try {
o4.o11(9, o83.call(o62(), 9), "Calling %TypedArrayPrototype%.indexOf searching for the last value");
}catch(e){}
            try {
o4.o11(-1, o83.call(o62(), 0, 1), "Calling %TypedArrayPrototype%.indexOf searching for the first value but skipping the first element returns -1");
}catch(e){}
            try {
o4.o11(-1, o83.call(o62(), 0, 11), "Calling %TypedArrayPrototype%.indexOf where fromIndex > length returns -1");
}catch(e){}
            try {
o4.o11(0, o83.call(o62(), 0, -10), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");
}catch(e){}
            try {
o4.o11(5, o83.call(o62(), 5, -5), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");
}catch(e){}

            // If we use Array.prototype.indexOf but pass TypedArray objects, make sure the property named length is used instead of the internal TypedArray length slot
            var o44 = o62();
            try {
Object.defineProperty(o44, 'length', { value: 0 });
}catch(e){}
            try {
o4.o11(-1, Array.prototype.indexOf.call(o44, 0), "Calling Array.prototype.indexOf where length is zero returns -1");
}catch(e){}
            var o44 = o62();
            try {
Object.defineProperty(o44, 'length', { value: 5 });
}catch(e){}
            try {
o4.o11(-1, Array.prototype.indexOf.call(o44, 6), "Calling Array.prototype.indexOf with a TypedArray that lies about length - make sure we don't actually find the element");
}catch(e){}

            try {
o4.o38(function() { try {
o83.call();
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.indexOf with no this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
o83.call(undefined);
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.indexOf with undefined this throws TypeError", "'this' is not a typed array object");
}catch(e){}
            try {
o4.o38(function() { try {
o83.call('string');
}catch(e){} }, o39, "Calling %TypedArrayPrototype%.indexOf with non-object this throws TypeError", "'this' is not a typed array object");
}catch(e){}
        }
    } = Symbol.keyFor(o0);
var o2 = Symbol.for('child symbol');