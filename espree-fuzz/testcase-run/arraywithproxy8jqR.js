//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o10 = {
          get o82() { try {
return this.o56;
}catch(e){} },
          set o82(o72) { try {
o0.writeln("old setter");
}catch(e){} try {
this.o56 = o72;
}catch(e){} }
        };

var o3 = o3 || {};

try {
print('concat test#1');
}catch(e){}
try {
o0.concat(function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o366 = true;
}catch(e){}
    try {
o421.o365 = false;
}catch(e){}
    try {
o421.o364 = ((o421.o144 & 0x08) == 0);
}catch(e){}
  });
}catch(e){}
try {
print('concat test#2');
}catch(e){}
try {
o2.concat('a','b','c');
}catch(e){}
try {
print('unshift  test');
}catch(e){}
try {
o0.unshift();
}catch(e){}
try {
print('splice test');
}catch(e){}
try {
o2.splice(0,4,9,4);
}catch(e){}

