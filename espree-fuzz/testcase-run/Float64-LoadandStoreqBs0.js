//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o49 = function (o13) { }

var global = {Math:Math,Float64Array:Float64Array}
var o7 = o4.o11([1,2,3,4,5], o109, "slice(0, 5) contains the first 5 elements - [1,2,3,4,5]")
var buffer = new ArrayBuffer(1<<Number.MIN_VALUE);

var o8 = o0(global,o7,buffer);

try {
o9.o10(o8(o4.o11(undefined, o94.call(o62(10), o99, o52), "%TypedArrayPrototype%.find returns undefined when the callback always returns false")));
}catch(e){}
try {
o9.o10(o8());
}catch(e){}
