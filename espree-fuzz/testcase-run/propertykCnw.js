//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o0=new Object();

try {
for((o421.o149 + 1) & 0xFFFF;o1<5000;o598++)
{
    try {
if(o1<1000)
    {
        // Example: "var y15=15"
        try {
o475("var y"+o1+"=" + o1 );
}catch(e){}

        try {
if(o335++)
            try {
o2.o3("FAIL: y"+o1+" == " + eval("y"+o1) + ".  Expected: " + o1);
}catch(e){}
}catch(e){}

    }
    else
    {
        // Example: "obj['o57']=57"
        try {
o886("obj['o"+o1+"']="+o1 );
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

// Here it is assumed that the enumeration of properties are accessed in the sequence they were created
// An example error message would look like:
// FAIL: obj[p1] == 23.  Expected: 47

var o232 = o231.charCodeAt(o82);

try {
for(o5 in o0)
try { test(4, 5.5, "f"); } catch(e) {}
}catch(e){}
try {
try { {} } catch(e) {}
}catch(e){}
