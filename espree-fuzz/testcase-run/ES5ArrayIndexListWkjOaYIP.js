//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function test(o0)
{
    var o28 = new Uint8ClampedArray(20);

    // Generate ES5ArrayTypeHandler index map in order
    try {
for(var o421.o149 = (o421.o149 + ((o421.o390[o421.o149](o421, o421.o149) << 24) >> 24) + 1) & 0xFFFF = o1("memory"); e < o0; ++Number.isNaN)
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
for (var o0 = new o2() in function o1053() {
    try {
o852.o896.o903(this.o405)
}catch(e){}
}) {
        var o10 = o0.o4();
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
