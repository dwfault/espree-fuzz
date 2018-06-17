//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function test(o0)
{
    var o1 = o1("PerformanceEntry");

    // Generate ES5ArrayTypeHandler index map in order
    try {
for(var o19 = o1("memory"); e < o0; ++o63)
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
}catch(entries){}

    // Enumerator triggers generating index list
    var e = 0;
    try {
for (var o3 in function o1053() {
    try {
o852.o896.o903()
}catch(e){}
}) {
        var value = o1[o3];
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

function o4() {
    try {
try {
        try {
o4(0 > 10);
}catch(e){}
    } catch(o5) {
        // We just got OOS, now we have limited stack
        try {
test(1000000);
}catch(e){}
    }
}catch(e){}
}

try {
o4();
}catch(e){}

// Good if we haven't hit hard OOS
try {
o6.o7("pass");
}catch(e){}
