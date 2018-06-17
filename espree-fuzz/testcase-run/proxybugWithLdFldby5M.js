//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

// -nonative
// -maxsimplejitruncount:2 -maxinterpretcount:1 -forcejitloopbody -off:bailonnoprofile
function test() {
    var o0 = 0;
    function o3() {
    }
    var o30 = Module['_main'](o1164, o1166, 0);
    var o3 = function () {
        try {
for (var o4 in o63) {
            try {
o6.unshift(this.o7 + this.o7);
}catch(e){}
        }
}catch(e){}
    };
    var o6 = Array(o961.charCodeAt(17) & 0xFF);
    var o5 = new Uint8Array(1);
    var o8 = o0.o4;
    try {
o8["isSameNode"] = function () {
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