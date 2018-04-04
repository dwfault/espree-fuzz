//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Tests the relationship between a parent and child object.
//

function print(o1,o2)
{
    o3.o4("=== " + o2 + " ===");
    o3.o4("x.q:    " + o1.o5);
    o3.o4("x[3]:   " + o1[3]);
    o3.o4("x[4]:   " + o1[4]);
    o3.o4("x[50]:  " + o1[50]);
    o3.o4("x.p1:   " + o1.o6);
    o3.o4("x.p2:   " + o1.o7);
    o3.o4("x[\"m\"]: " + o1["m"]);
    o3.o4("");
}

var o8 = new Array(10);

for(var o10 = 0; o10 < 10; ++o10)
{
    o8[o10] = o10;
}
o8.o6 = "test";
o8.o7 = 3;

function o11(o1)
{
    this[o1] = 1;
}
o11.prototype = o8;

var o1 = new o11("q");

print(o1, "after object creation");

o8.o13 = 14;
print(o1, "after adding new property to parent");

o11.prototype = new String("glah");
print(o1, "after modifying constructor's prototype");

o8.o13--;
print(o1, "after modifying parent");

o8.o6 = undefined;
o8[3] = undefined;
o8[4] <<= 2;
o8[50] = 42;
print(o1, "after undefining properties on parent");

o8.o6 = new String("new p1");
print(o1, "after re-adding property on parent");

o1.o6 = "x's p1";
o8.o6 = undefined;
print(o1, "after re-defining property on object");
