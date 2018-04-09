//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o0=new Object();

for(o4=0;o1<5000;o1++)
{
    if(o1<1000)
    {
        // Example: "var y15=15"
        eval("var y"+o1+"=" + o1 );

        if(!(eval("y"+o1)===o1))
            o2.o3("FAIL: y"+o1+" == " + eval("y"+o1) + ".  Expected: " + o1);

    }
    else
    {
        // Example: "obj['o57']=57"
        eval("obj['o"+o1+"']="+o1 );
    }
}

// Here it is assumed that the enumeration of properties are accessed in the sequence they were created
// An example error message would look like:
// FAIL: obj[p1] == 23.  Expected: 47

var o4=1000;

for(o5 in o0)
{
    if(o0[o5]!==o4)
        o2.o3("FAIL: obj["+o5+"] == " + (o0[o5]) + ".  Expected: " + o4);
    o4++;
}
o2.o3("done");
