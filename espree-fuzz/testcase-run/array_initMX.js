//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o587 = o865.o503
try {
o0([]);
}catch(e){}
try {
o0([ 0 ]);
}catch(e){}
try {
o0([ 0, 1, 2, 3, 4, 5, 6 ,7 ,8, 9]);
}catch(e){}
try {
o0([,,,0,,,1,,,2,,,3,,,4,,,5,,,6,,,7,,,8,,,9,,,]);
}catch(e){}

var o6 = "";
try {
for (var o3 = 0; o3 < 100; o3++)
{
    try {
o6 += ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,";
}catch(e){}
}
}catch(e){}
try {
o0(eval("[" + o6 + "1]"));
}catch(e){}
var o7 = "";
try {
for (var o3 = 0; o3 < 30; o3++)
{
    try {
o7 += o6;
}catch(e){}
}
}catch(e){}
try {
o0(eval("[" + o7 + "1]"));
}catch(e){}
var o8 = "";
try {
for (var o3 = 0; o3 < 10; o3++)
{
    try {
o8 += o7;
}catch(e){}
}
}catch(e){}
try {
o0(eval("[" + o8 + "1]"));
}catch(e){}

