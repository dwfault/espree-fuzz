//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = new Array(1,2,2);
function o1()
{
    // injected bailout point #1 
    try {
return 3;
}catch(e){}
}


// injected bailout point #2
try { {
"use strict";
} } catch(e) {}

try {
o3.o4(o0);
}catch(e){}
