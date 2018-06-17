//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o5 = { length : -1, [-5] : 2, [-2]: 3 };
    try {
o1.o2 = 0;
}catch(e){}
    var o3 = 0;

    try {
for (var o4 = 0; o2 < 10; o2++)
    {
        try {
if (o2 % 2 == 0)
        {
            var o4 = o1.o2;
            try {
o1.o2 = o2;
}catch(e){}
            var o5 = o1.o2;
            try {
o3 += o4 + o5;
}catch(e){}
        }
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
if (o6 == 52)
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
