//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function print(o0) {
    if (typeof(o1) == "undefined")
        o2.write(o0 + "<br/>");
    else
        o1.o3(o0);
}

var o4 = 0;
var o5 = 0;

function o6(o7, o8, o9)
{
    if (o8 != o9)
    {
        print("Test #"+o4+" failed. <"+o7+"> Expected "+o9);
        o5++;
    }
}

function test(o10, o11, o12)
{
    // Force float-pref
    o10 += 0.1;
    o11 += 0.1;
    o12 += 0.1;

    var o13 = false;

    // Test 1
    o4++;  o13 = false;
    if (o10 == o12) {
        o13 = true;
    }
    o6("s1 == b1", o13, false);

    // Test 2
    o4++; o13 = false;
    if (o10 != o12)
    {
        o13 = true;
    }
    o6("s1 != b1", o13, true);

    // Test 3
    o4++; o13 = false;
    if (o10 <= o12) {
        o13 = true;
    }
    o6("s1 <= b1", o13, true);

    // Test 4
    o4++; o13 = false;
    if (o10 < o12) {
        o13 = true;
    }
    o6("s1 < b1", o13, true);

    // Test 5
    o4++; o13 = false;
    if (o10 >= o12) {
        o13 = true;
    }
    o6("s1 >= b1", o13, false);

    // Test 6
    o4++; o13 = false;
    if (o10 > o12) {
        o13 = true;
    }
    o6("s1 > b1", o13, false);

    // Test 7
    o4++; o13 = false;
    if (o10 == o11)
    {
        o13 = true;
    }
    o6("s1 == s2", o13, true);

    // Test 8
    o4++; o13 = false;
    if (o10 != o11) {
        o13 = true;
    }
    o6("s1 != s2", o13, false);

    // Test 9
    o4++; o13 = false;
    if (o10 <= o11) {
        o13 = true;
    }
    o6("s1 <= s2", o13, true);

    // Test 10
    o4++; o13 = false;
    if (o10 < o11) {
        o13 = true;
    }
    o6("s1 < s2", o13, false);

    // Test 11
    o4++; o13 = false;
    if (o10 >= o11) {
        o13 = true;
    }
    o6("s1 >= s2", o13, true);

    // Test 12
    o4++; o13 = false;
    if (o10 > o11) {
        o13 = true;
    }
    o6("s1 > s2", o13, false);


    // Test 13
    o4++;
    o6("s1 == b1", o10 == o12, false);

    // Test 14
    o4++;
    o6("s1 != b1", o10 != o12, true);

    // Test 15
    o4++;
    o6("s1 <= b1", o10 <= o12, true);

    // Test 16
    o4++;
    o6("s1 < b1", o10 < o12, true);

    // Test 17
    o4++;
    o6("s1 >= b1", o10 >= o12, false);

    // Test 18
    o4++;
    o6("s1 > b1", o10 > o12, false);

    // Test 19
    o4++;
    o6("s1 == s2", o10 == o11, true);

    // Test 20
    o4++;
    o6("s1 != s2", o10 != o11, false);

    // Test 21
    o4++;
    o6("s1 <= s2", o10 <= o11, true);

    // Test 22
    o4++;
    o6("s1 < s2", o10 < o11, false);

    // Test 23
    o4++;
    o6("s1 >= s2", o10 >= o11, true);

    // Test 24
    o4++;
    o6("s1 > s2", o10 > o11, false);


    // Test 25
    o4++;  o13 = false;
    if (o10 === o12) {
        o13 = true;
    }
    o6("s1 === b1", o13, false);

    // Test 26
    o4++; o13 = false;
    if (o10 !== o12)
    {
        o13 = true;
    }
    o6("s1 !== b1", o13, true);

    // Test 27
    o4++; o13 = false;
    if (o10 === o11)
    {
        o13 = true;
    }
    o6("s1 === s2", o13, true);

    // Test 28
    o4++; o13 = false;
    if (o10 !== o11) {
        o13 = true;
    }
    o6("s1 !== s2", o13, false);

    // Test 29
    o4++;
    o6("s1 === b1", o10 === o12, false);

    // Test 30
    o4++;
    o6("s1 !== b1", o10 !== o12, true);

    // Test 31
    o4++;
    o6("s1 === s2", o10 === o11, true);

    // Test 32
    o4++;
    o6("s1 !== s2", o10 !== o11, false);



    if (!o5)
    {
        print("Passed");
    }

}


test(1.1, 1.1, 2.1);
