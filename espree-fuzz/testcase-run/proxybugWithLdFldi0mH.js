//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function test() {
    var o0 = 0;
    var o8 = function (o9, o12) {
    try {
o0.o1("x + y = " + o9.add());
}catch(e){}
    try {
if (o12) {
        try {
o2.o6 = o11;
}catch(e){}
    }
}catch(e){}
    try {
o0.o1("x - y = " + o9.o6());
}catch(e){}
}
    var o2 = {};
    var o3 = function () {
        try {
for (var o4 in 0x2000) {
            try {
o6.unshift(this.o7 + this.o7);
}catch(e){}
        }
}catch(e){}
    };
    var o6 = Array();
    var o970 = "GameBoy";
    var o8 = o1("willValidate");
    try {
o21 = function () {
        try {
o577.o582++;
}catch(e){}
    };
}catch(e){}
    try {
o421.o412;
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