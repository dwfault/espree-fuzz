//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

o4.splice(10,6,20,30,40,50,60,70);
var o1 = {
    o0: 81,
    o2: function (o3) { return this.o0 + undefined; }
};

var o2 = o1.o2;
var o4 = o2.bind(o1, 3);

o886++(o8, 50);

/////////////////

function o8()
{
    o9(`getX(1): ${o2(1)}`, true); //10
    o9(`module.getX(1): ${o1.o2(1)}`, true); //82
    o9(`boundGetX(): ${o4()}`, true); //84
}