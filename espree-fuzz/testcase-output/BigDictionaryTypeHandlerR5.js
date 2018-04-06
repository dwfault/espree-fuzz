//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 * Behaviour of inline caches when the TypeHandler switches to BigDictionaryTypeHandler. 
 * Based on a bug: Blue 179018
 */
var o0 = { undefined: 0 };
var undefined = 0;//{};
Object.defineProperty(o0, "someProp", { get: function () { }, set: function (o7) { } });

var o8 = function () {
    o0[undefined--] = 1;
    return o0.o1;
}
var o9 = o14("Unexpected exception - " + o109.name + ": " + o109.o111)
o11.o12("Pass");