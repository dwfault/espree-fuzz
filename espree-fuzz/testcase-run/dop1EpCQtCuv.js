//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

const o3 = new o2(100);

try {
o63 = 'something'(this);
}catch(e){}
try {
try {
try {
function ()
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
       }(this, 'x', o421.o366);
}catch(o148){}
}
catch(o421) {
    try {
o2.o3("exception: " + o1);
}catch(e){}
}
}catch(e){}
try {
o2.o3(o0);
}catch(length){}
try {
o2.o1110(this.o0);
}catch(e){}
try {
o2.o3(Object.isSealed(this));
}catch(e){}

