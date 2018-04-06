//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function write(o1)
{
   if(typeof(o2) == "undefined")
      print(o1);  
   else
     o2.o4(o1);
}

function o5(o6)
{
    function o7() {}

    o7.prototype = o6;

    var o9 = new o7();
    for(var o10=0; o10 < 3; o10++)
    {
       o9["p"+o10] = o10 + 0.3;
    }
    function o11()
    {
         for(var o12 in o9)
         {
             write(o12);
         }
    }
    write("Scenario: Testing forin on object with prototype");
    o11();

    // Make a change to the prototype object

    if (o6 && o6.hasOwnProperty("a")) {
        delete (o6.o14);
    }

    write("Scenario: Testing forin on object with prototype after changing prototype");
    o11();
}

o5({
    o14: 0.27, o15: 0.12, o16: 0.12, o17: 0.23
});

o5(null);
o5(undefined);
