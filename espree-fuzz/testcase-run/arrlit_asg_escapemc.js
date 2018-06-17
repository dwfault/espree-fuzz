//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0;
function e(o1)
{
    var o2;
    try {
o0 = [ 1, (o2 = function() { try {
return o1;
}catch(e){} }), 2];
}catch(e){}
}

try {
test("test1");
}catch(e){}
try {
o3.o4(o0[1]());
}catch(e){}
try {
test("test2");
}catch(e){}
try {
o3.o4(o0[1]());
}catch(e){}
