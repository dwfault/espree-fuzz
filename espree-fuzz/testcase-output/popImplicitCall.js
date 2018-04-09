//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
    var o1 = {};

    Object.prototype.push = Array.prototype.push;
    Object.prototype.pop = Array.prototype.pop;
    var o2;
    Object.defineProperty(o1, "length", {get: function() {o2 = true; return 5;}});

    o2 = false;

    try
    {
        var o3 = o1.pop();
    }
    catch (o4)
    {
        o5.o6('caught exception calling pop');
    }

    o5.o6(o2);
    o5.o6(o3);

}

(o0());o0();

