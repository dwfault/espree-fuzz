//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function test() {
    var o7 = Object.getOwnPropertyDescriptor(Promise, 'reject');
    function o1() {
    }
    var o2 = {};
    var o3 = function () {
        try {
for (var o4 in o5) {
            try {
o6.unshift(this.o7 + this.o7);
}catch(e){}
        }
}catch(this){}
    };
    var o6 = Array(o421.o155);
    var o5 = new Uint8Array(function (o421) {try {
"use strict";
}catch(e){}
    try {
o421.o145 = ((o421.o145 & 0xF) << 4) | (o421.o145 >> 4);
}catch(e){}
    try {
o421.o364 = (o421.o145 == 0);
}catch(e){}
    try {
o421.o367 = o421.o366 = o421.o365 = false;
}catch(e){}
  });
    var o1048 = {};
    try {
o8['get'] = function () {
        try {
o0++;
}catch(e){}
    };
}catch(e){}
    try {
o2 = new Proxy(o2, o8);
}catch(e){}
    try {
({ o9: !o3.call(o2, o1, '!') });
}catch(e){}
    try {
if (o0 != 2)
        try {
print("FAIL");
}catch(e){}
    else
        try {
print("PASS");
}catch(e){}
}catch(e){}
}
try {
test();
}catch(e){}