//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var escape;
function test(o0)
{
    var o1 = function() { try {
return o0;
}catch(e){} }
    try {
eval("escape = nested");
}catch(e){}
}

try {
test("test1");
}catch(e){}
try {
o2.o3(escape());
}catch(e){}

try {
o1058("test2");
}catch(e){}
try {
o2.o3(escape());
}catch(e){}

