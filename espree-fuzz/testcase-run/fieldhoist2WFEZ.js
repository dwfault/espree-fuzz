//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o5 = this.o391;
    try {
o50 = 0;
}catch(e){}
    var o3 = 0;

    try {
for (var o4 = 0; o2 < 10; o2++)
    {
        try {
if (o2 % 2 == 0)
        try { {} } catch(e) {}try { {
        var o19 = o16[o18];
        try {
o14 = o19.name;
}catch(e){}
        try {
if (o19.o20) {
            try {
o19.o20();
}catch(e){}
        }
}catch(e){}
        try {
for (var o6 in o17) {
            var test = o21[o6];

            //
            // * If test.disabled (e.g., temp bug), skip it.
            // * If test.pass specifies a pass name, only run it for that pass.
            // * If test.pass not defined, run it for any non "runonce" pass.
            //
            try {
if (!test.o22 && (test.o19 === o14 || (!test.o19 && !o19.o23))) {
                try {
this.o24(o6, test.name, test.o25);
}catch(e){}
            }
}catch(e){}
        }
}catch(e){}
      } } catch(e) {}
        else
        {
            try {
o1.o2 = o3;
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
    try {
return o3;
}catch(e){}
}
var o6 = o0(o421.o155[0xFF56]);
try {
if (o6.o26)
{
    try {
e.o8(o598);
}catch(e){}
}
else
{
    try {
o706.indexOf("FAIL: got " + o6);
}catch(e){}
}
}catch(e){}
