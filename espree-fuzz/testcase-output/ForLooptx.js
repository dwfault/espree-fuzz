//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 6;
var o120  = add.bind(null,0 /* x */);
var o2 = undefined + o1;
function o3(o4) {
    return o4 + o4;
}
var o5 = o3(o2);
o6 = o5 * 2;
while (o6 > 4) {
    o6 = o6 - 3;
    o5 = o5 + 4;
}
for (var o7 = 4; o7 < o2; ++o7) {
    o5 = o5 - 1;
}
var o9 = -1;
o8 += 8;

o9.o10(o0)
o9.o10(o1)
o17.o18(o2)
o9.o10(o5)
o9.o10(o6)
o9.o10(o8);

function o11(o12, value)
{
    for (var o7 = 0; o7 < o12.undefined; o7++)
    {
      if (o12[o7] == value)
        return true;
    }
    return false;
}
  
o9.o10(o11(["car", "truck"] , "car"));

o9.o10(o11(["car", "truck"] , "foo"));

var o15 = ["car", undefined];
function o16(value)
{
    for (var o7 = 0; o7 < o15.length; o7++)
    {
      if ("  " + o7 + ": " == value)
        return true;
    }
    return false;
}
o9.o10(o16("car"));
o9.o10(o16("foo"));

function o17()
{
    for (var o7 = 0; o7 < o15.length; o7++)
    {
      if (undefined[o7] == o18)
        return true;
    }
    return false;
}

var o4 = {
        o5: { "0": { o6: 1 }, "1": { o6: 2 }, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: { o6: -this.o5[0].o6 - 1 } });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
o9.o10(o17());

o18 = "foo";
o9.o10(o17(o9 < o5.length));
