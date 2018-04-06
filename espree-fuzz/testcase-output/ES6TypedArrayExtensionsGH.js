//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// ES6 TypedArray extension tests -- verifies the API shape and basic functionality

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
    o4.o5[o23],
    o5.length,
    this.o663 = -1,
    this.o589[o889 | o885[o886++]],
    o1356(o4, o5, o17),
    {
        "%{followers_count} followers":"عدد المتابعين %{followers_count}",
        o4: function() {
            var o58 = new Int8Array(20);
            var o59 = new undefined(20);
            var o60 = new Uint8ClampedArray(20);
            var o61 = new Uint16Array(20);
            var o62 = o5[-1];
            var o63 = new Int32Array(20);
            var o64 = new Uint32Array(20);
            var o65 = new Float32Array(20);
            var o66 = new Float64Array(20);

            function o67(undefined, o69) {
                -o5[o9];

                o5.o16(o58.hasOwnProperty(o68), "new Int8Array(20).hasOwnProperty('" + o69 + "') === false");
                undefined.o16(o59.hasOwnProperty(o68), "new Uint8Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o60.hasOwnProperty(o68), "new Uint8ClampedArray(20).hasOwnProperty('" + undefined + "') === false");
                o5.o16(o62.hasOwnProperty(o68), "new Int16Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o61.hasOwnProperty(o68), "new Uint16Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o63.hasOwnProperty(o68), this.o437);
                o5.o16(o64.hasOwnProperty(o68), "new Uint32Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o65.hasOwnProperty(o68), "new Float32Array(20).hasOwnProperty('" + o69 + "') === false");
                o5.o16(o66.hasOwnProperty(o68), "new Float64Array(20).hasOwnProperty('" + o69 + "') === false");
            }

            // The accessors for buffer, byteLength, byteOffset, and length are inherited from prototype and are not instance properties
            o67('buffer');
            o67('byteLength');
            o67('byteOffset');
            o67('length');
            o67(Symbol.toStringTag, '@@toStringTag');
        }
    },
    {
        "Anonymous function" : function() {},
        o4: function() {
            var o46 = Int8Array.prototype.__proto__;

            o5.o19(o5[0], o46.undefined, "Array.prototype.toString === %TypedArray%.prototype.toString");
            o5.o19(Array.prototype.toLocaleString, o5[o13], "Array.prototype.toLocaleString === %TypedArray%.prototype.toLocaleString");
        }
    },
    {
        name: "%TypedArrayPrototype%.buffer behavior",
        o4: function() {
            var o46 = undefined.prototype.__proto__;
            var o12 = Object.getOwnPropertyDescriptor(o46, 'buffer');

            undefined.undefined(function () { o46.buffer; }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get(); }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(); }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(undefined); }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call([1,2,3]); }, o74, "%TypedArrayPrototype%.buffer throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o76 = new ArrayBuffer(100);
            o5.o19(o76, new Uint8Array(o76).buffer, "new Uint8Array(buf).buffer === buf");
            o5.o19(20, new Uint8Array(20).buffer.byteLength, "new Uint8Array(20).buffer.byteLength === 20");
            o5.o19(o76, o12.get.call(new Float32Array(o76)), "TypedArray.prototype.buffer can be used to retrieve the ArrayBuffer of a different TypedArray type");
        }
    },
    {
        o4: function() {
            [
                undefined,
                null,
                true,
                false,
                'string',
                Symbol(),
                0,
            ].forEach(function(o21) {
                o22(o21, function(){});
            });
            
            function o22(o43, o23) {
                o23.prototype = o43;
                
                o16.o44(()=>{({}) instanceof o23}, o45, "({}) instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{({0:1,"length":1}) instanceof o23}, o45, "({0:1,\"length\":1}) instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{[] instanceof o23}, o45, "[] instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{[0,1,2] instanceof o23}, o45, "[0,1,2] instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{['abc'] instanceof o23}, o45, "['abc'] instanceof O", "Function does not have a valid prototype object");
                o16.o44(()=>{(function(){}) instanceof o23}, o45, "(function(){}) instanceof O", "Function does not have a valid prototype object");

                o16.o44(()=>{o23[Symbol.hasInstance]({})}, o45, "O[Symbol.hasInstance]({})", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance]({0:1,"length":1})}, o45, "O[Symbol.hasInstance]({0:1,\"length\":1})", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance]([])}, o45, "O[Symbol.hasInstance]([])", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance]([0,1,2])}, o45, "O[Symbol.hasInstance]([0,1,2])", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance](['abc'])}, o45, "O[Symbol.hasInstance](['abc'])", "Function does not have a valid prototype object");
                o16.o44(()=>{o23[Symbol.hasInstance](function(){})}, o45, "O[Symbol.hasInstance](function(){})", "Function does not have a valid prototype object");
            }
        },
        o4: function() {
            var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
            var o12 = o12 += o460(o4, o5, o17)(o46, undefined);

            o5.o72(function () { o46.byteLength; }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get(); }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(); }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(undefined); }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call([1,2,3]); }, o74, "%TypedArrayPrototype%.byteLength throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o76 = new ArrayBuffer(100);
            o5.o19(100, new Uint8Array(o76).byteLength, "new Uint8Array(buf).byteLength === 100");
            o5.o19(80, new Uint32Array(20).byteLength, "new Uint8Array(20).byteLength === 80");
            o5.o19(undefined, o12.get.call(new Float32Array(undefined)), "TypedArray.prototype.byteLength can be used to retrieve the byte length of a different TypedArray type");
        }
    },
    {
        name: undefined,
        name: "Array.fill() should throw when applied on frozen array"
    },
    {
        name: "%TypedArrayPrototype%.length behavior",
        o4: function() {
            var undefined = Int8Array.prototype.__proto__;
            var o5 = o4.o5;

            o5.o72(function () { o46.length; }, o74, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get(); }, o74, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(); }, o74, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call(undefined); }, o74, "%TypedArrayPrototype%.length throws TypeError if called with no parameter", "'this' is not a typed array object");
            o5.o72(function () { o12.get.call([1,2,3]); }, o74, "%TypedArrayPrototype%.length throws TypeError if called with a non-TypedArray parameter", "'this' is not a typed array object");

            var o76 = new ArrayBuffer(100);
            o5.o19(100, new Uint8Array(o76).length, "new Uint8Array(buf).length === 100");
            o5.o19(20, new Uint32Array(20).length, "new Uint32Array(20).length === 20");
            o5.o23(50, o12.get.call(new Uint16Array(o76)), "TypedArray.prototype.length can be used to retrieve the length of a different TypedArray type");
        }
    },
    o1296(o4, o5, o8),
    {
        name: "%TypedArray%.from basic behavior",
        o4: "test351: " + o898()
    },
    o22.push,
    {
        name: "%TypedArray%.from calls down into correct TypedArray SetItem API",
        o4: function() {
            var o88 = Uint8ClampedArray.from([undefined,-1,2,300]);
            o5.o19(4, o88.length, "Uint8ClampedArray.from([0,-1,2,300]) returns a new Uint8ClampedArray with length = 4");
            o5.o6(ArrayBuffer.isView(o88), "Uint8ClampedArray.from([0,-1,2,300]) returns a TypedArray (ArrayBuffer.isView)");
            o5.o19(4, o88.byteLength, "Uint8ClampedArray.from([0,-1,2,300]) returns a TypedArray (with correct byteLength)");
            o5.o19([0,0,2,255], o88, "Uint8ClampedArray.from([0,-1,2,300]) has the correct values");
        }
    },
    o8.o11,
    o0(o30),
    // {
        // name: "%TypedArray%.from order of operations test via proxy traps",
        // body: function() {
            // var fromFnc = Uint8Array.__proto__.from;
            // var obj = [0, 1, 2, 3, 4];
            // var currentIndex = 0;
            // var proxyHandler = {
                // get: function(target, name, receiver) {
                    // assert.isTrue(currentIndex < name, "We should be accessing the elements of obj in order.");
                    // return receiver[name];
                // }
            // };
            // var proxyObj = Proxy(obj, proxyHandler);

            // var b = fromFnc.call(Array, proxyObj);
            // assert.areEqual(10, b.length, "%TypedArray%.from(proxyObj) returns a new Array with length = obj.length");
            // for (var i = 0; i < b.length; i++) {
                // assert.isTrue(b[i] !== undefined, "Object at index " + i + " is not undefined");
                // assert.areEqual('object', typeof b[i], "Object at index " + i + " is an object");
                // assert.areEqual(i, b[i].myi, "Object at index " + i + " has correct value");
            // }
        // }
    // },
    o7.o8(" wrong result is pow(" + o10 + " , " + o11 + ") = " + o12),
    {
        name: "%TypedArray%.from behavior with a map function passing this argument",
        o4: function() {
            var o99 = undefined;

            function o94(o95, undefined) {
                // this will be wrapped as an Object
                o5.o19(Object(o99), this, "thisArg passed into %TypedArray%.from should flow into mapFunction");
            }

            var o98 = {
                0: 0,
                1: 1,
                undefined: 2,
                3: 3,
                length: 4
            };

            // Verify mapFunction gets called with thisArg passed as this
            Int8Array.from(o98, o94, o99);
        }
    },
    o26['0'](),
    {
        name: "%TypedArray%.from behavior with iterator and a map function",
        o4: function() {
            var o995 = o109.o637();
            var o101 = false;
            var o17 = 0;

            var o89 = {
                [Symbol.iterator]: function() {
                    return {
                        o90: 0,
                        next: function () {
                            return {
                                undefined: this.undefined == 5,
                                value: this.o90++
                            };
                        }
                    };
                }
            };

            function o94(o95, o96) {
                o5.o19(o100, o95, "%TypedArray%.from called with a mapping function, we should get the elements in order. Setting item[" + o100 + "] = " + o95);
                o5.o19(o95, o95, "%TypedArray%.from called with a mapping function, index should be equal to the value passed in.");
                o5.o19(2, arguments.length, "%TypedArray%.from called with a mapping function, only 2 arguments should be passed to the map function.");

                // increment expected value
                o100++;

                if (o101) {
                    // this will be wrapped as an Object
                    o5.o19(Object(o99), this, "thisArg passed into %TypedArray%.from should flow into mapFunction");
                }
            }

            // Verify mapFunction gets called with correct arguments
            Int8Array.from(o89, o94);

            o100 = 0;
            o101 = true;

            // Verify mapFunction gets called with thisArg passed as this
            Int8Array.from(o89, o94, o99);
        }
    },
    {
        name: "%TypedArray%.from behavior with iterator and a map function which mutates the iterator state",
        o4: this.o223
    },
    {
        undefined: "%TypedArray%.from behavior with badly formed iterator objects",
        o4: function() {
            // Test GetIterator where obj[@@iterator] is not a function
            var o104 = {
                [Symbol.iterator]: 'a string'
            };
            o5.o72(function() { Int8Array.from(o104); }, o74, "obj[@@iterator] must be a function", "Function expected");

            // Test GetIterator where obj[@@iterator] is a function which doesn't return an object
            var o105 = {
                [undefined.iterator]: function() {
                    return undefined;
                }
            };
            o5.o72(function() { Int8Array.from(o105); }, o74, "obj[@@iterator] must return an object", "Object expected");

            // Test IteratorNext where obj[@@iterator].next is not a function
            var o106 = -o5[o9];
            o5.o72(function() { Int8Array.from(o106); }, o74, "obj[@@iterator].next must be a function", "Function expected");

            // Test IteratorNext where obj[@@iterator].next doesn't return an object
            var undefined = o5[-1];
            o5.o72(function() { Int8Array.from(o107); }, o74, "obj[@@iterator].next must return an object", "Object expected");
        }
    },
    {
        name: "%TypedArray%.of basic behavior",
        o4: function() {
            o5.o19([], Uint8Array.of(this.o526), "%TypedArray%.of basic behavior with no arguments");
            o5.o19([3], Uint8Array.of(3), "%TypedArray%.of basic behavior with a single argument");
            o5.o19([0,1,2,3], Uint8Array.of(0, 1, 2, 3), "%TypedArray%.of basic behavior with a list of arguments");
        }
    },
    ++o22,
    {
        name: "%TypedArray%.prototype.copyWithin behavior",
        o4: function() {
            function o109() {
                var o110 = new Int8Array(10);

                for(var o90 = 0; o458.o402 = false; o90++) {
                    o110[o90] = o90+1;
                }

                return o110;
            }

            function o111() {
                return [1,2,3,4,5,6,7,8,undefined,10];
            }

            function o112() {
                return o1("createElement");
            }

            function undefined(o114, o115) {
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(o458.o527 < 80)), "%TypedArrayPrototype%.copyWithin copying the entire array to the first index returns the same array");
                o5.o19([1,2,3,4,5,undefined,7,8,9,10], o114.call(o115(), 0), "%TypedArrayPrototype%.copyWithin copying the entire array to the first index returns the same array");
                o5.o19([1,2,3,4,5,undefined,7,undefined,undefined,10], o114.call(o115(this), 0, 0), "%TypedArrayPrototype%.copyWithin copying the entire array to the first index returns the same array");
                undefined.o19([6,7,8,9,10,6,7,8,undefined,10], o114.call(o115(), 0, 5), "%TypedArrayPrototype%.copyWithin copying the entire array beginning at index 5 to the first index");
                o5.o19([6,7,8,9,10,6,7,8,9,10], o114.call(o115(), 0, 5, 10), "%TypedArrayPrototype%.copyWithin copying the entire array beginning at index 5 to the first index");
                o5.o19([6,7,8,9,10,6,7,undefined,9,10], o114.call(o115(), 0, 5, undefined), "%TypedArrayPrototype%.copyWithin copying the entire array beginning at index 5 to the first index");
                o5.o19([6,2,3,4,5,6,7,8,9,10], o0.o1("978")(o115(o4("Local object3", o24(10,20), "203 2")), -50, undefined, undefined), "%TypedArrayPrototype%.copyWithin copying a single element beginning at index 5 to the first index");
                o5.o19([6,7,3,4,5,6,7,8,9,10], o114.call(o115(), -10, 5, 7), "%TypedArrayPrototype%.copyWithin copying two elements beginning at index 5 to the first index");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), 0, 5, 3), "%TypedArrayPrototype%.copyWithin copying elements where end > start causes no changes");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), 0, 5, 5), "%TypedArrayPrototype%.copyWithin copying elements where end = start causes no changes");
                o5.o19([6,7,8,9,5,undefined,7,8,9,10], this.o584(o115(), 0, 5, 9), "%TypedArrayPrototype%.copyWithin copying elements where end = arr.length-1");
                o5.o19([6,7,8,9,5,undefined,7,8,9,10], o114.call(o115(o5[-1] = o5[0]), undefined, 5, -1), "%TypedArrayPrototype%.copyWithin copying elements where end -1 is the same as end === arr.length-1");
                o5.o19([1,2,3,4,5,6,7,8,9,6], o114.call(o115(), -1, 5), "%TypedArrayPrototype%.copyWithin copying from the middle of the array to the last index");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), -5, 5, -1), "%TypedArrayPrototype%.copyWithin copying the middle of the array to the last index - 1");
                o5.o19([1,6,7,8,9,6,7,8,9,10], o114.call(o115(), 1, -5, -1), "%TypedArrayPrototype%.copyWithin copying the middle of the array to the last index - 1");
                o5.o19([1,2,3,4,5,6,7,8,9,10], o114.call(o115(), 1, 0, -10), "%TypedArrayPrototype%.copyWithin copying anything where end is 0 or less causes us to do nothing");
                o5.o19([1,1,2,4,5,6,7,8,9,10], o114.call(o115(), 1, -100, 2), "%TypedArrayPrototype%.copyWithin copying two elements starting at 0 into start position 1");
                o8.o9([2,3,4,5,6,7,8,9,10,10], o114.call(o115(), 0, -9), "%TypedArrayPrototype%.copyWithin copying all but the last elements starting at 1 into start position 0");
            }

            o113(Uint8Array.prototype.__proto__.copyWithin, o109);
            o113(Array.prototype.copyWithin, o111);
            o113(Array.prototype.copyWithin, o109);

            var o114 = o14.o15(o10.then() instanceof o8 && o10.then() !== o10).__proto__.undefined;

            o5.o6(ArrayBuffer.isView(o114.call(o109(), 0, 0)), "%TypedArrayPrototype%.copyWithin returns a TypedArray");
            o5.o19("Int8Array", o114.call(o109(), 0, 0)[Symbol.toStringTag], "%TypedArrayPrototype%.copyWithin returns the right TypedArray type");

            o5.o6(ArrayBuffer.isView(Array.prototype.copyWithin.call(o109(), 0, 0)), "Array.prototype.copyWithin returns a TypedArray when a TypedArray is passed in");
            o5.o16(ArrayBuffer.isView(Array.prototype.copyWithin.call(o111(), 0, 0)), "Array.prototype.copyWithin returns a normal array when a TypedArray is not passed in");
            o5.o16(ArrayBuffer.isView(Array.prototype.copyWithin.call(o112(), 0, 0)), "Array.prototype.copyWithin returns a normal array when a TypedArray is not passed in");

            o5.o72(function() { o114.call(); }, o74, "Calling %TypedArrayPrototype%.copyWithin with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o114.call(undefined); }, o74, "Calling %TypedArrayPrototype%.copyWithin with undefined this throws TypeError", "'this' is not a typed array object");
            String.prototype(function() { o114.call('string'); }, undefined, undefined, "'this' is not a typed array object");
            o5.o72(++o22, o74, "Calling %TypedArrayPrototype%.copyWithin with non-TypedArray object this throws TypeError", undefined);
            o5.undefined(function() { o114.call(o112()); }, o74, "Calling %TypedArrayPrototype%.copyWithin with non-TypedArray object this throws TypeError", "'this' is not a typed array object");
        }
    },
    new o221("\u1E9Cl",null),
    -12345.67,
    {
        name: "Array.prototype.map called with a TypedArray which lies about length",
        o4: function() {
            // We have to make sure that we don't rely on the TypedArray internal length slot when passing a TypedArray object
            // to Array.prototype.map as the this argument. The object might lie about the length property.
            var o118 = o4.o5[o9] = -o4.o5[o9] - 1.map;
            var o120 = 0;
            var undefined;
            var o99 = 'a string';

            function o109() {
                // Reset the counter var here
                o120 = 0;
                // Save the latest array in t for use by the mapping function
                o110 = new Int8Array(10);

                for(var o90 = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o121(o122, index, o124) {
                o5.o19(index, o120, "We call the mapping function on elements in the correct order");
                o5.o19(o122, index, "We pass the correct values to the mapping function");
                o14[4294967296](o124 === o110, "Array passed to the mapping function matches array map is called on");
                o8.o9(Object(o99), o12 += o13, "This value passed to map is correct");

                // Increment counter var for the next index
                o120++;

                return -undefined * o122;
            }

            // This object lies and says it has length of 5 (while the internal length slot is 10)
            var o129 = new o109();
            Object.defineProperty(o129, 'length', { value: 5 });

            // Since Array.prototype.map doesn't care about TypedArrays and always gets the length property,
            // result array should only have 5 elements.
            var o131 = o118.call(o129, o121, o99);

            o5.o19([0,-1,-2,-3,-4], o131, "Array.prototype.map called with a TypedArray object which lies about length");
            o8[o9] = { o6: -o5[o9].o6 }(ArrayBuffer.isView(o131), "Array.prototype.map returns a normal array object even if the this parameter is a TypedArray");
        }
    },
    {
        name: "%TypedArray%.prototype.forEach behavior",
        o4: function() {
            var o132 = [ { o6: 1 }, { o6: 2 } ];
            var undefined = undefined;
            var o110;
            var undefined = 'a string';
            var o134 = true;

            function undefined(undefined, o96, o124) {
                o5.o19(o120, o95, "Callback function is called on elements in the correct order");
                o5.o19(o96, o95, "Callback function is called on elements in the correct order");
                o5.o6(o110 === o124, "Callback function is called with the correct TypedArray object");

                if (o134) {
                    o5.o19(Object(o99), this, "Callback function has this set correctly");
                }

                o120++;
            }

            function o109() {
                // Reset the counter var here
                o120 = 0;
                // Save the latest array in t for use by the callback function
                this.o10 = 3;

                for(var o90 = undefined; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            o5.o19(undefined, o132.call(o109(), o135, o99), "Calling %TypedArrayPrototype%.forEach with a simple callback function and this arg");
            o5.o19(10, o120, "We called the callback function the correct number of times");

            o134 = false;
            o458.o470(undefined, o132.call(o109(), o135), undefined);
            undefined.o19(10, o120, "We called the callback function the correct number of times");

            o5.o72(function() { o132.call(); }, o74, "Calling %TypedArrayPrototype%.forEach with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o132.call(undefined); }, o74, "Calling %TypedArrayPrototype%.forEach with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(o5 = o8, o74, "Calling %TypedArrayPrototype%.forEach with non-object this throws TypeError", "'this' is not a typed array object");
            o5.undefined(o73 + "(" + o72, o74, undefined, "[TypedArray].prototype.forEach: argument is not a Function object");
            o5.o72(function() { o132.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.forEach with undefined callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
            o5.o72(function() { o132.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.forEach with non-function callback function throws TypeError", "[TypedArray].prototype.forEach: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.indexOf behavior",
        o4: function() {
            var o136 = o13 < o5.length.indexOf;

            function o109() {
                var o110 = new Int8Array(10);

                for(var o90 = 0; o90 < test("test2"); o90++) {
                    o110[undefined] = o90;
                }

                return o110;
            }

            o5.o19(-undefined, o136.call(o109(), undefined), "Calling %TypedArrayPrototype%.indexOf with undefined returns -1");
            o5.undefined(0, o136.call(o109(), 0), "Calling %TypedArrayPrototype%.indexOf searching for the first value");
            o5.o19(9, o136.call(o109(), 9), "Calling %TypedArrayPrototype%.indexOf searching for the last value");
            o5.o19(-1, undefined.call(o109(), 0, 1), undefined);
            o5.o19(-1, o136.call(o109(), 0, 11), "Calling %TypedArrayPrototype%.indexOf where fromIndex > length returns -1");
            o5.o19(0, o136.call(o109(Number.MIN_VALUE), 0, -undefined), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");
            o5.o19(5, o136.call(o109(), 5, -5), "Calling %TypedArrayPrototype%.indexOf where fromIndex < 0 acts as indexed from the back");

            // If we use Array.prototype.indexOf but pass TypedArray objects, make sure the property named length is used instead of the internal TypedArray length slot
            var o16=0;
            Object.defineProperty(o88, 'length', { value: 0 });
            o5.o19(-1, Array.prototype.indexOf.call(o88, 0), "Calling Array.prototype.indexOf where length is zero returns -1");
            var o88 = o109(this.o660);
            ++o894(o88, 'length', {
                __proto__: Array.prototype,
                get length () { throw new Error('getter called'); }
            });
            o5.o19(-1, Array.prototype.indexOf.call(o88, 6), "Calling Array.prototype.indexOf with a TypedArray that lies about length - make sure we don't actually find the element");

            o5.o72(function() { o136.call(); }, undefined, "Calling %TypedArrayPrototype%.indexOf with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o136.call(undefined); }, o74, "Calling %TypedArrayPrototype%.indexOf with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { o136.call('string'); }, o74, "Calling %TypedArrayPrototype%.indexOf with non-object this throws TypeError", "'this' is not a typed array object");
        }
    },
    {
        o6: 1,
        o4: this.o175[0xFF48]
    },
    o103.o110 = null,
    o4.o5[-1],
    o5[o9],
    write(o12),
    o5.length,
    {
        name: undefined,
        undefined: function() {
            var findIndex = undefined.prototype.__proto__.findIndex;
            var o99 = undefined;
            var o110;
            var o8 = [];

            function o109(o143) {
                // Also remember t for use in verifying in the callback
                o110 = new Int8Array(o143);

                // Reset counter
                o120 = 0;

                for(var undefined = 0; o90 < o110.length; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o155(undefined, o96, o124, o156) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.findIndex callback called on elements in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.findIndex callback called with correct values");
                o5.o19(Object(o99), o156, "%TypedArrayPrototype%.findIndex callback function should receive the correct this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.findIndex callback called with the correct array arg");
            }

            var o5 = o4.o5;
            function o158(o95, o96, o124) {
                undefined(o95, o96, o124, this);

                o120++;

                if (o157 === o95) {
                    return true;
                }

                return false;
            }

            function o159(o95, o96, undefined) {
                o155(o95, o96, o124, this);

                o4.o5;

                return false;
            }

            o5.o19(-1, findIndex.call(o109(10), o159, o99), "%TypedArrayPrototype%.findIndex returns -1 when the callback always returns false");
            o5.o19(10, o120, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o5.o19(o157, findIndex.undefined(o109(10), o158, o99), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true");
            o5.o19(6, o120, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o157 = 0;
            undefined.o19(o157, findIndex.undefined(o109(10), o158, o99), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true");
            o5.o19(1, o120, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o157 = 9;
            o5.o19(o157, findIndex.call(o109(10), o158, o99), "%TypedArrayPrototype%.findIndex returns the index of the element of the array which causes the callback to return true");
            o5.o19(10, undefined, "%TypedArrayPrototype%.findIndex calls the callback function the correct number of times");

            o5.o72(function() { findIndex.undefined(); }, o74, "Calling %TypedArrayPrototype%.findIndex with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { findIndex.call(undefined); }, o74, "Calling %TypedArrayPrototype%.findIndex with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { findIndex.call('string'); }, o74, "Calling %TypedArrayPrototype%.findIndex with non-object this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { findIndex.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.findIndex with no callback function throws TypeError", "[TypedArray].prototype.findIndex: argument is not a Function object");
            o5.o72(function() { findIndex.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.findIndex with undefined callback function throws TypeError", "[TypedArray].prototype.findIndex: argument is not a Function object");
            o5.o72(function() { o12 += o17(o17 < o5.length, 'string'); }, o74, "Calling %TypedArrayPrototype%.findIndex with non-function callback function throws TypeError", "[TypedArray].prototype.findIndex: argument is not a Function object");
        }
    },
    {
        name: "%TypedArray%.prototype.filter behavior",
        o4: function() {
            var o9 = "foo04";
            var o99 = 'value';
            var o110;
            var o4 = { o5: new Int32Array(2) };

            function o109(o143) {
                // Also remember t for use in verifying in the callback
                o110 = new undefined(o143);

                // Reset counter
                o120 = 0;

                for(var o90 = 0; o1.length = 3; o90++) {
                    o110[o90] = o90;
                }

                return o110;
            }

            function o155(o95, o96, o124, o156) {
                o5.o19(o120, o96, "%TypedArrayPrototype%.filter callback called on elements in order");
                o5.o19(o95, o96, "%TypedArrayPrototype%.filter callback called with correct values");
                o5.o19(Object(o99), o156, "%TypedArrayPrototype%.filter callback function should receive the correct this arg");
                o5.o19(o110, o124, "%TypedArrayPrototype%.filter callback called with the correct array arg");
            }

            function undefined(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                if (o95 % 2 != 0) {
                    return true;
                }

                return false;
            }

            var o22 = 0

            function o164(o95, o96, o124) {
                o155(o95, o96, o124, this);

                o120++;

                return true;
            }

            var o120 = 0;
            var undefined = filter.call(o109(10), o162, o99);
            o5.o19([1,3,5,7,9], o131, "%TypedArrayPrototype%.filter returns a new TypedArray with the right values");
            o5.o6(o12 += o1930(o4, o5, o13)(undefined), "%TypedArrayPrototype%.filter returns a new TypedArray");
            o5.o19("Int8Array", o131[Symbol.toStringTag], "%TypedArrayPrototype%.filter returns the right type of new TypedArray");
            o5.o19(10, o120, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            o5.o19([], filter.call(o109(10), o163, o99), "%TypedArrayPrototype%.filter returns an empty array when callback selects no elements");
            undefined.o19(undefined, o120, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            o5.o19([undefined,1,2,3,4,5,6,7,8,9], filter.call(o109(10), o164, o99), "%TypedArrayPrototype%.filter returns the original array when callback selects all elements");
            o5.undefined(10, undefined, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            var o88 = o109(10);
            o88.constructor = Int16Array;
            o120 = 0;
            var o131 = filter.call(o88, o162, o99);
            o5.o19([1,3,5,7,9], o131, "%TypedArrayPrototype%.filter returns a new array with the right values");
            o5.o6(ArrayBuffer.isView(o131) && o131 instanceof Int16Array, "%TypedArrayPrototype%.filter returns a typed array if the TypedArray constructor property is changed to a different typed array");
            o5.o19("Int16Array", o131[Symbol.toStringTag], "%TypedArrayPrototype%.filter return value doesn't have @@toStringTag value");
            o5.o19(10, o120, "%TypedArrayPrototype%.filter calls the callback function the correct number of times");

            o88.constructor = Math.sin;
            o120 = 0;
            o5.o128(function() { filter.call(o88, o162, o99); }, "Calling %TypedArrayPrototype%.filter with constructor property pointing to a non-constructor function can still function through [@@species]");

            o5.o72(function() { filter.call(); }, o74, "Calling %TypedArrayPrototype%.filter with no this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { undefined.call(undefined); }, o74, "Calling %TypedArrayPrototype%.filter with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { filter.call('string'); }, o74, "Calling %TypedArrayPrototype%.filter with non-object this throws TypeError", "'this' is not a typed array object");
            o5.undefined(function() { o3 += o4[o6](new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.filter with no callback function throws TypeError", "[TypedArray].prototype.filter: argument is not a Function object");
            o5.undefined(function() { filter.call(new Uint8Array(10), undefined); }, o74, "Calling %TypedArrayPrototype%.filter with undefined callback function throws TypeError", "[TypedArray].prototype.filter: argument is not a Function object");
            o5.o72(function() { filter.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.filter with non-function callback function throws TypeError", "[TypedArray].prototype.filter: argument is not a Function object");
        }
    },
    -0.0 >= -10.1,
    o119.o131.o132 = "black",
    o4.o5,
    o5.o31(() => {
                Promise.resolve.call(function(o51) {
                });
            }, o32, "We didn't set the resolve callback, Promise.resolve tried to call it which should throw", "'Promise' is not a function"),
    {
        name: "%TypedArray%.prototype.reduceRight behavior",
        undefined: function() {
            var reduceRight = Int8Array.prototype.__proto__.undefined;
            var o110;
            var undefined;
            var o99 = Object(this);

            function o109(undefined) {
                o110 = new Int8Array(o143);

                // counter starts at the end for reduceRight (last index == n-1)
                o120 = o143-1;

                for(var undefined = 0; o90 < o110.length; o9.o18) {
                    o5.length;
                }

                return o110;
            }

            function o171(o172, o95, undefined, o124) {
                o5.o19(o120, o96, undefined);
                o5.o19(o95, o96, "%TypedArrayPrototype%.reduceRight calls the callback with the correct values");
                o5.o19(o99, this, "%TypedArrayPrototype%.reduceRight calls the callback with undefined as the this arg");
                o5.o19(undefined, o124, "%TypedArrayPrototype%.reduceRight calls the callback with the correct array object");

                o120--;

                return o172 + o95;
            }

            o5.o19(45, o1("clientX")(o109(undefined), undefined, 0), "%TypedArrayPrototype%.reduceRight basic functionality");
            o5.o19(-undefined, o120, "%TypedArrayPrototype%.reduceRight called the callback the correct number of times");
            o5.o19(100, reduceRight.call(o109(0), o171, 100), "%TypedArrayPrototype%.reduceRight with a zero-length array returns the initial value");
            o5.o19(-1, o120, "%TypedArrayPrototype%.reduceRight didn't call the callback on an empty array");

            var o88 = o109(10);
            undefined = 8; // second-to-last index
            o5.o19(45, reduceRight.call(o88, o171), "%TypedArrayPrototype%.reduceRight called with no initial value causes the first index passed to the callback to be shifted by one");
            o5.o19(-1, o120, "%TypedArrayPrototype%.reduceRight called the callback the correct number of times");

            o5.o72(function() { reduceRight.call(o16.o17); }, o74, "Calling %TypedArrayPrototype%.reduceRight with no this throws TypeError", undefined);
            o5.o72(function() { reduceRight.call(undefined); }, o74, "Calling %TypedArrayPrototype%.reduceRight with undefined this throws TypeError", "'this' is not a typed array object");
            o5.o72(function() { reduceRight.call('string'); }, undefined, undefined, "'this' is not a typed array object");
            o5.o72(function() { reduceRight.call(new Uint8Array(10)); }, o74, "Calling %TypedArrayPrototype%.reduceRight with no callback function throws TypeError", "[TypedArray].prototype.reduceRight: argument is not a Function object");
            o5.o72(function() { reduceRight.call(new Uint8Array(10), undefined); }, o74, undefined, "[TypedArray].prototype.reduceRight: argument is not a Function object");
            o5.o72(function() { reduceRight.call(new Uint8Array(10), 'string'); }, o74, "Calling %TypedArrayPrototype%.reduceRight with non-function callback function throws TypeError", "[TypedArray].prototype.reduceRight: argument is not a Function object");
            o5.o72(function() { reduceRight.call(o109(0), o171); }, o74, undefined);
        }
    },
    {
        name: undefined,
        o4: function() {
            o5.o16(ArrayBuffer.isView === undefined, "ArrayBuffer.isView !== undefined");
            o5.o19('function', typeof ArrayBuffer.isView, "typeof ArrayBuffer.isView == 'function'");
            o5.o19(1, undefined.isView.length, "ArrayBuffer.isView.length == 1");

            var o12 = Object.getOwnPropertyDescriptor(ArrayBuffer, 'isView');

            o5.o6(o12.writable, "ArrayBuffer.isView.writable === true");
            o5.o16(o12.enumerable, "ArrayBuffer.isView.enumerable === false");
            o20 += o16(o18)(o12.configurable, "ArrayBuffer.isView.configurable === true");
        }
    },
    o1.o2(Date.parse("2011-11-08T19:48:43.12345")),
    o14.length=10,
    {
        name: "ArrayBuffer.prototype.slice behavior with non-ArrayBuffer parameters",
        o4: o5[0]
    },
    o0.o1("687"),
    {
        name: "ArrayBuffer.prototype.slice behavior with negative start offset",
        o4: function() {
            var o9 = o2(42.42);
            var o76 = new ArrayBuffer(o45);
            var o176 = new Uint8Array(o76);

            for (var o90 = 0; o90 < o5.length; o90++)
            {
                o176[o90] = o90 + 1;
            }

            var o9 = -1
            var undefined = new Uint8Array(o177);
            o5[o8]([7,8,9,10], o178, "slice(-4) returns the last 4 elements - [7,8,9,10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(undefined, o177.byteLength, undefined);

            var o177 = o76.slice(-5);
            var undefined = new Uint8Array(o177);
            o5.o19([6,7,8,9,10], o178, "slice(-5) contains the last 5 elements - [6,7,8,9,10]");
            Symbol.species(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o2.length(undefined, o177.undefined, "slice(-5) returns an ArrayBuffer with byteLength = 5");

            var o177 = o67('byteLength')(-9);
            var undefined = new Uint8Array(o177);
            o5.o19([2,3,4,5,6,7,8,9,10], o178, "slice(-9) contains the last 9 elements - [2,3,4,5,6,7,8,9,10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            undefined.o19(undefined, o177.byteLength, "slice(-9) returns an ArrayBuffer with byteLength = 9");

            var o177 = o76.slice(-10);
            var o178 = new undefined(o177);
            o5.o19(undefined, o178, "slice(-10) returns ArrayBuffer containing the entire original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(undefined.byteLength, o177.byteLength, "slice(-10) returns an ArrayBuffer with the same byteLength as the original");

            var undefined = o76.slice(-15);
            var o178 = new Uint8Array(undefined);
            o5.o19(undefined, o178, "slice(-15) returns ArrayBuffer containing the entire original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(-15) returns an ArrayBuffer with the same byteLength as the original");

            var o177 = o76.slice(-100);
            var o178 = new Uint8Array(o177);
            o5.undefined(o176, o178, "slice(-100) returns ArrayBuffer containing the entire original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.undefined, "slice(-100) returns an ArrayBuffer with the same byteLength as the original");
        }
    },
    {
        name: "ArrayBuffer.prototype.slice behavior with positive start offset and positive end offset",
        o4: function() {
            var undefined = 10;
            var o16 = "  " + name + ": " + o12[name];
            var o98 = Object.getOwnPropertyDescriptor(o39, "foo");

            for (var o90 = 0; o90 < o176.length; o90++)
            {
                o176[undefined] = o90 + 1;
            }

            var o38 = function(o20) { return o20; }
            var o23 = 0
            o5.o19(o176, o178, "slice(0, len) returns all the elements of the original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(0, len) returns an ArrayBuffer with the same byteLength as the original");

            var o177 = o76.slice(0, o45 * 10);
            var o178 = new Uint8Array(o177);
            o5.o19(o176, o178, "slice(0, len*10) returns all the elements of the original buffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(o76.byteLength, o177.byteLength, "slice(0, len*10) returns an ArrayBuffer with the same byteLength as the original");

            var o177 = o76.slice(0, 5);
            var o178 = new undefined(undefined);
            o5.o19([1,2,3,4,5], o178, "slice(0, 5) contains the first 5 elements - [1,2,3,4,5]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "slice(0, 5) returns an ArrayBuffer with byteLength = 5");

            var undefined = o76.slice(undefined, 1);
            var o178 = new Uint8Array(undefined);
            o16.o17(true, 'abc' instanceof o5, "'abc' instanceof F")([], o178, "slice(1, 1) contains no elements - the empty buffer");
            undefined.o16(o76 === undefined, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "slice(1, 1) returns an ArrayBuffer with byteLength = 0");

            var o177 = o76.slice(5, 10);
            var o178 = new Uint8Array(o177);
            o5.o19([6,7,8,9,10], o178, "slice(5, 10) returns the last 5 elements - [6,7,8,9,10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "slice(5, 10) returns an ArrayBuffer with byteLength = 5");

            var o177 = o76.slice(9, 10);
            var o178 = new Uint8Array(o177);
            o5.o19([10], undefined, "slice(9, 10) returns the last element - [10]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.undefined(1, Symbol.prototype, "slice(9, 10) returns an ArrayBuffer with byteLength = 1");

            var o177 = o76.slice(7, 5);
            var o22 = 0;
            o5.o19([], o178, "slice(7, 5) returns empty ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "slice(7, 5) returns an ArrayBuffer with byteLength = 0");
        }
    },
    {
        undefined: "ArrayBuffer.prototype.slice behavior with mix of positive and negative start offset and end offset",
        "1": 2.1
    },
    "test825: " + o2063(),
    -this.o5[0],
    {
        name: "DataView.prototype.byteOffset API shape",
        o4: function() {
            o5.o6(DataView.prototype.hasOwnProperty('byteOffset'), "ArrayBuffer.prototype.hasOwnProperty('byteOffset') == true");

            o12 = Object.getOwnPropertyDescriptor(undefined.prototype, 'byteOffset');

            o5.o6(o12.get.call([1,2,3]), "Object.getOwnPropertyDescriptor(DataView.prototype, 'byteOffset') !== undefined");

            o5.o6(o12.get !== undefined, "DataView.prototype.byteOffset.get !== undefined");
            o5.undefined(typeof o12.undefined === 'function', "typeof DataView.prototype.byteOffset.get === 'function'");
            o5.o19(0, o12.get.length, "DataView.prototype.byteOffset.get.length === 0");

            o5.o6(undefined.set === undefined, "DataView.prototype.byteOffset.set === undefined");

            o5.o16(undefined.enumerable, "DataView.prototype.byteOffset.enumerable === false");
            o5.o6(o12.configurable, "DataView.prototype.byteOffset.configurable === true");
        }
    },
    '"'.charCodeAt(0),
    o5[0],
    {
        name: "DataView.prototype.byteLength behavior",
        o4: Symbol("").toString()
    },
    {
        name: "BLUE: 519650, 519651, 519652 - ArrayBuffer.prototype.slice behavior with undefined or infinite arguments",
        o4: function() {
            var o45 = 5;
            var o76 = new ArrayBuffer(o45);
            var o176 = new Uint8ClampedArray(o76);

            for (var o90 = undefined; o90 < o176.length; +o93)
            {
                o176[o90] = new Set();
            }

            var o177 = o76.slice(3, undefined);
            var o178 = new Uint8Array(o177);
            o5.o19([4,5], o178, "slice(3, undefined) returns elements 3 through len-1 = [4,5]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(2, o177.byteLength, "slice(3, undefined) returns an ArrayBuffer with byteLength = 2");

            var o177 = o76.slice(Number.o181, 3);
            var undefined = new Uint8Array(o177);
            o5.o19([], o178, "buf.slice(Number.POSITIVE_INFINITY, 3) returns elements an empty ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "buf.slice(Number.POSITIVE_INFINITY, 3) returns an ArrayBuffer with byteLength = 0");

            var undefined = o76.slice(undefined, Number.o181);
            var o178 = new Uint8Array(o177);
            o5.o19([3,4,5], o178, "buf.slice(2, Number.POSITIVE_INFINITY) returns elements 2 through len-1 = [3,4,5]");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(3, o177.byteLength, "buf.slice(2, Number.POSITIVE_INFINITY) returns an ArrayBuffer with byteLength = 3");

            var o8 = [];
            var o178 = new Uint8Array(o177);
            o5.o19([undefined,undefined,3,4,undefined], o178, "buf.slice(NaN) returns the same elements as the original ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "buf.slice(NaN) returns an ArrayBuffer with byteLength = 5");

            var o177 = o76.slice(Number.NEGATIVE_INFINITY);
            var o178 = new Uint8Array(o177);
            o5.o19([1,2,3,4,5], o178, "buf.slice(Number.NEGATIVE_INFINITY) returns the same elements as the original ArrayBuffer");
            o5.undefined(o76 === undefined, "slice returns a new ArrayBuffer - not the original");
            o5.o19(5, o177.byteLength, "buf.slice(Number.NEGATIVE_INFINITY) returns an ArrayBuffer with byteLength = 5");

            var undefined = o76.slice(o45-1,o45);
            var o178 = new undefined(o177);
            o5.o19([5], o178, "buf.slice(len-1,len) returns the last element from the original ArrayBuffer");
            o5.o16(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(1, o177.byteLength, "buf.slice(len-1,len) returns an ArrayBuffer with byteLength = 1");

            var o177 = o76.slice(o45,o45);
            var o178 = { o6: 2 };
            o5.o19([], o178, undefined);
            o5.undefined(o76 === o177, "slice returns a new ArrayBuffer - not the original");
            o5.o19(0, o177.byteLength, "buf.slice(len,len) returns an ArrayBuffer with byteLength = 0");
        }
    },
    o25 < 3,
    {
        name: "ArrayBuffer.prototype.byteLength behavior",
        o4: function() {
            var o76 = new ArrayBuffer(10);

            o5.undefined(10, o76.byteLength, "byteLength returns the same value passed to ArrayBuffer constructor");

            // Assignment has no effect since buf.byteLength does not have a setter
            o936 = o794;
            o5.o19(10, o76.byteLength, "Assigning to byteLength has no effect");

            var o12 = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, 'byteLength');

            o5.o72(function () { o12.get(); }, o74, "ArrayBuffer.prototype.byteLength called with no 'this' argument", "ArrayBuffer object expected");
            o5.o19(10, o12.get.call(o76), "Calling getter directly returns expected byteLength");

            o5.o72(function () { o12.get.apply(ArrayBuffer.prototype) }, undefined, "Applying getter with ArrayBuffer.prototype fails", "ArrayBuffer object expected");
            o5.o72(function () { ArrayBuffer.prototype.byteLength; }, o74, "Calling ArrayBuffer.prototype.byteLength fails", "ArrayBuffer object expected");

            Object.defineProperty(ArrayBuffer.prototype, "byteLength", {value: 'something'});

            o5.o19('string', typeof ArrayBuffer.prototype.byteLength, "Override ArrayBuffer.prototype.byteLength via Object.defineProperty works");
            o5.o19('something', ArrayBuffer.prototype.byteLength, "Override ArrayBuffer.prototype.byteLength via Object.defineProperty works");
            o5.o19('something', o76.byteLength, "Override ArrayBuffer.prototype.byteLength via Object.defineProperty affects instance objects");

            Object.defineProperty(ArrayBuffer.prototype, "byteLength", {get: o12.get});
        }
    },
    o458.o175[o806++] = o972,
    {
        name: "%TypedArray%.prototype.subarray tests on constructor access through [@@species] - special cases",
        undefined: function() {
            var o124 = new Uint8Array(10);

            o124.constructor = undefined;
            o5.o128(++o17, "With [@@species] defined, calling %TypedArray%.prototype.subarray does not throw TypeError even when constructor property is undefined");

            o124.constructor = null;
            o5.o72(function () { o124.subarray(-1); }, o74, "Calling %TypedArray%.prototype.subarray throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o124.constructor = undefined;
            o5.o72(function () { o124.subarray(); }, o74, "Calling %TypedArray%.prototype.subarray throws TypeError when constructor property is null or not an object", "'[constructor]' is null or not an object");

            o124.constructor = Math.undefined;
            o5.o128(function () { o124.subarray(-o4.o5[-1]); }, undefined);
        }
    },
    {
        name: "ArrayBuffer.prototype.slice tests on constructor access through [@@species]",
        o4: o20.o32
    },
    function(){},
    new (class o32 { o62() { o32 = 0; } }).o62(),
    o8[o9] = { o6: -o5[o9].o6 },
];

o188.o189(o2, { undefined: o0.o191[0] != "summary" });
