//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o12 = {
                o19: 100,
                __proto__: { o24: "p0", o26: "p1" },
                o21: 300,
            };
function test(o1)
{
    var o52 = { value: 0, configurable: true, enumerable: false };
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
o3.o4(o0["msRealTime"]());
}catch(e){}
try {
test("test2");
}catch(Infinity){}
try {
o3.o4(o0[1](o77&3));
}catch(e){}
