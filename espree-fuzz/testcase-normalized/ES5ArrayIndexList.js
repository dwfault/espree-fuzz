//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function test(o1)
{
    var o2 = new Array(o1);

    // Generate ES5ArrayTypeHandler index map in order
    for(var o4 = 0; o4 < o1; ++o4)
    {
        Object.defineProperty(o2, o4, {
           value: o4,
           enumerable: true,
           writable: false,
           configurable: true
        });
    }

    // Enumerator triggers generating index list
    var o4 = 0;
    for (var o11 in o2) {
        var value = o2[o11];
        if (o4++ > 5) {
            break;
        }
    }
}

function o12() {
    try {
        o12();
    } catch(o13) {
        // We just got OOS, now we have limited stack
        test(1000000);
    }
}

o12();

// Good if we haven't hit hard OOS
o14.o15("pass");
