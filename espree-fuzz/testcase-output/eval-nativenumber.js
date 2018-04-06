//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = "var t = function() { var a = 1073741823; var arr = new Array(); ";
for (var o1 = 0; o1 < 2048; o1++)
{
    o0 += " arr[0] = a * 2; ";
}
o0 += "return arr; }";
var o2 = new Array();
var o4 = 1;
for (var o1 = 0; o1 < 20 * o4; o1++)
{
    eval("var b = " + o1  + "; " + o0);
    o6();
    var o7 = o8();
    if (o7[0] != 2147483646) { o9.o10("fail"); throw 0;}
    o2.push(o7[0]);
 
    if (o1 % (5 * o4) == 0) 
    { 
        for (var o12 = 0; o12 < o2.length; o12++)
        {
            if (o2[o12] != 2147483646) { o9.o10("fail"); throw 1; }
        }
        o2.length = 0; 

    }
}

o9.o10("pass");
