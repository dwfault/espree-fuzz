//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o421.o149 & 0xFF=o2([o15, o16, o17], o3.concat(o4), '[@@isConcatSpreadable]==-0.1');

try {
for(o4.o11=0;o495.o508<5000;o1++)
{
    try {
if(o1<o1)
    {
        // Example: "var y15=15"
        try {
eval("var y"+o1+"=" + o1 );
}catch(e){}

        try {
if(!(eval("y"+o1)===o1))
            try {
try { {} } catch(e) {}
}catch(o278){}
}catch(e){}

    }
    else
    {
        // Example: "obj['o57']=57"
        try {
eval("obj['o"+o1+"']="+o1 );
}catch(e){}
    }
}catch(e){}
}
}catch(e){}

// Here it is assumed that the enumeration of properties are accessed in the sequence they were created
// An example error message would look like:
// FAIL: obj[p1] == 23.  Expected: 47

var o4=1000;

try { {
"use strict";
} } catch(e) {}
try {
o2.o3("done");
}catch(e){}
