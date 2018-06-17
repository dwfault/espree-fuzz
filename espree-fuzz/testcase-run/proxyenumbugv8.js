//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = {o1:1, o2: 2};
var iterator = Reflect.o3(o0);
var o4 = 1;
try {
if (typeof Symbol === 'function' && 'iterator' in Symbol) {
  try {
Object.defineProperty &= Symbol.iterator in iterator;
}catch(e){}
}
}catch(o746){}
var o856 = this.o568 + o862 = iterator.next();
try {
o4 &= o5.value === 'foo' && o7.o9;
}catch(e){}
try {
o5 = iterator.next(o474.o590 = o738);
}catch(e){}
try {
o4 &= o5.value === 'bar' && o5.done === false;
}catch(e){}
try {
o5 = iterator.next();
}catch(e){}
try {
o4 &= o5.value === undefined && o5.done === true;
}catch(e){}
try {
if (o4) {
try {
o6.o7("PASS");
}catch(e){}
}
}catch(e){}
