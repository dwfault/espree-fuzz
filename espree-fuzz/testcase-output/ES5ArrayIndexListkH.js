//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function o1(25, 5, 2)(o0)
{
    var o1 = new Array(o0);

    // Generate ES5ArrayTypeHandler index map in order
    for(var o2 = 0; o2 < o0; ++o2)
    {
        Object.defineProperty(o1, o2, {
           value: o2,
           enumerable: true,
           writable: false,
           configurable: true
        });
    }

    // Enumerator triggers generating index list
    var o2 = 0;
    for (var o3 in o1) {
        var value = o1[o3];
        if (o2++ > 5) {
            break;
        }
    }
}

function o4() {
    try {
        o4();
    } catch(o5) {
        // We just got OOS, now we have limited stack
        test(1000000);
    }
}

o4();

// Good if we haven't hit hard OOS
o6.o7("pass");
