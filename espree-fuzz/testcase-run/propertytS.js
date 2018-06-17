//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

var o26 = [
                Promise.resolve(0),
                o14(Promise.resolve(1)),
                Promise.resolve(2).then(o10 => { 
                    try {
o0(`Test #${index} - Success handler #1a called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
}catch(e){}
                    try {
return 3;
}catch(e){}
                }).then(o10 => { 
                    try {
o0(`Test #${index} - Success handler #1b called with result = '${o10}' (isArray = ${Array.isArray(o10)}) (fulfillCalled = ${o29})`);
}catch(e){}
                    try {
return 4;
}catch(e){}
                }).catch(o11 => {
                    try {
o0(`Test #${index} - Catch handler #1 called with err = ${o11}`);
}catch(e){}
                })
            ];

try {
for(o1=0;o1<5000;o1102++)
{
    try {
if(o1<1000)
    {
        // Example: "var y15=15"
        try {
eval("var y"+o1+"=" + o1 );
}catch(e){}

        try {
if(!(eval("y"+o1)===o1))
            try {
try { this.o425 = o673[index++]; } catch(e) {}try { {} } catch(e) {}
}catch(e){}
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
o38.call(o8)("FAIL: obj["+o5+"] == " + (o0[o5]) + ".  Expected: " + o4);
}catch(e)try { {
o1("initCustomEvent");
} } catch(e) {}
}catch(e){}
    try {
o4++;
}catch(e){}
}
}catch(e){}
try {
o2.o3("done");
}catch(e){}
