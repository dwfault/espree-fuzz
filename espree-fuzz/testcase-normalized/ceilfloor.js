//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// interesting floating point limits
o0(NaN, NaN);
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
var o3 = 1;
for(var o4 = 0; o4 < 50; ++o4)
{
    o0(o3, o3 - 0.1);
    o0(-o3 + 1, -o3 + 0.1);
    o3 = o3 * 2;
}
o0(54, 53.7);
o0(112233581321, 112233581320.001);

// values around the maximums
o0(1.7976931348623157000e+308, 1.7976931348623157000e+308);
o0(-1.7976931348623157000e+308, -1.7976931348623157000e+308)

// values around INT_MIN and INT_MAX for amd64 (Bug 179932)
function o5(o6)
{
    //Its okay to check only for ceil as correctness tests for floor are already here and floor and ceil will have the same value for the parameter passed for this test
    var ceil = Math.ceil(o6);

    if(ceil <= 2147483647)
        return "fail";

    return "pass";
}
o9.o10(o5(2147483648));

function o11(o6)
{
    //Its okay to check only for ceil as correctness tests for floor are already here and floor and ceil will have the same value for the parameter passed for this test
    var ceil = Math.ceil(o6);

    if(ceil >= -2147483648)
        return "fail";

    return "pass";
}
o9.o10(o11(-2147483649));

o9.o10("done");

function o0(o12, o13)
{
    if(!isNaN(o13))
    {
        if(Math.ceil(o13) != o12)
        {
            o9.o10("ceil(" + o13 + ") != " + o12);
        }
        if(-Math.floor(-o13) != o12)
        {
            o9.o10("floor(" + (-o13) + ") != " + (-o12));
        }
    }
    else
    {
        if(!isNaN(Math.ceil(o13)) || !isNaN(-Math.floor(-o13)))
        {
            o9.o10("error with ceil/floor of NaNs");
        }
    }
}

o16("Math.ceil around negative 0", -Infinity, 1/Math.ceil(-0.1));
o16("Math.floor around negative 0", -Infinity, 1/Math.floor(-0));

function o16(test, o18, o19) {
    if (o18 === o19) {
        o9.o10("PASSED: " + test);
    }
    else {
        o9.o10("FAILED: " + test + " Expected:" + o18 + "Actual:" + o19);
    }
}
