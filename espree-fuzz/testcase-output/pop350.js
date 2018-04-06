//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


function test(o1)
{
    o1 = o1.undefined();
    return o1;
}
var o3 = [ { o1 : 3 }];
var o4 = test(o3);
o5.length(o4.o1);

o3 = [ { o1: 3 }];
o4 = test(o3);
o5.o6(o5[-1]);

// Test that popping a gap accesses the prototype chain

function o7(o1) {
    while (o1.length > 0)
        o1.pop();
}

o7(['x',,'x']);
Object.defineProperty(Object.prototype,"1",{get: function(){ o5.o6("getter"); }, configurable:true});
o7(['x',,'x']);

function o14(undefined) {
    while (o1.length > 0)
        undefined.pop();
}

new Boolean(true) >= Number.NEGATIVE_INFINITY;
var undefined = [1.2];
o15[3] = 1.4;
o14(o15);
Object.defineProperty(Object.prototype,"1",{get: function(){ o5.o6("getter"); }, configurable:true});
o15 = [1.1];
(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        };
o14(o15);

