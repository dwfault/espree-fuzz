//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o479.o500.o662("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

var o2 = [
   o474.o595(o31),
   {
       name: "IndexOf toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
Object.keys = 2;
}catch(e){}
            try {
o8[4294967295] = 3;
}catch(e){}
            try {
Function.prototype[Symbol.hasInstance]o8[4294967296]o1[4294967296] = 4;
}catch(e){}
            var o9 = write(-0 >= new String(''));
            var o10 = prototype.o11(2,53)-1;
            var o12 = { length : o10, [o10-2] : 2, [o10-1]: 3 };
            var o5 = { length : -1, [-5] : 2, [-2]: 3 };

            try {
o6.o7(4294967294,o8.indexOf(2, 4294967290), "confirm we can find value 2 in the index range given");
}catch(e){}
            try {
o6.o7(-1,o8.indexOf(3, 4294967290), "indexOf on an array is bound by array max length");
}catch(e){}
            try {
o6.o7(-1,o8.indexOf(4, 4294967290), "indexOf on an array is bound by array max length");
}catch(e){}

            try {
o6.o7(4294967294,Array.prototype.indexOf.call(o9, 2, 4294967290), "confirm we can find value 2 in the index range given");
}catch(e){}
            try {
o6.o7(4294967295,Array.prototype.indexOf.call(o9, 3, 4294967290), "objects don't have a bounded length so we should find the index given any length");
}catch(e){}
            var o9 = { length : 4294967297, 4294967294 : 2, 4294967295: 3, 4294967296: 4};
            try {
o6.o7(4294967296,Array.prototype.indexOf.call(o9, 4, 4294967290), "objects don't have a bounded length so we should find the index given any length");
}catch(e){}

            try {
o6.o7(o10-2,Array.prototype.indexOf.call(o12, 2, o10-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
}catch(e){}
            try {
o6.o7(o10-2,Array.prototype.indexOf.call(o12, 2, o10-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
}catch(e){}
            try {
o6.o7(o10-1,Array.prototype.indexOf.call(o12, 3, o10-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
}catch(e){}
            try {
o6.o7(o10-1,Array.prototype.indexOf.call(o12, 3, o10-10), "confirm indexOf can have an index up to length set to the max integer without loss of precision");
}catch(e){}

            try {
o6.o7(-1, Array.prototype.indexOf.call(o5,2), "confirm negative lengths are coerced to 0, so we should not find any of these indices");
}catch(e){}

            //Note a.indexOf(2) will spin for a very long time, we should probably Consider enumerating instead of walking all indices
       }
   },
   {
       name: "Reverse toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 0;
}catch(e){}
            try {
o8[4294967294] = 1;
}catch(e){}
            try {
o8.reverse();
}catch(e){}
            try {
o8[4294967295] = 2;
}catch(e){}
            try {
o8[4294967296] = 3;
}catch(e){}
            try {
o6.o7(1, o8[0], " confirm reverse still happens on the bounds of an array");
}catch(e){}
            try {
o6.o7(0, o8[4294967294], " confirm reverse still happens on the bounds of an array");
}catch(e){}

            try {
o8.reverse();
}catch(e){}
            try {
o6.o7(0, o8[0]," confirm reverse still happens on the bounds of an array");
}catch(e){}
            try {
o6.o7(1, o8[4294967294], " confirm reverse still happens on the bounds of an array");
}catch(e){}
            try {
o6.o7(2, o8[4294967295], "index 4294967295 is beyond the bounds of an array so it does not reverse");
}catch(e){}
            try {
o6.o7(3, o8[4294967296], "index 4294967296 is beyond the bounds of an array so it does not reverse");
}catch(e){}

            var o9 = { length : -1, 4294967294 : 1, 0: 0 };
            try {
Array.prototype.reverse.call(o9);
}catch(e){}
            try {
o6.o7(0, o9[0], "confirm length does not get converted to 4294967295");
}catch(e){}
            try {
o6.o7(1, o9[4294967294],"confirm length does not get converted to 4294967295");
}catch(e){}
            try {
o6.o7(-1,o9.length, "length returns -1");
}catch(e){}

            // Note it is not practical to reverse an object length 4294967295 or larger since we will hit an
            // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
            // but at the moment it is not a real world scenario.
       }
   },
   o64 | 0,
   {
       name: "UnShift toLength tests",
       o3: function ()
       {
            /*var o = {
                0 : 0,
                4294967294 : 2,
                4294967295 : 3,
                4294967296 : 4,
                length : 4294967297
                }//consider property enumeration*/

            var o9 = { length : -1, 4294967294 : 1, 0: 0 };
            try {
Array.prototype.unshift.call(o9, -1);
}catch(e){}
            try {
o6.o7(-1, o9[0], "confirm length does not get converted to 4294967295");
}catch(e){}
            try {
o6.o7(undefined, o9[1], "since length was negative, we can not account for any indicies we over write and so 0 does not shift down");
}catch(e){}
            try {
o6.o7(1, o9["length"], "confirm length does not get converted to 4294967295 and instead is updated after an unshift");
}catch(e){}
            try {
o6.o7(1, o9[4294967294],"length will not account this because we added it when length was invalid");
}catch(e){}

            // Note it is not practical to unshift an object length 4294967295 or larger since we will hit an
            // Out of memory exception before computation ever completes. As a result we will have a test coverage hole,
            // but at the moment it is not a real world scenario.

       }
   },
   {
       name: "Push toLength tests",
       o3: function ()
       {
            var o14 = {
                0 : 0,
                4294967294 : 2,
                4294967295 : 3,
                4294967296 : 4,
                length : 4294967297
                }
            try {
o6.o7(4294967297, o14.length, "confirm length is 4294967297");
}catch(e){}
            try {
Array.prototype.push.call(o14,5);
}catch(e){}
            try {
o6.o7(5, o14[4294967297]);
}catch(e){}
            try {
o6.o7(4294967298, o14.length, "confirm length incremented by 1");
}catch(e){}
            try {
Array.prototype.push.call(o14,6,7);
}catch(e){}
            try {
o6.o7(6, o14[4294967298]);
}catch(e){}
            try {
o6.o7(7, o14[4294967299]);
}catch(e){}
            try {
o6.o7(4294967300, o14.length, "confirm length incremented by 2");
}catch(e){}
       }
   },
   {
       name: "Pop toLength tests",
       o3: function ()
       {
            var o14 = {
                0 : 0,
                4294967294 : 2,
                4294967295 : 3,
                4294967296 : 4,
                length : 4294967297
                }
            var o15 = Array.prototype.pop.call(o14);
            try {
o6.o7(4, o15);
}catch(e){}
            try {
o6.o7(4294967296, o14.length, "confirm length decremented by 1");
}catch(e){}
            var o15 = Array.prototype.pop.call(o14);
            try {
o6.o7(3, o15);
}catch(e){}
            try {
o6.o7(4294967295, o14.length, "confirm length decremented by 1");
}catch(e){}
            var o15 = Array.prototype.pop.call(o14);
            try {
o6.o7(2, o15);
}catch(e){}
            try {
o6.o7(4294967294, o14.length, "confirm length decremented by 1");
}catch(e){}
            var o15 = Array.prototype.pop.call(o14);
            try {
o6.o7(undefined, o15, "pop decrements by one so and we already popped off the top part of this sparse object");
}catch(e){}
            try {
o6.o7(4294967293, o14.length, "confirm length decremented by 1");
}catch(e){}

            var o9 = { length : -1, 4294967294 : 1, 0: 0 };
            var o15 = Array.prototype.pop.call(o9);
            try {
o6.o7(undefined,o15, "confirm we were unable to pop anything because -1 length no longer converts to uint max and instead is coerced to 0");
}catch(e){}
            try {
o6.o7(0, o9[0], "nothing was popped because of invalid length");
}catch(e){}
            try {
o6.o7(1, o9[4294967294], "nothing was popped because of invalid length");
}catch(e){}
            try {
o6.o7(0, o9.length, "length should get set to 0");
}catch(e){}

            var o8 = [0]
            try {
o8[4294967294] = 2;
}catch(e){}
            try {
o8[4294967295] = 3;
}catch(e){}
            try {
o8[4294967296] = 4;
}catch(e){}
            try {
o6.o7(4294967295, o8.length, "length is at max");
}catch(e){}
            var o15 = o8.pop();
            try {
o6.o7(2, o15, "confirm we start popping at index 4294967294 and get value 2 from it");
}catch(e){}
            try {
o6.o7(4294967294, o8.length, "confirm length decremented by 1");
}catch(e){}
       }
   },
   {
       name: "Slice toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 0;
}catch(e){}
            try {
o8[4294967294/2] = 1;
}catch(e){}
            try {
o8[4294967294] = 2;
}catch(e){}
            try {
o8[4294967295] = 3;
}catch(e){}
            try {
o8[4294967296] = 4;
}catch(e){}
            var o9 = { length : 4294967296, 4294967294 : 2, 4294967295: 3 };
            var o5 = { length : -1, [-5] : 2, [-2]: 3 };

            var o16  = o8.slice();
            var o17 = o8.slice(0,4294967294/2 +1);
            var o18  = o8.slice(4294967294/2,4294967295);

            try {
o6.o7(o8[0], o16[0]);
}catch(e){}
            try {
o6.o7(o8[4294967294/2], o16[4294967294/2]);
}catch(e){}
            try {
o6.o7(o8[4294967294], o16[4294967294]);
}catch(e){}
            try {
o6.o7(undefined, o16[4294967295], "slice only copies indices up to uint32max");
}catch(e){}
            try {
o6.o7(undefined, o16[4294967296], "slice only copies indices up to uint32max");
}catch(e){}

            try {
o6.o7(o8[0], o17[0]);
}catch(e){}
            try {
o6.o7(o8[4294967294/2], o17[4294967294/2]);
}catch(e){}

            try {
o6.o7(o8[4294967294/2], o18[0]);
}catch(e){}
            try {
o6.o7(o8[4294967294],   o18[4294967294/2]);
}catch(e){}

            try {
o6.o19(function() { try {
Array.prototype.slice.call(o9);
}catch(e){} }, o20, "slice can't make an array larger than the array max length", "Array length must be a finite positive integer");
}catch(e){}
            try {
o6.o7([], Array.prototype.slice.call(o5), "negative length get converted to 0, so slice returns an empty array");
}catch(e){}

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
       o3: function ()
       {
            //TODO when we change splice
       }
   },
   {
       name: "Every toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 0;
}catch(e){}
            try {
o8[4294967294/2] = 1;
}catch(e){}
            try {
o8[4294967294] = 2;
}catch(e){}
            try {
o8[4294967295] = 3;
}catch(e){}
            function o21(o22, index, o23)
            {
                try {
return o22 %2 == 0;
}catch(e){}
            }
            //a.every(isEven); // Note perf issue: spec says callback is invoked only for indexes of the array which have
                               // assigned values; it is not invoked for indexes which have been deleted or
                               // which have never been assigned values.
                               // Sounds like we should do some kind of sparse array optimization or
                               // enumerating instead of walking all indices
            var o5 = { length : -1, [-5] : 2, [-2]: 3 };
            try {
o6.o7(true, Array.prototype.every.call(o5, o21), "oNeg has length coerced 0, so we never find an index that proves our comparison false");
}catch(e){}

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       }
   },
   {
       name: "Some toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 1;
}catch(e){}
            try {
o8[4294967294/2] = 1;
}catch(e){}
            try {
o8[4294967294] = 2;
}catch(e){}
            try {
o8[4294967295] = 3;
}catch(e){}
            function o21(o22, index, o23)
            {
                try {
return o22 %2 == 0;
}catch(e){}
            }
            //a.some(isEven); // same issue as Map, ForEach, Filter, & Every
                               // not as bad as Array.prototype.every because we can quit as soon as we find a true case
            var o5 = { length : -1, [-5] : 2, [-2]: 3 };
            try {
o6.o7(false, Array.prototype.some.call(o5, o21), "oNeg has length coerced 0, so we never find an index that proves our comparison true");
}catch(e){}

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       }
   },
      {
       name: "ForEach toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 1;
}catch(e){}
            try {
o8[4294967294/2] = 2;
}catch(e){}
            try {
o8[4294967294] = 3;
}catch(e){}
            try {
o8[4294967295] = 4;
}catch(e){}
            var o24 = 0;
            function o25(o22, index, o23) {
                try {
o24 += o22;
}catch(e){}
            }

            //a.forEach(summation); // same issue as Map, Filter, Some, & Every
            //assert.areEqual(6,sum);
            try {
o24 = 0;
}catch(e){}
            var o5 = { length : -1, [-5] : 2, [-2]: 3 };
            try {
Array.prototype.forEach.call(o5, o25);
}catch(e){}
            try {
o6.o7(0,o24,"oNeg has length coerced 0, so we never perform a summation");
}catch(e){}

            // Given that is not practical to write tests for arrays with boundary numbers I'm not going to bother with typed Arrays and other objects
       }
   },
      {
       name: "Map toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 1;
}catch(e){}
            try {
o8[4294967294/2] = 4;
}catch(e){}
            try {
o8[4294967294] = 9;
}catch(e){}
            try {
o8[4294967295] = 16;
}catch(e){}
            //var b = a.map(Math.sqrt); // same issue as ForEach, Some, & Every
            var o5 = { length : -1, [-5] : 2, [-2]: 3 };
            try {
o6.o7([], Array.prototype.map.call(o5, Math.sqrt));
}catch(e){}

            var o9 = { length : 4294967296, 4294967294 : 4, 4294967295: 9 };
            try {
o6.o19(function() { try {
Array.prototype.map.call(o9, Math.sqrt);
}catch(e){} }, o20, "Map can't make an array larger than the array max length", "Array length must be a finite positive integer");
}catch(e){}

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
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 1;
}catch(e){}
            try {
o8[4294967294/2] = 4;
}catch(e){}
            try {
o8[4294967294] = 9;
}catch(e){}
            try {
o8[4294967295] = 16;
}catch(e){}

            function o26(o22)
            {
                try {
return o22 > 5;
}catch(e){}
            }
            //a.filter(biggerThanFive); // same issue as Map, ForEach, Some, & Every
            var o5 = { length : -1, [-5] : 2, [-2]: 3 };
            try {
o6.o7([], Array.prototype.filter.call(o5, o26));
}catch(e){}
       }
   },
   {
       name: "Reduce toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 1;
}catch(e){}
            try {
o8[4294967294/2] = 2;
}catch(e){}
            try {
o8[4294967294] = 3;
}catch(e){}
            try {
o8[4294967295] = 4;
}catch(e){}
            var o24 = function(o8, o27) {
                try {
return o8 + o27;
}catch(e){}
            }
            // a.reduce(sum); // same issue as Map, ForEach, Filter, Some, & Every

            var o5 = { length : -1, [-5] : 2, [-2]: 3 };
            try {
o6.o19(function() { try {
Array.prototype.reduce.call(o5, o24)
}catch(e){}},o28,"Reduce needs a length greater than 0","Object doesn't support this action");
}catch(e){}
       }
   },
   {
       name: "ReduceRight toLength tests",
       o3: function ()
       {
            var o8 = [];
            try {
o8[0] = 1;
}catch(e){}
            try {
o8[4294967294/2] = 2;
}catch(e){}
            try {
o8[4294967294] = 3;
}catch(e){}
            try {
o8[4294967295] = 4;
}catch(e){}
            var o24 = function(o8, o27) {
                try {
return o8 + o27;
}catch(e){}
            }
            // a.reduceRight(sum); // same issue as Reduce, Map, ForEach, Filter, Some, & Every

            var o5 = { length : -1, [-5] : 2, [-2]: 3 };
            try {
o6.o19(function() { try {
Array.prototype.reduceRight.call(o5, o24)
}catch(e){}},o28,"Reduce needs a length greater than 0","Object doesn't support this action");
}catch(e){}
       }
   },
];

try {
o29.o30(o2, o421.o143 & 0x01);
}catch(e){}
