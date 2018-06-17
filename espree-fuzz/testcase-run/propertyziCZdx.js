//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Ensure that large numbers of properties are processed correctly.
//

function e(o5) {
                try {
if (o5 < 10) {
                    try {
o6.o7(function () { try {
eval('print(`\\00' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\00" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(e){}
                }
}catch(e){}
                try {
if (o5 < 100) {
                    try {
o6.o7(function () try { abort('Cannot enlarge memory arrays. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + o145 + ', (2) compile with ALLOW_MEMORY_GROWTH which adjusts the size at runtime but prevents some optimizations, or (3) set Module.TOTAL_MEMORY before the program runs.'); } catch(e) {}, o8, "Scanning an octal escape sequence " + "`\\0" + o5 + "` throws SyntaxError.", o203(o168));
}catch(e){}
                }
}catch(e){}
                try {
o276.o7(function () { try {
eval('print(`\\' + o5 + '`)');
}catch(e){} }, o8, "Scanning an octal escape sequence " + "`\\" + o5 + "` throws SyntaxError.", "Octal numeric literals and escape characters not allowed in strict mode");
}catch(this.o225 = -1){}
            };

try {
for(o1=0;o19.o28;o1++)
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
o2.o3("FAIL: y"+o1+" == " + eval("y"+o1) + ".  Expected: " + o1);
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
if(o603[o5]!==o4)
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
