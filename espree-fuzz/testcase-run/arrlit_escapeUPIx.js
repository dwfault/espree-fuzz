//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o596 = o576.o580(o554.o561);
function test(o1)
{
    try {
o0 = [ 1, function() { try {
return o1;
}catch(e){} }, 2];
}catch(e){}
}

try {
test("test1");
}catch(e){}
try {
o2.o3(o0[1](o2.o27));
}catch(e){}
try {
test("test2");
}catch(e){}
try {
o2.o3(o0[1]());
}catch(e){}
