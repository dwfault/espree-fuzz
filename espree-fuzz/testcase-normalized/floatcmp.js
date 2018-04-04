//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o1) {
    if (typeof(o2) == "undefined")
        o3.write(o1 + "<br/>");
    else
        o2.o5(o1);
}

var o6 = 0;
var o7 = 0;

function o8(o9, o10, o11)
{
    if (o10 != o11)
    {
        print("Test #"+o6+" failed. <"+o9+"> Expected "+o11);
        o7++;
    }
}

function test(o13, o14, o15)
{
    // Force float-pref
    o13 += 0.1;
    o14 += 0.1;
    o15 += 0.1;

    var o16 = false;

    // Test 1
    o6++;  o16 = false;
    if (o13 == o15) {
        o16 = true;
    }
    o8("s1 == b1", o16, false);

    // Test 2
    o6++; o16 = false;
    if (o13 != o15)
    {
        o16 = true;
    }
    o8("s1 != b1", o16, true);

    // Test 3
    o6++; o16 = false;
    if (o13 <= o15) {
        o16 = true;
    }
    o8("s1 <= b1", o16, true);

    // Test 4
    o6++; o16 = false;
    if (o13 < o15) {
        o16 = true;
    }
    o8("s1 < b1", o16, true);

    // Test 5
    o6++; o16 = false;
    if (o13 >= o15) {
        o16 = true;
    }
    o8("s1 >= b1", o16, false);

    // Test 6
    o6++; o16 = false;
    if (o13 > o15) {
        o16 = true;
    }
    o8("s1 > b1", o16, false);

    // Test 7
    o6++; o16 = false;
    if (o13 == o14)
    {
        o16 = true;
    }
    o8("s1 == s2", o16, true);

    // Test 8
    o6++; o16 = false;
    if (o13 != o14) {
        o16 = true;
    }
    o8("s1 != s2", o16, false);

    // Test 9
    o6++; o16 = false;
    if (o13 <= o14) {
        o16 = true;
    }
    o8("s1 <= s2", o16, true);

    // Test 10
    o6++; o16 = false;
    if (o13 < o14) {
        o16 = true;
    }
    o8("s1 < s2", o16, false);

    // Test 11
    o6++; o16 = false;
    if (o13 >= o14) {
        o16 = true;
    }
    o8("s1 >= s2", o16, true);

    // Test 12
    o6++; o16 = false;
    if (o13 > o14) {
        o16 = true;
    }
    o8("s1 > s2", o16, false);


    // Test 13
    o6++;
    o8("s1 == b1", o13 == o15, false);

    // Test 14
    o6++;
    o8("s1 != b1", o13 != o15, true);

    // Test 15
    o6++;
    o8("s1 <= b1", o13 <= o15, true);

    // Test 16
    o6++;
    o8("s1 < b1", o13 < o15, true);

    // Test 17
    o6++;
    o8("s1 >= b1", o13 >= o15, false);

    // Test 18
    o6++;
    o8("s1 > b1", o13 > o15, false);

    // Test 19
    o6++;
    o8("s1 == s2", o13 == o14, true);

    // Test 20
    o6++;
    o8("s1 != s2", o13 != o14, false);

    // Test 21
    o6++;
    o8("s1 <= s2", o13 <= o14, true);

    // Test 22
    o6++;
    o8("s1 < s2", o13 < o14, false);

    // Test 23
    o6++;
    o8("s1 >= s2", o13 >= o14, true);

    // Test 24
    o6++;
    o8("s1 > s2", o13 > o14, false);


    // Test 25
    o6++;  o16 = false;
    if (o13 === o15) {
        o16 = true;
    }
    o8("s1 === b1", o16, false);

    // Test 26
    o6++; o16 = false;
    if (o13 !== o15)
    {
        o16 = true;
    }
    o8("s1 !== b1", o16, true);

    // Test 27
    o6++; o16 = false;
    if (o13 === o14)
    {
        o16 = true;
    }
    o8("s1 === s2", o16, true);

    // Test 28
    o6++; o16 = false;
    if (o13 !== o14) {
        o16 = true;
    }
    o8("s1 !== s2", o16, false);

    // Test 29
    o6++;
    o8("s1 === b1", o13 === o15, false);

    // Test 30
    o6++;
    o8("s1 !== b1", o13 !== o15, true);

    // Test 31
    o6++;
    o8("s1 === s2", o13 === o14, true);

    // Test 32
    o6++;
    o8("s1 !== s2", o13 !== o14, false);



    if (!o7)
    {
        print("Passed");
    }

}


test(1.1, 1.1, 2.1);
