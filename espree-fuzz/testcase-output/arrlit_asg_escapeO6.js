//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 },
        set o101(o102) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o109) {
                o14("Unexpected exception - " + o109.name + ": " + o109.o111);
            }
        }
    };
function test(o2)
{
    var o3;
    o0 = [ 1, (o3 = function() { return o2; }), 2];
}

test("test1");
o4.o5(o0[1]());
test(undefined);
o4.o5(o0[1](this.o36));
