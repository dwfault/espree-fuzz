//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

var o0 = [];
function o1() {
    return 100;
}
var o2 = {};
var o3 = {};
var o4 = function () {
};
var o5 = function () {
    o3.o6 = --o7.length;
    o7.o9 = o3.o6;
    o0.push(o7.o9);
};
o3.o6 = o4;
o3.o11 = o3.o6;
o7 = Object.create(o2);
o7.length = o1();
o3.o11((o5()));
o3 = o7;
o5();
if (o0[0] !== 99 || o0[1] !== 98) {
    o14.o15('fail');
}
else {
    o14.o15('pass');
}
