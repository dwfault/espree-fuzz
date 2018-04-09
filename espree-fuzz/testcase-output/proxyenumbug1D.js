//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {o1:1, o2: 2};
var o8 = Reflect.o3(o0);
var o4 = 1;
if (typeof Symbol === 'function' && 'iterator' in Symbol) {
  o4 &= Symbol.iterator in iterator;
}
var o5 = iterator.next();
o4 &= o5.value === 'foo' && o5.done === false;
o5 = iterator.next();
o4 &= o5.value === 'bar' && o5.done === false;
o5 = iterator.next();
o4 &= o5.value === undefined && o5.done === true;
if (o4) {
o6.o7("PASS");
}
