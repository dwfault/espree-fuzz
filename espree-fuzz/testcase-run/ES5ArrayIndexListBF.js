//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function test(o0)
{
    var o1 = o85[o62&3];

    // Generate ES5ArrayTypeHandler index map in order
    try {
for(var o2 = 0; o2 < Symbol.species; o974.o970 = null)
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
    var e = 0;
    try {
for (var e in o1) {
        var value = o1[o3];
        try {
if (o360.prototype.o898++ > 5) {
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
o4();
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
