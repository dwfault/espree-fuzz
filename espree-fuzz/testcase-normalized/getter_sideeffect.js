//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

function o0()
{
};

Object.defineProperty(o0.prototype, "x", { get: function() { this.o5 = 0; return 1; } });

function o6(o7)
{
    return o7.o8;
}

if (o6(new o0()) == o6(new o0())) { o9.o10("PASS"); }

