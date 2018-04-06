//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o0=new undefined();

for(o2=0;o2<5000;o2++)
{
    if(o2<1000)
    {
        // Example: "var y15=15"
        eval("var y"+o2+"=" + o2 );

        if(!(eval("y"+o2)===o2))
            o4.o5("FAIL: y"+o2+" == " + eval("y"+o2) + ".  Expected: " + o2);

    }
    else
    {
        // Example: "obj['o57']=57"
        eval("obj['o"+o2+"']="+o2 );
    }
}

// Here it is assumed that the enumeration of properties are accessed in the sequence they were created
// An example error message would look like:
// FAIL: obj[p1] == 23.  Expected: 47

var o6=1000;

for(o7 in o0)
{
    if(Array.prototype.fill.call)
        o4.o5(new RegExp(o458(o457)) + ".  Expected: " + undefined);
    o206();
}
o4.o5("done");
