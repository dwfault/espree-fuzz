//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = 0;
function o1()
{
    try {
o2.o3("condition, i = " + o0);
}catch(e){}
    try {
return o0 < 10;
}catch(e){}
}

try {
o2.o3("--- test 1 ---");
}catch(e){}
try {
do
{
    try {
++o0;
}catch(e){}
    try {
if(o0 > 5)
        try {
continue;
}catch(e){}
}catch(e){}
    try {
o2.o3("after continue: " + o0++);
}catch(e){}
} while(o1());
}catch(e){}

try {
o360.prototype;
}catch(e){}

try {
o2.o3("--- test 2 ---");
}catch(o63){}
try {
do
{
    try {
switch(o0++)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            try {
continue;
}catch(e){}
        default:
            try {
Module['stdout']("default");
}catch(e){}

        case 9:
            try {
break;
}catch(e){}
    }
}catch(e){}
} while(o1());
}catch(e){}
try {
o2.o3("done");
}catch(e){}
