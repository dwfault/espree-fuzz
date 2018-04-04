//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {o1:1, o2: 2};
var iterator = Reflect.o5(o0);
var o6 = 1;
if (typeof Symbol === 'function' && 'iterator' in Symbol) {
  o6 &= Symbol.iterator in iterator;
}
var o8 = iterator.next();
o6 &= o8.value === 'foo' && o8.done === false;
o8 = iterator.next();
o6 &= o8.value === 'bar' && o8.done === false;
o8 = iterator.next();
o6 &= o8.value === undefined && o8.done === true;
if (o6) {
o13.o14("PASS");
}
