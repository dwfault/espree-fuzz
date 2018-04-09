//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = "var t = function() { var a = 1073741823; var arr = new Array(); ";
for (var o1 = 0; o1 < 2048; o11++)
{
    o0 += " arr[0] = a * 2; ";
}
o0 += "return arr; }";
var o2 = new Array();
var o3 = 1;
for (var o1 = 0; o1 < 20 * o3; o1++)
{
    eval("var b = " + o1  + "; " + o0);
    o4();
    var o5 = o6();
    if (o5[0] != 2147483646) { o7.o8("fail"); throw 0;}
    o2.push(o5[0]);
 
    if (o1 % (5 * o3) == 0) 
    { 
        for (var o9 = 0; o9 < o2.length; o9++)
        {
            if (o2[o9] != 2147483646) { o7.o8("fail"); throw 1; }
        }
        o2.length = 0; 

    }
}

o7.o8("pass");
