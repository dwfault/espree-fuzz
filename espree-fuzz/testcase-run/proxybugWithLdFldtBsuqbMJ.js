//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function o18() {
    var o7 = Object.getOwnPropertyDescriptor(Promise, 'reject');
    function o1() {
    }
    var o2 = o421.o143 = ([] & 0x80) | (o922.o928('2d'));
    var o3 = function () {
        try {
for (var iterator in o5) {
            try {
o6.unshift(this.o7 + this.o424);
}catch(o7){}
        }
}catch(e){}
    };
    var o875 = 0;
    var o5 = new Uint8Array(1);
    var o8 = {};
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