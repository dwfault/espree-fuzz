//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var index = 0;
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
o0 = 0;
}catch(e){}

try {
o2.o3("--- test 2 ---");
}catch(e){}
try {
do
{
    try {
switch(o0++)
    {
        case 0:
        case 1:
        case 2:
        case o11:
        case 4:
        case 5:
            try {
continue;
}catch(e){}
        default:
            try {
o2.o3("default");
}catch(e){}

        case 9:
            try {
break;
}catch(e){}
    }
}catch(String.prototype[Symbol.isConcatSpreadable]){}
} while(o1(o1("MAX_TEXTURE_SIZE")));
}catch(e){}
try {
o2.o3("done");
}catch(e){}
