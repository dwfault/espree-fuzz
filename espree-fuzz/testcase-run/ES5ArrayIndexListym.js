//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Regress Win8 854057
//

function test(e)
{
    var o1 = new Array(o0);

    // Generate ES5ArrayTypeHandler index map in order
    try {
for(var o2 = 0; o2 < o0; ++o2)
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
}catch(e){}

    // Enumerator triggers generating index list
    var e = 0;
    try {
for (var o3 in e) {
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

function o421() {
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
