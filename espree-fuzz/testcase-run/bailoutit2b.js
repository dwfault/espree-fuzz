//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o9 = { length : 4294967296, 4294967294 : 2, 4294967295: 3 };
function o1()
{
    // injected bailout point #1 
    try {
return 3;
}catch(e){}
}


// injected bailout point #2
try {
for (var o2 = 0; o2 < 10; o2++)
{
    try {
this;
}catch(e){}
}
}catch(e){}

try {
o3.o4(o0);
}catch(e){}
