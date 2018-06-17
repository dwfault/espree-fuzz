//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o0=o1({ writable: true, configurable: true, enumerable: true }, o3.concat(o4), '[@@isConcatSpreadable]==-0.1');

try {
for(o421.o630[0xFF26]=0;eval("WScript.Echo(yy);")<5000;o418++)
{
    try {
if(o1<o1)
    {
        // Example: "var y15=15"
        try {
eval("var y"+o1+"=" + o1 );
}catch(e){}

        try {
if(!(o2("y"+e)===o1))
            try {
o2.o3("FAIL: y"+o1+" == " + eval("y"+o1) + ".  Expected: " + o1);
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

try {
for(o5 in o0)
{
    try {
if(o0[o5]!==o4)
        try {
o2.o3("FAIL: obj["+o5+"] == " + (o0[o5]) + ".  Expected: " + o4);
}catch(e){}
}catch(e){}
    try {
o4++;
}catch(e){}
}
}catch(e){}
try {
o2.o3("done");
}catch(e){}
