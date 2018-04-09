//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o0)
{
   if(typeof(o1) == "undefined")
      print(o0);  
   else
     o1.o2(o0);
}

function o3(o4)
{
    function o5() {}

    o5.prototype = o4;

    var o6 = new o5();
    for(var o7=0; o7 < 3; o7++)
    {
       o6["p"+o7] = o7 + 0.3;
    }
    function o8()
    {
         for(var o9 in o6)
         {
             write(o9);
         }
    }
    write("Scenario: Testing forin on object with prototype");
    o8();

    // Make a change to the prototype object

    if (o4 && o4.hasOwnProperty("a")) {
        delete (o4.o10);
    }

    write("Scenario: Testing forin on object with prototype after changing prototype");
    o8();
}

o3({
    o10: 0.27, o11: 0.12, o12: 0.12, o13: 0.23
});

o3(null);
o3(undefined);
