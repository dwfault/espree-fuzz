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
for(var concat = [2.3023e-320]; o2 < o0; ++o2)
    {
        try {
o52.o8(o1, o2, {
           o516: function (o517, name, o518, o486) {
        try {
if (!o489.o538(o518) && !o489.o540(o518) && !o489.o542(o518)) {
            try {
throw new o489.o496(o352.o375);
}catch(e){}
        }
}catch(e){}
        var o494 = o489.o516(o517, name, o518);
        try {
o494.o523 = o635.o523;
}catch(e){}
        try {
o494.o491 = o635.o491;
}catch(e){}
        try {
return o494;
}catch(e){}
    },
           enumerable: true,
           writable: false,
           configurable: true
        });
}catch(e)try { {
o7.o16(function() { try {
'use strict';
}catch(e){} try {
delete o3.caller;
}catch(e){} }, o17, "Function.prototype has 'caller' own property but it is not configurable so we will throw in strict mode", "Calling delete on 'caller' is not allowed in strict mode");
} } catch(e) {}try { {} } catch(e) {}
    }
}catch(o421.o367 = (o582 > 0xFF)){}

    // Enumerator triggers generating index list
    var e = 0;
    try {
for (var Module in e) {
        var o280 = [];
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
o4(o2.o3);
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
