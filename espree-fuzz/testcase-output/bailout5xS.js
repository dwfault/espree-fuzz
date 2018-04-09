//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------


var o0 = false;
function test(o1)
{

    var o4 = {
        o5: { "0": 1.1, "1": 2.1, length: 2 },
        set o100(o101) {
            try {
                Object.defineProperty(this.o5, 0, { configurable: true, writable: false, enumerable: true, value: -this.o5[0] - 1 });
            } catch(o102) {
                o13("Unexpected exception - " + o102.name + ": " + o102.o103);
            }
        }
    };
    var o3 = o2;
    // Bail out point:  test dead store of copy prop'd values 
    if (o0)
    {
        return o3;
    }
    return 1;
}


o4.o5(test(10));
o0 = true;
o4.o5(test(10));
