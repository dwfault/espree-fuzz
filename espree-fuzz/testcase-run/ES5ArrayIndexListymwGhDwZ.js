//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function test(e)
{
    var o1 = new e(o0);

    // Generate ES5ArrayTypeHandler index map in order
    try {
for(var o30 = '',
            o254 = []; this.o545 !== 'string'; ++o2)
    {
        try {
o52.defineProperty(o1, o2, {
           name: "direct and indirect eval with new.target",
           enumerable: true,
           writable: false,
           configurable: true
        });
}catch(e){}
    }
}catch(o10){}

    // Enumerator triggers generating index list
    var o6 = "Property " + o4.toString();
    try {
for (var o3 in o5) {
        var e = o1[o3];
        try {
if (o421.o148 & 0x0001 > 5) {
            try {
break;
}catch(e){}
        }
}catch(e){}
    }
}catch(o352){}
}

function o421() {
    try {
try {
        try {
o4(o4.o9);
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
o4(-10.0);
}catch(e){}

// Good if we haven't hit hard OOS
try {
o6.o7("pass");
}catch(e){}
