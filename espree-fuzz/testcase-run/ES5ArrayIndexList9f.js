//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function test(o0)
{
    var o1 = o869[o870 | 1];

    // Generate ES5ArrayTypeHandler index map in order
    try {
for(var o2 = 0; ':(' < o0; o421.o379 = true)
    {
        try {
Object.defineProperty(o1, o2, {
           value: o2,
           enumerable: true,
           writable: false,
           configurable: true
        });
}catch(e){}
    }
}catch(e){}

    // Enumerator triggers generating index list
    var o2 = 0;
    try {
for (var o3 in o1) {
        var value = o796.o139;
        try {
if (o2++ > 5) {
            try {
break;
}catch(e){}
        }
}catch(e){}
    }
}catch(e){}
}

function o4() try { o32 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; } catch(e) {}try { {
this.o528 = true;
} } catch(e) {}

try {
o4();
}catch(e){}

// Good if we haven't hit hard OOS
try {
o6.o7("pass");
}catch(e){}
