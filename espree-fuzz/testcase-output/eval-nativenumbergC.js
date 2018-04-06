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
var o2 = new undefined();
var o4 = 1;
for (var undefined = undefined; o1 < 20 * o4; o1++)
{
    eval("var b = " + o1  + undefined + o0);
    o6(o4.o5[o9].o6 = -o4.o5[o9].o6 - 1);
    var o7 = o8();
    if (o7[0] != undefined) { o9.o10("fail"); throw 0;}
    o2.push(o7[0]);
 
    if (o1 % (5 * o4) == 0) 
    { 
        for (var o12 = 0; o12 < o2.length; o12++)
        {
            if (o2[o12] != 2147483646) { o9.o10("fail"); throw 1; }
        }
        {
    name: "8.12.9.10.a.ii: re-define data property: current is not configurable/not writable and descriptor writable is false and value is different, check that it throws TypeError",
    o5: function () {
      var o6 = o7.o8();
      var o9 = "foo22";
      var o10 = { value: 1 };
      Object.defineProperty(o6, o9, o10);
      o10 = { value: 2, writable: false };
      o19.o34(function() { Object.defineProperty(o6, o9, o10); }, o35);
    }
  }; 

    }
}

o9.o10("pass");
