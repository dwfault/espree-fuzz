//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");

var o2 = [
   {
       name: "Concat toLength tests",
       o4: function ()
       {
            var o5 = [];
            o5[0] = 1;
            o5[4294967293] = 2;
            var o6 = { length : -1, 0 : 3, 1: 4, [Symbol.isConcatSpreadable] : true};
            o5 = o5.concat(o6);
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
            var o15 = { length : 4294967296, 4294967294 : 2, 4294967295: 3 };
            var o16 = Math.o18(2,53)-1;
            var o19 = { length : o16, [o16-2] : 2, [o16-1]: 3 };
            var o6 = { length : -1, [-5] : 2, [-2]: 3 };

            o11.o12(4294967294,o14.indexOf(2, 4294967290), "confirm we can find value 2 in the index range given");
            o11.o12(-1,o14.indexOf(3, 4294967290), "indexOf on an array is bound by array max length");
            o11.o12(-1,o14.indexOf(4, 4294967290), "indexOf on an array is bound by array max length");

            o11.o12(4294967294,Array.prototype.indexOf.call(o15, 2, 4294967290), "confirm we can find value 2 in the index range given");
            o11.o12(4294967295,Array.prototype.indexOf.call(o15, 3, 4294967290), "objects don't have a bounded length so we should find the index given any length");
            var o15 = { length : 4294967297, 4294967294 : 2, 4294967295: 3, 4294967296: 4};
            o11.o12(4294967296,Array.prototype.indexOf.call(o15, 4, 4294967290), "objects don't have a bounded length so we should find the index given any length");

            o11.o12(o16-2,Array.prototype.indexOf.call(o19, 2, o16-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
            o11.o12(o16-2,Array.prototype.indexOf.call(o19, 2, o16-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
            o11.o12(o16-1,Array.prototype.indexOf.call(o19, 3, o16-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
            o11.o12(o16-1,Array.prototype.indexOf.call(o19, 3, o16-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");

            o11.o12(-1, Array.prototype.indexOf.call(o6,2), "confirm negative lengths are coerced to 0, so we should not find any of these indices");

            //Note a.indexOf(2) will spin for a very long time, we should probably Consider enumerating instead of walking all indices
       }
   },
   {
       name: "Reverse toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 0;
            o14[4294967294] = 1;
            o14.reverse();
            o14[4294967295] = 2;
            o14[4294967296] = 3;
            o11.o12(1, o14[0], " confirm reverse still happens on the bounds of an array");
            o11.o12(0, o14[4294967294], " confirm reverse still happens on the bounds of an array");

            o14.reverse();
            o11.o12(0, o14[0]," confirm reverse still happens on the bounds of an array");
            o11.o12(1, o14[4294967294], " confirm reverse still happens on the bounds of an array");
            o11.o12(2, o14[4294967295], "index 4294967295 is beyond the bounds of an array so it does not reverse");
            o11.o12(3, o14[4294967296], "index 4294967296 is beyond the bounds of an array so it does not reverse");

            var o15 = { length : -1, 4294967294 : 1, 0: 0 };
            Array.prototype.reverse.call(o15);
            o11.o12(0, o15[0], "confirm length does not get converted to 4294967295");
            o11.o12(1, o15[4294967294],"confirm length does not get converted to 4294967295");
            o11.o12(-1,o15.length, "length returns -1");

            // Note it is not practical to reverse an object length 4294967295 or larger since we will hit an
            // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
            // but at the moment it is not a real world scenario.
       }
   },
   {
       name: "Shift toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 0;
            o14[4294967294] = 2;
            o14[4294967295] = 3;
            o14[4294967296] = 4;

            var o15 = { length : -1, 4294967294 : 1, 0: 0 };

            var o25 = o14.shift();
            o11.o12(0, o25);
            o11.o12(undefined, o14[0]);
            o11.o12(undefined, o14[4294967294], "confirm 4294967294 is now empty after shift");
            o11.o12(2, o14[4294967293], "confirm 4294967293 now has contents of index 4294967294 after shift");
            o11.o12(3, o14[4294967295], "confirm index 4294967295 does not shift because it is past array length max");
            o11.o12(4, o14[4294967296], "confirm index 4294967296 does not shift because it is past array length max");

            Array.prototype.shift.call(o15);
            o11.o12(0, o15[0], "confirm length does not get converted to 4294967295");
            o11.o12(1, o15[4294967294],"confirm length does not get converted to 4294967295");

            // Note it is not practical to shift an object length 4294967295 or larger since we will hit an
            // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
            // but at the moment it is not a real world scenario.

       }
   },
   {
       name: "UnShift toLength tests",
       o4: function ()
       {
            /*var o = {
                0 : 0,
                4294967294 : 2,
                4294967295 : 3,
                4294967296 : 4,
                length : 4294967297
                }//consider property enumeration*/

            var o15 = { length : -1, 4294967294 : 1, 0: 0 };
            Array.prototype.unshift.call(o15, -1);
            o11.o12(-1, o15[0], "confirm length does not get converted to 4294967295");
            o11.o12(undefined, o15[1], "since length was negative, we can not account for any indicies we over write and so 0 does not shift down");
            o11.o12(1, o15["length"], "confirm length does not get converted to 4294967295 and instead is updated after an unshift");
            o11.o12(1, o15[4294967294],"length will not account this because we added it when length was invalid");

            // Note it is not practical to unshift an object length 4294967295 or larger since we will hit an
            // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
            // but at the moment it is not a real world scenario.

       }
   },
   {
       name: "Push toLength tests",
       o4: function ()
       {
            var o28 = {
                0 : 0,
                4294967294 : 2,
                4294967295 : 3,
                4294967296 : 4,
                length : 4294967297
                }
            o11.o12(4294967297, o28.length, "confirm length is 4294967297");
            Array.prototype.push.call(o28,5);
            o11.o12(5, o28[4294967297]);
            o11.o12(4294967298, o28.length, "confirm length incremented by 1");
            Array.prototype.push.call(o28,6,7);
            o11.o12(6, o28[4294967298]);
            o11.o12(7, o28[4294967299]);
            o11.o12(4294967300, o28.length, "confirm length incremented by 2");
       }
   },
   {
       name: "Pop toLength tests",
       o4: function ()
       {
            var o28 = {
                0 : 0,
                4294967294 : 2,
                4294967295 : 3,
                4294967296 : 4,
                length : 4294967297
                }
            var o30 = Array.prototype.pop.call(o28);
            o11.o12(4, o30);
            o11.o12(4294967296, o28.length, "confirm length decremented by 1");
            var o30 = Array.prototype.pop.call(o28);
            o11.o12(3, o30);
            o11.o12(4294967295, o28.length, "confirm length decremented by 1");
            var o30 = Array.prototype.pop.call(o28);
            o11.o12(2, o30);
            o11.o12(4294967294, o28.length, "confirm length decremented by 1");
            var o30 = Array.prototype.pop.call(o28);
            o11.o12(undefined, o30, "pop decrements by one so and we already popped off the top part of this sparse object");
            o11.o12(4294967293, o28.length, "confirm length decremented by 1");

            var o15 = { length : -1, 4294967294 : 1, 0: 0 };
            var o30 = Array.prototype.pop.call(o15);
            o11.o12(undefined,o30, "confirm we were unable to pop anything because -1 length no longer converts to uint max and instead is coerced to 0");
            o11.o12(0, o15[0], "nothing was popped because of invalid length");
            o11.o12(1, o15[4294967294], "nothing was popped because of invalid length");
            o11.o12(0, o15.length, "length should get set to 0");

            var o14 = [0]
            o14[4294967294] = 2;
            o14[4294967295] = 3;
            o14[4294967296] = 4;
            o11.o12(4294967295, o14.length, "length is at max");
            var o30 = o14.pop();
            o11.o12(2, o30, "confirm we start popping at index 4294967294 and get value 2 from it");
            o11.o12(4294967294, o14.length, "confirm length decremented by 1");
       }
   },
   {
       name: "Slice toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 0;
            o14[4294967294/2] = 1;
            o14[4294967294] = 2;
            o14[4294967295] = 3;
            o14[4294967296] = 4;
            var o15 = { length : 4294967296, 4294967294 : 2, 4294967295: 3 };
            var o6 = { length : -1, [-5] : 2, [-2]: 3 };

            var o32  = o14.slice();
            var o34 = o14.slice(0,4294967294/2 +1);
            var o35  = o14.slice(4294967294/2,4294967295);

            o11.o12(o14[0], o32[0]);
            o11.o12(o14[4294967294/2], o32[4294967294/2]);
            o11.o12(o14[4294967294], o32[4294967294]);
            o11.o12(undefined, o32[4294967295], "slice only copies indices up to uint32max");
            o11.o12(undefined, o32[4294967296], "slice only copies indices up to uint32max");

            o11.o12(o14[0], o34[0]);
            o11.o12(o14[4294967294/2], o34[4294967294/2]);

            o11.o12(o14[4294967294/2], o35[0]);
            o11.o12(o14[4294967294],   o35[4294967294/2]);

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
   {
       name: "Splice toLength tests",
       o4: function ()
       {
            //TODO when we change splice
       }
   },
   {
       name: "Every toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 0;
            o14[4294967294/2] = 1;
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
            var o6 = { length : -1, [-5] : 2, [-2]: 3 };
            o11.o12(true, Array.prototype.every.call(o6, o38), "oNeg has length coerced 0, so we never find an index that proves our comparison false");

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       }
   },
   {
       name: "Some toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 1;
            o14[4294967294/2] = 1;
            o14[4294967294] = 2;
            o14[4294967295] = 3;
            function o38(o39, index, o41)
            {
                return o39 %2 == 0;
            }
            //a.some(isEven); // same issue as Map, ForEach, Filter, & Every
                               // not as bad as Array.prototype.every because we can quit as soon as we find a true case
            var o6 = { length : -1, [-5] : 2, [-2]: 3 };
            o11.o12(false, Array.prototype.some.call(o6, o38), "oNeg has length coerced 0, so we never find an index that proves our comparison true");

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       }
   },
      {
       name: "ForEach toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 1;
            o14[4294967294/2] = 2;
            o14[4294967294] = 3;
            o14[4294967295] = 4;
            var o44 = 0;
            function o45(o39, index, o41) {
                o44 += o39;
            }

            //a.forEach(summation); // same issue as Map, Filter, Some, & Every
            //assert.areEqual(6,sum);
            o44 = 0;
            var o6 = { length : -1, [-5] : 2, [-2]: 3 };
            Array.prototype.forEach.call(o6, o45);
            o11.o12(0,o44,"oNeg has length coerced 0, so we never perform a summation");

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       }
   },
      {
       name: "Map toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 1;
            o14[4294967294/2] = 4;
            o14[4294967294] = 9;
            o14[4294967295] = 16;
            //var b = a.map(Math.sqrt); // same issue as ForEach, Some, & Every
            var o6 = { length : -1, [-5] : 2, [-2]: 3 };
            o11.o12([], Array.prototype.map.call(o6, Math.sqrt));

            var o15 = { length : 4294967296, 4294967294 : 4, 4294967295: 9 };
            o11.o36(function() { Array.prototype.map.call(o15, Math.sqrt); }, o37, "Map can't make an array larger than the array max length", "Array length must be a finite positive integer");

            // If we change the Array species it does not throw but its to slow to test
            /*class MyArray extends Array {
                // Overwrite species to the parent Array constructor
                static get [Symbol.species]() { return Object; }
            }
            var myArr = new MyArray();
            myArr[0] = 0;
            myArr[4294967294] = 1;
            myArr[4294967295] = 2;
            Array.prototype.map.call(myArr, Math.sqrt);*/
       }
   },
   {
       name: "Filter toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 1;
            o14[4294967294/2] = 4;
            o14[4294967294] = 9;
            o14[4294967295] = 16;

            function o49(o39)
            {
                return o39 > 5;
            }
            //a.filter(biggerThanFive); // same issue as Map, ForEach, Some, & Every
            var o6 = { length : -1, [-5] : 2, [-2]: 3 };
            o11.o12([], Array.prototype.filter.call(o6, o49));
       }
   },
   {
       name: "Reduce toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 1;
            o14[4294967294/2] = 2;
            o14[4294967294] = 3;
            o14[4294967295] = 4;
            var o44 = function(o14, o51) {
                return o14 + o51;
            }
            // a.reduce(sum); // same issue as Map, ForEach, Filter, Some, & Every

            var o6 = { length : -1, [-5] : 2, [-2]: 3 };
            o11.o36(function() { Array.prototype.reduce.call(o6, o44)},o53,"Reduce needs a length greater than 0","Object doesn't support this action");
       }
   },
   {
       name: "ReduceRight toLength tests",
       o4: function ()
       {
            var o14 = [];
            o14[0] = 1;
            o14[4294967294/2] = 2;
            o14[4294967294] = 3;
            o14[4294967295] = 4;
            var o44 = function(o14, o51) {
                return o14 + o51;
            }
            // a.reduceRight(sum); // same issue as Reduce, Map, ForEach, Filter, Some, & Every

            var o6 = { length : -1, [-5] : 2, [-2]: 3 };
            o11.o36(function() { Array.prototype.reduceRight.call(o6, o44)},o53,"Reduce needs a length greater than 0","Object doesn't support this action");
       }
   },
];

o55.o56(o2, { o57: o0.o58[0] != "summary" });
