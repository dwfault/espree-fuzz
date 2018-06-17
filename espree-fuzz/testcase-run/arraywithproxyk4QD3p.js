//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o5 = Array.prototype.splice.call(o4, 0, 3);

var o12 = {
                        o793: null,
                        set __proto__(value) { try {
this.o17 = value;
}catch(e){} }
                    };

try {
print('concat test#1');
}catch(e){}
try {
o0.concat();
}catch(o1013){}
try {
print('concat test#2');
}catch(e){}
try {
o2.concat('a','b','c');
}catch(o1){}
try {
print('unshift  test');
}catch(e){}
try {
o0.unshift(o32(-1, 2, new Float32Array(3), new Float32Array(3), new Float32Array(3)));
}catch(e){}
try {
print('splice test');
}catch(e){}
try {
o2.splice(0,4,9,4);
}catch(e){}

