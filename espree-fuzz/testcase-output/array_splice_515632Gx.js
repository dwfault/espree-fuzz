//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// Test cases for BLUE 515632
// Found that arguments to Array.prototype.splice which altered the length
// of the array caused an assert.

if (this.o0 && this.o0.o1) { // Check for running in ch
    this.o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}

function o2() {
    var o3 = new Array(10);
    for(var o4 = 0; o4 < o3.length; o4++) {
        o3[o4] = o4;
    }
    return o3;
}

var o5 = [
    {
        name: "Arguments to Array.prototype.splice reduce the length of array by one",
        o6: function () {
            var o3 = o2();
            var pop = { valueOf: function() { o3.pop(); return 0; } };
            var o7 = o3.splice(0, pop);

            // pop decreases the length of the array but we've already calculated the length by that
            // time. When we are done with splice, we'll set the length back to the original value
            // which means we should now have n undefined values at the end of the array where n is
            // equal to the number of calls to pop.

            o8.o9([], o7, "Result of splice is empty array");
            o8.o9(10, o3.length, "Array has unchanged length");
            for(var o4 = 0; o4 < 9; o4++) {
                o8.o9(o4, o3[o4], "Array elements before the last are unchanged");
            }
            o8.o9(undefined, o3[9], "Array is unchanged except last element is undefined now");
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduce the length of array and we don't start splice at 0",
        o6: function () {
            var o3 = o2();
            var pop = { valueOf: function() { o3.pop(); return 0; } };
            var o7 = o3.splice(3, pop);

            o8.o9([], o7, "Result of splice is empty array");
            o8.o9(10, o3.length, "Array has unchanged length");
            for(var o4 = 0; o4 < 9; o4++) {
                o8.o9(o4, o3[o4], "Array elements before the last are unchanged");
            }
            o8.o9(undefined, o3[9], "Array is unchanged except last element is undefined now");
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduce the length of array, we don't start splice at 0, and we have a delete length",
        o6: function () {
            var o3 = o2();
            var pop = { valueOf: function() { o3.pop(); return 2; } };
            var o7 = o3.splice(3, pop);

            o8.o9([3,4], o7, "Result of splice contains removed elements");
            o8.o9(8, o3.length, "Array has length reduced by length of removed");
            for(var o4 = 0; o4 < 3; o4++) {
                o8.o9(o4, o3[o4], "Array elements before the removed are unchanged");
            }
            o8.o9(5, o3[3], "Array elements after the removed are correct");
            o8.o9(6, o3[4], "Array elements after the removed are correct");
            o8.o9(7, o3[5], "Array elements after the removed are correct");
            o8.o9(8, o3[6], "Array elements after the removed are correct");
            o8.o9(undefined, o3[7], "Last element of array is undefined now");
        }
    },
    {
        name: "Arguments to Array.prototype.splice increases the length of array by one",
        o6: function () {
            var o3 = o2();
            var push = { valueOf: function() { o3.push(10); return 0; } };
            var o7 = o3.splice(0, push);

            // push increases the length of the array but we've already calculated the length by that
            // time and when we are done with splice, we'll set the length back to the original value.

            o8.o9(0, o7.length, "Result of splice has length of zero");
            o8.o9([], o7, "Result of splice is empty array");
            o8.o9(10, o3.length, "Array has unchanged length");
            o8.o9([0,1,2,3,4,5,6,7,8,9], o3, "Array is unchanged by the splice call");
        }
    },
    {
        name: "Arguments to Array.prototype.splice increases the length of array with start and length",
        o6: function () {
            var o3 = o2();
            var push = { valueOf: function() { o3.push(10); o3.push(11); return 3; } };
            var o7 = o3.splice(4, push);

            o8.o9(3, o7.length, "Result of splice has the correct number of elements");
            o8.o9([4,5,6], o7, "Result of splice contains removed elements");
            o8.o9(7, o3.length, "Array has length reduced by length of removed");
            o8.o9([0,1,2,3,7,8,9], o3, "Array elements before/after the removed are correct");
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduces the length of array to 0",
        o6: function () {
            var o3 = o2();
            var o10 = { valueOf: function() { while(o3.length > 0) { o3.pop(); } return 0; } };
            var o7 = o3.splice(0, o10);

            o8.o9(0, o7.length, "Result of splice has length of zero");
            o8.o9([], o7, "Result of splice is empty");
            o8.o9(10, o3.length, "Array length is unchanged");
            for(var o4 = 0; o4 < 10; o4++) {
                o8.o9(undefined, o3[o4], "Array elements are all undefined");
            }
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduces the length of array to 0 and we delete some elements",
        o6: function () {
            var o3 = o2();
            var o10 = { valueOf: function() { while(o3.length > 0) { o3.pop(); } return 2; } };
            var o7 = o3.splice(5, o10);

            o8.o9(2, o7.length, "Result of splice is array of undefined values");
            for(var o4 = 0; o4 < 2; o4++) {
                o8.o9(undefined, o7[o4], "Splice result elements are all undefined");
            }
            o8.o9(8, o3.length, "Array length is reduced by number of removed elements");
            for(var o4 = 0; o4 < 8; o4++) {
                o8.o9(undefined, o3[o4], "Array elements are all undefined");
            }
        }
    },
    {
        name: "Arguments to Array.prototype.splice reduces the length of array to 0 and we delete some elements, taking some elements from the unchanged length and some from the changed length",
        o6: function () {
            var o3 = o2();
            var o10 = { valueOf: function() { while(o3.length > 6) { o3.pop(); } return 2; } };
            var o7 = o3.splice(5, o10);

            o8.o9(2, o7.length, "Result of splice contains an element from array and undefined (since array size was shrunk)");
            o8.o9(5, o7[0], "Splice result first element is from array");
            o8.o9(undefined, o7[1], "Splice result remaining elements are undefined");

            o8.o9(8, o3.length, "Array length is reduced by number of removed elements");
            for(var o4 = 0; o4 < 5; o4++) {
                o8.o9(o4, o3[o4], "Array elements are unchanged except where popped");
            }
            for(var o4 = 5; o4 < 8; o4++) {
                o8.o9(undefined, o3[o4], "Array elements after the popped point are undefined");
            }
        }
    }
];

o11.o12(o5);
