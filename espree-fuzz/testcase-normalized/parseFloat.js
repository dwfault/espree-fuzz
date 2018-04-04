//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0(o1,o2)
{
    if(o1 != o2)
    {
        o3.o4("ERROR: " + o1 + " != " + o2 );
    }
    else
    {
        o3.o4(o1 + " == " + o2);
    }
}

o3.o4(parseFloat());
o3.o4(parseFloat("a"));
o3.o4(parseFloat("o12345"));
o3.o4(parseFloat("e10"));
o3.o4(parseFloat("+b"));

o0(0, parseFloat("0"));
o0(0, parseFloat("-0"));
o0(0, parseFloat(0));
o0(0, parseFloat(-0)); // -0 to "0" to 0

// Verify again with 1 / 0 because 0 === -0 and we want to make sure that the sign is correct
o0(1 / 0, 1 / parseFloat("0"));
o0(1 / -0, 1 / parseFloat("-0"));
o0(1 / 0, 1 / parseFloat(0));
o0(1 / 0, 1 / parseFloat(-0)); // 1 / (-0 to "0" to 0) == +Infinity

o0(17.3, parseFloat(new String("17.3")));
o0(17.3, parseFloat(new Number(17.3)));

o0(0,parseFloat("\n\r\n\r\t\t\t0"));
o0(1,parseFloat("    1"));
o0(-1,parseFloat("    -1"));

o0(15, parseFloat("   15  ", 1, 1, 1, 1, 1));
o0(3.14159, parseFloat("+.0000314159e5"));
o0(3.14159, parseFloat("314159e-5"));

o0(12345.67, parseFloat("+12345.67"));
o0(-12345.67, parseFloat("-12345.67"));

o0(1.7976931348623158e+308, parseFloat("1.7976931348623158e+308"));
o0(2.2250738585072014e-308, parseFloat("2.2250738585072014e-308"));

o0(-1.7976931348623158e+308, parseFloat("-1.7976931348623158e+308"));
o0(-2.2250738585072014e-308, parseFloat("-2.2250738585072014e-308"));

o0(8128, parseFloat(parseFloat(parseFloat(".8128e+00004"))));
