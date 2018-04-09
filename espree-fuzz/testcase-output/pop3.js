//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o0)
{
    o0 = o0.pop();
    return o0;
}
var o1 = [ { o0 : 3 }];
var o2 = test(o1);
o3.o4(o2.o0);

o1 = [ { o0: 3 }];
o2 = test(o1);
o3.o4(o2.o0);

// Test that popping a gap accesses the prototype chain

function o5(o0) {
    while (o0.length > 0)
        o0.pop();
}

o5(['x',,'x']);
Object.defineProperty(Object.prototype,"1",{get: function(){ o3.o4("getter"); }, configurable:true});
o5(['x',,'x']);

function o6(o0) {
    while (o0.length > 0)
        o0.pop();
}

delete Object.prototype[1];
var o7 = [1.2];
o7[3] = 1.4;
o6(o7);
Object.defineProperty(Object.prototype,"1",{get: function(){ o3.o4("getter"); }, configurable:true});
o7 = [1.1];
o7[2] = 1.3;
o6(o7);

