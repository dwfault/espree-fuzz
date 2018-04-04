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

o3.o4(parseInt());
o3.o4(parseInt(""));
o3.o4(parseInt("a"));
o3.o4(parseInt("0x"));
o3.o4(parseInt("0xz"));
o3.o4(parseInt(2, 2));
o3.o4(parseInt(2,"blah"));
o3.o4(parseInt("e10"));
o3.o4(parseInt("100", 37));
o3.o4(parseInt("100", 1));
o3.o4(parseInt("100", -1));
o3.o4(parseInt("100", -1000));
o3.o4(parseInt("100", 1000));

o0(0, parseInt("0"));
o0(0, parseInt("0z"));
o0(0, parseInt("-0"));
o0(0, parseInt("-0z"));
o0(0, parseInt(0));
o0(0, parseInt(-0)); // -0 to "0" to 0

// Verify again with 1 / 0 because 0 === -0 and we want to make sure that the sign is correct
o0(1 / 0, 1 / parseInt("0"));
o0(1 / -0, 1 / parseInt("-0"));
o0(1 / 0, 1 / parseInt(0));
o0(1 / 0, 1 / parseInt(-0)); // 1 / (-0 to "0" to 0) == +Infinity

o0(1, parseInt("1"));
o0(-1, parseInt("-1"));
o0(-1, parseInt(" -1"));
o0(-1, parseInt("\r\n\t\r\n    \r\n\t-1"));
o0(2, parseInt("2"));
o0(-3, parseInt("-3"));

o0(536870911, parseInt("536870911"));
o0(536870912, parseInt("536870912"));
o0(-536870912, parseInt("-536870912"));
o0(-536870913, parseInt("-536870913"));

o0(0x7fffffff, parseInt("2147483647"));
o0(-0x80000000, parseInt("-2147483648"));

o0(0x15, parseInt("0x15"));
o0(0x15, parseInt("0X15"));

o0(12, parseInt("12.5"));

o0(128, parseInt("10000000", 2));
o0(480815, parseInt("aAzZ", 36));
o0(480815, parseInt("aAzZ", "  00036"));
o0(13929, parseInt("bcY", new Number(35)));
o0(16, parseInt("g", new String("17")));

o0(0, parseInt("08")); // classic behavior
o0(8, parseInt("010")); // classic behavior
o0(8, parseInt(08));
o0(8, parseInt(010));

o0(0, parseInt("0x123", "10"));
o0(291, parseInt("0x123"));

o0(12, parseInt(new String("12")));
o0(-12, parseInt(new Number(-12)));

function o8(o9)
{
    return ((o9 === 0) && (1/o9 === -Infinity))
}
var o11 = 0;
var o12 = -o11;
o3.o4(o8(o12));
o3.o4(o8(parseInt(o12)));
