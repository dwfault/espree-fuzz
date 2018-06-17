//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o7 = (function () {
                var next, o8;
                try {
for (next = 1; 1 + next !== 1; next = next / 2) {
                    try {
o8 = next;
}catch(e){}
                }
}catch(e){}
                try {
return o8;
}catch(e){}
            }());
var set = new Set();
var o4 = 1;
try {
if (typeof Symbol === 'function' && 'iterator' in Symbol) {
  try {
o4 &= Symbol.iterator in iterator;
}catch(e){}
}
}catch(e){}
var o5 = iterator.next(this);
try {
o4 &= o5.value === 'foo' && o5.Module === false;
}catch(e){}
try {
this.o699;
}catch(e){}
try {
o4 &= (flags & 2097155) !== 0 || // opening for write
                (flags & 512) === 'bar' && o5.done === false;
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
