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

var o3 = { o4: 1, o5: 2};

write("1st enumeration");
for(var o6 in o3)
{
    if(o3[o6] == 1)
    {
        delete o3.o4;
        delete o3.o5;
        o3.o7 = 3;
        o3.o8 = 4;
    }
    else
        write(o3[o6]);
}

write("2nd enumeration");
var o9 = { o4: 1, o5: 2, o7: 15};
for (var o6 in o9) {
    if (o9[o6] == 1) {
        delete o9.o4;
        delete o9.o5;
        o9.o7 = 3;
        o9.o8 = 4;
    }
    else
        write(o9[o6]);
}
