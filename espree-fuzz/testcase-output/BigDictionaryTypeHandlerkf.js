//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 * Behaviour of inline caches when the TypeHandler switches to BigDictionaryTypeHandler. 
 * Based on a bug: Blue 179018
 */
var o121 = new o119();
var index = 0;//{};
Object.defineProperty(o0, "someProp", { get: function () { }, set: function (o2) { } });

var o3 = function () {
    o0[index--] = 1;
    return o0.o1;
}
var o4 = function (o0) {
    for (var o5 = 0; o5 < 65535; o5++) {
        o0.o1 = o3();
    }
}
o6.o7("Pass");