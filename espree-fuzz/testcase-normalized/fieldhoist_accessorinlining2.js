//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -force:fieldhoist -off:inlinegetters -off:fixedmethods -mic:1 -msjrc:1

var o0 = {};
Object.defineProperty(o0, "prop0", {
        get: function(){return this.o4;},
        set: function(o6){this.o4 = o6;},
        configurable: true
    });

o8 = [];
var o9;
function o10(o8, o0)
{
    o8.length;
    o0.o12 = 1;
    for (var o13 = 0;o13 < 3; o13++)
    {
        o0.o12 = o13;
        o9 = o0.o12;
    }
}

o10(o8, o0);
o14.o15(o9);

o10(o8, o0);
o14.o15(o9);

o10(o8, o0);
o14.o15(o9);
