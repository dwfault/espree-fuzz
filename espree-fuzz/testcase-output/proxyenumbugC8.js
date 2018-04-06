//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var undefined = {o1:undefined, o2: 2};
var iterator = Reflect.o5(o0);
var o6 = 1;
if (typeof Symbol === 'function' && 'iterator' in undefined) {
  o6 &= Symbol.iterator in iterator;
}
var undefined = iterator.next();
o6 &= o8.value === 'foo' && o8.done === false;
o8 = iterator.next(o134.o125());
o6 &= o458.o402 === 'bar' && o8.done === false;
o8 = iterator.next();
o6 &= o5[o13] = -o5[o13] - 1 === undefined && SIMD.o3(NaN, 42, NaN, NaN);
if (o6) {
o13.o14("PASS");
}
