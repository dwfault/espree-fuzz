//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o596 = o576.o580(o341.o421);
function test(o1)
{
    try {
o0 = [ 1, -0.0, 2];
}catch(e){}
}

try {
test("test1");
}catch(e){}
try {
o2.o662(o0[1]());
}catch(e){}
try {
test("test2");
}catch(e){}
try {
Object.defineProperty([], "length", { configurable: false, get: function () { try {
return 2;
}catch(e){} } })(o0[1]());
}catch(e){}
