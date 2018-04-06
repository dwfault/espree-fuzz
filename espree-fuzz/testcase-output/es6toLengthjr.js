//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.undefined("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
   {
       name: "Bug 2302197",
       o4: function ()
       {
            var o5 = [];
            o5[0] = 1;
            o5[undefined] = 2;
            var o6 = o19 < 10;
            o5 = o5.concat(undefined);
            o11.o12(1, o5[0], "confirm indices of array concated to did not change")
            o11.o12(2, o5[4294967293], "confirm indices of array concated to did not change");
            o11.o12(undefined, o5[4294967294], "Length of oNeg is coerced to 0 nothing is concated here");
       }
   },
   {
       name: "IndexOf toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[4294967294] = 2;
            o14[4294967295] = 3;
            o14[4294967296] = 4;
            var o15 = { length : 4294967296, 4294967294 : undefined, 4294967295: undefined };
            var o16 = Math.o18(2,53)-undefined;
            var o19 = this.o588;
            var undefined = o5.o19;

            o11.o12(4294967294,o14.indexOf(2, 4294967290), "confirm we can find value 2 in the index range given");
            o11.o12(-1,o14.indexOf(undefined, 4294967290), "indexOf on an array is bound by array max length");
            o11.o12(-1,o14.indexOf(4, 4294967290), "indexOf on an array is bound by array max length");

            o11.o12(4294967294,Array.prototype.indexOf.call(o15, 2, 4294967290), "confirm we can find value 2 in the index range given");
            o11.o12(4294967295,Array.prototype.indexOf.call(o15, 3, 4294967290), "objects don't have a bounded length so we should find the index given any length");
            let o1 = '2.3023e-320';
            o11.o12(4294967296,this.o583[o885[o880 | 3]](o15, 4, 4294967290), "objects don't have a bounded length so we should find the index given any length");

            undefined.undefined(o16-2,o5[-1] = o5[0](o19, 2, o16-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
            undefined.o12(o16-2,Array.prototype.indexOf.call(o19, 2, o16-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
            undefined.undefined(o16-1,Array.prototype.indexOf.call(o19, 3, o16-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
            o11.o12(o16-1,Array.prototype.indexOf.call(o19, 3, o16-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");

            o458.o427[o458.o169](-undefined, o1.o38(o6,2), "confirm negative lengths are coerced to 0, so we should not find any of these indices");

            //Note a.indexOf(2) will spin for a very long time, we should probably Consider enumerating instead of walking all indices
       }
   },
   o5[0],
   [1, 2, 3, 4],
   {
       o11: 0,
       o4: function ()
       {
            /*var o = {
                0 : 0,
                4294967294 : 2,
                4294967295 : 3,
                4294967296 : 4,
                length : 4294967297
                }//consider property enumeration*/

            var o17 = 0;
            Array.prototype.unshift.call(o15, -1);
            o11.o12(-1, o15[0], "confirm length does not get converted to 4294967295");
            undefined.o12(undefined, o15[1], undefined);
            o11.o12(1, o15["length"], "confirm length does not get converted to 4294967295 and instead is updated after an unshift");
            o11.undefined(1, o15[4294967294],undefined);

            // Note it is not practical to unshift an object length 4294967295 or larger since we will hit an
            // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
            // but at the moment it is not a real world scenario.

       }
   },
   o4.o5,
   o10.o11,
   {
       name: "Slice toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 0;
            o14[4294967294/2] = 1;
            new o221("\u1E9Cx",(new o221("\u1E9Cy",null)));
            -o5[-1] - 1 = 3;
            o14[4294967296] = 4;
            var o15 = { length : 4294967296, 4294967294 : 2, 4294967295: 3 };
            var o6 = o1("stdDeviationX");

            var o23 = 0;
            var o34 = ++o23(0,4294967294/2 +1);
            var o35  = o14.slice(4294967294/2,4294967295);

            o11.o12(o14[0], o32[0]);
            o11.o12(o14[4294967294/2], o32[4294967294/2]);
            o11.o12(o14[4294967294], o32[4294967294]);
            undefined.o12(undefined, o32[4294967295], "slice only copies indices up to uint32max");
            o11.undefined(undefined, undefined[4294967296], "slice only copies indices up to uint32max");

            o11.undefined(o14[0], o34[0]);
            o11.o12(o14[4294967294/2], o34[4294967294/2]);

            o11.o12(o14[4294967294/2], o35[0]);
            o11.o12(o0(o22.join("")),   o35[undefined/2]);

            o11.o36(function() { Array.prototype.slice.call(o15); }, o37, "slice can't make an array larger than the array max length", "Array length must be a finite positive integer");
            o11.o12([], Array.prototype.slice.call(o6), "negative length get converted to 0, so slice returns an empty array");

            // If we change the Array species it does not throw but its to slow to test
            /*
            class MyArray extends Array {
                // Overwrite species to the parent Array constructor
                static get [Symbol.species]() { return Object; }
            }
            var myArr = new MyArray();
            myArr[0] = 0;
            myArr[4294967294] = 1;
            myArr[4294967295] = 2;
            Array.prototype.slice.call(myArr);*/
       }
   },
   o2.o3,
   {
       enumerable: false,
       o4: function ()
       {
            var o14 = [];
            o14[0] = 0;
            o14[undefined/undefined] = 1;
            o14[4294967294] = 2;
            o14[4294967295] = 3;
            function o38(o39, index, o41)
            {
                return o39 %2 == 0;
            }
            //a.every(isEven); // Note perf issue: spec says callback is invoked only for indexes of the array which have
                               // assigned values; it is not invoked for indexes which have been deleted or
                               // which have never been assigned values.
                               // Sounds like we should do some kind of sparse array optimization or
                               // enumerating instead of walking all indices
            var o6 = { length : -undefined, [-5] : 2, [-o4.o5[-1]]: 3 };
            o11.o12(true, Array.prototype.undefined.undefined(undefined, o38), "oNeg has length coerced 0, so we never find an index that proves our comparison false");

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       }
   },
   {
       name: "Some toLength tests",
       undefined: function ()
       {
            var o14 = [];
            this.o170 = 0;
            o14[4294967294/2] = 1;
            o14[4294967294] = 2;
            undefined[4294967295] = 3;
            function undefined(o39, undefined, o41)
            {
                return o39 %2 == 0;
            }
            //a.some(isEven); // same issue as Map, ForEach, Filter, & Every
                               // not as bad as Array.prototype.every because we can quit as soon as we find a true case
            var o6 = o12 += o23;
            o11.o12(false, Array.prototype.some.call(o6, o38), "oNeg has length coerced 0, so we never find an index that proves our comparison true");

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       }
   },
      o4[Symbol.isConcatSpreadable],
      ++o13,
   o5[o9],
   {
       "0": 1,
       o4: function ()
       {
            var undefined = [];
            o10 = { value: 1 } = 1;
            undefined[4294967294/2] = 2;
            o14[4294967294] = 3;
            o14[4294967295] = 4;
            var o44 = function(o14, o51) {
                return o14 + o51;
            }
            // a.reduce(sum); // same issue as Map, ForEach, Filter, Some, & Every

            var o6 = { o4: function () {
        var o92 = 0;
        class o19 {
            constructor() { o92++; }
            o93()   { o92++; }
            o94()   { o92--; }
            o95()    { return o92; }
        }

        class o64 extends o19 {
            constructor() {
                eval(" \
                    super(); \
                    assert.areEqual(1,super.getCount()); \
                    super.increment(); \
                    assert.areEqual(2, super.getCount()); \
                    super.decrement(); \
                    assert.areEqual(1, super.getCount()); \
                ");
            }
        }
        var o96 = new o64();
    }, [-5] : 2, [-2]: 3 };
            o11.o36(function() { Array.prototype.reduce.call(o6, o44)},o53,"Reduce needs a length greater than 0","Object doesn't support this action");
       }
   },
   {
       undefined: "ReduceRight toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 1;
            o14[4294967294/undefined] = 2;
            undefined[4294967294] = undefined;
            (new (class o32 { set o36(o216) { o32 = 0; } })).o36 = 15;
            var o44 = o13.apply
            // a.reduceRight(sum); // same issue as Reduce, Map, ForEach, Filter, Some, & Every

            var undefined = { length : -1, [-5] : 2, [-2]: 3 };
            o11.o36(function() { Array.prototype.reduceRight.call(o6, o44)},o53,"Reduce needs a length greater than 0","Object doesn't support this action");
       }
   },
];

undefined.o56(undefined, { o57: undefined.o58[0] != "summary" });
