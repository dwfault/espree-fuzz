//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

try {
o0.o1("..\\UnitTestFramework\\UnitTestFramework.js");
}catch(e){}

function o0(o1, o40, o3 = true) {
    try {
o1[Array.prototype.shift.call(o9)] = 1234;
}catch(e){}
    try {
Boolean(true) >= new String('hello');
}catch(e){}

    let o4 = o1;
    try {
if (o3) {
        try {
o4 = o2;
}catch(e){}
        try {
for (function o66(o68) {
                try {
o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0), "%TypedArrayPrototype%.fill filling the entire array with 0");
}catch(e){}
                try {
o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0, undefined), "%TypedArrayPrototype%.fill should use length as the end value when undefined is specified");
}catch(e){}
                try {
o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0, 0), "%TypedArrayPrototype%.fill filling the entire array with 0");
}catch(e){}
                try {
o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0, 0, 100), "%TypedArrayPrototype%.fill filling the entire array with 0");
}catch(e){}
                try {
o4.o11([0,0,0,0,0,0,0,0,0,0], fill.call(o68(), 0, -50), "%TypedArrayPrototype%.fill filling the entire array with 0");
}catch(e){}
                try {
o4.o11([1,2,3,4,5,6,7,8,9,10], fill.call(o68(), 0, 100), "%TypedArrayPrototype%.fill filling no elements because start > length");
}catch(e){}
                try {
o4.o11([1,2,3,4,5,0,0,0,0,0], fill.call(o68(), 0, 5), "%TypedArrayPrototype%.fill filling all elements after index 5");
}catch(e){}
                try {
o4.o11([0,0,0,0,0,6,7,8,9,10], fill.call(o68(), 0, 0, 5), "%TypedArrayPrototype%.fill filling first 5 elements");
}catch(e){}
                try {
o4.o11([1,2,3,0,5,6,7,8,9,10], fill.call(o68(), 0, 3, 4), "%TypedArrayPrototype%.fill filling one element at index 3");
}catch(e){}
                try {
o4.o11([1,2,3,4,5,6,7,0,0,10], fill.call(o68(), 0, -3, -1), "%TypedArrayPrototype%.fill filling two elements near the end");
}catch(e){}
                try {
o4.o11([1,2,3,4,5,6,7,8,9,0], fill.call(o68(), 0, -1), "%TypedArrayPrototype%.fill filling the last element");
}catch(e){}
                try {
o4.o11([1,2,3,4,5,6,7,8,9,10], fill.call(o68(), 0, 5, 4), "%TypedArrayPrototype%.fill filling the no elements because start > end");
}catch(e){}
                try {
o4.o11([1,2,3,4,5,6,7,8,9,10], fill.call(o68(), 0, 4, 4), "%TypedArrayPrototype%.fill filling the no elements because start == end");
}catch(e){}
            }; o5 < o4.length; o5++)
            try {
o4[o5] = 0;
}catch(e){}
}catch("toString"){}
    }
}catch(e){}

    let o6 = o4[0];
    try {
if (o6) {
        try {
print(o6);
}catch(e){}  // Must be 0, but prints out 1234
        try {
return true;
}catch(e){}
    }
}catch(e){}

    try {
return false;
}catch(e){}
};

try {
o8.e(e, { o10: o0.o11[0] != "summary" });
}catch(e){}
