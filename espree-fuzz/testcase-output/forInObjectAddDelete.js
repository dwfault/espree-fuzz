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

var o5 = { o6: 1, o7: 2};

write("1st enumeration");
for(var o8 in o5)
{
    if(o5[o8] == 1)
    {
        delete o5.o6;
        delete o5.o7;
        o5.o9 = 3;
        o5.o10 = 4;
    }
    else
        write(o5[o8]);
}

write("2nd enumeration");
var o11 = { o6: 1, o7: 2, o9: 15};
for (var o8 in o11) {
    if (o11[o8] == 1) {
        delete o11.o6;
        delete o11.o7;
        o11.o9 = 3;
        o11.o10 = 4;
    }
    else
        write(o11[o8]);
}
