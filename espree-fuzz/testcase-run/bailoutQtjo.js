//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o2 = o0;
function o1()
{
    // injected bailout point #1 
    try {
return 3;
}catch(e){}
}


// injected bailout point #2
try {
for (var o18 = 'string'; o2 < 10; o2++)
{
    try {
o0 += o1();
}catch(e){}
}
}catch(e){}

try {
o3.o4(o0);
}catch(e){}
