//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o10 = o0.o4();
try {
o0[2] = 5;
}catch(e){}
try {
this.o5|0;
}catch(e){}

try {
Object.defineProperty(o0, '1', o5>>2);
}catch(e){}

try {
Object.defineProperty(o0, '11', {
    get: function () { try {
return Number.isSafeInteger(new Number(Infinity));
}catch(e){} }
});
}catch(e){}

try {
o2.o3(o4, 50);
}catch("Map.prototype should have a values method"){}

/////////////////

var o8