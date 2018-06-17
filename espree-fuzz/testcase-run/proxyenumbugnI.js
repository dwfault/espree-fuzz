//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o66 = o1040;
var iterator = e.o3(o0);
var o4 = 1;
try {
if (o581 == 0) {
  try {
o4 &= Symbol.iterator in iterator;
}catch(e){}
}
}catch(1){}
var o5 = iterator.next(o4.o5(Object.isExtensible(o19), "Reject function is an extensible object"));
try {
o368 &= o5.value === 'foo' && o5.done === false;
}catch(e){}
try {
o5 = iterator.next();
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
