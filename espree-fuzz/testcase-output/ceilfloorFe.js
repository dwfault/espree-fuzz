//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o1(NaN, NaN);
o0(+0, +0);
o0(-0, -0);
o0(+Infinity, +Infinity);
o0(-Infinity, -Infinity);

// values abs(x) < 1
o0(-0, -4.9406564584124654000e-324);
o0(-0, -9.8813129168249309000e-324);
o0(-0, -0.5);
o0(-0, -9.9999999999999989000e-001);
o0(-0, -9.9999999999999978000e-001);
o0(-1, -1);
o0(1,   4.9406564584124654000e-324);
o0(1,   9.8813129168249309000e-324);
o0(1, 0.5);
o0(1, 9.9999999999999989000e-001);
o0(1, 9.9999999999999978000e-001);
o0(1, 1);

// other interesting double values
var o1 = 1;
for(var o2 = 0; o2 < 50; ++o2)
{
    o0(o1, o1 - 0.1);
    o0(-o1 + 1, -o1 + 0.1);
    o1 = o1 * 2;
}
o0(54, 53.7);
o0(112233581321, 112233581320.001);

// values around the maximums
o0(1.7976931348623157000e+308, 1.7976931348623157000e+308);
o0(-1.7976931348623157000e+308, -1.7976931348623157000e+308)

// values around INT_MIN and INT_MAX for amd64 (Bug 179932)
function o3(o4)
{
    //Its okay to check only for ceil as correctness tests for floor are already here and floor and ceil will have the same value for the parameter passed for this test
    var ceil = Math.ceil(o4);

    if(ceil <= 2147483647)
        return "fail";

    return "pass";
}
o5.o6(o3(2147483648));

function o7(o4)
{
    //Its okay to check only for ceil as correctness tests for floor are already here and floor and ceil will have the same value for the parameter passed for this test
    var ceil = Math.ceil(o4);

    if(ceil >= -2147483648)
        return "fail";

    return "pass";
}
o5.o6(o7(-2147483649));

o5.o6("done");

function o0(o8, o9)
{
    if(!isNaN(o9))
    {
        if(Math.ceil(o9) != o8)
        {
            o5.o6("ceil(" + o9 + ") != " + o8);
        }
        if(-Math.floor(-o9) != o8)
        {
            o5.o6("floor(" + (-o9) + ") != " + (-o8));
        }
    }
    else
    {
        if(!isNaN(Math.ceil(o9)) || !isNaN(-Math.floor(-o9)))
        {
            o5.o6("error with ceil/floor of NaNs");
        }
    }
}

o10("Math.ceil around negative 0", -Infinity, 1/Math.ceil(-0.1));
o10("Math.floor around negative 0", -Infinity, 1/Math.floor(-0));

function o10(test, o11, o12) {
    if (o11 === o12) {
        o5.o6("PASSED: " + test);
    }
    else {
        o5.o6("FAILED: " + test + " Expected:" + o11 + "Actual:" + o12);
    }
}
