//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = {};

    Object.prototype.push = Array.prototype.push;
    Object.prototype.pop = Array.prototype.pop;
    var o7;
    Object.defineProperty(o1, "length", {get: function() {o7 = true; return 5;}});

    o7 = false;

    try
    {
        var o10 = o1.pop();
    }
    catch (o11)
    {
        o12.o13('caught exception calling pop');
    }

    o12.o13(o7);
    o12.o13(o10);

}

(o0());o0();

