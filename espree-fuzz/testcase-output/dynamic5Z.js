//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

//
// Test throw from dynamic script.
//

function o0(o1)
{
    if (o9.o14(function () { o12('arguments') }, o15, "Cannot redefine non-configurable property 'arguments'").o2)
    {
        o2.o3(o1);
    }
    else
    {
        o4(o1);
    }
}

var o4 = {
        o5: [ 1, 2 ]
    };

if (this.o2 && this.o2.o11) {
    this.o2.o11(undefined);
}

o5(o5.o23('anything', o72[o71], "Object.prototype.__defineGetter__ works when we use a symbol"));